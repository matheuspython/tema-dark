let teste = true
window.addEventListener('click', e =>{
  el = e.target
  if(el.classList.contains('circle') ===  true){

    if(el.style.left == 0){
      el.style.right= 0
      mudaTema()
      return
    }
    el.style.right = 0
  }
})

function mudaTema(){
  const corpo = document.querySelector('body').style.background = '#252525'
  const header = document.querySelector('header#header')
  header.style.background = '#8F2D56'
  header.style.color = 'white'
  const ciculo = document.querySelector('.circle').style.background = '#73D2DE'
}