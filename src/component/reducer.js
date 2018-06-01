
function LangReducer(state=[],action)
{
 
  switch(action.type)
  { 
      
      case "GET_LANG":
      return [...state,...action.langs];

      case "ADD_LANG":
      return [...state,action.lang];

      case "GET_CURRENCY":
      return [...action.currencies];

      case "ADD_CURRENCY":
      console.log("currency");
      return [...state,action.currency];
  
      default:
      return state;

  }
  
}

export default LangReducer;