import "./scss/styles.scss"

const container = document.querySelector('body');

const div = document.createElement('div')
div.innerHTML = 'Hello chuck!'

const requestJoke = async () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const displayJoke = async () => {
  const joke = await requestJoke();
  container.innerText = joke.value
  container.appendChild(div)
  container.appendChild(div)
}

console.log('hello')
displayJoke()