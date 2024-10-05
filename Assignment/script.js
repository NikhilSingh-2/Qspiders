// script.js
$(document).ready(function(){
    // Function to load news from the server
    function loadNews() {
        $.ajax({
            url: 'news.json', // JSON file containing news data
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                $('#news-container').empty(); // Clear existing news
                response.forEach(function(news) {
                    var newsItem = `
                        <div class="news-item">
                            <h2>${news.title}</h2>
                            <p>${news.description}</p>
                        </div>
                    `;
                    $('#news-container').append(newsItem); // Append each news item
                });
            },
            error: function(xhr, status, error) {
                console.error(status, error); // Log any errors
            }
        });
    }

    // Load news when the page loads
    loadNews();
});
