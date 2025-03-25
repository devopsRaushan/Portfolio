using System.ComponentModel.DataAnnotations;

namespace backend.DTO;

public record ProfileDto(
    int Id,
    string Description,
    string SkillsHave,
    string SoftwaresUsed,
    string JobRole,
    string RoleResponsibility,
    string OfficeVenue,
    string MasteryLevel,
    decimal WorkingYearsExperience,
    DateOnly JoinedDate,
    string CompanyName,
    int ProjectsAccomplished,
    string SeniorGuidance,
    string ProblemSolvingFocus,
    string TestingDebuggingSkills,
    string ContinuousUpskilling,
    string EmployeeWelfareExperience,
    int WorkEnvironmentRating,
    string ProjectReference
);

public record CreateProfileDto(
    [Required][StringLength(200)] string Description,
    [Required][StringLength(200)] string SkillsHave,
    [Required][StringLength(200)] string SoftwaresUsed,
    [Required][StringLength(100)] string JobRole,
    [Required][StringLength(200)] string RoleResponsibility,
    [Required][StringLength(100)] string OfficeVenue,
    [Required][StringLength(20)] string MasteryLevel,
    [Range(0, 50)] decimal WorkingYearsExperience,
    DateOnly JoinedDate,
    [Required][StringLength(50)] string CompanyName,
    [Required] int ProjectsAccomplished,
    [Required][StringLength(200)] string SeniorGuidance,
    [Required][StringLength(200)] string ProblemSolvingFocus,
    [Required][StringLength(200)] string TestingDebuggingSkills,
    [Required][StringLength(200)] string ContinuousUpskilling,
    [Required][StringLength(200)] string EmployeeWelfareExperience,
    [Required] int WorkEnvironmentRating,
    [Url][StringLength(200)] string ProjectReference
);

public record UpdateProfileDto(
    [Required][StringLength(200)] string Description,
    [Required][StringLength(200)] string SkillsHave,
    [Required][StringLength(200)] string SoftwaresUsed,
    [Required][StringLength(100)] string JobRole,
    [Required][StringLength(200)] string RoleResponsibility,
    [Required][StringLength(100)] string OfficeVenue,
    [Required][StringLength(20)] string MasteryLevel,
    [Range(0, 50)] decimal WorkingYearsExperience,
    DateOnly JoinedDate,
    [Required][StringLength(50)] string CompanyName,
    [Required] int ProjectsAccomplished,
    [Required][StringLength(200)] string SeniorGuidance,
    [Required][StringLength(200)] string ProblemSolvingFocus,
    [Required][StringLength(200)] string TestingDebuggingSkills,
    [Required][StringLength(200)] string ContinuousUpskilling,
    [Required][StringLength(200)] string EmployeeWelfareExperience,
    [Required] int WorkEnvironmentRating,
    [Url][StringLength(200)] string ProjectReference
);