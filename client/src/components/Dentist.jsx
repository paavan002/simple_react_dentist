const Dentist = ({ dentists, setSelected }) => {
  return (
    <div className="container">
      {dentists.map((d) => (
        <div className="card" key={d._id}>
          <img src={d.photo} />

          <h3>{d.name}</h3>
          <p>{d.qualification}</p>
          <p>{d.experience} years</p>
          <p>{d.clinicName}</p>
          <p>{d.location}</p>

          <button
            className="btn"
            onClick={() => setSelected(d)}
          >
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dentist;