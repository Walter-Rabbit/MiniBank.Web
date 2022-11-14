function check_speed() {
  sessionStorage.now = Date.now();
  setTimeout(check_speed, 25);
}

window.onload = function footer__loading_time() {
  let now = Date.now();
  if ( sessionStorage.now ) {
    let loaded_in = now - parseInt(sessionStorage.now);
    document.getElementById("loading_time").innerHTML = loaded_in.toString();
  }
  check_speed();
};

window.onload = function navigation_list__button() {
  let address = document.URL.split("/");
  let page = address[address.length - 1];

  let element = document.getElementById(page.split(".")[0]);

  if (element != null) {
    element.style.background = "#ffb300"
  }
}

