//Get user input
//Controller Function
function getValue() {

    //get user string from the page
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    
    //check for palindrome
    let returnObj = checkForPalindrome(userString);
    
    //display the message to the screen
    displayMessage(returnObj);
}

//Reverse text in array
//Logic Function
function checkForPalindrome(userString) {

    //convert to lowercase
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    //let revString = userString.split("").reverse().join("");
    let revString = [];
    let returnObj = {};

    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    if ( revString == userString) {
        returnObj.msg = "Well Done! You've entered a Palindrome!";
    }else {
        returnObj.msg = "Sorry! You did not enter a Palindrome!";
    }

    returnObj.reversed = revString;

    return returnObj;
}

//Display Message on page
function displayMessage(returnObj) {

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}