window.addEventListener("scroll", function name(params) {
    var nav = document.querySelector("#link1")
    nav.classList.toggle("active",this.window.scrollY>555 && this.window.scrollY<750)
    var nav = document.querySelector("#link2")
    nav.classList.toggle("active",this.window.scrollY>750 && this.window.scrollY<950)
    var nav = document.querySelector("#link3")
    nav.classList.toggle("active",this.window.scrollY>950)
})