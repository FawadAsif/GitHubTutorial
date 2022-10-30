const slideCntr = document.querySelectorAll('.slide')
console.log(slideCntr)
slideCntr.forEach(i => {
    console.log("Click event!!!")
    i.addEventListener('click', () => {
        slideCntr.forEach(j => {
            j.classList.remove('active')
        })
       i.classList.add('active')
    })
})