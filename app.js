const colorModeBtn = document.getElementById('btn')

colorModeBtn.addEventListener('click', function(){
    let element = document.body;
    element.classList.toggle("dark-mode")
})

const greet = document.getElementById('name')
greet.addEventListener ('mouseover' , function (){
    greet.style.color = "brown"
})