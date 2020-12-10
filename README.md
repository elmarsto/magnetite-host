## Magnetite Host

This is a plugin for [Obsidian](https://obsidian.md). It works in conjunction with [Magnetite Guest](https://github.com/elmarsto/magnetite-guest), which in turn works in conjunction with the [Magnetite Library](https://github.com/elmarsto/magnetite-lib/).

Magnetite lets you do pure Rust plugins for Obsidian.

This is the "JavaScript part." It works in conjunction with the Guest, which is the "Rust part". Think of this Host as the tape deck; the Guest is the cassette.

Typically, unless you're releasing a new plugin, you won't need to change much (if anything!) in this repo,
but you'll probably find yourself cloning it! ;D

## Installation
You can clone the host without modification into your plugins directory, like so:

```
cd ~/vaults/<some-vault>/.obsidian/plugins/
git clone https://github.com/elmarsto/magnetite-host/ <your plugin name>
cd <your plugin name>
# TODO; basically, have them symlink ./magnetite-guest to their plugin directory (or git submodule pointing at some github repo, or whatever)
```

It's based heavily on the [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin/)

See [magnetite-lib](https://github.com/elmarsto/magnetite-lib) for API