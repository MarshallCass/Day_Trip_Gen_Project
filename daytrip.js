"use strict"

// Random Day Trip Generator



function destinationSelection()
{
let destination = ['Harrisburg, PA','Gettysburg, PA','Baltimore, MD','State College, PA','New York, NY','Philadelphia, PA','Pittsburg, PA','Washington, DC'];

let randomDestination = destination[Math.floor(Math.random()*destination.length)];


let acceptedDestination = prompt('Destination is:' + ' '+ randomDestination + ' ' + 'Are you pleased with this selection? yes or no ');
    if(acceptedDestination === 'no' || acceptedDestination === 'n' || acceptedDestination === 'NO' || acceptedDestination === 'No' ){
        return destinationSelection();
    }
        else{

        console.log('Your destination will be:' + " " + randomDestination);
        return randomDestination;
        }

}
    destinationSelection();


function transportationSelection(){

let transportation =['Car','Bus','Train','Plane','Boat','Horse'];

let randomTransportation = transportation[Math.floor(Math.random()*transportation.length)];
 
    
let acceptedTransportation = prompt('Transportation is:' + ' '+ randomTransportation + ' ' + 'Are you pleased with this selection?');
    if(acceptedTransportation === 'no' || acceptedTransportation === 'n' || acceptedTransportation === 'NO' || acceptedTransportation === 'No'){
        return transportationSelection();
    }
        else{

        console.log('Your transportation will be:' + " " + randomTransportation);
        return randomTransportation;
       
        }
}
transportationSelection();



function diningSelection(){

let dining = ["Bob's Steakhouse", "Chili's","Wendy's", "Red Robin","Lobster Claw","24 Hour Diner","Burger Shack"];
let randomDining = dining[Math.floor(Math.random()*dining.length)];


let acceptedDining = prompt('Dinner will be at:' + ' '+ randomDining + ' ' + 'Are you pleased with this selection?');
    if(acceptedDining === 'no' || acceptedDining === 'n' || acceptedDining === 'NO' || acceptedDining === 'No'){
        return diningSelection();
    }
        else{
        
        console.log('Your dining will be:' + " " + randomDining);
        return randomDining;
        }   

}
diningSelection ();


function entertainmentSelection(){

let entertainment = ['Sightseeing','Mini Golf','Skiing','Concert','Museum','Baseball Game','Hockey Game','Leaf Peeping','Bird Watching'];

let randomEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)];

let acceptedEntertainment = prompt('Entertainment is is:' + ' '+ randomEntertainment + ' ' + 'Are you pleased with this selection?');
    if(acceptedEntertainment === 'no' || acceptedEntertainment === 'n' || acceptedEntertainment === 'NO' || acceptedEntertainment === 'No'){
        return entertainmentSelection();
    }
        else{
        
        console.log('Your entertainment will be:' + " " + randomEntertainment);
        return randomEntertainment;
        }

}
entertainmentSelection();

function selectionConfirm(){

let selectionConfirmation = prompt("Would you like to complete the selections that have been chosen or Start Over?")
    if(selectionConfirmation === 'no' || acceptedConfirmation === "n" || acceptedConfirmation === 'NO' || acceptedConfirmation === 'No'){
       console.log(location.reload());
       
    }
    else {
        console.log("Your trip selections have been confirmed and are complete");
    }
}
selectionConfirm();