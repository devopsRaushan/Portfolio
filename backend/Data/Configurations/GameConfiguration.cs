using backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Configurations;

public class GameConfiguration : IEntityTypeConfiguration<Game>
{
    // Add properties and methods here
    public void Configure(EntityTypeBuilder<Game> builder)
    {
        builder.Property(game => game.Price)
            .HasPrecision(5, 2);
    }
}
