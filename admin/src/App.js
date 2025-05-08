import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import PrivateRoute from './PrivateRoute';
import AddProject from './Pages/Add';
import ListProjects from './Pages/ListProject';
import Edit from './Pages/Edit';
import Resume from './Pages/AddResume';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Resume />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/add-project"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <AddProject />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/list-projects"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <ListProjects />
              </>
            </PrivateRoute>
          }
        />

        

          <Route
          path="/admin/edit-project/:id"
          element={
            
              <>
                <Navbar />
                <Edit />
              </>
            
          }
        />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
