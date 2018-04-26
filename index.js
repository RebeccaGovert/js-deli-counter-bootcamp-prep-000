var katzDeli = [];
//lines 3 through 8 done on interview.
var number = 1;

function takeANumber (katzDeliLine) {
   katzDeliLine.push(number);
   number++;
}

//all lines below this and line 1 were my original assignment.


function takeANumber (katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length  + " in line.";
}


function nowServing (katzDeliLine) {
   if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine (katzDeliLine) {
  var myOutputLine = "The line is currently: ";
  if (katzDeliLine.length===0) {
    return "The line is currently empty."
  }
  for (var i=0; i < katzDeliLine.length; i++) {
    myOutputLine += (i+1) + ". " + katzDeliLine[i];
    if (i!==katzDeliLine.length-1) {
     myOutputLine += ", "; 
    }
    
  }
  return myOutputLine;
}

