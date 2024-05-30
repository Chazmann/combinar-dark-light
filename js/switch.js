let botonTema = document.getElementById("switch")
let hache1 = document.querySelector("h1")
document.documentElement.classList.add("light")
botonTema.innerText="Modo Oscuro"
hache1.innerText="Modo Claro"

function toggleDarkMode() {
  if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    botonTema.innerText="Modo Claro"
    hache1.innerText="Modo Oscuro"
    botonTema.style.backgroundColor = "var(--text)"
    botonTema.style.color = "var(--background)"
  } else if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    botonTema.innerText="Modo Oscuro"
    botonTema.style.backgroundColor = "var(--text)"
    
    hache1.innerText="Modo Claro"
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }
}
