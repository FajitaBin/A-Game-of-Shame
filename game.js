var user = prompt("You are watching a horror movie and suddenly the door opens up by it self, what would you do? RUN, SEE, COVER, DIE").toUpperCase();
switch(user){
    case 'RUN':
    var fear = prompt("Are You Scared? (YES or NO)").toUpperCase();
    var scary = prompt("Will you run (YES or NO)").toUpperCase();
    if(fear === 'YES' && scary === 'NO'){
        alert("You better die, in worst position");
    } else {
        alert("live in hell, you ugliest creature!");
    }
    break;
    
    case 'SEE':
    var watch = prompt("Will you try to see what's that? (YES or NO)").toUpperCase();
    var blink = prompt("Will you see is that real or not? (YES or NO)").toUpperCase();
    if(watch === 'YES' && blink === 'NO'){
        alert("I\'was there");
    } else {
        alert("Get lost you ugliest creature!");
    }
    break;
    
    case 'COVER':
    var harm = prompt("Will you cover yourself for not being harmed? (YES or NO)").toUpperCase();
    var kill = prompt("Will you try to kill that thing? (YES or NO)").toUpperCase();
    if(harm === 'YES' || kill === 'NO'){
        alert("You are not a MAN! bitch");
    } else {
        alert("Haha dream on!");
    }
    break;
    
    case 'DIE':
    var real = prompt("Would you like to die if that was real? (YES or NO)").toUpperCase();
    var fight = prompt("Will you fight for yourself? (YES or NO)").toUpperCase();
    if(real === 'YES' || fight === 'NO'){
        alert("Come is Hell my son!");
    } else {
        alert("You can't until you unwear your panties!");
    }
    break;
    
    default:
        alert("I'm afraid I don't understand!");
}
