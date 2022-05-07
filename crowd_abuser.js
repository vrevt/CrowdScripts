function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function send(){
  let x = document.getElementsByTagName("button");
  for (let i = 0; i < x.length; i += 1){
    if (x[i].innerText == 'Claim Review'){
      x[i].click();
      console.log('click');
    }
  } 
}
function btn_send_click(){
  send();
  setTimeout(btn_send_click, 360 * (1 + getRandomInt(5)) + getRandomInt(360));
}
btn_send_click();
