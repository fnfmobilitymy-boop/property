import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});for(const f of ['index.html','style.css','app.js','new-launches.html','resale-homes.html','listings.css','listings.js','home-showcase.css'])await copyFile(f,`dist/${f}`);await cp('public','dist/public',{recursive:true});console.log('Built static site in dist/');
