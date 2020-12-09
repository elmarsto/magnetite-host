import { Plugin } from 'obsidian';
import magnetite from "./magnetite/Cargo.toml";

(async () => {
	await magnetite();
})();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
export default Magnetite = (...args) => {
	const plugin = new Plugin(...args);
	const proxy = new Proxy(plugin, {
		get: (target, propertyName) => magnetite[propertyName] || target[propertyName],
	});
	return proxy;
};