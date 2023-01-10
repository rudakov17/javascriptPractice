const sendButton = document.querySelector('.send-button');
const inputResult = document.querySelector('.input-result');

const localData = localStorage.getItem('url', 'data');
if (localData) {
  initImages(JSON.parse(localData));
}

async function initImages(data) {
  for (item of data) {
    let img = document.createElement('img');
    img.setAttribute('src', item.download_url);
    img.setAttribute('width', '400');
    inputResult.innerHTML = '';
    setTimeout(() => {
      inputResult.append(img);
    });
  }
}

sendButton.addEventListener('click', () => {
  const inputValue1 = +document.querySelector('.page-number-input').value;
  const inputValue2 = +document.querySelector('.limit-number-input').value;

  if (
    !(inputValue1 >= 1 && inputValue1 <= 10) &&
    !(inputValue2 >= 1 && inputValue2 <= 10)
  ) {
    inputResult.innerHTML += `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
    return;
  }

  if (!(inputValue1 >= 1 && inputValue1 <= 10)) {
    inputResult.innerHTML += `<p>Номер страницы вне диапазона от 1 до 10</p>`;
    return;
  }
  if (!(inputValue2 >= 1 && inputValue2 <= 10)) {
    inputResult.innerHTML += `<p>Лимит вне диапазона от 1 до 10</p>`;
    return;
  }

  let options = {
    redirect: 'follow',
  };

  fetch(
    `https://picsum.photos/v2/list?page=${inputValue1}&limit=${inputValue2}`
  )
    .then((response) => {
      console.log('response', response);
      result = response.json();
      return result;
    })
    .then((data) => {
      initImages(data);
      console.log(data);
      localStorage.setItem('url', JSON.stringify(data));
    });
});
