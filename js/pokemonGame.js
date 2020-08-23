const btn = document.getElementById('btn-kick');
const winner = document.querySelectorAll('.winner');
const bombEnemy = document.getElementById('btn-bomb-enemy');
const bombCharacter = document.getElementById('btn-bomb-character');
const health = document.querySelectorAll('.btn-health');

// console.log(bombEnemy);
// console.log(bombCharacter);
// console.log(health);
// console.log(winner);

const character = {
  name: 'Pikaciu',
  defaultHP: 100,
  damageHP: 100,
  itemHp: document.getElementById('health-character'),
  progressHp: document.getElementById('progressbar-character'),
  win: false,
};

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  itemHp: document.getElementById('health-enemy'),
  progressHp: document.getElementById('progressbar-enemy'),
  win: false,
};

btn.addEventListener('click', function () {
  console.log('kick');

  changeHP(randomDamage(20), character);
  changeHP(randomDamage(20), enemy);
  detectWinner(character, winner[0]);
  detectWinner(enemy, winner[1]);
});

const init = () => {
  console.log('Game started!');
  renderHpPoints(character);
  renderHpPoints(enemy);
  extraShot(bombCharacter, character, enemy);
  extraShot(bombEnemy, enemy, character);
  addHealth(character, health[0]);
  addHealth(enemy, health[1]);
};

const renderHpPoints = (item) => {
  item.itemHp.innerText = `${item.damageHP} / ${item.defaultHP}`;
  item.progressHp.style.width = `${item.damageHP}% `;
  if (item.damageHP <= 0) {
    item.itemHp.innerText = '0 / 100';
    item.progressHp.style.background = 'red';
    btn.disabled = true;
  }
};

const changeHP = (damage, item) => {
  item.damageHP -= damage;
  //console.log('damage', damage);
  renderHpPoints(item);
};

const randomDamage = (num) => {
  return Math.ceil(Math.random() * 20);
};
const detectWinner = (item, winner) => {
  if (item.damageHP <= 0) {
    item.win = true;
    winner.innerText = 'You Lose ;(';
  } else {
    item.win = false;
  }
};

const extraShot = (bomb, item, oposit) => {
  bomb.addEventListener('click', function () {
    if (item.damageHP <= 50) {
      oposit.damageHP -= 20;
      oposit.progressHp.style.width = `${oposit.damageHP}%`;
      oposit.itemHp.innerText = `${oposit.damageHP} / ${oposit.defaultHP}`;
      bomb.style.display = 'none';
      detectWinner(character, winner[0]);
      detectWinner(enemy, winner[1]);
    } else {
      bomb.style.display = 'block';
    }
  });
};

const addHealth = (item, health) => {
  health.addEventListener('click', function () {
    if (item.damageHP < 30) {
      item.damageHP = item.damageHP + 20;
      item.progressHp.style.width = `${item.damageHP}%`;
      item.itemHp.innerText = `${item.damageHP} / ${item.defaultHP}`;
      health.disabled = true;
    } else {
    }
  });
};

init();
