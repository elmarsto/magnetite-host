import { Plugin } from 'obsidian';
import wasm from "./magnetite-guest/Cargo.toml";

export default class Magnetite extends Plugin {
	constructor(...args) {
		super(...args);
		this.guest = wasm();
	}
	async onload() {
		const { onload } = await this.guest;
		onload(this);
	}
};
