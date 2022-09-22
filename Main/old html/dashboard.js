

// api url
const api_url =
	"https://api.covid19api.com/live/country/Malaysia";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	// if (response) {
	// 	hideloader();
	// }
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }

// Function to define innerHTML for HTML table
function show(data) {

	var confirmed_cases = [];
  var date = [];
  var recovered = [];
  var active = [];
  var deaths = [];
  var date_without_year = [];
	// Loop to access all rows
  for (let i = 1; i < data.length; i++) {
    confirmed_cases.push(data[i].Confirmed - data[i-1].Confirmed);
    deaths.push(data[i].Deaths - data[i-1].Deaths);
    active.push(data[i].Active - data[i-1].Active);
    date.push(data[i].Date.substring(0,10));
    date_without_year.push(data[i].Date.substring(5,10));
  }
  console.log(deaths)
	for (let r of data) {
    recovered.push(r.Recovered);

	}

  // today's cases
  document.getElementById("confirmed").innerHTML = "Confirmed: " + confirmed_cases[confirmed_cases.length-1]
  document.getElementById("recovered").innerHTML = "Recovered: " + recovered[recovered.length-1]
  document.getElementById("active").innerHTML = "Active: " + active[active.length-1] 
  document.getElementById("death").innerHTML = "Death: " + deaths[deaths.length-1] 

  // label today's date
  document.getElementById("label_date").innerHTML ="Updated: " + date[date.length-1]

  new Chart("daily_confirm_case_chart", {
    type: "bar",
    data: {
      labels: date_without_year,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: confirmed_cases
      }]
    },
    options: {
        title: {
          display: true,
          text: 'Daily New Cases'
      },
      legend: {display: false},
      scales: {
        yAxes: [
          {ticks: {min: 0, max:45000},
           scaleLabel: {
             display: true,
             labelString: 'Number of Confirmed Cases',
           }
        }
        ],
        xAxes: [
          {
           scaleLabel: {
             display: true,
             labelString: 'Dates',
           }
        }
        ],
      }
    }
  });

  new Chart("daily_death_case_chart", {
    type: "bar",
    data: {
      labels: date_without_year,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: deaths
      }]
    },
    options: {
        title: {
          display: true,
          text: 'Daily Death Cases'
      },
      legend: {display: false},
      scales: {
        yAxes: [
          {ticks: {min: 0, max:700},
           scaleLabel: {
             display: true,
             labelString: 'Number of Death Cases',
           }
        }
        ],
        xAxes: [
          {
           scaleLabel: {
             display: true,
             labelString: 'Dates',
           }
        }
        ],
      }
    }
  });
}