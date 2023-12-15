import restaurant from './assets/restaurant.jpeg'

function homepage() {
    const attach = document.querySelector('.other')
    const local = document.createElement('p')
    const img = document.createElement('img')

    local.textContent='123 main road'

    img.src=restaurant

    //clear div for new content
    while (attach.firstChild) {
        attach.removeChild(attach.firstChild);
      }
    attach.appendChild(local)
    attach.appendChild(img)
}

export {homepage}