To deploy the website to GitHub Pages:
```bash
npm run build
cd dist
git add .
git commit -m "Deploy"
git push --force https://github.com/palas-farsoiya/palas-farsoiya.github.io.git HEAD:gh-pages
cd ..
```

The site will be live at: https://palas-farsoiya.github.io/
