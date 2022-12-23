import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYED_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const playedTime = JSON.parse(localStorage.getItem(PLAYED_TIME));

player.on('timeupdate', throttle(getTimeupdate, 1000));

function getTimeupdate(event) {
  let storageTime = JSON.stringify(event.seconds);
  localStorage.setItem(PLAYED_TIME, storageTime);
}

player
  .setCurrentTime(playedTime)
  .then(function (playedTime) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
