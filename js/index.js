import "./styles.scss";

document.onmousemove = (ev) => {
    const cursor = document.getElementsByClassName('cursor');
    console.log(cursor);
    cursor.style.top = ev.clientY;
    cursor.style.left = ev.clientX;
}