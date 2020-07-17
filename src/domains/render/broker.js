/**
 * @file Contains message broker used by the render domain
 * @author Charlie Campanella
 */
import coreFactory from '~@/core/core.factory';

const renderMessageBroker = coreFactory.makeMessageBroker();

export default renderMessageBroker;
