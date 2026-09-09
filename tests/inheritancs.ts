class Parent {
    // sayHello():void{
    //     console.log("Hello World");
    // }

    // sayX():void{
    //     console.log("Automation Course");
    // }

    open():void{
        console.log("open the website")
    }
}

class Child extends Parent{

    open(): void {
        super.open();
        console.log("override the parent open mothed");
    }
}

// const ch = new Child();
// ch.sayHello;
// ch.sayX;

console.log(new Child().open());