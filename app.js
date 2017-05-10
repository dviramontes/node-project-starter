import fs from 'fs';

const foo = { a: "a", b: "b" };

fs.stat('./package.json', (err, stat) => {
    if(err) console.log(err);
});

const bar = {
    ...foo,
    c: "c",
};

console.log(bar);