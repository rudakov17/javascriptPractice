const wsUri = 'wss://echo-ws-service.herokuapp.com';

function pageLoaded() {
  const infoOutput = document.querySelector('.info_output');
  const chatOutput = document.querySelector('.chat_output');
  const input = document.querySelector('input');
  const sendBtn = document.querySelector('.btn_send');
  const btnGeoloc = document.querySelector('.button-geoloc');

  btnGeoloc.addEventListener('click', getLocation);

  let socket = new WebSocket(wsUri);

  socket.onopen = () => {
    infoOutput.innerText = 'о, законнектились, норм';
  };

  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  };

  socket.onerror = () => {
    infoOutput.innerText = 'При передаче данных произошла ошибка';
  };

  sendBtn.addEventListener('click', sendMessage);

  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value = '';
  }

  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${
      isRecieved ? 'recieved' : 'sent'
    }">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }

  // по геолокации
  function getLocation() {
    if ('geolocation' in navigator) {
      let locationOptions = {
        enableHighAccuracy: true,
      };
      navigator.geolocation.getCurrentPosition(
        locationSuccess,
        locationError,
        locationOptions
      );
    } else {
      writeOutput(
        'Ваш браузер не поддерживает функцию определения местоположения'
      );
    }
  }

  function locationSuccess(data) {
    let link = `https://www.openstreetmap.org/?pt=${data.coords.longitude},${data.coords.latitude}&z=18&l=map`;
    writeToChat(`<a href="${link}" target="_blank">Так вот же ты!</a>`);
  }

  function locationError() {
    writeOutput('При получении местоположения произошла ошибка');
  }

  // function writeOutput(message) {
  //   output.innerHTML = `<p>${message}</p>`;
  // }
}

document.addEventListener('DOMContentLoaded', pageLoaded);
