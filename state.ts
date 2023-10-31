interface ElevatorStateInterface
{
     open() :Open | Move;
     close() : Move | Close;
     move() : Stop | Move;
     stop() : Stop | Close;
}


class Close implements ElevatorStateInterface
{
    public  close()
    {
        console.log("Already Closed")
        return new Close();
    }

    public  open()
    {
        return new Open();
    }

    public  move()
    {
        return new Move();
    }

    public  stop()
    {
        console.log("cannot change position from close to stop");
        return new Close();
    }
}

class Move implements ElevatorStateInterface
{
    public  move()
    {
        console.log("Already Moving")
        return new Move();
    }

    public  stop()
    {
        return new Stop();
    }

    public  close()
    {
        console.log("cannot change move to close")
        return new Move();

    }

    public  open()
    {
        console.log("cannot position from stove to open")
        return new Move();

    }
}


class Open implements ElevatorStateInterface
{
    public  open()
    {
        console.log("Already Opened")
        return new Open();
    }

    public  close()
    {
        return new Close();
    }

    public  move()
    {
        console.log("cannot position from open to move");
        return new Open();

    }

    public  stop()
    {
        console.log("cannot change position from stop to stop");
        return new Open();
    }
}



class Stop implements ElevatorStateInterface
{
    public  open()
    {
        return new Open();
    }

    public  close()
    {
        return new Close();
    }

    public  move()
    {
        return new Move();
    }

    public  stop()
    {
        console.log("Already Stopped");
        return new Stop();
    }
}


class Elevator
{
    private state : ElevatorStateInterface;
    constructor()
    {
        this.setState(new Stop());
    }
    
    private  setState( state: ElevatorStateInterface)
    {
        this.state = state;
         console.log("set state to : ");
    }


    public  open()
    {
        this.setState(this.state.open());
    }

    public  close()
    {
        this.setState(this.state.close());
    }

    public  move()
    {
        this.setState(this.state.move());
    }

    public  stop()
    {
        this.setState(this.state.stop());
    }
}




     function elevator()
    {
        // The elevator is initially stop
        const elevator = new Elevator();

        elevator.open();

        elevator.move();

        elevator.close();

        elevator.stop();
    }

    elevator()





