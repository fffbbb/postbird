var SavedConn = {

  savedConnections () {
    if (window.localStorage.savedConnections) {
      return JSON.parse(window.localStorage.savedConnections);
    } else {
      return {};
    }
  },

  saveConnection (name, options) {
    var newData = this.savedConnections();
    newData[name] = options;
    window.localStorage.savedConnections = JSON.stringify(newData);
  },

  renameConnection (oldName, newName) {
    var data = this.savedConnections();
    data[newName] = data[oldName];
    delete data[oldName];
    window.localStorage.savedConnections = JSON.stringify(data);
    return true;
  },

  removeConnection (name) {
    var data = this.savedConnections();
    delete data[name];
    window.localStorage.savedConnections = JSON.stringify(data);
    return true;
  },

  savedConnection (name) {
    return this.savedConnections()[name];
  },

  isEqualWithSaved(name, options) {
    return JSON.stringify(this.savedConnection(name)) == JSON.stringify(options);
    //return Object.is(this.savedConnection(name), options);
  }
}

module.exports = SavedConn;
