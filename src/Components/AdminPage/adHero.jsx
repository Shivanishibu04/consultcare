import React from 'react';
import { FaUsers, FaStethoscope, FaCalendarCheck, FaClock } from 'react-icons/fa'; // Importing icons

const AdHero = ({ totalPatients, totalDoctors, totalAppointmentsToday, totalAvailableSlots }) => {
  return (
    <div className="bg-EDE0D4 p-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-582F0E mb-8">Welcome to the Dashboard</h1>
        <p className="text-center text-lg text-7F4F24 mb-10">
          Stay updated with your healthcare management.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          {/* Total Patients Card */}
          <div className="bg-DDB892 shadow-lg rounded-lg p-6 w-full md:w-1/4 transform transition duration-300 hover:shadow-xl flex flex-col items-center">
            <FaUsers className="text-6xl text-582F0E mb-4" />
            <h2 className="text-lg font-semibold text-582F0E">Total Patients</h2>
            <p className="text-5xl font-bold text-7F4F24">{totalPatients}</p>
          </div>

          {/* Total Doctors Card */}
          <div className="bg-E6CCB2 shadow-lg rounded-lg p-6 w-full md:w-1/4 transform transition duration-300 hover:shadow-xl flex flex-col items-center">
            <FaStethoscope className="text-6xl text-582F0E mb-4" />
            <h2 className="text-lg font-semibold text-582F0E">Total Doctors</h2>
            <p className="text-5xl font-bold text-9C6644">{totalDoctors}</p>
          </div>

          {/* Total Appointments Today Card */}
          <div className="bg-DDB892 shadow-lg rounded-lg p-6 w-full md:w-1/4 transform transition duration-300 hover:shadow-xl flex flex-col items-center">
            <FaCalendarCheck className="text-6xl text-582F0E mb-4" />
            <h2 className="text-lg font-semibold text-582F0E">Appointments Today</h2>
            <p className="text-5xl font-bold text-7F4F24">{totalAppointmentsToday}</p>
          </div>

          {/* Total Available Slots Today Card */}
          <div className="bg-E6CCB2 shadow-lg rounded-lg p-6 w-full md:w-1/4 transform transition duration-300 hover:shadow-xl flex flex-col items-center">
            <FaClock className="text-6xl text-582F0E mb-4" />
            <h2 className="text-lg font-semibold text-582F0E">Available Slots Today</h2>
            <p className="text-5xl font-bold text-9C6644">{totalAvailableSlots}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdHero;
