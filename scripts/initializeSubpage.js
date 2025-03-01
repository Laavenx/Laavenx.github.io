const initialPage = urlParams.get('subpage')

if (initialPage) {
    ProjectDisplayContextSwitcher(initialPage)
} else {
    ProjectDisplayContextSwitcher('battlechant')
}