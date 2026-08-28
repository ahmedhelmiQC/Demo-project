const Browsers = ["chrome" , "mozilla" , "safari"];

for (let index = 0 ; index < Browsers.length; index++)
{
    if(index == Browsers.length-1)
    {
        console.log(Browsers[Browsers.length-1]);
    }

}



for (const test of Browsers)
{
 let lastbrowser = test == Browsers[Browsers.length-1]? Browsers[Browsers.length-1] :null;
  console.log(lastbrowser);
}


