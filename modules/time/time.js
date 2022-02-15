import { timebox } from "../selector/selectors.js";

export function time() {
	const date = new Date();
	const locale = navigator.language;
	const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
	};
	
	timebox.textContent = `${date.toLocaleTimeString(locale, options)}`;
}