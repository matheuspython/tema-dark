const elementosQueMudarão = [
  document.querySelector('body').style,
  document.querySelector('header#header').style,
  document.querySelector('.circle').style.background
]



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
      mudaTema()}}})
      

function mudaTema(){
  elementosQueMudarão[0].background = '#252525'
  elementosQueMudarão[0].color = 'white'
  elementosQueMudarão[1].background = '#8F2D56'
  elementosQueMudarão[1].color = 'white'
  elementosQueMudarão[2] = '#73D2DE'
}
function voltaTema(){
  elementosQueMudarão[0].background = 'white'
  elementosQueMudarão[0].color = 'black'
  elementosQueMudarão[1].background = '#7EE8FA'
  elementosQueMudarão[1].color = 'black'
  elementosQueMudarão[2] = '#80FF72'
}