import mediaPLayer from './MediaPLayer.js';
import AutoPLay from './plugins/AutoPLay.js';

const video = document.querySelector("video");
const button = document.querySelector(".play");
const buttonmute = document.querySelector(".muteunmute");

const player = new mediaPLayer({ el: video, plugins:[
    //new AutoPLay()
] });
button.onclick = () => player.togglePlay();
buttonmute.onclick = () => player.toggleMute();
