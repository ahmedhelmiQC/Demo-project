class ToDoPage {

    public title = "Testology Course";
    private id = 1;
    readonly createBy = "Omar Zidan";
    static readonly createdBy = "Testology Team";   // static number

    // // Getter Method
    // showID():void {
    //     console.log(this.id);
    // }
    // constructor (title: string , id: number){
    //     this.title = title;
    //     this.id = id;
    // }
    addToTitle(newtitle:string): void {
        console.log(`welcome to ${newtitle}`);
    }
}


const todo = new ToDoPage();
// console.log(todo.showID());
console.log(todo.addToTitle("Testology Course"));
console.log(ToDoPage.createdBy);
