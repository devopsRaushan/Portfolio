using System.Reflection;
using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class ProfileContext : DbContext
{
    public ProfileContext(DbContextOptions<ProfileContext> options)
        : base(options)
    {
    }

    public DbSet<Profile> Profiles => Set<Profile>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}