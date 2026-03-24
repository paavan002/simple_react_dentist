import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dentist from "./components/Dentist";
import Appointment from "./components/Appointment";
import { addDentist, getDentists } from "./api";

function App() {
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const [dentists, setDentists] = useState([]);

  const [form, setForm] = useState({
    name: "",
    qualification: "",
    experience: "",
    clinicName: "",
    address: "",
    location: "",
    photo: "",
  });

  // ✅ Fetch dentists
  const fetchDentists = async () => {
    const data = await getDentists();
    setDentists(data);
  };

  useEffect(() => {
    fetchDentists();
  }, []);

  return (
    <>
      <Navbar setShowAdd={setShowAdd} />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <Dentist
              dentists={dentists}
              setSelected={setSelected}
            />
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={<Appointment page="admin" />}
        />
      </Routes>

      {/* BOOK APPOINTMENT MODAL */}
      <Appointment
        selected={selected}
        setSelected={setSelected}
      />

      {/* ADD DENTIST MODAL */}
      {showAdd && (
        <div className="modal">
          <div className="box">
            <h3>Add Dentist</h3>

            <input placeholder="Name"
              onChange={(e)=>setForm({...form, name:e.target.value})}
            />

            <input placeholder="Qualification"
              onChange={(e)=>setForm({...form, qualification:e.target.value})}
            />

            <input placeholder="Experience"
              onChange={(e)=>setForm({...form, experience:e.target.value})}
            />

            <input placeholder="Clinic Name"
              onChange={(e)=>setForm({...form, clinicName:e.target.value})}
            />

            <input placeholder="Address"
              onChange={(e)=>setForm({...form, address:e.target.value})}
            />

            <input placeholder="Location"
              onChange={(e)=>setForm({...form, location:e.target.value})}
            />

            <input placeholder="Photo URL"
              onChange={(e)=>setForm({...form, photo:e.target.value})}
            />

            <button
              className="btn"
              onClick={async () => {
                if (!form.name) {
                  alert("Name is required");
                  return;
                }

                try {
                  await addDentist(form);

                  await fetchDentists(); // 🔥 FIX (NO RELOAD)

                  alert("Dentist Added ✅");

                  setShowAdd(false);
                } catch (err) {
                  console.log(err);
                  alert("Error adding dentist ❌");
                }
              }}
            >
              Submit
            </button>

            <button className="btn" onClick={()=>setShowAdd(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;