import { random, abc } from "./main";

substitution = {};

substitution.enc = (text, key) => {
    var encrypted = '';
    for (let i = 0; i < text.length; i++) {
        var chr = text[i];
        if (chr != ' ') {
            var newpos = key.indexOf(chr);
            encrypted += abc[newpos];
        } else {
            encrypted += ' ';
        }
    }
    return (encrypted, key)
}

substitution.dec = (text, key) => {
    var decrypted = '';
    for (let i = 0; i < text.length; i++) {
        var chr = text[i];
        if (chr != ' ') {
            var newpos = abc.indexOf(chr);
            decrypted += key[newpos];
        } else {
            decrypted += ' ';
        }
    }
    return (decrypted, key)
}

substitution.getkey = () => {
    const arrabc = abc.split('');
    var key = '';
    while(arrabc.length > 0){
        r = random(0, arrabc.length);
        key += arrabc[r];
        arrabc.splice(r, 1);
    }

    return key;
}

export {substitution}