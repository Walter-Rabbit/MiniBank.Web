window.addEventListener('load', function catalog__item_list__transactions() {
  let ul = document.getElementsByClassName('catalog__item_list')[0];
  ul.innerHTML = window.localStorage.getItem('history');
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
  let ul = document.getElementsByClassName('history__history_list')[0];

  let li = document.createElement('li');

  let div = document.createElement('div');
  div.className = 'transaction';

  let p1 = document.createElement('p');

  let number = Number(window.prompt("Enter RUB request amount: ", "100"));

  if (number < 0) {
    window.prompt("Amount must be positive number");
  }

  p1.className = 'transaction__positive_balance';
  p1.textContent = number.toString();

  let p2 = document.createElement('p');
  p2.className = 'transaction__date';
  let date = new Date();
  p2.textContent = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`

  div.appendChild(p1);
  div.appendChild(p2);
  li.appendChild(div);
  ul.appendChild(li);

  window.localStorage.setItem('history', ul.innerHTML);
}

function function_list__button__make_transaction() {
  let ul = document.getElementsByClassName('history__history_list')[0];

  let li = document.createElement('li');

  let div = document.createElement('div');
  div.className = 'transaction';

  let p1 = document.createElement('p');

  let number = Number(window.prompt("Enter RUB transfer amount: ", "100"));

  if (number < 0) {
    window.prompt("Amount must be positive number");
  }

  p1.className = 'transaction__negative_balance';
  p1.textContent = '-' + number.toString();

  let p2 = document.createElement('p');
  p2.className = 'transaction__date';
  let date = new Date();
  p2.textContent = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`

  div.appendChild(p1);
  div.appendChild(p2);
  li.appendChild(div);
  ul.appendChild(li);

  window.localStorage.setItem('history', ul.innerHTML);
}

window.addEventListener('load', function history__history_list() {
  let ul = document.getElementsByClassName('history__history_list')[0];
  ul.innerHTML = window.localStorage.getItem('history');
});

window.addEventListener("load", function navigation_list__button() {
  let address = document.URL.split("/");
  let page = address[address.length - 1];

  let element = document.getElementById(page.split(".")[0]);

  if (element != null) {
    element.style.background = "#ffb300"
  }
});

