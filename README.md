# Usage

1.
```bash
uv run server.py 
uv run main.py ./data/search_ua_params.csv
```
2. install userscript in tampermonkey [script.js](./script.js)
3. Go to google.com/maps
4. write something like "medical centers NY" in search input - it will activate an tampermonkey userscript... and just watch.
6. Press ENTER in terminal

# Todo/Issues
- [ ] **IMPORTANT fix issue with language...** Interface in google defined (your local) language
  - important cuz results are in english language... not native... for the results
- [ ] think about how to preload an userscript.
- [ ] fix a lil bit script to skip steps 4,5
- [x] upload automaticaly tampermonkey extension... tried but something isnt working



# Notes
e243d579-706a-4017-96cf-5088768b1d89/


# Notes
e243d579-706a-4017-96cf-5088768b1d89/


# Notes
<button class="more-options-button" action="more-options" data-l10n-id="addon-options-button" aria-haspopup="menu" aria-expanded="false" aria-label="More Options"></button> - Button that targets TamperMonkey preferences button show
<panel-item data-l10n-id="preferences-addon-button" action="preferences" role="presentation">Preferences</panel-item> - button in select
