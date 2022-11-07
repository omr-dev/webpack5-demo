import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laugImg = document.getElementById('laughImg');
laugImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();