const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.close');
const modalWindow = document.querySelector('.modalWindow');
const modalText = document.querySelector('.modalWindow');
const text = (`<p>Hello,World! Where do you live? What are you doing now?</p>`);

modalText.insertAdjacentHTML('beforeend', text)

openButton.addEventListener('click', function () {
    modalWindow.style.display = "block";
});
closeButton.addEventListener('click', function () {
    modalWindow.style.display = "none";
});