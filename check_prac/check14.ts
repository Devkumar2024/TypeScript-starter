// Optional Callback
// Create a function that accepts a number and an optional callback. If the callback exists, transform the number; otherwise return the original number.

function fetchData(url : string, onComplete ?:(data: string)=>void):void{
    console.log("fetched data from url", url);
    const result = `Data received...`

    if(onComplete){
        onComplete(result);
    }
}

fetchData(`www.google.com`);
fetchData(`www.google.com`, (result)=>{
    console.log(`Output status ${result}`);
});
