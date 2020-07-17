/**
 * @file Contains message broker used by the UI domain
 * @author Charlie Campanella
 */
import coreFactory from '~@/core/core.factory';

const uiMessageBroker = coreFactory.makeMessageBroker();

export default uiMessageBroker;
