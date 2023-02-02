import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

let items = "";

for (const { preview, original, description } of galleryItems) {
  items += `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></div>`;
}

gallery.insertAdjacentHTML("afterbegin", items);

gallery.addEventListener("click", showImage);

function showImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  showModal(e.target);
}

function showModal(imagelink) {
  document.addEventListener("keydown", closeModal);

  const original = imagelink.dataset.source;
  const instance = basicLightbox.create(
    `
    <div class="modal">
      <a><img class="modal__image" src="${original}"></a>
    </div>
  `,
    {
      onShow: (instance) => {
        instance.element().querySelector("a").onclick = instance.close;
      },
    }
  );

  instance.show();

  function closeModal(e) {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModal);
    }
  }
}
