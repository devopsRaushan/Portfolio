import Profile from "./Profile";
import ProfileCards from "./ProfileCards";
function Journey() {
  const headers = [
    "Description",
    "Skill_have",
    "Mastery_level",
    "Software",
    "Development_kit",
    "Documentations",
    "Project",
    "Company_name",
    "Job_role",
    "Office_venue",
    "Responsibility",
    "Worked_experience",
    "Project_reference",
    "Learning_platform",
  ];

  // Domain options
  const domains = ["Web Development", "Data Science", "Cyber Security"];

  // Dynamic Data for Each Domain
  const journeyData = {
    "Web Development": [
      "Building Websites",
      "HTML, CSS, JS",
      "Advanced",
      "React, Node.js",
      "Express, MongoDB",
      "GitHub Docs",
      "Portfolio Project",
      "Google LLC",
      "Frontend Developer",
      "Remote",
      "Team Lead",
      "2 Years",
      "Open Source",
      "Youtube, Coursera",
    ],
    "Data Science": [
      "AI & Data Analytics",
      "Python, Pandas",
      "Intermediate",
      "TensorFlow",
      "Jupyter Notebook",
      "Research Papers",
      "Data Visualization",
      "Microsoft",
      "Data Analyst",
      "Hybrid",
      "Machine Learning Models",
      "3 Years",
      "Kaggle",
      "Youtube, Coursera",
    ],
    "Cyber Security": [
      "Ethical Hacking",
      "Networking, Linux",
      "Expert",
      "Metasploit",
      "Security Tools",
      "OWASP Guidelines",
      "Security Audit",
      "Tesla Inc.",
      "Cyber Security Expert",
      "On-Site",
      "Incident Response",
      "5 Years",
      "Bug Bounty",
      "Youtube, Coursera",
    ],
  };

  return (
    <div className="Journey">
      <div className="Journey__domain">
        <div className="Journey__domain--profile">
          <Profile />
          <ProfileCards />
        </div>
      </div>
    </div>
  );
}
export default Journey;
