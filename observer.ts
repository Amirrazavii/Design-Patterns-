const hash = require('object-hash');

interface Isubject{
    product:string
    observers :Iobserver[]
    atach(observer: Iobserver):void,
    detach(observer: Iobserver):void,
    notilfy():void
}
interface Iobserver{
    update(subject: Isubject):void
}


class Shop implements Isubject{
     product :string;
     observers :Iobserver[] =[];


     atach(observer: Iobserver):void {
        // this.observers.push(observer)
        this.observers[hash(observer)]=observer;  

    }
   async detach(observer: Iobserver): Promise<void> {
        // const index = this.observers.indexOf(observer);
        // delete this.observers[index];    
        delete this.observers[hash(observer)]  
    }
     notilfy(): void {
        for (const observer of this.observers){
            observer.update(this)
        }
    }
}


class ShoeAplicant implements Iobserver{


    async update(subject:Isubject): Promise<void> {
      
        console.log('show  is availble');
        
    }
    
}

const Instanceshop = new Shop();
const a= new ShoeAplicant();
const b= new ShoeAplicant();
Instanceshop.atach(a);
Instanceshop.atach(b);    
Instanceshop.notilfy();







