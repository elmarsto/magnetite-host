import { Plugin } from 'obsidian';
import wasm from "./magnetite-guest/Cargo.toml";

export default class Magnetite extends Plugin {
	constructor(...args) {
		super(...args);
		this.guest = wasm();
	}
	async onload() {
		const { onload } = await this.guest;
		if (onload) {
			onload(this);
		}
	}
	async onunload() {
		const { onunload } = await this.guest;
		if (onunload) {
			onunload(this);
		}
	}
};
