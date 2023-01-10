const button = document.querySelector('.btn');
button.addEventListener('click', function () {
  document.getElementById('first').classList.toggle('second_svg');
  document.getElementById('second').classList.toggle('second_svg');
});
