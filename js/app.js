const input = document.querySelector('input');
const ul = document.querySelector('ul');

let allUsers;

function render(data) {
  const html = data.map(user => `<li>${user.name}</li>`).join('');
  ul.innerHTML = html;
}

async function start() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  allUsers = await res.json();

  render(allUsers);
}

start();

input.addEventListener('input', () => {
  render(allUsers.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())));
});
