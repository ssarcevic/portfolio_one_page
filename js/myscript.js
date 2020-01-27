if(document.querySelector('.burger')){
    dropdownMenu();
};

if(document.querySelector('.projects__box-img')){
    slider();
};

function dropdownMenu(){
    var burger       = document.querySelector('.burger');
    var menu         = document.querySelector('.menu');
    var nav          = document.querySelector('.menu__nav');
    var burgerMiddle = document.querySelector('.burger__middle');

    burger.addEventListener('click', function() {
        burger.classList.toggle('close');
        burgerMiddle.classList.toggle('hidden');
        nav.classList.toggle('open');
        menu.classList.toggle('menu-fixed');
    });

    nav.addEventListener('click', function() {
        burger.classList.toggle('close');
        burgerMiddle.classList.toggle('hidden');
        nav.classList.toggle('open');
        menu.classList.toggle('menu-fixed');
    });
}

function slider(){
    var projects    = document.querySelectorAll('.projects__box-img');
    var i = 0;
    var loop;

    window.addEventListener("load",startSlider());

    function startSlider(){
        loop = setInterval(function(){
            if(projects.length > 0){
                projects[i].classList.remove('preview');
                i--;
                if(i < 0){
                    i--;
                    i = 3;
                }
            }
            projects[i].classList.add('preview');
        }, 3000)
    }
    startSlider();

    function pauseSlider(){
        clearInterval(loop);
    }
    pauseSlider();
}

function scroll(){
    var topBtn = document.querySelector('.button-up');

    topBtn.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}

scroll();
