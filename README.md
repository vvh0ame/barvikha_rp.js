# barvikha_rp.py
Mobile-API for [BarvikhaRP](https://bh-rp.com) an popular multiplayer mobile game about russia which is based on GTA San Andreas

## Example
```JavaScript
async function main() {
	const { BarvikhaRp } = require("./barvikha_rp.js")
	const barvikhaRp = new BarvikhaRp()
	const servers = await barvikhaRp.getServers()
  	console.log(servers)
}

main()
```
