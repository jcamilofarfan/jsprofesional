const video = document.querySelector("video");
const button = document.querySelector("button");
function mediaPLayer(config) {
  this.media = config.el;
}
mediaPLayer.prototype.play = function () {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
};
const player = new mediaPLayer({ el: video });
button.onclick = () => player.play();
