        var multiArray = [[], [], []];
        console.log("Empty Multidimensional Array:", multiArray);

        var matrix = [
            [0, 1, 2, 3],
            [1, 0, 1, 2],
            [2, 1, 0, 1]
        ];
        console.log("Matrix:");
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i]);
        }

        console.log("Counting 1 to 10:");
        for (var i = 1; i <= 10; i++) {
            console.log(i);
        }

        var tableNum = parseInt(prompt("Enter table number:"));
        var tableLength = parseInt(prompt("Enter table length:"));
        console.log("Multiplication Table of " + tableNum);
        for (var i = 1; i <= tableLength; i++) {
            console.log(tableNum + " x " + i + " = " + (tableNum * i));
        }

        var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
        console.log("Fruits:");
        for (var i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }

        console.log("Counting:");
        for (var i = 1; i <= 15; i++) {
            console.log(i);
        }

        console.log("Reverse Counting:");
        for (var i = 10; i >= 1; i--) {
            console.log(i);
        }

        console.log("Even:");
        for (var i = 0; i <= 20; i += 2) {
            console.log(i);
        }

        console.log("Odd:");
        for (var i = 1; i < 20; i += 2) {
            console.log(i);
        }

        console.log("Series (2k to 20k):");
        for (var i = 2; i <= 20; i += 2) {
            console.log(i + "k");
        }

        var items = ["cake", "apple pie", "cookie", "chips", "patties"];
        var searchItem = prompt("What do you want to search?");
        var found = false;

        for (var i = 0; i < items.length; i++) {
            if (items[i].toLowerCase() === searchItem.toLowerCase()) {
                console.log(searchItem + " is available at index " + i);
                found = true;
                break;
            }
        }
        if (!found) {
            console.log("We are sorry. " + searchItem + " is not available.");
        }

        var numbers = [24, 53, 78, 91, 12];
        var largest = numbers[0];
        for (var i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
        }
        console.log("The largest number is: " + largest);

        var smallest = numbers[0];
        for (var i = 1; i < numbers.length; i++) {
            if (numbers[i] < smallest) {
                smallest = numbers[i];
            }
        }
        console.log("The smallest number is: " + smallest);

        console.log("Multiples of 5 (1 to 100):");
        for (var i = 5; i <= 100; i += 5) {
            console.log(i);
        }