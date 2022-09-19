import { Howl } from 'howler'

const nameMap = {
  addUser: 'mixkit-correct-answer-tone-2870.wav',
  removeUser: 'mixkit-arrow-whoosh-1491.wav',
}

const tone = {
  play: nam => {
    nam = nameMap[nam]
    if (nam) {
      new Howl({ src: [`/assets/audio/${nam}`], autoplay: true, volume: 0.5 })
    }
  }
}

export default tone