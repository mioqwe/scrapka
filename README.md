# Usage

1.
```bash
uv run server.py 
uv run main.py ./data/search_ua_params.csv
```
2. In browser install tampermonkey through store
3. install userscript in tampermonkey [script.js](./script.js)
4. Go to google.com/maps
5. write something like "medical centers NY" in search input - it will activate an tampermonkey userscript... and just watch.
6. Press ENTER in terminal

# Todo/Issues
[ ] upload automaticaly tampermonkey extension... tried but something isnt working
  - if it would be fixed > think about how to preload an userscript.
[ ] fix a lil bit script to skip steps 4,5
