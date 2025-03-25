import React, { useState } from "react";
import postData from '../../utils/postData';

const PostProfile = () =>
{
  const backendApi = import.meta.env.VITE_BACKEND_API_URL;

  const backendData = {
    Description: "",
    SkillsHave: "",
    SoftwaresUsed: "",
    JobRole: "",
    RoleResponsibility: "",
    OfficeVenue: "",
    MasteryLevel: "",
    WorkingYearsExperience: "",
    JoinedDate: "",
    CompanyName: "",
    ProjectsAccomplished: "",
    SeniorGuidance: "",
    ProblemSolvingFocus: "",
    TestingDebuggingSkills: "",
    ContinuousUpskilling: "",
    EmployeeWelfareExperience: "",
    WorkEnvironmentRating: "",
    projectReference: ""
  };
  const [formData, setFormData] = useState(backendData);
  
  // Handling input change
  const handleChange = (e) =>
  {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission
  const handleSubmit = async (e) =>
  {
    e.preventDefault(); // Prevents page reload
    await postData(`${backendApi}`, formData, backendData, setFormData);
  };
  
  const renderInput = (name, type, placeholder) => (
    <input
      name={name}
      type={type}
      value={formData[name]}
      onChange={handleChange}
      placeholder={placeholder}
      required
    />
  );

  return (
    <div>
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        {renderInput("Description", "text", "Enter Description")}
        {renderInput("SkillsHave", "text", "Enter Skills Have")}
        {renderInput("SoftwaresUsed", "text", "Enter Softwares Used")}
        {renderInput("JobRole", "text", "Enter Job Role")}
        {renderInput("RoleResponsibility", "text", "Enter Role Responsibility")}
        {renderInput("OfficeVenue", "text", "Enter Office Venue")}
        {renderInput("MasteryLevel", "text", "Enter Mastery Level")}
        {renderInput("WorkingYearsExperience", "decimal", "Enter Working Years Experience")}
        {renderInput("JoinedDate", "date", "Enter Joined Date")}
        {renderInput("CompanyName", "text", "Enter Company Name")}
        {renderInput("ProjectsAccomplished", "text", "Enter Projects")}
        {renderInput("SeniorGuidance", "text", "Enter SeniorGuidance")}
        {renderInput("ProblemSolvingFocus", "text", "Enter ProblemSolvingFocus")}
        {renderInput("TestingDebuggingSkills", "text", "Enter TestingDebuggingSkills")}
        {renderInput("ContinuousUpskilling", "text", "Enter ContinuousUpskilling")}
        {renderInput("EmployeeWelfareExperience", "text", "Enter EmployeeWelfareExperience")}
        {renderInput("WorkEnvironmentRating", "number", "Enter WorkEnvironmentRating")}
        {renderInput("ProjectReference", "text", "Enter Project Reference")}
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default PostProfile;