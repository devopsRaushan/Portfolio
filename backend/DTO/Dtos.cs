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
    decimal WorkingExperience,
    DateOnly JoinedDate,
    string CompanyName,
    string Projects,
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
    [Range(0, 50)] decimal WorkingExperience,
    DateOnly JoinedDate,
    [Required][StringLength(30)] string CompanyName,
    [Required][StringLength(200)] string Projects,
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
    [Range(0, 50)] decimal WorkingExperience,
    DateOnly JoinedDate,
    [Required][StringLength(30)] string CompanyName,
    [Required][StringLength(200)] string Projects,
    [Url][StringLength(100)] string ProjectReference
);