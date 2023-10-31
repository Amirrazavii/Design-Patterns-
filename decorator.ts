interface IEmailBody {
   loadBody() : string
}

class Email implements IEmailBody{
    loadBody(): string {

        return "This is the main Email body"
    }
    
}

abstract class DecoratorEmail implements IEmailBody{

    emailbody :Email
    constructor(email : Email){
        this.emailbody =  email
    } 

     abstract loadBody(): string 
    
}

class NewYear extends DecoratorEmail{
  
    loadBody(): string {
        const body = this.emailbody.loadBody();
        return `${body} happy new year`
    } 
}


const emailBody =new Email();


const email= new NewYear(emailBody);
console.log(email.loadBody());



// email.loadBody();

