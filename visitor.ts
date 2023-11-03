
interface Entity {
    methode():void
    accept(visitor : Visitor):void
}



class Department implements Entity{
    accept(visitor: Visitor): void {
        visitor.visitDepartment(this);
    }
    methode(): void {
        throw new Error("Method not implemented.");
    }

}
class Company implements Entity{
    accept(visitor: Visitor): void {
        visitor.visitCompany(this);
    }
    methode(): void {
        throw new Error("Method not implemented.");
    }

}

class Employee implements Entity{
    accept(visitor: Visitor): void {
        visitor.visitEmployee(this);
        
    }
    methode(): void {
        throw new Error("Method not implemented.");
    }

}


interface Visitor {
    visitCompany(visitCompany : Company):void
    visitEmployee(visitCompany : Employee):void
    visitDepartment(visitCompany : Department):void
}
class SalaryReportVisitor implements Visitor{
    visitCompany(): void {
        console.log("visitCompany");
        
    }
    visitEmployee(): void {
        console.log("visitEmployee");
    }
    visitDepartment(): void {
        console.log("visitDepartment");
    }
    
}

const bbbb = new Employee();
const jjjj = new SalaryReportVisitor();


bbbb.accept(jjjj);
