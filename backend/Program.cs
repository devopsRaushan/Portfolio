using backend.Data;
using backend.Endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRepositories(builder.Configuration);

var app = builder.Build();

// applying migrations on startup using DataExtension
await app.Services.InitializeDbAsync();

app.MapGamesEndpoints();

app.Run();