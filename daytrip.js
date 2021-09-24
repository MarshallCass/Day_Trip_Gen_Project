"use strict"

// Random Day Trip Generator

function runTripGenerator(){
    destinationSelection();
    transportationSelection();
    diningSelection();
    entertainmentSelection();
    selectionConfirm();
}
runTripGenerator();

function destinationSelection(){
let destination = ['Harrisburg, PA','Gettysburg, PA','Baltimore, MD','State College, PA','New York, NY','Philadelphia, PA','Pittsburg, PA','Washington, DC'];
let randomDestination = destination[Math.floor(Math.random()*destination.length)];

let acceptedDestination = prompt('Destination is:' + ' '+ randomDestination + ' ' + 'Are you pleased with this selection? yes or no ');
    if(acceptedDestination.toLowerCase() === 'yes' || acceptedDestination.toLowerCase() === 'y'){
        console.log('Your destination will be:' + " " + randomDestination);
        return randomDestination;        
    }else{
        return destinationSelection();
        }
}
 
function transportationSelection(){

let transportation =['Car','Bus','Train','Plane','Boat','Horse'];
let randomTransportation = transportation[Math.floor(Math.random()*transportation.length)];
   
let acceptedTransportation = prompt('Transportation is:' + ' '+ randomTransportation + ' ' + 'Are you pleased with this selection?');
    if(acceptedTransportation.toLowerCase() === 'yes' || acceptedTransportation.toLowerCase() === 'y'){
        console.log('Your transportation will be:' + " " + randomTransportation);
        return randomTransportation;
    }else{
        return transportationSelection(); 
        }
}

function diningSelection(){

let dining = ["Bob's Steakhouse", "Chili's","Wendy's", "Red Robin","Lobster Claw","24 Hour Diner","Burger Shack"];
let randomDining = dining[Math.floor(Math.random()*dining.length)];
let acceptedDining = prompt('Dinner will be at:' + ' '+ randomDining + ' ' + 'Are you pleased with this selection?');
    if(acceptedDining.toLowerCase() === 'yes' || acceptedDining.toLowerCase() === 'y'){
        console.log('Your dining will be:' + " " + randomDining);
        return randomDining;
    }else{
        return diningSelection();
        }   
}

function entertainmentSelection(){

let entertainment = ['Sightseeing','Mini Golf','Skiing','Concert','Museum','Baseball Game','Hockey Game','Leaf Peeping','Bird Watching'];
let randomEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)];
let acceptedEntertainment = prompt('Entertainment is is:' + ' '+ randomEntertainment + ' ' + 'Are you pleased with this selection?');
    if(acceptedEntertainment.toLowerCase() === 'yes' || acceptedEntertainment.toLowerCase() === 'y'){
        console.log('Your entertainment will be:' + " " + randomEntertainment);
        return randomEntertainment;
    }else{
        return entertainmentSelection();
        }
}

function selectionConfirm(){

let selectionConfirmation = prompt("Would you like to complete the selections that have been chosen?")
    if(selectionConfirmation.toLowerCase() === 'yes' || selectionConfirmation.toLowerCase === 'y'){
        console.log("Your trip selections have been confirmed and are complete");
    }else {
        console.clear();
        return runTripGenerator();
    }
}
