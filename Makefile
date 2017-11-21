start:
	docker-compose up
stop:
	docker-compose down
setup:
	docker-compose build

test:
	docker-compose run web yarn test

fix:
	docker-compose run web npm rebuild node-sass --force