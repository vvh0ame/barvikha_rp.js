class BarvikhaRp {
	constructor() {
		this.api = "https://ln.bh-rp.com/b"
		this.headers = {
			"user-agent": "Dalvik/2.1.0 (Linux; U; Android 9; RMX3551 Build/PQ3A.190705.003)"
		}
	}

	async getUrls() {
		const response = await fetch(
			`${this.api}/b31-5_urls.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getVersions() {
		const response = await fetch(
			`${this.api}/b31-5_versions.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getNews() {
		const response = await fetch(
			`${this.api}/b15_news.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getServers() {
		const response = await fetch(
			`${this.api}/b15_servers.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getHashes() {
		const response = await fetch(
			`${this.api}/b31-5_hashes.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {BarvikhaRp}
