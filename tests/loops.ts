const browsers = ["chrome" , "mozilla" , "safari"];

for (let index = 0 ; index < browsers.length; index++)
{
    console.log (index , browsers[2]);
}



for (const x of browsers)
{
    console.log (`Run smoke test in  ${browsers} `);
}