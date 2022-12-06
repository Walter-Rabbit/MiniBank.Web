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
