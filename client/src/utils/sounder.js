import { Howl } from 'howler'

const nameMap = {
  addUser: 'tone-2870.wav',
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