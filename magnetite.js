import { Plugin } from 'obsidian';
import wasm from "./magnetite-guest/Cargo.toml";

const guest = {};

(async () => {
	Object.assign(guest,await wasm());
})();

const nonOverridablePropertyNames = [ '__proto__', 'prototype' ];
// mostly, just avoiding undefined behaviour; I can't reason about what happens
// to object inheritance (e.g. someone calling super(), or, god forbid, new <...>())
// the golden rule in networked applications is if you can't reason about it,
// forbid it, because whatever it is, it's probably a security risk

export default Magnetite = (...args) => {
	const plugin = new Plugin(...args);
	const proxy = new Proxy(plugin, {
		get: (target, propertyName) => nonOverridablePropertyNames.some(propertyName) ? target[propertyName] : guest[propertyName] || target[propertyName],
	});
	return proxy;
};
