import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.esm.js',
                format: 'es',
                sourcemap: true,
            },
            {
                file: 'dist/index.cjs.js',
                format: 'cjs',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
            json(), // Add JSON plugin here
        ],
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()],
    },
];
