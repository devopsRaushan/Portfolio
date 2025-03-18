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
    [Required][StringLength(100)] string Description,
    [Required][StringLength(200)] string SkillsHave,
    [Required][StringLength(100)] string SoftwaresUsed,
    [Required][StringLength(50)] string JobRole,
    [Required][StringLength(100)] string RoleResponsibility,
    [Required][StringLength(100)] string OfficeVenue,
    [Required][StringLength(20)] string MasteryLevel,
    [Range(0, 50)] decimal WorkingYearsExperience,
    DateOnly JoinedDate,
    [Required][StringLength(30)] string CompanyName,
    [Required] int ProjectsAccomplished,
    [Url][StringLength(50)] string SeniorGuidance,
    [Url][StringLength(50)] string ProblemSolvingFocus,
    [Url][StringLength(50)] string TestingDebuggingSkills,
    [Url][StringLength(50)] string ContinuousUpskilling,
    [Url][StringLength(50)] string EmployeeWelfareExperience,
    [Url] int WorkEnvironmentRating,
    [Url][StringLength(100)] string ProjectReference
);

public record UpdateProfileDto(
    [Required][StringLength(100)] string Description,
    [Required][StringLength(200)] string SkillsHave,
    [Required][StringLength(100)] string SoftwaresUsed,
    [Required][StringLength(50)] string JobRole,
    [Required][StringLength(100)] string RoleResponsibility,
    [Required][StringLength(100)] string OfficeVenue,
    [Required][StringLength(20)] string MasteryLevel,
    [Range(0, 50)] decimal WorkingYearsExperience,
    DateOnly JoinedDate,
    [Required][StringLength(30)] string CompanyName,
    [Required] int ProjectsAccomplished,
    [Url][StringLength(50)] string SeniorGuidance,
    [Url][StringLength(50)] string ProblemSolvingFocus,
    [Url][StringLength(50)] string TestingDebuggingSkills,
    [Url][StringLength(50)] string ContinuousUpskilling,
    [Url][StringLength(50)] string EmployeeWelfareExperience,
    [Url] int WorkEnvironmentRating,
    [Url][StringLength(100)] string ProjectReference
);