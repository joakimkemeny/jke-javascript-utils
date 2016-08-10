# jke-javascript-utils 
[![NPM version](https://img.shields.io/npm/v/jke-javascript-utils.svg)](https://www.npmjs.com/package/jke-javascript-utils) [![Build status](https://img.shields.io/travis/joakimkemeny/jke-javascript-utils/master.svg)](https://travis-ci.org/joakimkemeny/jke-javascript-utils)

This project provides a set of JavaScript utilities that I use in my own projects to avoid copy-pasting code. These utilities are mainly added to a public project to make them easier for me to use in my own projects and in other projects that I'm involved in but hopefully they can be useful to other people as well.

## Usage

All utilities are provided as separate files to make them easy to include while still keeping your final bundle as small as possible but there are several different ways to import a utility. 

### Alternative 1
``` javascript
import truncateDateToDay from "jke-javascript-utils/date/truncateDateToDay"
truncateDateToDay(new Date())
```

### Alternative 2
``` javascript
import { truncateDateToDay } from "jke-javascript-utils/date"
truncateDateToDay(new Date())
```

### Alternative 3
``` javascript
import { date } from "jke-javascript-utils"
date.truncateDateToDay(new Date())
```

## Available utilities

The following utilites are available.

- Date: `jke-javascript-utils/date`

	- [truncateDateToDay](src/date/truncateDateToDay.md)

## License
Copyright 2016 Joakim Kemeny

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## Dependencies
This project relies on the work of great people who have created the following dependencies.

### Dependencies
[![dependency status](https://img.shields.io/david/joakimkemeny/jke-javascript-utils/master.svg)](https://david-dm.org/joakimkemeny/jke-javascript-utils/master#info=dependencies)

No dependencies

### Development dependencies
[![devDependency status](https://img.shields.io/david/dev/joakimkemeny/jke-javascript-utils/master.svg)](https://david-dm.org/joakimkemeny/jke-javascript-utils/master#info=devDependencies)

- [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015): Used to configure Babel to understand ES2015
- [babel-register](https://www.npmjs.com/package/babel-register): Used by Mocha to use Babel to understand ES2015
- [chai](https://www.npmjs.com/package/chai): Used by Mocha to make assertions in the tests
- [eslint](https://www.npmjs.com/package/eslint): Used to make sure the code follows my conventions
- [eslint-config-jke](https://www.npmjs.com/package/eslint-config-jke): Used to configure ESLint
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): Used to extend ESLint with rules for import statements
- [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha): Used to extend ESLint with rules for Mocha
- [mocha](https://www.npmjs.com/package/mocha): Used to test the code
