interface terator {
    
    current():string;

    next():string;

    key():number;

    valid():boolean;

    rewind():void;
}


interface Aggregator {
    getIterator(): terator;
}

class AlphabeticalOrderIterator implements terator{
    private collection: WordsCollection;

    private position: number = 0;

    constructor(collection: WordsCollection) {
        this.collection = collection;
    }

    public rewind() {
        this.position 
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    }

    public valid(): boolean {
        return this.position < this.collection.getCount();
    }
}
class WordsCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): terator {
        return new AlphabeticalOrderIterator(this);
    }


}

const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}