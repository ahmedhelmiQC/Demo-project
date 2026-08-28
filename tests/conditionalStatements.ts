const statusCode = 201;

if (statusCode >= 200 && statusCode < 300) {
    console.log("Request successful");
}else if (statusCode >= 400 && statusCode < 500) {
    console.log ("Client error");
} else if (statusCode > 500) {
    console.log("Server error");
}
else {
    console.log("Inappropriate Information");
}

let outcome = statusCode === 201? "Created" :"Not Created";
console.log(outcome);