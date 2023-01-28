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

  link.appendChild(img);
  itemcontainer.appendChild(link);

  gallery.append(itemcontainer);
}

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
