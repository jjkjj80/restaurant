function contactPage() {
    const attach = document.querySelector('.other')
    const local = document.createElement('p')

    local.textContent='phone:440-123-4567'

    //clear div for new content
    while (attach.firstChild) {
        attach.removeChild(attach.firstChild);
      }
    attach.appendChild(local)
}

export {contactPage}