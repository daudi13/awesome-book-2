import { DateTime } from "../luxon/build/es6/luxon.js";
import { timebox } from "../selector/selectors.js";

export function time() {
	const date = DateTime.local();
	timebox.textContent = `${date.toLocaleTimeString(locale, options)}`;
}