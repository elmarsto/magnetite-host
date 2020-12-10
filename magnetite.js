import { Plugin } from 'obsidian';
import wasm from "./magnetite-guest/Cargo.toml";

export default class Magnetite extends Plugin {
	constructor(...args) {
		super(...args);
		this.guest = wasm();
	}
	async onload(...args) {
		const { onload } = await this.guest;
		onload(...args);
	}
	async onunload(...args) {
		const { onunload } = await this.guest;
		onunload(...args);
	}
};
