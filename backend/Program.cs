using backend.Data;
using backend.Endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRepositories(builder.Configuration);
// Allowing frontend origin to connect with this server
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

var app = builder.Build();
app.UseCors("AllowFrontend");
// applying migrations on startup using DataExtension
await app.Services.InitializeDbAsync();

app.MapGamesEndpoints();

app.Run();