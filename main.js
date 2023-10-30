let btn = document.querySelector(".become-link");
let form = document.querySelector(".form_index");
let closeBtn = document.querySelector(".close-btn");


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    form.classList.add("visible");
});
closeBtn.addEventListener("click", (e)=>{
    form.classList.remove("visible");
})
