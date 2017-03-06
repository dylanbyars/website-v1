### About this repo

These are the files used to actually serve the site as a Github Page. They're built using the 'npm run deploy' command outlined in the scripts section of the package.json file in the master branch of this repository.

## Interesting Bits

Github Pages doesn't automatically play nicely with a frontend router like react-router. The index.html file has a handy function courtesy of https://github.com/rafrex/spa-github-pages that handles redirects when paired with a custom 404.html page that Mr. Rafrax also provided. The script included in the index.html file and the 404.html file were both placed in the 'public' folder of the application so that they'd be included each time I built a new production version of the site. 
