/**
 * @file Entrypoint that initiates the entire game
 * @author Charlie Campanella
 */

import util from './core/util';

import Game from './game';

const game = new Game(null, null, null, util);

game.start();
