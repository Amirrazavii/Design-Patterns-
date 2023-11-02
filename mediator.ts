interface IMediator {
    notify(sender: any):void
}



class Mediator implements IMediator {
    
    
    notify(sender : any): void {
        
        if( sender instanceof ComponentA){
            console.log("componentA");
            

        }
        else if(sender instanceof ComponentB){
            console.log("componentB");

        }
        else if(sender instanceof ComponentC){
            console.log("componentC");

        }else if(sender instanceof ComponentC){
            console.log("componentD");

        }
    }    
 
     
   
}


class ComponentA {

    mediator : Mediator
    constructor(){
        this.mediator =new Mediator()
    }
    check(){
        this.mediator.notify(this)
    }
    operation(){
        
    }
}


class ComponentB {
    mediator : Mediator
    constructor(){
        this.mediator =new Mediator()
    }
    check(){
        this.mediator.notify(this)
    }
    operation(){
        
    }
}


class ComponentC {
    mediator : Mediator
    constructor(){
        this.mediator =new Mediator()
    }
    check(){
        this.mediator.notify(this)
    }
    operation(){
        
    }
}

class ComponentD {
    mediator : Mediator
    constructor(){
        this.mediator =new Mediator()
        
    }
    check(){
        this.mediator.notify(this)
    }
    operation(){
        
    }
}


const aaa = new  ComponentA();

aaa.check()

const bbb = new  ComponentB();

aaa.check()



