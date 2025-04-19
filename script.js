const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    event.preventDefault(); 

    // Getting input values
    const name = document.getElementById("nameinput").value.trim();
    const age = document.getElementById("ageinput").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const course = document.getElementById("courseinput").value;
    const email = document.getElementById("emailinput").value.trim();

    // Validation
    if (!name || !age || !gender || !course || !email) {
        alert("Please fill all fields in the form");
        return;
    }

    // Getting table body
    const tbody = document.querySelector(".studenttable tbody");

    // Creating a new row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button class="deletebtn">Delete</button></td>
    `;

    // Adding delete functionality
    row.querySelector(".deletebtn").addEventListener("click", function () {
        row.remove();
    });

    // Append row to table
    tbody.appendChild(row);

    // Reset form
    document.getElementById("student-form").reset();
});
