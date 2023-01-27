import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

for (let galleryitem of galleryItems) {
  const itemcontainer = document.createElement("div");
  itemcontainer.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.setAttribute("href", galleryitem.original);

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", galleryitem.preview);
  img.setAttribute("alt", galleryitem.description);
  img.dataset.source = galleryitem.original;

  link.appendChild(img);
  itemcontainer.appendChild(link);

  gallery.append(itemcontainer);
}

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
