// const user={
//     email: "test@test.com",
//     password:"test123456",
//     gender: "female",
// }

// console.log(user)
// console.log(user.email)

// user.email = "google@gmail.com";
// console.log(user.email)

type credentials={
    email: string;
    password: string;
    gender : string;
}

const admin : credentials = {
    email : "test@test.com",
    password : "test1234",
    gender: "maile"
}

function defineuser (user: credentials):string {
    return `${user.email} . ${user.password}`;
}
console.log(defineuser(admin))