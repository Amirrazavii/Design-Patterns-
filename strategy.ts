interface PayStrategy {
    pay(amout: number):string
}

class PayAsanPardakht implements PayStrategy{
    pay(amout: number): string {
        
        return `Paying ${amout} by asanpardakht`;
    }
    
}

class PayBluBank implements PayStrategy{
    pay(amout: number): string {
        
        return `Paying ${amout} by BlueBank`;
    }
    
}

class PayPayPal implements PayStrategy{
    pay(amout: number): string {
        
        return `Paying ${amout} by PayPal`;
    }
    
}

class ShoppingCart {

    public amount :number =0;
    public payment :PayStrategy


    public  getAmount() {
        return this.amount;
    }
     
    public  setAmount(amount:number) {
        this.amount = amount;
    }
 
    public  payAmount() : string | null {
        if(this.amount >= 500000) {
            this.payment = new PayPayPal();
        } else if(this.amount >=50000) {
            this.payment = new PayBluBank();
        }  else if(this.amount >=5000) {
            this.payment = new PayAsanPardakht();
        }else {
            return null
        }
        return this.payment.pay(this.amount)
     }
}


const IShopPay = new ShoppingCart()

IShopPay.setAmount(1000000);
// IShopPay.payAmount();

console.log(IShopPay.getAmount());

console.log(IShopPay.payAmount());





