# Use official .NET SDK image for building the project
FROM mcr.microsoft.com/dotnet/sdk:latest AS build
WORKDIR /app

# Copy csproj and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy everything and build the project
COPY . ./
RUN dotnet publish -c Release -o /published

# Use ASP.NET runtime image for running the app
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /published ./

# Expose port 8080 for the app
EXPOSE 8080

# Run the application
ENTRYPOINT ["dotnet", "backend.dll"]