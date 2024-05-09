up:
	npm install
	docker compose build 
	docker compose up -d

down:
	docker compose down 
	docker system prune