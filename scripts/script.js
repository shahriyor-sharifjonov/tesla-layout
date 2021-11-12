const headerMenu = document.querySelector('.header__menu');
let scrollEnabled = true;
document.addEventListener('click', function(e){
    if(e.target.classList.contains('header-menu-controller')){
        console.log('menutoggled');
        headerMenu.classList.toggle('open')
        scrollEnabled = !scrollEnabled
        if(!scrollEnabled){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "visible";
        }
    }
    if(e.target.classList.contains('header__link')){
        headerMenu.classList.remove('open')
        scrollEnabled = true
    }
})