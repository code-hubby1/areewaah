    const form = document .getElementById("studentform");




     const table  = document .getElementById("studenttable");




     const message =  document .getElementById("message");





      const registerbutton =  document .getElementById("registerbutton");
let studentId = 103;
form.addEventListener(
    "submit",
    function(event) {
        const name = document .getElementById("name").Value.trim();

        const email = document .getElementById("email").Value.trim();

     const course =   document .getElementById("course").Value.trim();

     if(
          name === "" ||
          email === "" ||
          course === ""

     ){

         message.innerText = 
         " please fill all fields.";

         message.style.color = "red";

         return;

     }
 
     const form = document.createElement("tr");
     row.innerHTML = `

     <td>${studentId}</td>

      <td>${name}</td>

       <td>${email}</td>

        <td>${course}</td>


        <td>
        <button class= "deletebutton">
        delete
        </td>
`;




table.appendChild(row);

 const deleteButton =
            row.querySelector(".deleteButton");
        deleteButton.addEventListener(
            "click",
            function() {

                row.remove();

            }
        );
        message.innerText =
            "Student registered successfully!";

        message.style.color = "green";

        registerButton.innerText =
            "Registered ✓";

        studentId++;

        form.reset();


    }
);

