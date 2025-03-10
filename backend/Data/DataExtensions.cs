using backend.Repositories;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public static class DataExtensions
{
    public static async Task InitializeDbAsync(this IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<GameStoreContext>();
        await dbContext.Database.MigrateAsync();
    }

    /// <summary>
    /// Dependency Injection
    /// Adding the implementation <see cref="InMemGamesRepository"/> of that class which gets injected by their dependency <see cref="IMemGamesRepository"/>, and register that implemented concrete class to the IServiceProvide which resolve and contruct the inject <see cref="InMemGamesRepository"/> the implementation as requested
    /// </summary>
    public static IServiceCollection AddRepositories(
        this IServiceCollection services,
        IConfiguration configuration
    )
    {
        // Getting the connection string from the appsettings.json file which is tranferred into secrets manager later
        var connectionString = configuration.GetConnectionString("GameStoreContext");
        services.AddSqlServer<GameStoreContext>(connectionString)
            .AddScoped<IMemGamesRepository, EntityFrameworkGamesRepository>(); // dependecy injection

        return services;
    }
}