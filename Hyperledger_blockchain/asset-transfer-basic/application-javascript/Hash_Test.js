/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */


'use strict';

const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('md5');


async function Mp3toHash(){
	const fileName = './test.mp3';
	const input = fs.createReadStream(fileName);
	input.on('readable', function(){
		const data = input.read();
		if(data)
			hash.update(data);
		else {
			console.log(`${hash.digest('hex')} ${fileName}`);
		}
	});
}

async function TexttoHash(){

	// Returns the names of supported hash algorithms
	// such as SHA1,MD5
	const hash = crypto.getHashes();

	// Create hash of SHA1 type
	const x = "Geek"

	// 'digest' is the output of hash function containing
	// only hexadecimal digits
	const hashPwd = crypto.createHash('sha1').update(x).digest('hex');

	console.log(hashPwd);

}
// Mp3toHash()
TexttoHash()