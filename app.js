const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

storeButton.addEventListener('click', function () {
  const userId = '123';
  document.cookie = `id=${userId}`;
});

retrieveButton.addEventListener('click', function () {
  console.log(document.cookie);
});
