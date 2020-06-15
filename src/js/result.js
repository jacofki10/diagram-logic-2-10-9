import { result } from './answers';
import '../css/style.scss';

console.log(localStorage.getItem('dig'), localStorage.getItem('digDetail'));
const dig = Number(localStorage.getItem('dig') - 1);

document.getElementById('graph').classList.add(result[dig].ilustration);
document.getElementById('group9').innerHTML = result[dig].typeName;
document.getElementById('catchCopy').innerHTML = result[dig].catchCopy;
document.getElementById('kihonseikaku').innerHTML = result[dig].kihonseikaku;
