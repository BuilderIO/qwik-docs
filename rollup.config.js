import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { qwikRollup } from '@builder.io/qwik/optimizer';
import { writeFile, mkdir } from "fs/promises";
import { dirname } from "path";

export default async function () {
  return {
    input: [
      'src/index.server.tsx',
      'src/root.tsx'
    ],
    external: ['node-fetch'],
    plugins: [
      nodeResolve(),
      qwikRollup({
        entryStrategy: {type: 'hook' },
        symbolsOutput: (data) => {
          outputJSON('./server/build/q-symbols.json', data);
        },
      }),
      typescript(),
    ],
    output: [
      {
        chunkFileNames: 'q-[hash].js',
        dir: 'public/build',
        format: 'es',
      },
      {
        dir: 'server/build',
        format: 'cjs',
      },
    ],
  };
}

async function outputJSON(path, data) {
  await mkdir(dirname(path), {recursive: true});
  await writeFile(path, JSON.stringify(data, null, 2));
}
