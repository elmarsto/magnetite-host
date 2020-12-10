## Magnetite Host

This is a plugin for [Obsidian](https://obsidian.md). It works in conjunction with [Magnetite Guest](https://github.com/elmarsto/magnetite-guest), which in turn works in conjunction with the [Magnetite Library](https://github.com/elmarsto/magnetite-lib/).

Magnetite lets you do plugins for Obsidian in pure Rust.

This is the "JavaScript part." It works in conjunction with the Guest, which is the "Rust part". Think of this Host as the tape deck; the Guest is the cassette.

Typically, unless you're releasing a new plugin, you won't need to change much (if anything!) in this repo,
but you'll probably find yourself cloning it! ;D

## Installation
For development, you can clone the host without modification into your plugins directory, like so:

```
cd <vault>/.obsidian/plugins/
git clone https://github.com/elmarsto/magnetite-host <your-plugin-name>
cd <your-plugin-name>
git submodule add -f https://github.com/<your-gh-handle>/<your-fork-of-the-magnetite-guest-repo> ./magnetite-guest
git submodule update --init --recursive
```

If you get around to releasing a plugin with Magnetite, (a) let me know and (b) fork this (Host!) repo, edit the manifest.json, update the submodule to point to your guest, and so forth. I can help with this, if you run into trouble.

This repo based heavily on the [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin/)

See [magnetite-lib](https://github.com/elmarsto/magnetite-lib) for API