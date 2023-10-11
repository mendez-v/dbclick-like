// RECUPERAMOS LOS ELEMENTOS
const img = document.querySelector("img")
const icon = document.querySelector("svg")

img.addEventListener("dblclick", () => {
  icon.classList.add("like")

  setTimeout(() => {
    icon.classList.remove("like")
  }, 1000) /* EN 1 SEG. LE QUITAMOS LA CLASE */
})