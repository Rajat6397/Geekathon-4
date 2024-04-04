// function search() {
//     // Get the search query entered by the user
//     var query = document.getElementById('searchInput').value;

//     // Define an array of search engine URLs
//     var searchEngines = [
//         "https://www.google.com/search?q=",
//         //"https://www.bing.com/search?q=",
//         // Add more search engine URLs as needed
//     ];

//     // Loop through each search engine URL and open a new tab with the search results
//     for (var i = 0; i < searchEngines.length; i++) {
//         var searchUrl = searchEngines[i] + encodeURIComponent(query);
//         window.open(searchUrl, '_blank'); // Open the search results in a new tab/window
//     }
// }

//  Wkipedia  //
function wikipedia() {
  //document.addEventListener('DOMContentLoaded', function () {
  // const form = document.querySelector('.search-box');
  const input = document.querySelector("#searchInput");
  const resultsContainer = document.querySelector(".results");
  // const resultsCounter = document.querySelector('header p');

  // form.addEventListener('submit', function (event) {
  //     event.preventDefault();
  const searchTerm = input.value;
  if (searchTerm) {
    searchWikipedia(searchTerm);
  }
  // });

  function searchWikipedia(searchTerm) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=${encodeURIComponent(
      searchTerm
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayResults(data.query.search);
      })
      .catch((error) => alert("Error : " + error));
  }

  function displayResults(results) {
    resultsContainer.innerHTML = "";
    // resultsCounter.textContent = `Results Count : ${results.length}`;
    results.forEach((result) => {
      const resultElement = document.createElement("div");
      // resultElement.className = 'result';
      resultElement.innerHTML = `
    
                <h3>${result.title}</h3>
                <p>${result.snippet}</p>
                <a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">Read More</a>
                `;
      resultsContainer.appendChild(resultElement);
    });
  }
  // });
}

//   Google //
// function search() {
//   const input = document.querySelector("#searchInput");
//   const resultsContainer = document.querySelector(".results");
//   const searchTerm = input.value;
//   if (searchTerm) {
//     searchGoogle(searchTerm);
//   }
//   // const input = searchInput.value;

//   function searchGoogle(searchTerm) {
//     let url = 'https://www.google.com/search?q=' +searchInput.value;
//     window.open(url);
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
    // window.location.href =
    //   "https://www.google.com/search?q=" +
    //   input +
    //   "&rlz=1C5CHFA_enNZ948NZ948&oq=" +
    //   input +
    //   "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8";
//   }
// }
let arr =[];
 function search() {
    const input = document.querySelector("#searchInput");
  const url = `https://google-search74.p.rapidapi.com/?query=${input.value}&limit=10&related_keywords=true`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b098ddd3bmshc2088717c58397cp1875a3jsndd8384e6ce4b',
		'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
	}
};
searchGoogle();
async function searchGoogle(){
    
    try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
    arr.push(result.results);
     console.log(arr.length);
    display();

} catch (error) {
	console.error(error);
}
}
 }

function display(){
    let googledata = document.querySelector(".results");
    googledata.innerHTML="";
     arr[0].forEach((ele, index)=>{
     console.log(ele);
        // for(let i=0; i<arr.length; i++)
        // {
        // if(i==1)
        // {
        // console.log(arr);
        // }
    
let div = document.createElement("div");
 div.innerHTML = `<h2 class="change">${ele.title}</h2> <p>${ele.description}</p> <a href=${ele.url}>${ele.url}</a>`;
 googledata.appendChild(div);
 
    // }
    

         });
     }


 

// Gemini //
