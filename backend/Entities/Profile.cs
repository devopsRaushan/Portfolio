using System.ComponentModel.DataAnnotations;

namespace backend.Entities;
public class Profile
{
    public int Id { get; set; }

    [Required]
    [StringLength(200)]
    public required string Description { get; set; }

    [Required]
    [StringLength(200)]
    public required string SkillsHave { get; set; }

    [Required]
    [StringLength(200)]
    public required string SoftwaresUsed { get; set; }

    [Required]
    [StringLength(100)]
    public required string JobRole { get; set; }

    [Required]
    [StringLength(200)]
    public required string RoleResponsibility { get; set; }

    [Required]
    [StringLength(100)]
    public required string OfficeVenue { get; set; }

    [Required]
    [StringLength(20)]
    public required string MasteryLevel { get; set; }

    [Range(0, 50)]
    public decimal WorkingYearsExperience { get; set; }
    public DateOnly JoinedDate { get; set; }

    [Required]
    [StringLength(50)]
    public required string CompanyName { get; set; }

    [Required]
    public required int ProjectsAccomplished { get; set; }

    [Required]
    [StringLength(200)]
    public required string SeniorGuidance {get; set; }
    
    [Required]
    [StringLength(200)]
    public required string ProblemSolvingFocus {get; set; }

    [Required]
    [StringLength(200)]
    public required string TestingDebuggingSkills {get; set; }

    [Required]
    [StringLength(200)]
    public required string ContinuousUpskilling {get; set; }

    [Required]
    [StringLength(200)]
    public required string EmployeeWelfareExperience {get; set; }

    [Required]
    public required int WorkEnvironmentRating {get; set; }    

    [Url]
    [StringLength(200)]
    public string ProjectReference { get; set; }
}