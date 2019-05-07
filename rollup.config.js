import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'


const basePlugins = [
	// List external libraries that should not be bundled
	external(),
	postcss({
		modules: true
	}),
	url(),
	svgr(),
	babel({
		exclude: 'node_modules/**',
		plugins: ['external-helpers']
	}),

	// Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
	commonjs({
		namedExports: {
			// left-hand side can be an absolute path, a path
			// relative to the current directory, or the name
			// of a module in node_modules
			'node_modules/@material-ui/core/styles/index.js': [ 'withStyles' ]
		}
	}),

	// Allow node_modules resolution, so you can use 'external' to control
	// which external modules to include in the bundle
	// https://github.com/rollup/rollup-plugin-node-resolve#usage
	resolve()

	// Enable minification
	// terser()
]


export default [
	{
		input: 'src/index.js',
		output: {
			file: `cjs/index.js`,
			format: 'cjs',
		},
		plugins: basePlugins
	},

	{
		input: 'src/index.js',
		output: {
			file: `esm/index.js`,
			format: 'esm',
			esModule: true,
		},
		plugins: basePlugins
	}
]
