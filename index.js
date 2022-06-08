//if ..elseif...else statement
function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return "This one is on me!";
  }
  
  else if (someValue > 2500){
    return "No can do.";
  }
  else if (someValue > 2000){
    return "I will gladly take your thirty bucks.";
  }

  }
console.log(scuberGreetingForFeet(200));


//ternary operator
function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
console.log(ternaryCheckCity("Kenya"));


//switch statement
function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."    
  }
}
console.log(switchOnCharmFromTip("generous"));




