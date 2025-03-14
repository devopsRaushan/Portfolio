using backend.DTO;
using backend.Entities;
using backend.Repositories;

namespace backend.Endpoints;

public static class ProfileEndpoints
{
    const string GetProfileEndpointName = "GetProfile";

    public static RouteGroupBuilder MapProfileEndpoints(this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/profiles")
        .WithParameterValidation(); // using MinimalApis.Extensions

        group.MapGet("/", async (IProfilesRepository repository) =>
            (await repository.GetAllAsync()).Select(profile => profile.AsDto()));

        group.MapGet("/{id}", async (IProfilesRepository repository, int id) =>
        {
            Profile? profile = await repository.GetAsync(id);
            return profile is not null ? Results.Ok(profile.AsDto()) : Results.NotFound();
        })
        .WithName(GetProfileEndpointName);

        group.MapPost("/", async (IProfilesRepository repository, CreateProfileDto profileDto) =>
        {
            Profile profile = new()
            {
                Description = profileDto.Description,
                SkillsHave = profileDto.SkillsHave,
                SoftwaresUsed = profileDto.SoftwaresUsed,
                JobRole = profileDto.JobRole,
                RoleResponsibility = profileDto.RoleResponsibility,
                OfficeVenue = profileDto.OfficeVenue,
                MasteryLevel = profileDto.MasteryLevel,
                WorkingExperience = profileDto.WorkingExperience,
                JoinedDate = profileDto.JoinedDate,
                CompanyName = profileDto.CompanyName,
                Projects = profileDto.Projects,
                ProjectReference = profileDto.ProjectReference
            };
            await repository.CreateAsync(profile);
            return Results.CreatedAtRoute(GetProfileEndpointName, new { id = profile.Id }, profile);
        });

        group.MapPut("/{id}", async (IProfilesRepository repository, int id, UpdateProfileDto updateProfileDto) =>
        {
            Profile? existingProfile = await repository.GetAsync(id);

            if (existingProfile is null)
            {
                return Results.NotFound();
            }

            existingProfile.Description = updateProfileDto.Description;
            existingProfile.SkillsHave = updateProfileDto.SkillsHave;
            existingProfile.SoftwaresUsed = updateProfileDto.SoftwaresUsed;
            existingProfile.JobRole = updateProfileDto.JobRole;
            existingProfile.RoleResponsibility = updateProfileDto.RoleResponsibility;
            existingProfile.OfficeVenue = updateProfileDto.OfficeVenue;
            existingProfile.MasteryLevel = updateProfileDto.MasteryLevel;
            existingProfile.WorkingExperience = updateProfileDto.WorkingExperience;
            existingProfile.JoinedDate = updateProfileDto.JoinedDate;
            existingProfile.CompanyName = updateProfileDto.CompanyName;
            existingProfile.Projects = updateProfileDto.Projects;
            existingProfile.ProjectReference = updateProfileDto.ProjectReference;


            await repository.UpdateAsync(existingProfile);
            return Results.NoContent();
        });

        group.MapDelete("/{id}", async (IProfilesRepository repository, int id) =>
        {
            Profile? profile = await repository.GetAsync(id);
            if (profile is null)
            {
                return Results.NotFound();
            }

            await repository.DeleteAsync(id);

            return Results.NoContent();
        });

        return group;
    }
}
