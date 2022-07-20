"use strict";
class Alipay {
    handle(amount) {
        console.log(`支付宝到账${amount}元`);
    }
}
class Wepay {
    handle(amount) {
        console.log(`微信到账${amount}元`);
    }
}
function pay(type, price) {
    let pay; //非空断言DOM
    switch (type) {
        case 'alipay':
            pay = new Alipay();
            break;
        case 'wepay':
            pay = new Wepay();
    }
    pay.handle(price);
}
