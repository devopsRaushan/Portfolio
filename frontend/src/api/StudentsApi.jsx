import { API_BASE_URL } from "./ApiConfig";

const StudentsApi = {
  // 🔹 Get all students
  getAllStudents: async () => {
    const response = await fetch(`${API_BASE_URL}/students`);
    return response.json();
  },

  // 🔹 Get student by ID
  getStudentById: async (studentId) => {
    const response = await fetch(`${API_BASE_URL}/students/${studentId}`);
    return response.json();
  },

  // 🔹 Create new student
  createStudent: async (studentData) => {
    const response = await fetch(`${API_BASE_URL}/students`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });
    return response.json();
  },

  // 🔹 Update student by ID
  updateStudent: async (studentId, studentData) => {
    const response = await fetch(`${API_BASE_URL}/students/${studentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });
    return response.json();
  },

  // 🔹 Delete student by ID
  deleteStudent: async (studentId) => {
    const response = await fetch(`${API_BASE_URL}/students/${studentId}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

export default StudentsApi;
