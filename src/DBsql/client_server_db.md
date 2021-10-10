# Client vs Server Databases

Databases can be used in two different ways:

1. As a **c** **lient database** (local).
2. As a **s** **erver database** (server-side).



## Client-side Databases

Client-side databases are often used without the user noticing it. Their main purpose is to cache data locally. This is, for example, commonly used by mobile apps. Android apps usually use SQLight databases in the background. They are a fast and lightweight way for the app to store information, e.g. about the user profile, or content of views that the user accesses frequently.

## Server-side Databases

The server that delivers your HTML page that your browser requested, accesses the database and uses the data to populate the content of the HTML file before sending it back to you.

This is commonly done with a server software, e.g. in PHP, or with a Node.js server application. The web application typically hides the database, so that it is not accessible directly over the internet.

The server application accesses the database via the database’s API. This API is called a **DataBase Management System (DBMS)**.

