
function UTC_CurrentTime(city,utc_offset){
    var b = new Date();
    var utc = b.getTime()+(b.getTimezoneOffset()*60000);
    var nd = new Date(utc+(360000*utc_offset));
    return "The Local Time of city " + city +" is "+nd.toLocaleString();
}
console.log(UTC_CurrentTime('argentina','-3'));



//Practice

// //Return the Time -- 2025-03-20T11:44:56.525Z
// var a = new Date();
// console.log(a);


// // Return the Time in milisecond -- 1742471373799
// var b = a.getTime();
// console.log(b);

// //Return the Time offset
// var c = a.getTimezoneOffset()*60000
// console.log(c);

// //convert in to string
// var d = c.toLocaleString();
// console.log(d);

//blog
// const utcDateString = "2023-06-29T16:45:06.387Z";
// const utcDateWithoutMillis = utcDateString.slice(0,-5) + "Z";
// const utcDate = new Date(utcDateWithoutMillis);
// // console.log(utcDate);

// console.log("UTC Date:", utcDate.toISOString());

// const offsetMinutes = utcDate.getTimezoneOffset();

// console.log("Time Zone Offset (minutes):", offsetMinutes);

// const localTime = new Date(utcDate.getTime()-offsetMinutes*60*1000);

// console.log("Local Time:", localTime.toISOString()); 

// 1,98,00000

// var date = new Date();
//  var offset = date.getTime()-19800000;
//  console.log(offset.toISOString);