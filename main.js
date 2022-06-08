function playSound (className) {
  //template string
  document.querySelector(`#som_${className}`).play();
}

const listButtons = document.querySelectorAll('.tecla');

listButtons.forEach((Element)=>{

  Element.onclick = () => {
    playSound(Element.classList[1]);
  };
  Element.onkeydown = (event) => {
    if(event.code ==='Space') Element.classList.add('ativa');
  };
  Element.onkeyup = () => {
    Element.classList.remove('ativa');
  };
})
