const readline = require('readline-promise').default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

String.prototype.key = () => {
    console.log("Well done !");
    process.exit();
}

(async function () {
    for (;;) {
        const res = await rl.questionAsync('> ');
        const allowed = /^[\(\)+!\[\]]*$/;
        if (res.match(allowed) == null) {
            console.log("FORBIDDEN");
        } else {
            console.log(eval(res));
        }
    }
})()