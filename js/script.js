function myFunction(){
    var body = document.body;
    body.dataset.bsTheme = body.dataset.bsTheme == 'light' ? 'dark' : 'light'
}

// Sample league data
var leagues = [
  { name: "League 1", country: "France", founded: "2000", teams: 10 },
  { name: "Premier League", country: "England", founded: "1995", teams: 12 },
  { name: "La Liga", country: "Spain", founded: "1987", teams: 8 },
  // Add more league data here...
];

// Function to populate table rows
function populateTable() {
  var tableBody = document.getElementById("leagueTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  // Add rows dynamically based on the league data
  leagues.forEach(function(league) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + league.name + "</td>" +
                    "<td>" + league.country + "</td>" +
                    "<td>" + league.founded + "</td>" +
                    "<td>" + league.teams + "</td>";

    tableBody.appendChild(row);
  });
}

// Call the function to populate the table
populateTable();

var button = document.getElementById("alertButton");

// Add click event listener to the button
button.addEventListener("click", function () {
  // Get the alertDiv element
  var alertDiv = document.getElementById("alertDiv");

  // Create the success alert
  var alertElement = document.createElement("div");
  alertElement.className = "alert alert-success";
  alertElement.textContent = "This is a success alert.";

  // Clear any existing alerts in the alertDiv
  alertDiv.innerHTML = "";

  // Append the alert to the alertDiv
  alertDiv.appendChild(alertElement);
});
