const variants = document.querySelectorAll(".product__variant");

variants.forEach((variant) => {
  variant.addEventListener("click", () => {
    variants.forEach((v) => v.classList.remove("selected"));
    variant.classList.add("selected");
  });
});

// Çarpı simgesine tıklandığında menünün kapanmasını sağlayan fonksiyon
function closeMenu() {
  var menuToggle = document.getElementById("menu__toggle");
  var menuBox = document.querySelector(".menu__box");
  menuToggle.checked = false; // Menüyü kapatmak için checkbox'ın durumunu değiştir
}

// Çarpı simgesine tıklandığında closeMenu fonksiyonunu çağıran event listener
document.querySelector(".closeSideMenu").addEventListener("click", closeMenu);

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item__title");

  accordionItems.forEach(function (item) {
    item.addEventListener("click", function () {
      this.parentElement.classList.toggle("show-content");
    });
  });
});

document.getElementById("js-size-modal").addEventListener("click", function () {
  var sizeTableModal = document.getElementById("js-size-table");
  sizeTableModal.style.display = "block";
});

// Kapatma simgesine tıklanınca açılır pencereyi kapatma
document
  .getElementById("js-close-size-modal")
  .addEventListener("click", function () {
    var sizeTableModal = document.getElementById("js-size-table");
    sizeTableModal.style.display = "none";
  });

document.querySelector(".carpı").addEventListener("click", function () {
  const megaSearch = document.querySelector(".mega-search");
  document.body.style.overflow = "auto";
  if (megaSearch.style.display === "none" || megaSearch.style.display === "") {
    megaSearch.style.display = "block";
  } else {
    megaSearch.style.display = "none";
  }
});

// Swiper Started

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 2, // Bu değeri 2 olarak değiştirin
    spaceBetween: 4, // Gerekirse boşluk değerini düzenleyin
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Mobil ekranlarda 2 ürün göstermek için breakpoint ekleyin
      768: {
        slidesPerView: 4,
      },
    },
  });
});
// Swiper Ended

// Swiper Started

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper_container_one", {
    slidesPerView: 1, // Bu değeri 2 olarak değiştirin
    spaceBetween: 4, // Gerekirse boşluk değerini düzenleyin
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Mobil ekranlarda 2 ürün göstermek için breakpoint ekleyin
      768: {
        slidesPerView: 4,
      },
    },
  });
});
// Swiper Ended

// Footer Menu Started
var btns = document.querySelectorAll(".js-footer-title");
btns.forEach(function (elem) {
  elem.addEventListener("click", function () {
    elem.classList.toggle("active");
    var submenu = elem.nextElementSibling;
    submenu.classList.toggle("show");
  });
});

// Footer Menu Ended

// Pop-up Started

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  openPopup();
});

// Pop-up Ended

// Notification Box Started

function openNotification() {
  document.getElementById("notification").style.display = "flex";
}

function closeNotification() {
  document.getElementById("notification").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  openNotification();
});

// /* Notification Box Ended

// Search Bar Started
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-bar");
  const megaSearch = document.querySelector(".mega-search");

  searchButton.addEventListener("click", function () {
    document.body.style.overflow = "hidden";

    if (
      megaSearch.style.display === "none" ||
      megaSearch.style.display === ""
    ) {
      megaSearch.style.display = "block";
    } else {
      megaSearch.style.display = "none";
    }
  });
});
// Search Bar Ended
var deneme = document.querySelectorAll(".zoom-img");
console.log(deneme);
deneme.forEach((element) => {
  element.addEventListener("mousemove", function (e) {
    console.log(e);
    const x = e.layerX;
    const y = e.layerY; 
    element.style.transformOrigin = `${x}px ${y}px`;
    element.style.transform = "scale(2)";
  });
  element.addEventListener("mouseleave", function () {
    element.style.transformOrigin = `center center`;
    element.style.transform = "scale(1)";
  });
});


var button = document.querySelector(".btn-block");
var scrollThreshold = 2500; // Düğmenin kaybolacağı kaydırma mesafesi

window.addEventListener("scroll", function () {
  if (window.scrollY >= scrollThreshold) {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }
});

