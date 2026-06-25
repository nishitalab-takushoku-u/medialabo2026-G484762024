function greeting (){
    let p = document.querySelector('p#message');
    let i = document.querySelector('input[name="shimei"]');
    let name = i.value;
    let aisatu = "こんにちは、"+ name + "さん!";
    p.textContent = aisatu;
    p = aisatu;
    console.log(p);
}
let b = document.querySelector('button#print');
b.addEventListener('click' , greeting);