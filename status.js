const os = require('os');

setInterval(() => {
    const { freemem, totalmem } = os;
    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);

    const status = {
        Memoria_Usada: `${mem} MB`,
        Total: `${total} MB`,
        Usado: `${percents} %`
    }

    console.clear();
    console.log("=== Pc Status ===");
    console.table(status);

}, 1000);

/* console.log(os); */

/* console.log(os.platform()); */

/* const { freemem, totalmem } = os;

const total = parseInt(totalmem() / 1024 / 1024);
const mem = parseInt(freemem() / 1024 / 1024);
const percents = parseInt((mem / total) * 100); */

/* console.log(total, mem, percents); */

/* const status = {
    Memoria_Usada: `${mem} MB`,
    Total: `${total} MB`,
    Usado: `${percents} %`
} */

/* console.log(status); */

/* console.log("=== Pc Status ===");
console.table(status); */

testando