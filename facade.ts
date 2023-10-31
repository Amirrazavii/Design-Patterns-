interface IShareInterface
{
     setMessage(message:string):void;
     share():string
}

class Twitter implements IShareInterface
{
    public message:string;

    public setMessage(message: string)
    {
        this.message = message;
    }

    public share()
    {
        return  `Sharing by ${this.message} on Twitter.<br/>`;
    }
}


class Instagram implements IShareInterface
{
    public message:string;

    public setMessage(message: string)
    {
        this.message = message;
    }

    public share()
    {
        return  `Sharing by ${this.message} on Instagram.<br/>`;
    }
}


class FaceBook implements IShareInterface
{
    public message:string;

    public setMessage(message: string)
    {
        this.message = message;
    }

    public share()
    {
        return  "Sharing by this.message on FaceBook.<br/>";
    }
}


class SocialMedia{

    public twitter :Twitter
    public instagram : Instagram
    public facebook : FaceBook
    constructor(twitter : Twitter, instagram: Instagram , facebook: FaceBook){
        this.twitter =twitter
        this.instagram =instagram
        this.facebook = facebook
    }

setmessageAll(message : string){
    this.facebook.setMessage(message);
    this.instagram.setMessage(message);
    this.twitter.setMessage(message);
   

}
    shareAll(){
        this.facebook.share();
        this.instagram.share();
        this.twitter.share();
      
        

    }

}

const k = new SocialMedia(new Twitter(),new Instagram(), new FaceBook())


k.setmessageAll("hello");
k.shareAll();
// console.log(k.setmessageAll("hello"));
// console.log(k.shareAll());
