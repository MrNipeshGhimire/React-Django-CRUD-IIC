import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const [students, setStudents] = useState([]);

  // Fetch Students
  const FetchStudent = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/student/"
      );
      if (response.status === 200) {
        setStudents(response.data);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Run on page load
  useEffect(() => {
    FetchStudent();
  }, []);

  // Delete Handler (with backend)
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(
          `http://127.0.0.1:8000/api/student/${id}/`
        );

        // Update UI
        setStudents(students.filter((s) => s.id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Student List
          </h2>

          <Link
            to={"/add"}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Student
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 text-sm uppercase">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Roll</th>
                <th className="p-3">Faculty</th>
                <th className="p-3">Address</th>
                <th className="p-3">Phone</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium text-gray-700">
                    {student.id}
                  </td>
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.roll}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                      {student.faculty}
                    </span>
                  </td>
                  <td className="p-3">{student.address}</td>
                  <td className="p-3">{student.phone}</td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex justify-center gap-2">

                      {/* Edit Button */}
                      <Link to={`/edit/${student.id}`}>
                        <button className="px-3 py-1 text-sm bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition">
                          Edit
                        </button>
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Empty State */}
        {students.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No students found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;