
getData()

function getData()
{
    api.loadBase();
}









































// var api = (function (){

//     let select1 = document.getElementById("currency1");
//     let select2 = document.getElementById("currency2");
//     let toBuyFor = document.getElementById("toBuyFor");
//     let received = document.getElementById("received");

//     select1.addEventListener("change", update);
//     select2.addEventListener("change", update);

//     const storage = window.localStorage;

//     loadBase();

//     async function loadBase(baseCurr, receivedCurr)
//     {
//         if(baseCurr == null)
//         {
//             let url = "https://api.exchangeratesapi.io/latest?base=SEK";
//             let result = await fetchData(url);

//             if(storage.getItem("getCurrencies" === null))
//             {
//                 window.setInterval(function(){

//                     storage.setItem("getCurrencies", result);
        
//                 }, 3600000)
//             }
//             else
//             {
//                 let currencies = JSON.parse(storage.getItem("getCurrencies"));
        
//                 for(let rates in currencies.rates)
//                 {
//                     let newOption = document.createElement("option");
//                     let text = rates;
//                     newOption.text = text;
//                     select1.add(newOption);
//                 }
                
//                 for(let rates in currencies.rates)
//                 {
//                     let newOption = document.createElement("option");
//                     let text = rates;
//                     newOption.text = text;
//                     select2.add(newOption);
//                 }
//             }
//         }
//         else
//         {
//             toBuyFor.addEventListener("change", calculate);
//             let url = "https://api.exchangeratesapi.io/latest?base="+baseCurr;
//             let result = await fetchData(url);
//             let currencies = JSON.parse(result);

//             received.value = currencies.rates[receivedCurr];

//             function calculate()
//             {
//                 received.value = toBuyFor.value * currencies.rates[receivedCurr];
//             }
//         }
//     }

//     function update()
//     {
//         let baseCurr = select1.value;
//         let receivedCurr = select2.value;
//         console.log(baseCurr);
//         loadBase(baseCurr, receivedCurr);
//     }

//     async function fetchData(url)
//     {
//         let promise = await fetch(url);
//         let data = await promise.json();

//         return JSON.stringify(data);
//     }
// })();






// // Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
// // GET https://api.exchangeratesapi.io/latest?base=USD HTTP/1.1

// // Request specific exchange rates by setting the symbols parameter.
// // GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP HTTP/1.1

// // Get the latest foreign exchange reference rates.
// // GET https://api.exchangeratesapi.io/latest HTTP/1.1