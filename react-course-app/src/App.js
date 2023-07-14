// import logo from './logo.svg';
import "./App.css";
import { Header } from "./components/Header";
// import {Button} from 'reactstrap'
import { ToastContainer, toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import { Menus } from "./components/Menus";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";

import { Course } from "./components/Course";
import { AllCourses } from "./components/AllCourses";
import { AddCourse } from "./components/AddCourse";
function App() {
  return (
    <div className="App">
      <>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="add-course" element={<AddCourse />} exact />
              <Route path="view-courses" element={<AllCourses />} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
      </>
    </div>
  );
}
export default App;