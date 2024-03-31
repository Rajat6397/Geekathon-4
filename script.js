
function search() {
    // Get the search query entered by the user
    var query = document.getElementById('searchInput').value;

    // Define an array of search engine URLs
    var searchEngines = [
        "https://www.google.com/search?q=",
        //"https://www.bing.com/search?q=",
        // Add more search engine URLs as needed
    ];

    // Loop through each search engine URL and open a new tab with the search results
    for (var i = 0; i < searchEngines.length; i++) {
        var searchUrl = searchEngines[i] + encodeURIComponent(query);
        window.open(searchUrl, '_blank'); // Open the search results in a new tab/window
    }
}
