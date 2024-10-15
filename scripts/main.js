function DisplayContextSwitcher(context) {
  if (context == "Projects") {
    fetch("pages/projects.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("content-container").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
  } else {
    fetch("pages/skills.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("content-container").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
  }
}

function ProjectDisplayContextSwitcher(context) {
  fetch("pages/subpages/" + context +".html")
  .then((response) => response.text())
  .then((html) => {
      document.getElementById("project-content-container").innerHTML = html;
  })
  .catch((error) => {
      console.warn(error);
  });
}