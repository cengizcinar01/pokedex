const inputElement = document.querySelector('#search-input');
const searchIcon = document.querySelector('#search-close-icon');
const sortWrapper = document.querySelector('.sort-wrapper');

inputElement.addEventListener('input', () => handleInputChange(inputElement));
searchIcon.addEventListener('click', handleSearchCloseOnClick);
sortWrapper.addEventListener('click', handleSortIconOnClick);

function handleInputChange(inputElement) {
    const inputValue = inputElement.value;
    const searchCloseIcon = document.querySelector('#search-close-icon');

    searchCloseIcon.classList.toggle('search-close-icon-visible', inputValue !== '');
}
