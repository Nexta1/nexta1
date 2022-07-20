interface payInterface {
	handle(amount: number): void
}
class Alipay implements payInterface {
	public handle(amount: number): void {
		console.log(`支付宝到账${amount}元`)
	}
}
class Wepay implements payInterface {
	public handle(amount: number): void {
		console.log(`微信到账${amount}元`)
	}
}

function pay(type: string, price: number) {
    let pay!: payInterface  //非空断言DOM
	switch (type) {
		case 'alipay':
			pay = new Alipay()
			break
		case 'wepay':
			pay = new Wepay()
	}
	pay.handle(price)
}
