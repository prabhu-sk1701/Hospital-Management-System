import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";
const Appointment = () => {
  return (
    <div>
      <Hero
        title={"Schedule your appoinment | Welcome to our institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </div>
  );
};

export default Appointment;
