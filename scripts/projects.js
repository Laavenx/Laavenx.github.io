document.getElementById("retrotest").addEventListener("click", ProjectDisplayContextSwitcher.bind(null, "retrotest"));
document.getElementById("samsara").addEventListener("click", ProjectDisplayContextSwitcher.bind(null, "samsara"));
document.getElementById("battlechant").addEventListener("click", ProjectDisplayContextSwitcher.bind(null, "battlechant"));
document.getElementById("bfme").addEventListener("click", ProjectDisplayContextSwitcher.bind(null, "bfme"));

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