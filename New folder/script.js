        var now = new Date();
        console.log("Current Date and Time: " + now);

        var months = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];
        alert("Current Month: " + months[now.getMonth()]);

        var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        alert("Today is: " + days[now.getDay()]);

        if (now.getDay() === 0 || now.getDay() === 6) {
            alert("It's Fun Day!");
        }

        if (now.getDate() < 16) {
            console.log("First fifteen days of the month");
        } else {
            console.log("Last days of the month");
        }

        var msSince1970 = now.getTime();
        var minutesSince1970 = Math.floor(msSince1970 / (1000 * 60));
        console.log("Minutes since Jan 1, 1970: " + minutesSince1970);

        if (now.getHours() < 12) {
            alert("It's AM");
        } else {
            alert("It's PM");
        }

        var laterDate = new Date(2020, 11, 31);
        console.log("Later Date: " + laterDate);

        var ramadanStart = new Date("June 18, 2015");
        var today = new Date();
        var diffMs = today - ramadanStart;
        var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        alert(diffDays + " days have passed since 1st Ramadan, 2015");

        var refDate = new Date();
        var start2015 = new Date("January 1, 2015");
        var secondsElapsed = Math.floor((refDate - start2015) / 1000);
        console.log("Seconds elapsed since beginning of 2015: " + secondsElapsed);

        // 11. One Hour Ahead
        var currentDate = new Date();
        console.log("Current Date: " + currentDate);
        currentDate.setHours(currentDate.getHours() + 1);
        console.log("1 Hour Ahead: " + currentDate);

        // 12. Date 100 Years Back
        var date100YearsBack = new Date();
        date100YearsBack.setFullYear(date100YearsBack.getFullYear() - 100);
        alert("Date 100 years back: " + date100YearsBack);

        // 13. Age to Birth Year
        var age = parseInt(prompt("Enter your age:"));
        var birthYear = now.getFullYear() - age;
        console.log("Your birth year is: " + birthYear);

        // 14. K-Electric Bill
        var customerName = prompt("Enter your name:");
        var monthName = months[now.getMonth()];
        var units = parseFloat(prompt("Enter number of units:"));
        var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
        var lateSurcharge = 350;

        var netAmount = +(units * chargesPerUnit).toFixed(2);
        var grossAmount = +(netAmount + lateSurcharge).toFixed(2);

        console.log("K-Electric Bill");
        console.log("Customer Name: " + customerName);
        console.log("Month: " + monthName);
        console.log("Number of units: " + units);
        console.log("Charges per unit: " + chargesPerUnit);
        console.log("Net Amount Payable (within Due Date): " + netAmount);
        console.log("Late Payment Surcharge: " + lateSurcharge);
        console.log("Gross Amount Payable (after Due Date): " + grossAmount);