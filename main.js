//bar menu 
let bar = document.querySelector('header .container i')
let menu = document.querySelector('.menu')
let close = document.querySelector('.fa-times')
bar.addEventListener('click', function() {
    menu.classList.toggle('show')
    bar.style.display = 'none'
    close.style.display = 'block'
})
close.addEventListener('click', function(){
    menu.classList.remove('show')
    bar.style.display = 'block'
    close.style.display = 'none'
})

// scroll top 
let up = document.querySelector('.up')
window.onscroll = function () {
    
    if (this.scrollY > 500) {
        up.classList.add('show')
    }
    else {
        up.classList.remove('show')
    }

};

up.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
} 

