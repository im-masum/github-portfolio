function markAttendance() {
  let nameInput = document.getElementById("studentName");
  let name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter a student name.");
    return;
  }

  let tableBody = document.getElementById("attendanceList");
  let newRow = document.createElement("tr");

  let nameCell = document.createElement("td");
  nameCell.textContent = name;

  let dateCell = document.createElement("td");
  let today = new Date();
  dateCell.textContent = today.toLocaleDateString();

  let statusCell = document.createElement("td");
  statusCell.textContent = "Present";
  statusCell.style.color = "green";

  newRow.appendChild(nameCell);
  newRow.appendChild(dateCell);
  newRow.appendChild(statusCell);

  tableBody.appendChild(newRow);

  nameInput.value = ""; // Clear input field
}
