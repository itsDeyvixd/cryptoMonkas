import {random, abc} from "./main";

affine = {};

const values_a = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
const inverses = [1, 9, 21, 15, 3, 19, 7, 23, 11, 5, 17, 25];

affine.enc = (text, key) => {
    // It is safe to assume that key = (a, b)
    const a = key[0];
    const b = key[1];

    var encrypted = '';
    text.forEach(chr => {
        encrypted += abc[(a * abc.indexOf(chr) + b) % 26];
    });

    return encrypted;
}

affine.dec = (text, key) => {
    // It is safe to assume that key = (a, b)
    const a = key[0];
    const b = key[1];
    const inv_a = iverses[values_a.indexOf(a)];
    
    var decrypted = '';
    text.forEach(chr => {
        decrypted += abc[(inv_a * (abc.indexOf(chr) + 26 - b)) % 26];
    });

    return decrypted;

}

affine.getkey = () => {return values_a[random(0, 12)];}

export {affine}