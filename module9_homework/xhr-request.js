const valueInp = document.querySelector('.numb-input');
// const printValue = () => {
//   console.log(valueInp.value);
// };

// const button = document.querySelector('.btn');
// button.addEventListener('click', printValue);

////////////////////////////////////////////

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
}

const resultNode = document.querySelector('.results');
const btnNode = document.querySelector('.btn');

function displayResult(apiData) {
  let cards = '';
  apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
  if (valueInp.value >= 1 && valueInp.value <= 10) {
    useRequest(
      `https://picsum.photos/v2/list/?limit=${valueInp.value}`,
      displayResult
    );
  } else {
    const error = `
            <div class="card">
            <p>ну по-русски же написано "от 1 до 10" что за дела?</p>
            </div>`;
    resultNode.innerHTML = error;
  }
});
