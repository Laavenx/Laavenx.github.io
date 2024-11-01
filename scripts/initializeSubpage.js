const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const initialPage = urlParams.get('page')

if (initialPage) {
    ProjectDisplayContextSwitcher(initialPage)
} else {
    ProjectDisplayContextSwitcher('retrotest')
}