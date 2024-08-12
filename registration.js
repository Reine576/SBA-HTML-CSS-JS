document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit',function(event){
        event.preventDefault();

        // Get form values
        const fname= document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const bdate = document.getElementById('bdate').value;
        const address1 = document.getElementById('address1').value;
        const address2 = document.getElementById('address2').value;
        const city = document.getElementById('city').value;
        const contact = document.getElementById('contact').value;
        const skill = document.getElementById('skill').value;
        const sesstype = document.getElementById('sesstype').value;
        const numofsessions = document.getElementById('numofsessions').value;
        const summercamp = document.getElementById('summercamp').value;



        // Create table if it doesn't exist
        let table = document.getElementById('registrationTable');
        if(!table){
            table = document.createElement('table');
            table.setAttribute('id','registrationTable');
            table.classList.add('table', 'table-sm','table-bordered', 'mt-3');


            const headerRow = table.insertRow();
            headerRow.innerHTML = `      
            
            <th class="table-success">First Name</th>
            <th class="table-warning">Last Name</th>            
            <th class="table-success">Birth Date</th>
            <th class="table-warning">Address Line 1</th>
            <th class="table-success">Address Line 2</th>
            <th class="table-warning">City</th>
            <th class="table-success">Contact</th>
            <th class="table-warning">Skill Level</th>
            <th class="table-success">Session Type</th>
            <th class="table-warning">Number Of Sessions</th>
            <th class="table-success">Summer Camp</th>
            `
            ;   // Take Note of the almost invisible ` and `  before the 1st and last <th>   !!!!!

            document.body.appendChild(table);
        }
        // Insert a new row with form data
        const newRow = table.insertRow();
        newRow.innerHTML = `

        <td class="table-warning">${fname}</td>
        <td class="table-success">${lname}</td>
        <td class="table-warning">${bdate}</td>
        <td class="table-success">${address1}</td>
        <td class="table-warning">${address2}</td>
        <td class="table-success">${city}</td>
        <td class="table-warning">${contact}</td>
        <td class="table-success">${skill}</td>
        <td class="table-warning">${sesstype}</td>
        <td class="table-success">${numofsessions}</td>
        <td class="table-warning">${summercamp}</td>
        `
        ;

         // Clear form after submission
         form.requestFullscreen();

    });
});

/* Explanation:

    Event Listener on Form Submission: The submit event is captured to prevent the default form submission, and the form data is used to populate the table.
    Table Creation: A new table is created dynamically if it doesn't exist, with the form data inserted into a new row.
    Form Reset: After submission, the form is cleared for the next input.
*/