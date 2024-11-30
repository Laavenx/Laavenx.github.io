const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const initialPage1 = urlParams.get('page')

if (initialPage1) {
    DisplayContextSwitcher(initialPage1)
}

//?page=projects&subpage=bfme