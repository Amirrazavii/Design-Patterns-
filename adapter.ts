interface IPaymentAdapter {
     pay(amount:number):string
}

class Paypal{

    paymentpaypal(amount :number) :string{

        return `paying ${amount} paypal`
    }

}

class Payment implements IPaymentAdapter{
    private payment: Paypal;
    constructor(){
        this.payment = new Paypal();
    }
    pay(amount: number): string {
        return this.payment.paymentpaypal(amount);
    }
}

const aa =new  Payment();
aa.pay(1000);
// console.log(aa.pay(1000));



