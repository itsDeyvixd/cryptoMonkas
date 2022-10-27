import { random, abc } from "./main";

permutation = {};

const arrn = (n) => {
    if(n == 1){
        return [0];
    }

    return arrn(n-1).concat([n - 1]);
}

const inv_k = (key) => {
    const inverse = [];
    for (let i = 0; i < key.length; i++) {
        inverse.push(0);
        
    }
    for (let i = 0; i < key.length; i++) {
        inverse[key[i]] = i;
    }
    return inverse
}

permutation.enc = (text, key) => {
    // It is safe to assume that key is an array of numbers
    const lkey = key.length;

    var encrypted = '';
    
    if (text.length % lkey != 0) {
        for (let i = 0; i < lkey - (text.length % lkey); i++) {
            text += " ";
            
        }
    }

    for (let i = 0; i < text.length; i++) {
        encrypted += text[key[i % lkey] + Math.floor(i / lkey) * lkey];
    }

    return encrypted
}

permutation.dec = (text, key) => {
    // It is safe to assume that key is an array of numbers
    return permutation.enc(text, inv_k(key))
}

permutation.getkey = (n = 2) => {
    const setup = arr(n);
    const key = [];
    while(setup.length > 0){
        r = random(0, setup.length);
        key.push(setup[r]);
        setup.splice(r, 1);
    }

    return key
}

export {permutation}