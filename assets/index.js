import mediaPLayer from ./MediaPLayer.js;
import AutoPLay from ’’

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new mediaPLayer({ el: video });
button.onclick = () => player.play();
