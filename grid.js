const gap = 10
const photocontainer = document.querySelector("#photocontainer")
const photos = document.querySelectorAll(".photo")

function photodisplay() {
    const photocontainerWidth = photocontainer.offsetWidth
    const photowidth = photos[0].offsetWidth
    const columncanput = Math.floor(photocontainerWidth / (photowidth + gap))
    const photoarray = []
    for (let i = 0 ; i < photos.length ; i++) {
        if (i < columncanput) {
            photos[i].style.top = 0 ;
            photos[i].style.left = (photowidth + gap) * i + 'px'
            photoarray.push(photos[i].offsetHeight)
        } else {
            const minHeight = Math.min(...photoarray)
            const index = photoarray.indexOf(minHeight)
            photos[i].style.top = minHeight + gap +'px'
            photos[i].style.left = photos[index].offsetLeft + 'px'
            photoarray[index] = photoarray[index] + photos[i].offsetHeight + gap
        }
    }
}

window.onload = function() {
    photodisplay()
};
window.onresize = function() {
    photodisplay()
};
