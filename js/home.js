document.addEventListener("DOMContentLoaded", function () {
  EduMostI18n.bindToggle();
  EduMostI18n.setLang(EduMostI18n.getLang());

  function renderCards() {
    const lang = EduMostI18n.getLang();
    const grid = document.getElementById("subjects-grid");
    if (!grid) return;
    grid.innerHTML = EduMostSubjects.map(function (id) {
      const s = EduMostCurriculum[id];
      return '<a class="subj-card" href="subjects/' + id + '.html">' +
        '<span class="icon">' + s.icon + "</span>" +
        '<span class="name">' + s.name.pl + "</span>" +
        '<span class="ua">' + s.name.ua + "</span>" +
        '<span class="book">«' + s.book.title + "»</span>" +
        "</a>";
    }).join("");
  }

  renderCards();
  document.addEventListener("edumost:lang", renderCards);
});
