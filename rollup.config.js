import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import rust from '@wasm-tool/rollup-plugin-rust';

export default {
  input: 'magnetite.js',
  output: {
    file: 'main.js',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default'
  },
  external: ['obsidian'],
  plugins: [
    nodeResolve({browser: true}),
    commonjs(),
    rust({ inlineWasm: true }),
  ]
};