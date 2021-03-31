const colors = {
  '2': {
    bg: 'rgba(0, 0, 0, 0.2)',
    text: 'rgba(0, 0, 0, 1)',
  },
  '3': {
    bg: 'rgba(0, 0, 0, 0.3)',
    text: 'rgba(0, 0, 0, 1)',
  },
  '4': {
    bg: 'rgba(0, 0, 0, 0.4)',
    text: 'rgba(0, 0, 0, 1)',
  },
  '5': {
    bg: 'rgba(0, 0, 0, 0.5)',
    text: 'rgba(0, 0, 0, 1)',
  },
  '6': {
    bg: 'rgba(0, 0, 0, 0.6)',
    text: 'rgba(0, 0, 0, 1)',
  },
  '7': {
    bg: 'rgba(0, 0, 0, 0.7)',
    text: 'rgba(255, 255, 255)',
  },
  '8': {
    bg: 'rgba(0, 0, 0, 0.8)',
    text: 'rgba(255, 255, 255)',
  },
  '9': {
    bg: 'rgba(0, 0, 0, 0.9)',
    text: 'rgba(255, 255, 255)',
  },
  '10': {
    bg: 'rgba(0, 0, 0, 1)',
    text: 'rgba(255, 255, 255)',
  },
}

document.addEventListener('DOMContentLoaded', function() {
  const buttonEle = document.getElementById('action');
  const countEle = document.getElementById('count');
  const bodyEle = document.querySelector('body');

  let count = 1;

  function handleClick() {
    count += 1;

    if (count <= 10) {
      bodyEle.style.background = `${colors[count].bg}`;
      bodyEle.style.color = `${colors[count].text}`;
      buttonEle.style.color = `${colors[count].text}`;
    }

    countEle.innerHTML = `${count}x`;
  }

  buttonEle.addEventListener('click', handleClick);
});