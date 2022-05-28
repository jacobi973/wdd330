const links = [{
    label: "Week1 notes ",
    url: 'week1/index.html'
}, {
    label: "Week2 notes ",
    url: 'week2/index.html'
}, {
    label: "Week3 notes ",
    url: 'week3/index.html'
}, {
    label: "Week4 notes ",
    url: 'week4/index.html',
}, {
    label: "Week4 Team Activity",
    url: 'week4/index_team.html'
}, {
    label: "Week5 Team Activity",
    url: 'week5/index_team.html'
}, {
    label: "Week5 Notes",
    url: 'week5/index.html'
}, {
    label: "Todo App",
    url: 'todoApp/index.html'
}]


links.forEach(link => {
    let week = document.createElement('li');
    week.textContent = link.label;

    let href = document.createElement('a');
    href.setAttribute('href', link.url);
    href.textContent = link.label;

    week.appendChild(href);

    document.querySelector('ol').appendChild(week);
})
