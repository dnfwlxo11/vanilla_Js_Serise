const title_span = document.getElementById('title-span'),
    content_span = document.getElementById('content-span');

const content_title = localStorage.getItem('current');

function getStorage(title) {
    return localStorage.getItem(title);
}

function render() {
    const title = content_title;
    const content = getStorage(content_title).split(',')[1];

    title_span.innerText = title;
    content_span.innerText = content;
}

render();