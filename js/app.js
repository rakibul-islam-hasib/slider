var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

// scroll bar
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// responsive menu btb
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});


