const features = document.getElementById('features');
const featuresDropdown = document.getElementsByClassName('dropdown-container')[0];

console.log(featuresDropdown);

features.addEventListener("click", () => {
    featuresDropdown.classList.toggle('active'); 
})