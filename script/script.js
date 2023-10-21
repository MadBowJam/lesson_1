const clickerCount = document.getElementById('clickerCount');
let count = 0;

function countClicks() {
  count++;
  clickerCount.innerHTML = `You clicked ${count} time${count !== 1 ? 's' : ''}`;
}