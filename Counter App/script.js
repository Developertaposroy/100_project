const count= document.querySelector(".count");
const button =document.querySelector(".buttons");

button.addEventListener("click", add);

function add(e) {
   if (e.target.classList.contains("add")){
       count.innerHTML ++;
   }

   if (e.target.classList.contains("reset")){
       count.innerHTML = 0;
   }

   if (e.target.classList.contains("subtract")){
       count.innerHTML--;
   }
}