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
}
