/**
 * @file Contains the core component factory
 * @author Charlie Campanella
 */

import { MessageBroker, events } from './messaging/index';

/** Factory for core components */
const coreFactory = {
  /**
   * Creates new MessageBroker instance
   * @param {Array|null} events Valid event list. Defaults to values declared in ./messaging/events
   * @returns {MessageBroker}
   */
  makeMessageBroker(events = events) {
    return new MessageBroker(events || null);
  },
};

export default coreFactory;
