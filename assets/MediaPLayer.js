function mediaPLayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this._initPlugins();
}

mediaPLayer.prototype._initPlugins= function(){
  this.plugins.forEach(plugin => {
    plugin.run(this)
  });
}

mediaPLayer.prototype.play = function () {
  this.media.play();
};
mediaPLayer.prototype.pause = function () {
  this.media.pause();
};
mediaPLayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

mediaPLayer.prototype.mute = function(){
  this.media.muted = true;
}

mediaPLayer.prototype.unmute = function(){
  this.media.muted = false;
}

mediaPLayer.prototype.toggleMute = function () {
  if (this.media.muted) {
    this.unmute();
  } else {
    this.mute();
  }
};

export default mediaPLayer;