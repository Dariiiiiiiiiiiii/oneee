document.querySelector(".signInbtn").addEventListener("click", ()=>{
    document.querySelector(".rgst").style.display='none';
    document.querySelector(".login").style.display='block';
    document.querySelector(".signInbtn").classList.add("selected");
    document.querySelector(".signUpbtn").classList.remove("selected");
});
document.querySelector(".signUpbtn").addEventListener("click", ()=>{
    document.querySelector(".rgst").style.display='block';
    document.querySelector(".login").style.display='none';
    document.querySelector(".signUpbtn").classList.add("selected");
    document.querySelector(".signInbtn").classList.remove("selected");
});
document.querySelector(".stick").addEventListener("click", ()=>{
    alert("Зачем ты сюда нажал? Я просто палочка.");
});
document.querySelector(".login form").addEventListener("submit", (event)=>{
    const login=document.querySelector('.login form input[name="login"]').value;
    const pass=document.querySelector('.login form input[name="password"]').value;
    alert(`sign in-> login: ${login}, password: ${pass}`);
    event.preventDefault()
});
document.querySelector(".rgst form").addEventListener("submit", (event)=>{
    const login=document.querySelector('.rgst form input[name="login"]').value;
    const pass=document.querySelector('.rgst form input[name="password"]').value;
    alert(`registration-> login: ${login}, password: ${pass}`);
    event.preventDefault()
});