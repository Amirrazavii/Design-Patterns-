class HomeStatus
{
    locks = true;
    lightsOff = false;
    alarmOff = true;
}

abstract class HomeChecker
{
    protected successor :HomeChecker;

    abstract check( home : HomeStatus) :any ;

    public  succeedWith( successor :HomeChecker)
    {
        this.successor = successor;
    }

    public  next( home : HomeStatus)
    {
        if (this.successor) {
            this.successor.check(home);
        }
    }
}


class Locks extends HomeChecker
{
     check( home :HomeStatus)
    {
        if (!home.locks) {
            throw new DOMException('not locked ABORT!');
        }
        this.next(home);
    }
}
class Lights extends HomeChecker
{
     check( home :HomeStatus)
    {
        if (!home.locks) {
            throw new DOMException('not Light ABORT!');
        }
        this.next(home);
    }
}
class Alarm extends HomeChecker
{
     check( home :HomeStatus)
    {
        if (!home.locks) {
            throw new DOMException('not Alarm ABORT!');
        }
        this.next(home);
    }
}


const locks = new Locks();
const lights = new Lights();
const alarm = new Alarm();
// console.log(locks.succeedWith(lights));


locks.succeedWith(lights);
lights.succeedWith(alarm);

locks.check(new HomeStatus);