const bar=document.getElementById("bar");
const nav=document.getElementById("navbar1");
if(bar){bar.addEventListener('click',()=>{
    nav.classList.add('active');
})}