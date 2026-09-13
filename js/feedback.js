(function (g) {
  function norm(v) {
    if (typeof v === "boolean") return v;
    if (typeof v === "number") return v;
    return String(v).trim().replace(",", ".").toLowerCase()
      .replace(/¹/g, "^1").replace(/²/g, "^2").replace(/³/g, "^3")
      .replace(/⁴/g, "^4").replace(/⁵/g, "^5").replace(/⁶/g, "^6")
      .replace(/⁷/g, "^7").replace(/⁸/g, "^8").replace(/⁹/g, "^9").replace(/⁰/g, "^0");
  }

  function eq(a, b) {
    if (a === undefined || b === undefined || b === null || b === "") return false;
    if (typeof a === "number" || (typeof b === "number" && b === Number(b))) {
      const na = Number(String(a).replace(",", "."));
      const nb = Number(String(b).replace(",", "."));
      if (!isNaN(na) && !isNaN(nb)) return na === nb;
    }
    return norm(a) === norm(b);
  }

  function bilingual(text) {
    if (!text) return "";
    if (typeof text === "string") return text;
    const lang = EduMostI18n.getLang();
    if (lang === "ua") return text.ua || text.pl || "";
    return text.pl || text.ua || "";
  }

  function evaluate(task, userAnswer) {
    const t = EduMostI18n.t;
    if (task.answer === undefined || task.answer === null) {
      return { ok: null, headline: t("placeholder"), detail: "" };
    }

    let correct = false;
    if (Array.isArray(task.answer) && !Array.isArray(userAnswer) && typeof task.answer[0] !== "number") {
      correct = task.answer.some(function (a) { return eq(a, userAnswer); });
    } else if (Array.isArray(task.answer) && Array.isArray(userAnswer)) {
      const a = task.answer.map(norm).sort().join("|");
      const b = userAnswer.map(norm).sort().join("|");
      correct = a === b;
    } else {
      correct = eq(task.answer, userAnswer);
    }

    if (correct) {
      return { ok: true, headline: t("correct"), detail: bilingual(task.explanation) };
    }

    const miss = (task.mistakes || []).find(function (m) { return eq(m.answer, userAnswer); });
    return {
      ok: false,
      headline: t("tryAgain"),
      detail: miss ? bilingual(miss.feedback) : ""
    };
  }

  g.EduMostFeedback = { evaluate: evaluate, eq: eq, bilingual: bilingual };
})(window);
