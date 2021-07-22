let money = 1000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money > 1000) {
                resolve(`can buy a ${car}`);
            }
            else {
                reject(`Do not enough money`);
            }
        }, 1000);
    }));
};
money = 999;
buyACar("BMW").then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
//# sourceMappingURL=main.js.map