function function_list__button__ask_transaction() {
  let ul = document.getElementById('main_page_history');

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
  ul.insertBefore(li, ul.firstChild);

  window.localStorage.setItem('history', ul.innerHTML);

  let section = document.getElementsByClassName('history');
  section[0].style.visibility = 'visible';
}
