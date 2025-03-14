using backend.DTO;

namespace backend.Entities;

public static class EntityExtensions
{
    public static ProfileDto AsDto(this Profile profile)
    {
        return new ProfileDto
        (
            profile.Id,
            profile.Description,
            profile.SkillsHave,
            profile.SoftwaresUsed,
            profile.JobRole,
            profile.RoleResponsibility,
            profile.OfficeVenue,
            profile.MasteryLevel,
            profile.WorkingExperience,
            profile.JoinedDate,
            profile.CompanyName,
            profile.Projects,
            profile.ProjectReference
        );
    }
}