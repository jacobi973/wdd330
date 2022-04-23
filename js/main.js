const links = [{
    label: "Week1 notes ",
    url: 'week1/index.html'
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