function homepage() {
    const attach = document.querySelector('.content')
    const local = document.createElement('p')

    local.textContent='123 main road'

    attach.appendChild(local)
}

export {homepage}