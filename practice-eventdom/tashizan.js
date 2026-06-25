function keisan(){
  let a = document.querySelector('input[id="left"]'); 
    let b = document.querySelector('input[id="right"]');
    let x = Number(a.value);
    let y = Number(b.value);
    let c = x + y;
    let kotae = document.querySelector('span');
    kotae.textContent = c; 
    console.log(kotae);
}
let t = document.querySelector('button');
t.addEventListener('click',keisan);