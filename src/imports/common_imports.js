window.addEventListener('load', async function catalog__item_list__transactions() {
  let ul = document.getElementById('transaction_page_history');

  if (ul === null) {
    return;
  }

  let transactions = await fetch('https://639897dc044fa481d6a38d71.mockapi.io/Transaction', {
    method: 'GET'
  })
    .then(response => response.text())
    .then(text => JSON.parse(text));

  for (let tr of transactions) {
    let li = document.createElement('li');
    let div = document.createElement('div');
    div.className = 'item'
    let transaction = document.createElement('div');
    transaction.className = 'item';

    let p_amount = document.createElement('p');
    let amount = tr['amount'];
    if (amount >= 0) {
      p_amount.className = 'transaction__positive_balance';
    } else {
      p_amount.className = 'transaction__negative_balance';
    }
    p_amount.textContent = amount + 'руб.';
    transaction.append(p_amount);

    let p_description = document.createElement('p');
    p_description.className = 'item__description';
    p_description.textContent = tr['target'];
    transaction.append(p_description);

    let p_date = document.createElement('p');
    p_date.className = 'transaction__date';
    let date = new Date(tr['date']);
    p_date.textContent = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`
    transaction.append(p_date);

    li.append(transaction);
    ul.append(li);
  }
});

function check_speed() {
  sessionStorage.now = Date.now();
  setTimeout(check_speed, 25);
}

window.addEventListener("load", function footer__loading_time() {
  let now = Date.now();
  if ( sessionStorage.now ) {
    let loaded_in = now - parseInt(sessionStorage.now);
    document.getElementById("loading_time").innerHTML = loaded_in.toString();
  }
  check_speed();
});

function function_list__button__ask_transaction() {
  let ul = document.getElementById('main_page_history');

  let li = document.createElement('li');

  let div = document.createElement('div');
  div.className = 'transaction';

  let p1 = document.createElement('p');

  let number = Number(window.prompt("Enter RUB request amount: ", "100"));

  if (number === 0)  {
    return;
  }

  if (number < 0) {
    window.alert("Amount must be positive number");
    return;
  }

  p1.className = 'transaction__positive_balance';
  p1.textContent = number.toString() + 'руб.';

  let p2 = document.createElement('p');
  p2.className = 'transaction__date';
  let date = new Date();
  p2.textContent = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`

  div.appendChild(p1);
  div.appendChild(p2);
  li.appendChild(div);
  ul.insertBefore(li, ul.firstChild);

  window.localStorage.setItem('history', ul.innerHTML);

  let section = document.getElementsByClassName('history');
  section[0].style.visibility = 'visible';
}

function function_list__button__make_transaction() {
  let ul = document.getElementById('main_page_history');

  let li = document.createElement('li');

  let div = document.createElement('div');
  div.className = 'transaction';

  let p1 = document.createElement('p');

  let number = Number(window.prompt("Enter RUB transfer amount: ", "100"));

  if (number === 0)  {
    return;
  }

  if (number < 0) {
    window.alert("Amount must be positive number");
    return;
  }

  p1.className = 'transaction__negative_balance';
  p1.textContent = '-' + number.toString() + 'руб.';

  let p2 = document.createElement('p');
  p2.className = 'transaction__date';
  let date = new Date();
  p2.textContent = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`

  div.appendChild(p1);
  div.appendChild(p2);
  li.appendChild(div);
  ul.insertBefore(li, ul.firstChild);

  window.localStorage.setItem('history', ul.innerHTML);

  let section = document.getElementsByClassName('history');
  section[0].style.visibility = 'visible';
}

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

window.addEventListener("load", function navigation_list__button() {
  let address = document.URL.split("/");
  let page = address[address.length - 1];

  let element = document.getElementById(page.split(".")[0]);

  if (element != null) {
    element.style.background = "#ffb300"
  }
});

