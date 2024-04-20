img = document.querySelector("#mode")
const checkTheme = () => {
    let theme = localStorage.getItem("theme")
    if (theme == "light") {
        img?.src = "./public/icons/sun.svg"
        document.documentElement.style.setProperty('--filter-param', 'none')                  
        document.documentElement.style.setProperty('--filter-2-param', 'invert(29%) sepia(53%) saturate(2474%) hue-rotate(233deg) brightness(107%) contrast(103%)')                  
        document.documentElement.style.setProperty('--bg-color', '#faf9f6')
        document.documentElement.style.setProperty('--dropdown-color', '#6b53ff')
        document.documentElement.style.setProperty('--border-color', '#ccc')
        document.documentElement.style.setProperty('--footer-color', '#2e2e2e')
        document.documentElement.style.setProperty('--box-color', '#f1f1f1')
        document.documentElement.style.setProperty('--primary-color', '#2e2e2e')
        document.documentElement.style.setProperty('--primary-color-1', '#fff')
        // 242424
    } else {
        img?.src = "./public/icons/moon-stars.svg"
        document.documentElement.style.setProperty('--filter-param', 'invert(100%) sepia(100%) saturate(2%) hue-rotate(229deg) brightness(105%) contrast(101%)')     
        document.documentElement.style.setProperty('--filter-2-param', 'invert(73%) sepia(17%) saturate(225%) hue-rotate(186deg) brightness(88%) contrast(89%)')                  
        document.documentElement.style.setProperty('--footer-color', '#141414')
        document.documentElement.style.setProperty('--bg-color', '#242424')
        document.documentElement.style.setProperty('--border-color', '#383838')
        document.documentElement.style.setProperty('--dropdown-color', '#9fa5b5')
        document.documentElement.style.setProperty('--box-color', '#292929')
        document.documentElement.style.setProperty('--primary-color', '#fff')
        document.documentElement.style.setProperty('--primary-color-1', '#2e2e2e')
    }
}
// invert(72%) sepia(13%) saturate(288%) hue-rotate(186deg) brightness(89%) contrast(93%);
checkTheme()
