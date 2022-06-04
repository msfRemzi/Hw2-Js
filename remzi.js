let data = receipt();
console.log(data); 

let obj = receipt();
        let delivery = 9000; // Доставка
        let sum = delivery;
        let array = [];
        for (let key in obj) {
            array.push(`${key} ${obj[key].info}`);
            sum += obj[key].price;
        }
        console.log(`Вы заказали ${array.join()} | Общая стоимость ${sum}сумм с доставкой (${delivery})`);