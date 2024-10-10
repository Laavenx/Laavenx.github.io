document.getElementById("Projects").addEventListener("click", DisplayContextSwitcher.bind(null, "Projects"));
document.getElementById("Skills").addEventListener("click", DisplayContextSwitcher.bind(null, "Skills"));

function DisplayContextSwitcher(context) {
  if (context == "Projects") {
    fetch("pages/skills.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("project-list").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
  } else {
    fetch("pages/skills.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("project-list").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
  }
}