(function (g) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function tx(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return EduMostI18n.getLang() === "ua" ? (obj.ua || obj.pl || "") : (obj.pl || obj.ua || "");
  }

  function markedHtml(s) {
    s = String(s);
    const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
    let html = "";
    let last = 0;
    let m;
    while ((m = re.exec(s))) {
      html += esc(s.slice(last, m.index));
      if (m[1] != null) {
        html += "<strong class=\"tx-mark\">" + esc(m[1]) + "</strong>";
      } else {
        html += "<strong class=\"tx-bold\">" + esc(m[2]) + "</strong>";
      }
      last = re.lastIndex;
    }
    return html + esc(s.slice(last));
  }

  function partHtml(part) {
    if (part == null || part === "") return "";
    if (typeof part === "string") return markedHtml(part);
    if (typeof part === "number") return esc(part);
    if (Array.isArray(part)) return part.map(partHtml).join("");
    if (typeof part !== "object") return esc(part);
    if (part.emphasis) {
      const t = part.text != null ? part.text : (part.t != null ? part.t : "");
      if (t === "") return "";
      return "<strong>" + esc(t) + "</strong>";
    }
    if (part.bold) {
      const t = part.text != null ? part.text : (part.t != null ? part.t : "");
      if (t === "") return "";
      return "<strong>" + esc(t) + "</strong>";
    }
    const text = part.text != null ? String(part.text) : (part.t != null ? String(part.t) : "");
    return text ? esc(text) : "";
  }

  function para(cls, value) {
    if (value == null || value === "") return "";
    if (typeof value === "string" || typeof value === "number") {
      return '<p class="' + cls + '">' + esc(value) + "</p>";
    }
    if (Array.isArray(value) && value.some(function (item) { return Array.isArray(item); })) {
      return value.map(function (line) {
        if (line == null || line === "") return "";
        return '<p class="' + cls + '">' + partHtml(line) + "</p>";
      }).join("");
    }
    return '<p class="' + cls + '">' + partHtml(value) + "</p>";
  }

  function dual(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return para("tx-pl", obj);
    let html = para("tx-pl", obj.pl);
    if (EduMostI18n.getLang() === "ua" && obj.ua) html += para("tx-ua", obj.ua);
    return html;
  }

  function stub(type) {
    return {
      html: '<p class="task-stub">' + esc(EduMostI18n.t("taskStub")) + " (" + esc(type) + ")</p>",
      getAnswer: function () { return null; }
    };
  }

  const TYPES = {
    "single-choice": function (task) {
      const name = "q-" + (task.id || "sc");
      const opts = (task.options || []).map(function (opt, i) {
        const id = opt.id != null ? opt.id : String(i);
        return '<label class="task-opt"><input type="radio" name="' + esc(name) + '" value="' + esc(id) + '"> ' +
          dual(opt.label || opt) + "</label>";
      }).join("");
      return {
        html: dual(task.question) + '<div class="task-options">' + opts + "</div>",
        getAnswer: function (root) {
          const el = root.querySelector("input[type=radio]:checked");
          return el ? el.value : "";
        }
      };
    },

    "multiple-choice": function (task) {
      const opts = (task.options || []).map(function (opt, i) {
        const id = opt.id != null ? opt.id : String(i);
        return '<label class="task-opt"><input type="checkbox" value="' + esc(id) + '"> ' +
          dual(opt.label || opt) + "</label>";
      }).join("");
      return {
        html: dual(task.question) + '<div class="task-options">' + opts + "</div>",
        getAnswer: function (root) {
          return Array.prototype.map.call(root.querySelectorAll("input:checked"), function (el) {
            return el.value;
          });
        }
      };
    },

    "input-number": function (task) {
      return {
        html: dual(task.question) +
          '<input class="task-input" type="text" inputmode="decimal" autocomplete="off" aria-label="odpowiedź">',
        getAnswer: function (root) {
          const raw = (root.querySelector(".task-input") || {}).value;
          if (raw == null || String(raw).trim() === "") return "";
          const n = Number(String(raw).trim().replace(",", "."));
          return isNaN(n) ? String(raw).trim() : n;
        }
      };
    },

    "input-text": function (task) {
      return {
        html: dual(task.question) +
          '<input class="task-input" type="text" autocomplete="off" aria-label="odpowiedź">',
        getAnswer: function (root) {
          return ((root.querySelector(".task-input") || {}).value || "").trim();
        }
      };
    },

    "true-false": function (task) {
      const name = "q-" + (task.id || "tf");
      return {
        html: dual(task.question) +
          '<div class="task-options">' +
          '<label class="task-opt"><input type="radio" name="' + name + '" value="true"> ' + esc(EduMostI18n.t("boolTrue")) + "</label>" +
          '<label class="task-opt"><input type="radio" name="' + name + '" value="false"> ' + esc(EduMostI18n.t("boolFalse")) + "</label>" +
          "</div>",
        getAnswer: function (root) {
          const el = root.querySelector("input:checked");
          if (!el) return "";
          return el.value === "true";
        }
      };
    },

    "open-answer": function (task) {
      return {
        html: dual(task.question) +
          '<textarea class="task-input task-area" rows="3" aria-label="odpowiedź"></textarea>',
        getAnswer: function (root) {
          return ((root.querySelector(".task-area") || {}).value || "").trim();
        }
      };
    },

    "sort": stub,
    "match": stub,
    "fill-blanks": stub,
    "order": stub,
    "drag-drop": stub,
    "select-on-image": stub,
    "build-expression": stub,
    "number-line": stub,
    "geometry": stub
  };

  function render(task) {
    const type = task && task.type;
    const fn = TYPES[type];
    if (!fn) return stub(type || "?");
    if (fn === stub) return stub(type);
    return fn(task);
  }

  g.EduMostTaskTypes = { render: render, types: Object.keys(TYPES) };
})(window);
