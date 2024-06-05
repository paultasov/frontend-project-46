install: # clean install
	npm ci
publish: # publish in npm registry
	npm publish --dry-run
gendiff: # run gendiff
	node bin/gendiff.js
lint: # check code with ESLint
	npx eslint .