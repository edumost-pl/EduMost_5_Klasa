/* Jedno miejsce na adres projektu Dop_zadania.
   Katalog na stronie głównej używa tego samego hosta:
   https://edumost-pl.github.io/Dop_zadania/ */
(function () {
  var DOP_ZADANIA_BASE_URL = "https://edumost-pl.github.io/Dop_zadania";

  function taskUrl(path, lang) {
    var base = DOP_ZADANIA_BASE_URL.replace(/\/$/, "");
    var clean = String(path || "").replace(/^\//, "");
    var url = base + "/" + clean;
    var code = lang === "ru" ? "ru" : "pl";
    var join = url.indexOf("?") === -1 ? "?" : "&";
    return url + join + "lang=" + code;
  }

  window.EduMostDopZadania = {
    BASE_URL: DOP_ZADANIA_BASE_URL,
    taskUrl: taskUrl
  };
})();
