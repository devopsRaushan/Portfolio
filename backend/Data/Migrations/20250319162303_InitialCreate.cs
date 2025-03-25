using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Profiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    SkillsHave = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    SoftwaresUsed = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    JobRole = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    RoleResponsibility = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    OfficeVenue = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    MasteryLevel = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    WorkingYearsExperience = table.Column<decimal>(type: "decimal(3,1)", precision: 3, scale: 1, nullable: false),
                    JoinedDate = table.Column<DateOnly>(type: "date", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ProjectsAccomplished = table.Column<int>(type: "int", nullable: false),
                    SeniorGuidance = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    ProblemSolvingFocus = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    TestingDebuggingSkills = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    ContinuousUpskilling = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    EmployeeWelfareExperience = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    WorkEnvironmentRating = table.Column<int>(type: "int", nullable: false),
                    ProjectReference = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profiles", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Profiles");
        }
    }
}
