window.addEventListener('load', function history__history_list() {
  let ul = document.getElementById('main_page_history');

  if (ul === null) {
    return;
  }

  let transactions = window.localStorage.getItem('history');
  let section = document.getElementById('main_page_section_history')

  if (section !== null) {
    if (transactions !== null) {
      section.style.visibility = 'visible';
      ul.innerHTML = transactions;
    } else {
      section.style.visibility = 'hidden';
    }
  }
});
