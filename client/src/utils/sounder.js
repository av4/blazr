import { Howl } from 'howler'

const nameMap = {
  addUser: 'mixkit-correct-answer-tone-2870.wav',
  removeUser: 'mixkit-arrow-whoosh-1491.wav',
}

const play = nam => {
  nam = nameMap[nam]
  console.log('sounder nam:', nam)
  if (nam) {
    console.log('sounder nam:', nam)
    new Howl({ src: [`/assets/audio/${nam}`], autoplay: true, volume: 0.5 })
  }
}
const sounder = {
  play,
  userChange: (userAdded) => { play((userAdded) ? 'addUser' : 'removeUser') }
}

export default sounder