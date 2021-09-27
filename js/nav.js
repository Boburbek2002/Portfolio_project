window.addEventListener("scroll", function () {
  const navScroll = document.getElementById("nav");
  navScroll.classList.toggle("fixed", window.scrollY > 200);
  
  const homScroll = document.getElementById("home-link");
  homScroll.classList.toggle("dis", window.scrollY > 200);

});

function navBack() {
  let nav = document.getElementById('nav').classList.toggle('change');
};

