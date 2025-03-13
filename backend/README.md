## Adding migrations before interacting with database

### Convert your CSharp into T-SQL by generating migrations

```powershell
dotnet ef migrations add InitialCreate --output-dir Data\Migrations
```

### Now keep your database ready to interact with and then update your databse with yours migration
<strong>NOTE:</strong> In this project we're using 'MigrateAsync' method which is implemented in the 'InitializeDbAsync' method to create migrations and update database automatically when we make changes in our database 

```powershell
dotnet ef databse update
```



## Dotnet Secret manager
### Initialize your secret manager by running this following command in your root directory

```sh
dotnet user-secrets init
```

### Setting the connection string to secret manager

```powershell
# To set the environment variable into your terminal
$sa_password = "Srk@2508"

# Copy the name of your connection using appsettings.json
dotnet user-secrets set "ConnectionStrings:GameStoreContext" "Server=localhost;Database=backend;User Id=sa;Password=$sa_password;TrustServerCertificate=True"

# To check the secrets in your project
dotnet user-secrets list

# To remove the all secrets from your project
dotnet user-secrets clear