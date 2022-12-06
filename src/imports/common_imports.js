window.addEventListener('load', function catalog__item_list__transactions() {
  let ul = document.getElementsByClassName('catalog__item_list')[0];
  let savedLis = window.localStorage.getItem('history');

  let tempUl = document.createElement('ul');
  tempUl.innerHTML = savedLis;

  for (let elm of tempUl.children) {
    let li = document.createElement('li');
    let div = document.createElement('div');
    div.className = 'item'

    let p1 = document.createElement('p');
    p1.className = 'item__title';
    p1.textContent = elm.children[0].children[0].textContent;

    let p2 = document.createElement('p');
    p2.className = 'item__description';
    p2.textContent = 'Какое-то умное описание.';

    let p3 = document.createElement('p');
    p3.className = 'item__date'
    p3.textContent = elm.children[0].children[1].textContent;

    div.append(p1);
    div.append(p2);
    div.append(p3);

    li.append(div);
    ul.append(li);
  }
});

function check_speed() {
  sessionStorage.now = Date.now();
  setTimeout(check_speed, 25);
}

window.addEventListener("load", function footer__loading_time() {
  let now = Date.now();
  if (sessionStorage.now) {
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
  ul.appendChild(li);

  window.localStorage.setItem('history', ul.innerHTML);

  let section = document.getElementsByClassName('history');
  section[0].style.visibility = 'visible';
}

function function_list__button__make_transaction() {
  let ul = document.getElementsByClassName('history__history_list')[0];

  let li = document.createElement('li');

  let div = document.createElement('div');
  div.className = 'transaction';

  let p1 = document.createElement('p');

  let number = Number(window.prompt("Enter RUB transfer amount: ", "100"));

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
  ul.appendChild(li);

  window.localStorage.setItem('history', ul.innerHTML);

  let section = document.getElementsByClassName('history');
  section[0].style.visibility = 'visible';
}

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

window.addEventListener("load", function navigation_list__button() {
  let address = document.URL.split("/");
  let page = address[address.length - 1];

  let element = document.getElementById(page.split(".")[0]);

  if (element != null) {
    element.style.background = "#ffb300"
  }
});

