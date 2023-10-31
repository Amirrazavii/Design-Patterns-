interface ImageProxyInterface
{
     display() : string;
}


class RealImage implements ImageProxyInterface
{
    protected filename : string;

    constructor(filename :string)
    {
        this.filename = filename;
	    this.loadFromDisk();

    }

    protected loadFromDisk()
    {
        return `Loading ${this.filename}`;
        
    }

    public  display()
    {
        return `Display ${this.filename}`;
        
    }
}


class ProxyImage implements ImageProxyInterface
{
    protected image :ImageProxyInterface;
    protected filename :string;

    constructor(filename :string)
    {
        this.filename = filename;
    }

    public  display()
    {
        
        if (this.image ===undefined) {
            this.image = new RealImage(this.filename);
        }
        return this.image.display();
    }
}



function run(){
const filename = 'test.png';


    const image2 = new ProxyImage(filename); 

    // Call some other methods to attach image to related user. 
   console.log('image object attached to user object .');
    console.log(image2.display());
    //  image2.display();//loading  image and use system resource	
}
const filename = 'test.png';


const image2 = new ProxyImage(filename); 

console.time();
image2.display()
console.timeEnd();

console.time();
image2.display()
console.timeEnd();

console.time();
image2.display()
console.timeEnd();
console.time();
image2.display()
console.timeEnd();



