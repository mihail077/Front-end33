// 1. повторення callback функціі

// backend
function clearHouse(isDone, fn) {
    setTimeout(() => {
        const reward = 500

    if (isDone) {
        fn(null, reward)
    } else {
        fn('You should clear house!', 0)
    }
    }, 1500) 
}

function buyShore(money, fn) {
    setTimeout(() => {
        const priceShore = 300;

        if (money >= priceShore) {
            const rest = money - priceShore;
            fn(null, rest)
        } else {
            fn('Money not enough!')
        }
    },1000)
}

function buyIce(money, fn) {
    setTimeout(() => {
        const priceOfIce = 50;

        if (money >= priceOfIce) {
            const rest = money - priceOfIce;
            fn(null, rest);
        } else {
            fn('You have too low money to buy ice')
        }
    }, 1000)
}


// frontend
let isClearedHouse = confirm('Did you clear house ?')

clearHouse(isClearedHouse, (err, money) => {
    if (!err) {
        console.log('I get: ', money, ' I`m happy');

        buyShore(money, (errShore, rest) => {
            if (!errShore) {
                console.log('I bought shores! I have rest: ', rest);

                buyIce(rest, (errIce, restIce) => {
                    if (!errIce) {
                        console.log('Ice is yummy yummy, I have: ', restIce);
                    } else {
                        console.log('Error: ', errIce);
                    }
                });
            } else {
                console.log('Error:', errShore);
            }
        })
    } else {
        console.log('I have error: ', err, ' I have money:', money);
    }
}) 


// // 2. створення аналогічної callback функціі
function repairPC(isDone, fn) {
    setTimeout(() => {
        const reward = 700

    if (isDone) {
        fn(null, reward)
    } else {
        fn('You should repair PC!')
    }
    }, 3000)
}

function buyCharger(money, fn) {
    setTimeout(() => {
        const priceCharger = 350;

        if (money >= priceCharger) {
            const rest = money - priceCharger;
            fn(null, rest)
        } else {
            fn('Money not enough!')
        }
    },1500)
}

function buyGroceries(money, fn) {
    setTimeout(() => {
        const priceGroceries = 50;

        if (money >= priceGroceries) {
            const rest = money - priceGroceries;
            fn(null, rest);
        } else {
            fn('You have too low money to buy groceries')
        }
    },1000)
}


let isRepairPC = confirm('Did you repair PC?')

repairPC(isRepairPC, (error, money) => {
    if (!error) {
        console.log('I get money: ', money, ' I`m very happy');

        buyCharger(money, (errCharger, rest) => {
            if (!errCharger) {
                console.log('I bought charger! I have rest: ', rest);

                buyGroceries(rest, (errGroceries, restGroceries) => {
                    if (!errGroceries) {
                        console.log('Groceries is good, I have: ', restGroceries);
                    } else {
                        console.log('Error: ', errGroceries);
                    }
                });
                
            } else {
                console.log('Error:', errCharger);
            }
        })
    } else {
        console.log('I have error: ', error, ' I don`t have money');
    }
})