import axios from 'axios';

const postData = async (url, data, resetData, setFormData) => {
  try {
    const response = await axios.post(url, data);
    console.log("Data saved successfully:", response.data);
    alert("Data added successfully!");

    // Reset form after submission
    setFormData(resetData);
  } catch (error) {
    console.error("Error saving data:", error);
    alert("Error adding data.");
  }
};

export default postData;