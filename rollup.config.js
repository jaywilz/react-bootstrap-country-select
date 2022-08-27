import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import sass from 'rollup-plugin-sass';
import path from 'path';
import license from 'rollup-plugin-license';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile = NODE_ENV === 'examples' ? './docs/js/examples-umd.js' : (NODE_ENV === 'production' ? './dist/index.js' : './dist/dev.js');

export default {
  input: './src/index.ts',
  output: {
    file: outputFile,
    format: NODE_ENV === 'examples' ? 'umd' : 'cjs',
    name: NODE_ENV === 'examples' ? 'ReactBootstrapCountrySelect' : undefined,
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    babel({
      exclude: ['node_modules/**'],
    }),
    commonjs(),
    ...(NODE_ENV === 'examples' ? [ resolve() ] : []),
    sass({
      output: './dist/react-bootstrap-country-select.css',
    }),
    license({
      sourcemap: true,
      banner: {
        content: {
          file: path.join(__dirname, 'LICENSE'),
          encoding: 'utf-8',
        },
      },
    }),
  ],
  external: NODE_ENV === 'examples' ? [ 'react', 'react-dom'] : [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};