const imgContainers = document.querySelectorAll('.img_container')

imgContainers.forEach(i => {
    i.addEventListener('click', () => {
        imgContainers.forEach(j => {
            j.classList.remove('active')
        })
       i.classList.add('active')
    })
})