import { timebox } from '../selector/selectors.js';
import { DateTime } from '../luxon/src/luxon.js';

export function time() {
  const date = DateTime.local();
  timebox.textContent = `${date.toHTTP()}`;
}