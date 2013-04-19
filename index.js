require('./script/soundmanager2');

soundManager.setup({
  url: '/indabaui-SoundManager2/swf',
  debugMode: false
});

module.exports = window.soundManager;
