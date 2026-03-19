import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    faculty: "",
    address: "",
    phone: "",
  });

  // 🔹 Fetch student data by ID
  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/student/${id}/`
      );

      if (response.status === 200) {
        setFormData(response.data);
      }
    } catch (error) {
      console.error("Error fetching student:", error);
    }
  };

  // Load data on mount
  useEffect(() => {
    fetchStudent();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Update student
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/student/${id}/`,
        formData
      );

      if (response.status === 200) {
        alert("Student updated successfully ✅");
        navigate("/"); // go back to list
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Student
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <input
            type="text"
            name="roll"
            placeholder="Roll Number"
            value={formData.roll}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <select
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          >
            <option value="">Select Faculty</option>
            <option value="Science">Science</option>
            <option value="Management">Management</option>
            <option value="Humanities">Humanities</option>
            <option value="Education">Education</option>
          </select>

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Update Student
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditStudent;