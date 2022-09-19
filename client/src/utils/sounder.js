import { Howl } from 'howler'

var sounder = {
  addUser: new Howl({ src: ['/assets/audio/mixkit-correct-answer-tone-2870.wav'], volume: 0.5 }),
  removeUser: new Howl({ src: ['/assets/audio/mixkit-arrow-whoosh-1491.wav'], volume: 0.5 }),
}

export default sounder