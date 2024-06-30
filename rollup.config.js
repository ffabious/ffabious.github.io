import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        sourcemap: true,
        name: 'Bundle',
    },
    plugins: [
        nodeResolve({
            browser: true,
            extensions: ['.js', '.ts', '.json'],
        }),
        terser(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
    ],
};
