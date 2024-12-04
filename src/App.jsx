import {
  AlumniDetails,
  AssessLecturer,
  BillsAndPayments,
  CheckResults,
  CourseRegistration,
  Graduation,
  MainDashBoard,
  RegistrationSlip,
  StatusChecker,
  StudentProfile,
  ManageDevices,
  HomeScreen,
  Dashboard,
} from "./components/dashboard/features";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomeScreen />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested Routes under /dashboard */}
          <Route index element={<MainDashBoard />} />
          <Route path="StatusChecker" element={<StatusChecker />} />
          <Route path="CourseRegistration" element={<CourseRegistration />} />
          <Route path="RegistrationSlip" element={<RegistrationSlip />} />
          <Route path="CheckResults" element={<CheckResults />} />
          <Route path="AssessLecturer" element={<AssessLecturer />} />
          <Route path="BillsAndPayments" element={<BillsAndPayments />} />
          <Route path="Graduation" element={<Graduation />} />
          <Route path="AlumniDetails" element={<AlumniDetails />} />
          <Route path="StudentProfile" element={<StudentProfile />} />
          <Route path="ManageDevices" element={<ManageDevices />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
