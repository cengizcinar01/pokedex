const inputElement = document.querySelector('#search-input');
const searchIcon = document.querySelector('#search-close-icon');
const sortWrapper = document.querySelector('.sort-wrapper');

inputElement.addEventListener('input', () => handleInputChange(inputElement));
searchIcon.addEventListener('click', handleSearchCloseOnClick);
sortWrapper.addEventListener('click', handleSortIconOnClick);
