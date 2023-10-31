interface Icar {
    getModel(): string
}

class CarModelBMW implements Icar{
    protected model="bmw"
    getModel(): string {
        return this.model;
    }

}

class CarModelToyota implements Icar{
    protected model ="Toyota"
    getModel(): string {
        return this.model
    }
    
}


class CarFactory {
    protected car: Icar;
    make(model:string):Icar{
        if(model =='bmw'){
            this.car =new CarModelBMW
        }else if(model =="toyota"){
            this.car =new CarModelToyota
        }

        return this.car


    }

}

class carOrder {
    orderCars :string[] =[];
    car : CarFactory;
    constructor(){
        this.car = new CarFactory

    }

    public order(car:string){
        const m =this.car.make(car)
        this.orderCars.push(m.getModel())

        


    }
    public getCarOrders() {
        return this.orderCars
    }

}

const car =new carOrder();

car.order("bmw");
car.order("bmw");
car.order("toyota");
console.log(car.getCarOrders());
