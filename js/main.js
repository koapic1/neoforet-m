const mainVisualSlider = new Swiper("#mainVisual", {
    autoplay: true,
    speed: 1000,
    effect: "fade",
    loop: true,
    pagination: {
        el: "#mainVisual .pagination",
        type: "bullets",
        clickable: true,
    },
});

const newsSlider = new Swiper("#news .listBox", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    centeredSlides: true,
});

const productSlider = new Swiper("#product .list", {
    speed: 600,
    slidesPerView: 1, //화면에 보여지는 갯수
    slidesPerGroup: 1, //묶음
    navigation: {
        prevEl: "#product .prev",
        nextEl: "#product .next",
    },
});

const btnAll = document.querySelector(".all");
const gnb = document.querySelector("#gnb");
console.log(btnAll);
btnAll.addEventListener("click", function () {
    gnb.classList.toggle("on");
    btnAll.classList.toggle("on");
});
//f(x,y) = x+y*3; f(3,5) = 18
