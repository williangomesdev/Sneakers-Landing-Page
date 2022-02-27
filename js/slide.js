/* products */
var swiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//slider produtos
let productPreviewContainer = document.querySelector(".products-preview-container");
let productPreview = document.querySelectorAll(".products-preview-container .product-preview");
let pageProductSelect = document.querySelectorAll(".products .slide .btn");
let closeButtonSelect = document.querySelectorAll(".products-preview-container .product-preview .fa-times");

pageProductSelect.forEach((detailBtn) => {
  detailBtn.onclick = () => {
    productPreviewContainer.style.display = "block";
    let name = detailBtn.getAttribute("data-product");

    productPreview.forEach((preview) => {
      let target = preview.getAttribute("data-target");

      if (name == target) {
        preview.style.display = "flex";
        return true;
      } else {
        preview.style.display = "none";
      }
    });
  };
});

//Fechar botão do produto
closeButtonSelect.forEach((close) => {
  close.onclick = () => {
    productPreviewContainer.style.display = "none";
  };
});
/* products */

/* reviews */
var swiper = new Swiper(".reviews-slide", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
/* reviews */
