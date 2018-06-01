var result=require("./lang.json");
var langs=result.map((data)=>data.name);
console.log("langs=",langs);

export const getLang=function()
{
  
    return {type:"GET_LANG",langs};
}

export const addLang=function(lang)
{
   
    return {type:"ADD_LANG",lang};
}


var rslt=require("./currency.json");
var currencies=rslt.map((data)=>data.currency);
console.log("curr",currencies);

export const getCurrency=function()
{
  
    return {type:"GET_CURRENCY",currencies};
}

export const addCurrency=function(currency)
{
   console.log("called");
    return {type:"ADD_CURRENCY",currency};
}