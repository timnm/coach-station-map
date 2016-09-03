module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},

	"extends": ["eslint:recommended"],

	"parserOptions": {
		"ecmaFeatures": {
				"experimentalObjectRestSpread": true,
		},
		"sourceType": "module"
	},

	"plugins": [

	],

	"rules": {
		"linebreak-style": [
				"error",
				"unix"
		],
		"semi": [
				"error",
				"always"
		],
		quotes: [1, "single"],
		"no-console": 0,
		"no-unused-vars": 1,
		"no-mixed-spaces-and-tabs": 0
	}

};
