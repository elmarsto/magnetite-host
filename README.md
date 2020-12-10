## Magnetite Host

This is a plugin for [Obsidian](https://obsidian.md). It works in conjunction with [Magnetite Guest](https://github.com/elmarsto/magnetite-guest).

## Installation
The basic idea is that you can clone the host without modification into your plugins directory, like so:

```
cd ~/vaults/<some-vault>/.obsidian/plugins/
git clone https://github.com/elmarsto/magnetite-host/ <your plugin name>
cd <your plugin name>
# TODO; basically, have them symlink ./magnetite-guest to their plugin directory (or git submodule pointing at some github repo, or whatever)
```

It's based heavily on the [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin/)

TODO: explain how to use

See [magnetite-lib](https://github.com/elmarsto/magnetite-lib) for API