let teste = true
window.addEventListener('click', e =>{
  el = e.target
  if(el.classList.contains('circle') ===  true){
    if(el.classList.contains('right') == true){
      el.classList.remove('right')
      el.classList.add('left')
      voltaTema()
    }else{
      el.classList.add('right')
      el.classList.remove('left')
      mudaTema()
    }
}
})

function mudaTema(){
  const corpo = document.querySelector('body').style.background = '#252525'
  const header = document.querySelector('header#header')
  header.style.background = '#8F2D56'
  header.style.color = 'white'
  const ciculo = document.querySelector('.circle').style.background = '#73D2DE'
}
function voltaTema(){
  const corpo = document.querySelector('body').style.background = 'white'
  const header = document.querySelector('header#header')
  header.style.background = '#7EE8FA'
  header.style.color = 'black'
  const ciculo = document.querySelector('.circle').style.background = '#80FF72'
}