const colorModeBtn = document.getElementById('btn')

colorModeBtn.addEventListener('click', function () {
  let element = document.body
  element.classList.toggle('dark-mode')
})

const myName = document.getElementById('name')
myName.addEventListener('mouseover', function () {
  myName.style.color = 'limegreen'
})

const hideButton = document.getElementById('hide_btn')
const avatar = document.querySelector('.prof-img')

// hideButton.addEventListener('click', () => {
//   removeHiddenClasses()
//   avatar.classList.add('hide-me')
// })

// function removeHiddenClasses() {
//   avatar.classList.remove('hide-me')
// }

hideButton.addEventListener('click', ()=> {
    avatar.classList.toggle('hide-me')
})