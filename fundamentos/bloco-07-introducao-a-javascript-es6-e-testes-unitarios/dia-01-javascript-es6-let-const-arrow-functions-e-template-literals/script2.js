
// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.querySelector('#button');
const textOfClicks = document.querySelector('#text-clicks');
let click = 0;

function counterClick() {
  textOfClicks.innerHTML = click += 1;
};

button.addEventListener('click', counterClick);
