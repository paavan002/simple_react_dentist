const BASE_URL = "http://localhost:5000/api";

export const getDentists = async () => {
  const res = await fetch(`${BASE_URL}/dentists`);
  return res.json();
};



export const addDentist = async (data) => {
  const res = await fetch(`${BASE_URL}/dentists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json(); // IMPORTANT
};

export const getAppointments = async () => {
  const res = await fetch(`${BASE_URL}/appointments`);
  return res.json();
};

export const createAppointment = async (data) => {
  await fetch(`${BASE_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};