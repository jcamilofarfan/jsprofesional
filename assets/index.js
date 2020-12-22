import mediaPLayer from ./MediaPLayer.js;
import AutoPLay from './MediaPLayer.js';

const video = document.querySelector("video");
const button = document.querySelector("button");

>>>>>>> 3b10c9e10938db0f1c990cd5907d7779c1f3cc68
const player = new mediaPLayer({ el: video });
button.onclick = () => player.play();
