using backend.Entities;

namespace backend.Repositories;

public interface IMemGamesRepository
{
    Task CreateAsync(Game game);
    Task DeleteAsync(int id);
    Task<Game?> GetAsync(int id);
    Task<IEnumerable<Game>> GetAllAsync();
    Task UpdateAsync(Game UpdatedGame);
}
