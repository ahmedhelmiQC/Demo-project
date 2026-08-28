const browsers :string[] = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];

const lastBrowser = browsers.length - 1;
// console.log(browsers.length)

function printBrowser(browserName : string):string
{
    return `${browserName}`;
}

console.log(printBrowser(browsers[1]));
