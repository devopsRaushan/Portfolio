using backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Configurations;

public class ProfileConfiguration : IEntityTypeConfiguration<Profile>
{
    // Add properties and methods here
    public void Configure(EntityTypeBuilder<Profile> builder)
    {
        builder.Property(game => game.WorkingYearsExperience)
            .HasPrecision(3, 1);
    }
}
