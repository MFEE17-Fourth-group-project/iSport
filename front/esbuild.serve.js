const imageInline = require('esbuild-plugin-inline-image');
require('dotenv').config();

const define = {};
for (const env in process.env) {
    define[`process.env.${env}`] = JSON.stringify(process.env[env]);
};

define['global'] = 'window';

require('esbuild').serve({
    servedir: 'public',
    port: 3000
},
{
    entryPoints: ['src/index.js'],
    outfile: 'public/dist/index.js',
    bundle: true,
    loader: {
      '.js': 'jsx',
    },
    plugins: [
      imageInline(),
    ],
    external: ['src/images'],
    define,
}).catch(() => process.exit(1));