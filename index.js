const featuresArrow = document.getElementById('arrow-icon-features');
const companyArrow = document.getElementById('arrow-icon-company');

const features = document.getElementById('features');
const company = document.getElementById('company');
const featuresDropdown = document.getElementsByClassName('dropdown-container')[0];
const companyDropdown = document.getElementsByClassName('dropdown-container')[1];

const menuButton = document.getElementsByClassName('menu-btn')[0];
const menuContent = document.getElementsByClassName('menu-content')[0];
const menuButtonImg = document.getElementById('menu-btn-img');

features.addEventListener("click", () => {
    
    featuresDropdown.classList.toggle('active');

    if (featuresDropdown.classList.contains('active')) {
        featuresArrow.src = "images/icon-arrow-up.svg"
    } else {
        
        featuresArrow.src = "images/icon-arrow-down.svg"
    }
})

company.addEventListener("click", () => {

    companyDropdown.classList.toggle('active');

    if (companyDropdown.classList.contains('active')) {
        companyArrow.src = "images/icon-arrow-up.svg"
    } else {
        companyArrow.src = "images/icon-arrow-down.svg"
    }
})

menuButton.addEventListener('click', () => {
    if(menuContent.classList.contains('menu-open')) {
        menuButtonImg.src = "images/icon-menu.svg"
        menuContent.classList.remove('menu-open');
    } else {
        menuButtonImg.src = "images/icon-close-menu.svg"
        menuContent.classList.add('menu-open');
    }

    
})

