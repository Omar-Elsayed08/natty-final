// Function to show the popup
function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popupContainer').style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popupContainer').style.display = 'none';
}

document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input')
        .value;
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input')
        .value;
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}