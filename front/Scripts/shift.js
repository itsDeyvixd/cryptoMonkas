import { cypher, random, abc } from "./main";

shift = {};

shift.enc = (text, key) => { // key : int
    var encrypted = '';
    text.forEach(chr => {
        encrypted += abc[(abc.indexOf(chr) + key) % 26];
    });

    return encrypted
}
shift.dec = (text, key) => { // key : int
    return shift.enc(text, 26 - key)
}

shift.getkey = () => {
    return random(0, 26)
}

export {shift}