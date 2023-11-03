
interface Entity {
    methode():void
    accept(visitor : Visitor):void
}



class Department implements Entity{
    accept(visitor: Visitor): void {
        visitor.visitDepartment();
    }
    methode(): void {
        throw new Error("Method not implemented.");
    }

}
class Company implements Entity{
    accept(visitor: Visitor): void {
        visitor.visitCompany();
    }
    methode(): void {
        throw new Error("Method not implemented.");
    }

}

class Employee implements Entity{
    accept(visitor: Visitor): void {
        visitor.visitEmployee();
        
    }
    methode(): void {
        throw new Error("Method not implemented.");
    }

}


interface Visitor {
    visitCompany():void
    visitEmployee():void
    visitDepartment():void
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
