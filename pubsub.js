let subscribers = {};

module.exports = {
  publish(event, data) {
    if (!subscribers[event]) return;

    subscribers[event].forEach(subscriberCallback => subscriberCallback(data));
  },

  subscribe(event, callback) {
    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    let index = subscribers[event].push(callback) - 1;

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1);
      }
    };
  }
};