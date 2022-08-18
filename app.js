const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

const userId = '123';
const user = {
  name: 'Ann',
  age: 22,
};

storeButton.addEventListener('click', function () {
  sessionStorage.setItem('id', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrieveButton.addEventListener('click', function () {
  const extractedId = sessionStorage.getItem('id');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);

  if (extractedId) {
    console.log('Got the ID' + extractedId);
  } else {
    console.log('Could not find ID');
  }
});
