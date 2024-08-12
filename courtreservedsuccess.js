document.getElementById('courtReservationForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form submission to server

    // Retrieve form data
    const formData = getFormData();

    // Validate form data before adding to the table
    if(validateFormData(formData)){
        addRowToTable(formData);
        clearForm();
    } else{
        alert("please fill in all fields before submitting.")
    }
});

// Function to get form data as an array
function getFormData(){
    return[
        document.getElementById('fname').value,
        document.getElementById('lname').value,
        document.getElementById('courtdate').value,
        document.getElementById('sesstype').value,
        document.getElementById('summercamp').value,
        document.getElementById('courtname').value
    ];
}

// Function to validate form data
function validateFormData(data){

    // Check if any of the form fields is empty
    for(let i = 0; i < data.length; i++){
        if(data[i] === ""){
            return false;
        }
    }
    return true;
}

// Function to add a row to the table
function addRowToTable(data){
    const table = document.getElementById('courtReservationTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Loop through the data array and create a cell for each item
    for(let i = 0; i < data.length; i++){
        const newCell = newRow.insertCell(i);
        newCell.textContent = data[i];
    }
}

    // Function to clear the form fields
    function clearForm(){
        document.getElementById('courtReservationForm').requestFullscreen();
    }

    /*Explanation:

    Event Listener:
        The form submission event is handled by attaching a listener to the submit event of the form.

    getFormData Function:
        This function collects all form data into an array called formData. This array is returned for further processing.

    validateFormData Function:
        The validateFormData function takes the formData array as input and checks if any of the fields are empty using a for loop. If any field is empty, the function returns false, otherwise, it returns true.

    addRowToTable Function:
        This function adds a new row to the table. It loops through the formData array and creates a new cell for each item in the array, setting the textContent of each cell to the corresponding value from the array.

    clearForm Function:
        The clearForm function resets the form fields after submission using form.reset().

    if Statement:
        An if statement is used to check if the form data is valid (i.e., all fields are filled). If valid, the data is added to the table; if not, an alert message is displayed.

This approach modularizes the code by using functions and collections (arrays), making it easier to maintain and extend.


    */