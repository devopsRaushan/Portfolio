using backend.Entities;

namespace backend.Repositories;

public interface IProfilesRepository
{
    Task CreateAsync(Profile game);
    Task DeleteAsync(int id);
    Task<Profile?> GetAsync(int id);
    Task<IEnumerable<Profile>> GetAllAsync();
    Task UpdateAsync(Profile UpdatedGame);
}
