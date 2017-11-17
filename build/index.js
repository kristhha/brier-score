'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
const brierScore = exports.brierScore = ({ probability, outcome }) => {
	//const outcomenum = (outcome ? 1 || 0);
	if (probability === undefined) {
		throw 'Missing probability parameter';
		//throw new Error('Missing probability parameter');
	}
	if (outcome === undefined) {
		throw 'Missing outcome parameter';
		//throw new Error('Missing outcome parameter');
	}

	if (outcome) {
		return Math.pow(probability - 1, 2);
	} else {
		return Math.pow(probability, 2);
	}
};