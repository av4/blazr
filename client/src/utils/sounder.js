import { Howl } from 'howler'

const nameMap = {
  addUser: 'mixkit-correct-answer-tone-2870.wav',
  removeUser: 'mixkit-arrow-whoosh-1491.wav',
}

const play = nam => {
  console.log('sounder nam:', nam)
  if (nameMap[nam]) {
    console.log('sounder nameMap:', nameMap[nam])
    new Howl({ src: [`/assets/audio/${nameMap[nam]}`], autoplay: true, volume: 0.5 })
  }
}
const sounder = {
  play,
  addUser: () => { play('addUser') }, 
  removeUser: () => { play('removeUser') }, 
}

export default sounder