# jke-javascript-utils 
[![NPM version](https://img.shields.io/npm/v/jke-javascript-utils.svg)](https://www.npmjs.com/package/jke-javascript-utils) [![Build status](https://img.shields.io/travis/joakimkemeny/jke-javascript-utils/master.svg)](https://travis-ci.org/joakimkemeny/jke-javascript-utils)

This project provides a set of JavaScript utilities that I use in my own projects to avoid copy-pasting code. These utilities are mainly added to a public project to make them easier for me to use in my own projects and in other projects that I'm involved in but hopefully they can be useful to other people as well.

Currently this project provides very little value since it only contains one utility. I decided to publish it anyway to provide an easy way for me to add new utilities. The project itself also serves as a good basis for creating a new project with test and build systems in place. 

## Usage

The utilities are grouped into sets and to use it just import the set that it belongs to. If you use a module bundler like Webpack or Rollup this project is configured to support tree shaking to minimize your final application further.  

``` bash
npm install --save jke-javascript-utils
```

``` javascript
import { DateUtils } from "jke-javascript-utils"
DateUtils.truncateDateToDay(new Date())
```

If you want to use this library without using NPM you can include it directly using a script tag thanks to [Unpkg](https://unpkg.com) and its sponsors.

``` html
<script src="https://unpkg.com/jke-javascript-utils/umd/jke-javascript-utils.min.js">
<script>
   var DateUtils = JkeJavaScriptUtils.DateUtils
   DateUtils.truncateDateToDay(new Date())
</script>
```

## Available utilities

The following utilities are available.

- DateUtils

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

- [babel-cli](https://www.npmjs.com/package/babel-cli): Used to run Babel from the build
- [babel-loader](https://www.npmjs.com/package/babel-loader): Used by Webpack to use Babel to understand ES2015
- [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015): Used to configure Babel to understand ES2015
- [babel-register](https://www.npmjs.com/package/babel-register): Used by Mocha to use Babel to understand ES2015
- [chai](https://www.npmjs.com/package/chai): Used by Mocha to make assertions in the tests
- [cross-env](https://www.npmjs.com/package/cross-env): Used to set environment variables cross platform in the build
- [eslint](https://www.npmjs.com/package/eslint): Used to make sure the code follows my conventions
- [eslint-config-jke](https://www.npmjs.com/package/eslint-config-jke): Used to configure ESLint
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): Used to extend ESLint with rules for import statements
- [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha): Used to extend ESLint with rules for Mocha
- [mocha](https://www.npmjs.com/package/mocha): Used to test the code
- [rimraf](https://www.npmjs.com/package/rimraf): Used to remove directories cross platform in the build
- [webpack](https://www.npmjs.com/package/webpack): Used to create UMD builds
