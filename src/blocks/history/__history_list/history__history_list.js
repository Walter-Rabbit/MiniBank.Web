window.addEventListener('load', async function history__history_list() {
  let ul = document.getElementById('main_page_history');

  if (ul === null) {
    return;
  }

  let section = document.getElementById('main_page_section_history')
  let history_list = document.getElementById('main_page_history')

  let transactions = await fetch('https://639897dc044fa481d6a38d71.mockapi.io/Transaction', {
    method: 'GET'
  })
    .then(response => response.text())
    .then(text => JSON.parse(text));

  for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    let transaction = document.createElement('div');
    transaction.className = 'transaction';

    let p_amount = document.createElement('p');
    let amount = transactions[i]['amount'];
    if (amount >= 0) {
      p_amount.className = 'transaction__positive_balance';
    }
    else {
      p_amount.className = 'transaction__negative_balance';
    }
    p_amount.textContent = amount + 'руб.';
    transaction.append(p_amount);

    let p_date = document.createElement('p');
    p_date.className = 'transaction__date';
    let date = new Date(transactions[i]['date']);
    p_date.textContent = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`
    transaction.append(p_date);

    li.append(transaction);
    history_list.append(li);
  }

  if (section !== null) {
    if (history_list !== null) {
      section.style.visibility = 'visible';
    } else {
      section.style.visibility = 'hidden';
    }
  }
});
