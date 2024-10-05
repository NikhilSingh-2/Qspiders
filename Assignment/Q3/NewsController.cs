using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using System.Configuration;

namespace NewsAPI.Controllers
{
    public class NewsController : ApiController
    {
        // GET: api/news
        public IHttpActionResult GetNews()
        {
            List<string> newsData = new List<string>();

            // Connection string
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            // SQL query to fetch news from the database
            string queryString = "SELECT news_dtl FROM news";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(queryString, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                // Read news data from the database
                while (reader.Read())
                {
                    newsData.Add(reader["news_dtl"].ToString());
                }

                // Close the data reader and connection
                reader.Close();
                connection.Close();
            }

            return Ok(newsData);
        }
    }
}
