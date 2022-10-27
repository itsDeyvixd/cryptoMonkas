import { random, abc } from "./main";

vigenere = {};

vigenere.enc = (text, key) => {
    // It is safe to assume that the key is a word
    const lkey = key.length;

    var encrypted = '';
    var i = 0;
    text.forEach(chr => {
        encrypted += abc[abc.indexOf(chr) + abc.indexOf(key[i % lkey])];
        i += 1;
    });

    return encrypted;
}

vigenere.dec = (text, key) => {
    // It is safe to assume that the key is a word
    var inv_k = ''
    key.forEach(chr => {
        inv_k += abc[(26 - abc.indexOf(chr)) % 26];
    });

    return vigenere.enc(text, inv_k)
}

vigenere.getkey = (n = 0) => { // n is the length of the key
    if(!n) {
        n = random(2, 7)
    }

    var key = '';

    for (let i = 0; i < n; i++) {
        key += abc[random(0, 26)];
    }

    return key;
}

export {vigenere}