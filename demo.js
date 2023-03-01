
let cashe = {};
function custom(n) {

    if (n in cashe) {
        return cashe[n]
    }
    else {
        console.log("long time");
        return cashe[n] = n + 90;
    }
};
console.log(custom(3));
console.log(custom(6));

