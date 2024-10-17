install: # clean install
	npm ci
publish: # publish in npm registry
	npm publish --dry-run
gendiff: # run gendiff
	node bin/gendiff.js
test: # test code with Jest
	npm test
test-coverage: # get tests coverage
	npm test -- --coverage --coverageProvider=v8
lint: # check code with ESLint
	npx eslint .