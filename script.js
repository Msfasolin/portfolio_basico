function toggleMode() {
  const html = document.documentElement

  //exemplo
  html.classList.toggle("light")

  // ou
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //trocar a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver ligt mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
