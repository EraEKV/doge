const dropdowns = document.querySelectorAll(".dropdown")
let groupValue = ""

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select")
    const menu = dropdown.querySelector(".menu")
    const caret = document.querySelector(".caret")
    const options = dropdown.querySelectorAll("#menu li")
    const options1 = dropdown.querySelectorAll("#menu-1 li")
    const selected = dropdown.querySelector(".selected")
    select.addEventListener("click", () => {
        select.classList.toggle("select-clicked")
        caret.classList.toggle("caret-rotate")
        menu.classList.toggle("menu-open")
    })
    
    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.innerText = option.innerText
            selected.innerText == "All Breed Groups" ? groupValue = "" : groupValue = selected.innerText
            select.classList.remove("select-clicked")
            caret.classList.remove("caret-rotate")
            menu.classList.remove("menu-open")

            options.forEach(option => {
                option.classList.remove("active")
            })

            option.classList.add("active")
            groupFilter(option.innerText)
        })
    })

    options1.forEach(option => {
        option.addEventListener("click", () => {
            selected.innerText = option.innerText
            selected.innerText == "All Breed Groups" ? groupValue = "" : groupValue = selected.innerText
            select.classList.remove("select-clicked")
            caret.classList.remove("caret-rotate")
            menu.classList.remove("menu-open")

            options1.forEach(option => {
                option.classList.remove("active")
            })

            option.classList.add("active")
            sortFilter(option.innerText, option.value)
        })
    })
})

