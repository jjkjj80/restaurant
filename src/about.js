function aboutPage() {
    const attach = document.querySelector('.other')
    const local = document.createElement('p')

    local.textContent='local shop'

    while (attach.firstChild) {
        attach.removeChild(attach.firstChild);
      }
    attach.appendChild(local)
}

export {aboutPage}