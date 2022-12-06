window.addEventListener('load', function history__history_list() {
  let ul = document.getElementsByClassName('history__history_list')[0];
  let transactions = window.localStorage.getItem('history');
  let section = document.getElementsByClassName('history')

  if (section !== null) {
    if (transactions !== null) {
      section[0].style.visibility = 'visible';
      ul.innerHTML = transactions;
    } else {
      section[0].style.visibility = 'hidden';
    }
  }
});
