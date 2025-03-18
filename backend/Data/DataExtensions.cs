using backend.Repositories;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public static class DataExtensions
{
    public static async Task InitializeDbAsync(this IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ProfileContext>();
        await dbContext.Database.MigrateAsync();
    }

    public static IServiceCollection AddRepositories(
        this IServiceCollection services,
        IConfiguration configuration
    )
    {
        // Getting the connection string from the appsettings.json file which is tranferred into secrets manager later
        var connectionString = configuration.GetConnectionString("GameProfileContext");
        services.AddSqlServer<ProfileContext>(connectionString)
            .AddScoped<IProfilesRepository, ProfilesRepository>(); // dependecy injection

        return services;
    }
}