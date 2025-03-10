using backend.Entities;

namespace backend.Repositories;

public class InMemGamesRepository : IMemGamesRepository
{
    private readonly List<Game> games = new()
    {
        new Game()
        {
            Id = 1,
            Name = "Halo Infinite",
            Genre = "Shooter",
            Price = 59.99m,
            ReleaseDate = new DateTime(2021, 12, 8),
            ImageUri = "https://www.halo.com"
        },
        new Game()
        {
            Id = 2,
            Name = "Forza Horizon 5",
            Genre = "Racing",
            Price = 59.99m,
            ReleaseDate = new DateTime(2021, 11, 9),
            ImageUri = "https://www.forza.com"
        },
        new Game()
        {
            Id = 3,
            Name = "Fable",
            Genre = "RPG",
            Price = 59.99m,
            ReleaseDate = new DateTime(2023, 12, 8),
            ImageUri = "https://www.fable.com"
        }
    };

    public async Task<IEnumerable<Game>> GetAllAsync()
    {
        return await Task.FromResult(games);
    }

    public async Task<Game?> GetAsync(int id)
    {
        return await Task.FromResult(games.Find(game => game.Id == id));
    }

    public async Task CreateAsync(Game game)
    {
        game.Id = games.Max(game => game.Id) + 1;
        games.Add(game);

        await Task.CompletedTask;
    }

    public async Task UpdateAsync(Game UpdatedGame)
    {
        var index = games.FindIndex(game => game.Id == UpdatedGame.Id);
        games[index] = UpdatedGame;

        await Task.CompletedTask;
    }

    public async Task DeleteAsync(int id)
    {
        var index = games.FindIndex(game => game.Id == id);
        games.RemoveAt(index);

        await Task.CompletedTask;
    }
}