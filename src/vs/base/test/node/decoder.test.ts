/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import * as assert from 'assert';
import decoder = require('vs/base/node/decoder');

suite('Decoder', () => {

	test('decoding', function () {
		const lineDecoder = new decoder.LineDecoder();
		let res = lineDecoder.write(Buffer.from('hello'));
		assert.equal(res.length, 0);

		res = lineDecoder.write(Buffer.from('\nworld'));
		assert.equal(res[0], 'hello');
		assert.equal(res.length, 1);

		assert.equal(lineDecoder.end(), 'world');
	});
});