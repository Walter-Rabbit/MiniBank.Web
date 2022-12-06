window.addEventListener('load', function catalog__item_list__transactions() {
  let ul = document.getElementsByClassName('catalog__item_list')[0];
  ul.innerHTML = window.localStorage.getItem('history');
});
