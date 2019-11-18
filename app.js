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
      searchByEyeColor(people)
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
      if(el.id === person.currentSpouse || el.id === person.parents[0] || el.id === person.parents[1] || el.parents[0] === person.parents[0] || el.parents[1] === person.parents[1] ){
        return true;
      }
      else{
          return false;
      } 
      })
    let bigOleFamily = "";
      for (let counter = 0; counter < everyoneInFamily.length; counter++) {
        if (person.parents.length == 0 ){
        
        }
        else if (person.parents.length > 0 ){ 
          bigOleFamily += person[counter].firstName + " " + person[counter].lastName + "\n";
          bigOleFamily -= person.currentSpouse
        }
      }
      if (bigOleFamily.length == 0 ) {
        bigOleFamily = "This person has no parents"
      }
      let currentSpouseOfPerson = people.filter(function(relation){
        if(relation.id === person.currentSpouse){
          return true;
          }
        else{
          return false;
          } 
      })
    alert( bigOleFamily + "\n" + currentSpouseOfPerson[0].firstName + currentSpouseOfPerson[0].lastName )
    break;
    case "descendants":
      findDecendents(people, person);
      displayPeople(people);
  // FIND GRANDF CHILD  
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
  
  return foundPerson[0];
}

function searchByEyeColor(people){
   let traitQuestion = promptFor("Do you want to search for eye color? 'yes' 'no' ", yesNo).toLowerCase(); 
    
    switch(traitQuestion){
      case 'yes':       
          alert("Okay");    
        break;
          case 'no':
            alert("Okay");
            searchByGender(people);
        break;
        default:
          alert("Invalid input try again.");
          searchByEyeColor(people);
      
     
        break;
    }

  let eyeTrait = promptFor("What eye color are you looking for?", chars);
  let everyOneWithTraitEye = people.filter(function(person){
    if(person.eyeColor === eyeTrait){
      return true;
    }
    else{

      return false;
    }
  })
    displayPeople(everyOneWithTraitEye)
    searchByGender(everyOneWithTraitEye); 
  
}

function searchByGender(people){
  let traitQuestion = promptFor("Do you want to search for Gender? 'yes' 'no' ", yesNo).toLowerCase()

      switch(traitQuestion){
        case 'yes':       
            alert("Okay");    
          break;
            case 'no':
              alert("Okay");
              searchByWeight(people);
          break;
          default:
            alert("Invalid input try again.");
            searchByGender(people);
        
       
          break;
      }

    let gender = promptFor("What gender are you looking for?", chars).toLowerCase();
    let everyOneWithGender = people.filter(function(person){
      if(person.gender === gender){
        return true;
      }
      else{

        return false;
      }
    })
    displayPeople(everyOneWithGender)
    searchByWeight(everyOneWithGender); 
}

function searchByWeight(people){
  let traitQuestion = promptFor("Do you want to search for Weight? 'yes' 'no' ", yesNo).toLowerCase(); 
      
      switch(traitQuestion){
        case 'yes':       
            alert("Okay");    
          break;
            case 'no':
              alert("Okay");
              searchByHeight(people);
          break;
          default:
            alert("Invalid input try again.");
            searchByWeight(people);
        
       
          break;
      }

    let weight = promptFor("What weight are you looking for?", chars);
    let everyOneWithSameWeight = people.filter(function(person){
      if(person.weight == weight){
        return true;
      }
      else{

        return false;
      }
    })
   displayPeople(everyOneWithSameWeight);
   searchByHeight(everyOneWithSameWeight);
}
function searchByHeight(people){
  let traitQuestion = promptFor("Do you want to search for Height? 'yes' 'no' ", yesNo).toLowerCase(); 
  
    switch(traitQuestion){
      case 'yes':       
        alert("Okay");    
      break;
      case 'no':
        alert("Okay");
        searchByOccupation(people);
      break;
      default:
        alert("Invalid input try again.");
        searchByHeight(people); 
      
   
      break;
    }

let height = promptFor("What height are you looking for?", chars);
let everyOneWithSameHeight = people.filter(function(person){
  if(person.height == height){
    return true;
  }
  else{
    return false;
    }
  })
  
  displayPeople(everyOneWithSameHeight);
  searchByOccupation(everyOneWithSameWeight);
}
function searchByOccupation(people){
  let traitQuestion = promptFor("Do you want to search for Occupation? 'yes' 'no' ", yesNo).toLowerCase(); 
  
    switch(traitQuestion){
    case 'yes':       
        alert("Okay");    
      break;
        case 'no':
          let traitQuestionInseption = promptFor("Do you want to search for a specific person from the list you made 'yes' 'no' (no will reset)  ", yesNo).toLowerCase(); 
  
            switch(traitQuestionInseption){
                case 'yes':       
                  alert("Okay");
                  searchByName(people)
                break;
                case 'no':
                  alert("Okay Restarting");
                  app();
                break;
                default:
                  alert("Invalid input try again.");  
                  searchByOccupation(people)       
                break;
            }
      break;

        default:
        alert("Invalid input try again.");
    }
  let occupation = promptFor("What Occupation are you looking for?", chars);
  let everyOneWithOccupation = people.filter(function(person){
    if(person.occupation == occupation){
      return true;
   } 
    else{
      return false;
    }
    });
  let peopleWithSameJob = "";
  for (let counter = 0; counter < everyOneWithOccupation.length; counter++) {
      peopleWithSameJob += everyOneWithOccupation[counter].firstName + " " + everyOneWithOccupation[counter].lastName + "\n";
    }
  alert(peopleWithSameJob);
  let traitQuestionNum2 = promptFor("Do you want to search for one of these people by name? 'yes' 'no' ('no' will restart) ", yesNo).toLowerCase(); 
  
    switch(traitQuestionNum2){
      case 'yes':       
        alert("Okay");
          
      break;
      case 'no':
          alert("Okay Restarting");
          app();
      break;
      default:
        alert("Invalid input try again taking you back to look for your occupation.");
        searchByOccupation(people);
    
   
      break;
    }
    


  searchByName(everyOneWithOccupation);
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
function promptFor(question, valid){``
  do{
     var response = prompt(question).trim();
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

function findDecendents(people, person){
  let allDecendents = people.filter(function(descendant){
        if(person.id === descendant.parents[0] || descendant.id === descendant.parents[1] ){
          return true;
          }
          else{
          return false;
          }
        });
  displayPeople(allDecendents)
  for (let counter = 0; counter < allDecendents.length; counter++){
     findDecendents(people , allDecendents[counter]);
  }

}
