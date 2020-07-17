/**
 * @file Simple message broker implementing the pub-sub design pattern
 */

/**
 * Simple PubSub Message Broker
 */
class MessageBroker {
  /**
   * @param {Array} eventList List of valid events
   */
  constructor(events) {
    this.eventList = events || null;
    this.lastSubscriptionId = 0;
    this.subscriptions = {}; // { id: callback }
  }

  // MARK: Public Interface

  /**
   * Publish event to the message bus
   * @param {String} eventName
   * @param {*} arg Argument passed to subscriber's callback function
   */
  publish(eventName, arg) {
    if (!this._validateEventName()) {
      throw new Error(`Cannot publish unregistered event: ${eventName}`);
    }
    Object.keys(this.subscriptions[eventName])
      .forEach((id) => this.subscriptions[eventName][id](arg));
  }

  /**
   * Subscribe to an event in the message bus
   * @param {String} eventName
   * @param {Function} callback Callback executed when the event is published
   */
  subscribe(eventName, callback) {
    const id = this._generateSubscriptionId();
    this.subscriptions[eventName][id] = callback;
  }

  /**
   * Unsubscribe from an event in O(1) time
   * @param {String} eventName
   * @param {Number} subscriptionId
   */
  unsubscribe(eventName, subscriptionId) {
    delete this.subscriptions[eventName][subscriptionId];
    if (Object.keys(this.subscriptions[eventName]).length === 0) {
      delete this.subscriptions[eventName];
    }
  }

  // MARK: Internal Methods

  /**
   * Validate event name if the instance maintains an event list
   * @param {String} eventName
   * @returns {Boolean}
   */
  _validateEventName(eventName) {
    return this.eventList ? this.eventList.includes(eventName) : true;
  }

  /**
   * Generate unique subscription id
   * @returns {Number}
   */
  _generateSubscriptionId() {
    this.lastSubscriptionId += 1;
    return this.lastSubscriptionId;
  }
}

export default MessageBroker;
