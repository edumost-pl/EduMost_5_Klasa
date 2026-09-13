document.addEventListener("DOMContentLoaded", function () {
  EduMostI18n.bindToggle();
  EduMostI18n.setLang(EduMostI18n.getLang());
  const id = document.body.getAttribute("data-subject");
  if (id) EduMostSubjectPage.render(id);
  document.addEventListener("edumost:lang", function () {
    if (id) EduMostSubjectPage.render(id);
  });
});
