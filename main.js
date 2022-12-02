kaboom({
  global: true,
  scale: 3,
  clearColor: [0, 0, 0, 1],
  canvas: document.getElementById('game'),
  width: 180,
  height: 180
});
loadSprite('player', 'hero.png');
loadSprite('wall', 'wall2.png');
loadSprite('opendoor', 'opendoor.png');
loadSprite('finaldoor', 'finaldoor.png');
loadSprite('item', 'item.png');
window.onload = function() {
scene('main', () => {
// Display a message telling the player on how to start a new game
    add([
      text('Press space to begin!', 6),
      pos(width()/2, height()/2),
      origin('center')
    ]);
// Display player image
    add([
      sprite('player'),
      'player'
    ]);
});
start('main')
}
