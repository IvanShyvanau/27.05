/*let count = 0;

function plusCount() {
  count++;
  const div = document.getElementById('counter');
  let elem = document.createElement('p');
  elem.innerHTML = count;
  div.appendChild(elem);
}

const btn = document.getElementById('second');
//btn.onclick = plusCount;
btn.addEventListener('click', plusCount);
let interval = setInterval(() => {
  if (count > 5) {
    btn.removeEventListener('click', plusCount);
    clearInterval(interval);
  }
  console.log(interval);
}, 1000);
/*if (count > 5) {
  btn.removeEventListener(('click'),
    () => {});

//function stop(event) {
//event.preventDefault();
//console.log(event.which);
//}


function enable(event) {
  event.target.removeAttribute("disabled");
}

const div = document.getElementById('block');
div.onmouseover = function (event) {
  console.log('clientX', event.clientX);
  console.log('clientY', event.clientY);

  div.style.top = event.clientY + 'px';
  div.style.left = event.clientX + 'px';
};*/

const div = document.getElementById('block');
div.onmouseover = function (event) {
    console.log('clientX', event.clientX);
    console.log('clientY', event.clientY);

    div.style.top = event.clientY + 'px';
    div.style.left = event.clientX + 'px';