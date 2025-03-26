function timeLeft(eventTime) {
    //event time
    let event_time = new Date(eventTime);
    
    //local time
    let localtime = new Date();

    let a = event_time.toLocaleString("en-US", { timeZone: "UTC" });
    console.log(a);

    // time difference
    let timeDiff = event_time - localtime;
    
    if (timeDiff <= 0) {
        console.log("LIVE");
        return; 

    }

    // Convert milliseconds into days ,hours , minute ,seconds
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
}


setInterval(() => {
    timeLeft("2025-03-27T05:27:43Z"); //UTC time
}, 1000);

