const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

storeButton.addEventListener('click', function () {
  const userId = '123';
  const user = { name: 'Anna', age: 22 };
  document.cookie = `id=${userId}`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveButton.addEventListener('click', function () {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((i) => {
    return i.trim();
  });

  console.log(data[1].split('=')[1]);
});
