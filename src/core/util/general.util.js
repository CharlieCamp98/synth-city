/**
 * @file Contains general utility methods used throughout the application
 * @author Charlie Campanella
 */

/**
  * @function document
  * @description Returns the browser's 'document'. Can be mocked for testing.
  * @returns {Object} document object
  */
const document = () => window.document;

/**
 * @function guid
 * @description Returns RFC4122 compliant UUID. Credit: https://stackoverflow.com/a/105074s
 * @returns {String} UUID
 */
const guid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  /* eslint-disable */
  const r = Math.random() * 16 | 0; const
    v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

export default {
  document,
  guid,
};
