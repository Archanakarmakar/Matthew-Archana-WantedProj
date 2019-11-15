"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits

      break;
      default:
      alert("Invalid input try again.");
      app();
     // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
      let everyoneInFamily = people.filter(function(el){
        if(el.id === person.currentSpouse || el.id === person.parents[0] ||el.id === person.parents[1]){
          return true
          }
          else{
          return false;
          } 
      })
      let bigOleFamily = "";
      for (let counter = 0; counter < everyoneInFamily.length; counter++) {
           bigOleFamily += everyoneInFamily[counter].firstName + " " + everyoneInFamily[counter].lastName + "\n"
        }
        alert(bigOleFamily)
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?(Make sure to Capitalize)", chars);
  let lastName = promptFor("What is the person's last name?(Make sure to Capitalize)", chars);
  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      
      return true;
    }
    else{

      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson[0];
}

function traitBuilder(trait){
  let traitArray = [];
  let fistTrait = promptFor("What trait do you want to look for? 'Gender' or 'EyeColor' ", chars);
  traitArray += traitArray.push(fistTrait);
  let traitQuestion = promptFor("Do you want to search for another trait? 'yes' 'no' ", chars);
  traitQuestion = yesNo(traitQuestion);  
    switch(searchType){
      case 'yes':
          if (traitArray.length < 5 ) {
            return traitBuilder(traitArray);  
          }   
          else{
            alert("You already have all the taits you can search");
            // send to trait search
          }
        break;
          case 'no':
            alert("Okay");
            // send to trait search
        break;
        default:
          alert("Invalid input try again.");
          traitBuilder();
      
     
        break;

      }
}
function traitChecker(arryOfTraits){

}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Id: " + person.id + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupatoin + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse: " + person.currentSpouse + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  let response = prompt(question).trim();
  do{
    

  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}