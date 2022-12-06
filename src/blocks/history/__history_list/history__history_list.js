window.addEventListener('load', function history__history_list() {
  let ul = document.getElementsByClassName('history__history_list')[0];
  ul.innerHTML = window.localStorage.getItem('history');
});
