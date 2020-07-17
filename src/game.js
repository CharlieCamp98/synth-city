/**
 * @file Main Game object that instantiates a new game instance
 * @author Charlie Campanella
 */

class Game {
  constructor(controls, render, simulation, util) {
    /* Parameters */
    this.controls = controls;
    this.render = render;
    this.simulation = simulation;
    this.util = util;

    /* Custom Properties */
    this.guid = util.general.guid();
    this.frame = null;

    /* On Instantiation */
    this.mount();
  }

  /**
   * @function mount
   * @description Mounts the game instance to a new DOM element appended to
   * the document's body
   * @param {String} id DOM element identifier
   * @returns {Void}
   */
  mount(id = this.guid) {
    const gameDocument = this.util.general.document();
    const frame = gameDocument.createElement('canvas');
    frame.setAttribute('id', id);
    frame.setAttribute('class', 'game-frame');
    gameDocument.body.appendChild(frame);
    this.frame = frame;
  }

  start() {
    if (!this.frame) {
      throw new Error('Game must be mounted before start');
    }
    /* eslint-disable no-alert */
    alert(this.guid);
  }
}

export default Game;
