from requests import get

class BarvikhaRP:
	def __init__(self) -> None:
		self.api = "https://ln.bh-rp.com/b"
		self.headers = {
			"user-agent": "Dalvik/2.1.0 (Linux; U; Android 9; RMX3551 Build/PQ3A.190705.003)"
		}


	def get_urls(self) -> dict:
		return get(
			f"{self.api}/b31-5_urls.json",
			headers=self.headers).json()

	def get_versions(self) -> dict:
		return get(
			f"{self.api}/b31-5_versions.json",
			headers=self.headers).json()

	def get_news(self) -> dict:
		return get(
			f"{self.api}/b15_news.json",
			headers=self.headers).json()

	def get_servers(self) -> list:
		return get(
			f"{self.api}/b15_servers.json",
			headers=self.headers).json()

	def get_hashes(self) -> list:
		return get(
			f"{self.api}/b31-5_hashes.json",
			headers=self.headers).json()
