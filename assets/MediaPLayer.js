
function mediaPLayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
}
mediaPLayer.prototype.play = function () {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
};

export default mediaPLayer;