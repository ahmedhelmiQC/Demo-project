const formatResults = function (name : string , passed : boolean):string
{
    return `${name} : ${passed? "PASS" : "FAILED"}`;
}
console.log (formatResults("Test 1", true));
