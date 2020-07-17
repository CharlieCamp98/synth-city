/**
 * @file Contains message broker used by the simulation domain
 * @author Charlie Campanella
 */
import coreFactory from '~@/core/core.factory';

const simulationMessageBroker = coreFactory.makeMessageBroker();

export default simulationMessageBroker;
