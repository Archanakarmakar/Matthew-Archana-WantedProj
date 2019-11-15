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
        if(el.id === person.currentSpouse || el.id === person.parents[0] ||el.id === person.parents[1]){
          return true;
          }
          else{
          return false;
          } 
      })
      let bigOleFamily = "";
      for (let counter = 0; counter < everyoneInFamily.length; counter++) {
           bigOleFamily += everyoneInFamily[counter].firstName + " " + everyoneInFamily[counter].lastName + "\n";
        }
        alert(bigOleFamily);
<<<<<<< HEAD

=======
>>>>>>> 2547dd3669f90133623c83f203fc885f2c9aecc7
    break;
    case "descendants":
    let allDecendents = people.filter(function(el){
        if(person.id === el.parents[0] || el.id === person.parents[1] ){
          return true;
          }
          else{
          return false;
          }
        }) 
           let allOfPersonsDecendants = "";
      for (let counter = 0; counter < allDecendents.length; counter++) {
           allOfPersonsDecendants += allDecendents[counter].firstName + " " + allDecendents[counter].lastName + "\n";
        }
        alert(allOfPersonsDecendants);
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
    let sameEyedPeople = "";
      for (let counter = 0; counter < everyOneWithTraitEye.length; counter++) {
           sameEyedPeople += everyOneWithTraitEye[counter].firstName + " " + everyOneWithTraitEye[counter].lastName + "\n";
        }
    alert(sameEyedPeople);
    searchByGender(sameEyedPeople); 
  
}

function searchByGender(people){
  let traitQuestion = promptFor("Do you want to search for Gender? 'yes' 'no' ", yesNo).toLowerCase(); 
      
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
      let sameGenderPeople = "";
        for (let counter = 0; counter < everyOneWithGender.length; counter++) {
             sameGenderPeople += everyOneWithGender[counter].firstName + " " + everyOneWithGender[counter].lastName + "\n";
          }
      alert(sameGenderPeople);
      searchByWeight(sameGenderPeople); 
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
      let sameWeightPeople = "";
        for (let counter = 0; counter < everyOneWithSameWeight.length; counter++) {
             sameWeightPeople += everyOneWithSameWeight[counter].firstName + " " + everyOneWithSameWeight[counter].lastName + "\n";
          }
      alert(sameWeightPeople);
      searchByHeight(sameWeightPeople);
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
  let sameHeightPeople = "";
  for (let counter = 0; counter < everyOneWithSameHeight.length; counter++) {
       sameHeightPeople += everyOneWithSameHeight[counter].firstName + " " + everyOneWithSameHeight[counter].lastName + "\n";
    }
  alert(sameHeightPeople);
  searchByOccupation(sameHeightPeople);
}
function searchByOccupation(people){
  let traitQuestion = promptFor("Do you want to search for Occupation? 'yes' 'no' ", yesNo).toLowerCase(); 
  
    switch(traitQuestion){
    case 'yes':       
        alert("Okay");    
      break;
        case 'no':
          
      break;
      default:
        alert("Invalid input try again.");

  let occupation = promptFor("What Occupation are you looking for?", chars);
  let everyOneWithOccupation = people.filter(function(person){
    if(person.occupation == occupation){
      return true;
   }
    else{
      return false;
    }
    })
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
        alert("Invalid input try again.");
        
    
   
      break;
    }
    


  searchByName(peopleWithSameJob);
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