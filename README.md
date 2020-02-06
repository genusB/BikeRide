**Local installation**

**1.** Clone repository.

**2.** Create the database on your SQL Server Express LocalDB by using the dotnet cli to run the migrations from within the AuthServer.Infrastrucuture project folder.
<pre><code>AuthServer.Infrastructure> dotnet ef database update --context AppIdentityDbContext</code></pre>
<pre><code>AuthServer.Infrastructure> dotnet ef database update --context PersistedGrantDbContext</code></pre>

Or update it manualy from Package Manager Console
<pre><code>Update-Database</code></pre>

**3.** Install Angular CLI if necessary. `npm install -g @angular/cli`

**4.** Install Angular SPA dependencies.
<pre><code>Spa\oauth-client> npm install</code></pre>

**5.** Run the Angular CLI dev server to build and run the Angular app.
<pre><code>Spa\oauth-client> ng serve</code></pre> This must be running on the default http://localhost:4200

**6.** Build/Run the `AuthServer.sln` solution. This must be running on http://localhost:5000

**7.** Build/Run the `Resource.Api.sln` solution. This must be running on http://localhost:5050

**8.** Point a browser to `http://localhost:4200` to access the Angular client.

 

