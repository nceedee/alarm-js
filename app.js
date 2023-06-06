
let projectQuestion = "Set an alarm that beeps when a particular time reach." //THIS THE PROJECT TOPIC QUESTION



console.log(projectQuestion)


function setAlarm(){
    let hour = new Date().getHours() % 12 || 12; //I FORMATTED THE TIME TO 12HRS ONLY
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds().toString().padStart(2 , "0")
    let amOrPm = new Date().getHours() < 12 ? "AM" : "PM"
    let alarmTime = (`${hour}:${minutes}:${seconds} ${amOrPm}`)
    
    console.log(alarmTime)
   
    if (hour === 7 && minutes === 42 && amOrPm === "PM"){ // <----- ALARM SET IS CONTROLLED FROM HERE
        
        console.group("Beep!! , Wake Up ") 
        /***/ 
           //I SET IT TO POP OUT WAKE UP , & IT'S TIME WHEN THE ALARM IS ACCURATELY REACHED.
        /***/
        
        if (hour && minutes){
            console.log(`It's Time ${hour}:${minutes}:${seconds} ${amOrPm}`);

        } //WHEN THE TIME IS EXACTLY EQUAL TO MINS AND HOUR ... THE ALARM MESSAGES ALARM.
    }

}



setAlarm()




















function setAlarm(){
    let hour = new Date().getHours() % 12 || 12; //I FORMATTED THE TIME TO 12HRS ONLY
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds().toString().padStart(2 , "0")
    let amOrPm = new Date().getHours < 12 ? "AM" : "PM"
    let alarmTime = (`${hour}:${minutes}:${seconds} ${amOrPm}`)
    
    console.log(alarmTime)
   
    if (hour === 7 && minutes === 42 && amOrPm === "PM"){ // <----- ALARM SET IS CONTROLLED FROM HERE
        
        console.group("Beep!! , Wake Up ") 
        /***/ 
           //I SET IT TO POP OUT WAKE UP , & IT'S TIME WHEN THE ALARM IS ACCURATELY REACHED.
        /***/
        
        if (hour && minutes){
            console.log(`It's Time ${hour}:${minutes}:${seconds} ${amOrPm}`);

        } //WHEN THE TIME IS EXACTLY EQUAL TO MINS AND HOUR ... THE ALARM MESSAGES ALARM.
    }

}



setAlarm()




