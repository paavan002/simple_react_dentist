import { useState, useEffect } from "react";
import { createAppointment, getAppointments } from "../api";
import "../styles.css";

const Appointment = ({ selected, setSelected, page }) => {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    gender: "",
    appointmentDate: "",
  });

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (page === "admin") {
      getAppointments().then(setAppointments);
    }
  }, [page]);

  // BOOK MODAL
  if (selected) {
    return (
      <div className="modal">
        <div className="box">
          <h3>Book Appointment</h3>

          <input placeholder="Name"
            onChange={(e)=>setForm({...form, patientName:e.target.value})}
          />

          <input placeholder="Age"
            onChange={(e)=>setForm({...form, age:e.target.value})}
          />

          <select
            onChange={(e)=>setForm({...form, gender:e.target.value})}
          >
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input type="date"
            onChange={(e)=>setForm({...form, appointmentDate:e.target.value})}
          />

          <button
            className="btn"
            onClick={async () => {
              await createAppointment({
                ...form,
                dentistName: selected.name,
                clinicName: selected.clinicName,
              });

              alert("Appointment Booked!");
              setSelected(null);
            }}
          >
            Submit
          </button>

          <button className="btn" onClick={()=>setSelected(null)}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // ADMIN PAGE
  if (page === "admin") {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Appointments</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Dentist</th>
              <th>Clinic</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr key={a._id}>
                <td>{a.patientName}</td>
                <td>{a.age}</td>
                <td>{a.gender}</td>
                <td>{a.appointmentDate?.slice(0,10)}</td>
                <td>{a.dentistName}</td>
                <td>{a.clinicName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default Appointment;