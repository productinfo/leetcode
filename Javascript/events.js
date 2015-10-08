// event.on('leo-fire', callback)
// event.off('leo-fire')
// event.emit('leo-fire', data)

export let events = {

  events: {},

  // register an event
  on (evtName, callback) {

    this.events[evtName] = this.events[evtName] || [];
    this.events[evtName].push(callback);

  },

  // unbind an event
  off (evtName, callback) {

    if (this.events[evtName]) {

      let len = this.events[evtName].length, i = 0;

      for (; i < len ; i++) {
        if (this.events[evtName][i] === callback) {
          this.events[evtName].splice(i, 1);
          break;
        }
      }


    }

  },

  // fire an event
  emit (evtName, data) {

    if (this.events[evtName]) {
      this.events[evtName].forEach((fn) => {
        fn(data);
      });
    }

  }

};
