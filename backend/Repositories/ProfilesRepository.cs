using backend.Data;
using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories;

public class ProfilesRepository : IProfilesRepository
{
    private readonly ProfileContext dbContext;

    public ProfilesRepository(ProfileContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task<IEnumerable<Profile>> GetAllAsync()
    {
        return await dbContext.Profiles.AsNoTracking().ToListAsync(); 
    }

    public async Task<Profile?> GetAsync(int id)
    {
        return await dbContext.Profiles.FindAsync(id);
    }

    public async Task CreateAsync(Profile profile)
    {
        dbContext.Profiles.Add(profile);
        await dbContext.SaveChangesAsync();
    }

    public async Task UpdateAsync(Profile UpdateProfile)
    {
        dbContext.Update(UpdateProfile);
        await dbContext.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        await dbContext.Profiles.Where(profile => profile.Id == id)
            .ExecuteDeleteAsync();
    }

}