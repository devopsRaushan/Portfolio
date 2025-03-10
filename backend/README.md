## Dotnet Secret manager
### Initialize your secret manager by running this following command in your root directory

```sh
dotnet user-secrets init
```

### Setting the connection string to secret manager

```powershell
# To set the environment variable into your terminal
$sa_password = "Srk@629905"

# Copy the name of your connection using appsettings.json
dotnet user-secrets set "ConnectionStrings:GameStoreContext" "Server=localhost;Database=master;User Id=sa;Password=$sa_password;TrustServerCertificate=True"

# To check the secrets in your project
dotnet user-secrets list

# To remove the all secrets from your project
dotnet user-secrets clear