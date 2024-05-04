install:
	npm ci

brain-games: 
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

calculator:
	node bin/calculator.js

publish:
	npm publish --dry-run

lint:
	npx eslint .