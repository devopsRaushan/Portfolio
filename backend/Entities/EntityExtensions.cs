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
            profile.WorkingYearsExperience,
            profile.JoinedDate,
            profile.CompanyName,
            profile.ProjectsAccomplished,
            profile.SeniorGuidance,
            profile.ProblemSolvingFocus,
            profile.TestingDebuggingSkills,
            profile.ContinuousUpskilling,
            profile.EmployeeWelfareExperience,
            profile.WorkEnvironmentRating,
            profile.ProjectReference
        );
    }
}