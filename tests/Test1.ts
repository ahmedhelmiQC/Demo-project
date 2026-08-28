// let Count = 2;
// Count = 4;
// console.log(Count + 1);

const testName: string = "User Can Sign In"; // annotation
const timeOut = 30;   // inferred number
const shouldRetry = true;   // inferred boolean

let responseBody: unknown = '{status: "ok"}'; // inferred unknown

/*
if (typeof responseBody === "string") // typeof من نوع
 {    
    console.log(responseBody.toUpperCase()); 
}
*/

if(typeof responseBody === "boolean"){
    console.log(responseBody)
}else{
    console.log("it is not a boolean")
}