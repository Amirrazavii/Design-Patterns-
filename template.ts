abstract class Book {
    abstract  generateName(name :string):string
}

class PaperBooK extends Book {
    public  generateName(name : string) {
        return  `The Book Name Is ${name} & Should Be Printed.`;
    }
}

class EBook extends Book {
    public  generateName(name : string) {
        return  `The Book Name Is ${name} & Should Be Printed.`;
    }
}
