import React, { useState } from "react";
import axios from "axios";

const AddGameForm = () => {
  const backendApi = "/api";
  // const backendApi = "http://localhost:8080";
  const backendData = {
    Description: "",
    SkillsHave: "",
    SoftwaresUsed: "",
    JobRole: "",
    RoleResponsibility: "",
    OfficeVenue: "",
    MasteryLevel: "",
    WorkingExperience: "",
    JoinedDate: "",
    CompanyName: "",
    Projects: "",
    ProjectReference: "",
  };
  const [formData, setFormData] = useState(backendData);

  // Handling input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    try {
      const response = await axios.post(`${backendApi}/profiles`, formData);
      console.log("Data saved successfully:", response.data);
      alert("Data added successfully!");

      // Reset form after submission
      setFormData(backendData);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error adding data.");
    }
  };

  const renderInput = (name, type, placeholder) => (
    <input
      type={type}
      name={name}
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
        {renderInput("WorkingExperience", "decimal", "Enter Working Experience")}
        {renderInput("JoinedDate", "date", "Enter Joined Date")}
        {renderInput("CompanyName", "text", "Enter Company Name")}
        {renderInput("Projects", "text", "Enter Projects")}
        {renderInput("ProjectReference", "text", "Enter Project Reference")}
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AddGameForm;