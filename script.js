function processForm(event) {
    event.preventDefault();
    let fnameInput = document.getElementById("firstname");
    let lnameInput = document.getElementById("lastname") // Get the input element
    let name = fnameInput.value + " " + lnameInput.value; // Get the data entered by the user
    console.log(name); // Print the data to the console to test

    let dateInput = document.getElementById("birthday");
    let birthday = dateInput.value;

    console.log(birthday)

}