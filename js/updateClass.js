function hideImg(id) {
    const el = document.getElementById(id);
    el.setAttribute('src', 'assets/img/hide-mark.png')
}

function revealImg(id) {
    const el = document.getElementById(id);
    el.setAttribute('src', 'assets/img/' + id + '.png');
}