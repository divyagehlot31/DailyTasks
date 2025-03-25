function UTC_CurrentTime(city, utc_offset, format) {
    var b = new Date(); // Current Local Time
    var utc = b.getTime() + (b.getTimezoneOffset() * 60000); // utc time
    var nd = new Date(utc + (3600000 * utc_offset)); // Timezone implemetation

    // Date month and year
    let day = nd.getDate();
    let month = nd.getMonth()+1; 
    let year = nd.getFullYear();
    
    // Month 
    let monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];

    let formattedDate;
    if (format === "DD-MM-YYYY") {
        formattedDate = `${day}-${month}-${year}`;
    } else if (format === "MM-DD-YYYY") {
        formattedDate = `${month}-${day}-${year}`;
    } else if (format === "DD Month YYYY") {
        formattedDate = `${day} ${monthNames[month-1]} ${year}`;
    } else {
        formattedDate = nd.toLocaleDateString(); 
        // console.log("invalid format!!!");
    }

    return `The Local Time of city ${city} is ${formattedDate}, ${nd.toLocaleTimeString()}`;
}

// output
console.log(UTC_CurrentTime('India', 5.5, "DD-MM-YYYY")); 
console.log(UTC_CurrentTime('USA', -5, "MM-DD-YYYY")); 
console.log(UTC_CurrentTime('France', 1, "DD Month YYYY")); 
// console.log(UTC_CurrentTime('France', 1, "DD YYYY")); 

// 2025-03-24T13:00:43Z