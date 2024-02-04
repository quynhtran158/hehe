import { useState, useEffect } from "react";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Booking/Booking.css";
import { PopupWidget } from "react-calendly";
import Mentor from "./Mentor";
import ava1 from "../img/ava1.png"
import ava2 from "../img/ava2.png"
import ava3 from "../img/ava3.png"
import ava4 from "../img/ava4.png"
import ava5 from "../img/ava5.png"
import ava6 from "../img/ava6.png"

const Booking = () => {
  const mentors = [
    {

      name: 'Elena Frost',
      
      expertise: 'The Disabled Organization Representative',
      rating: 4.6,
      reviews: 37,
      imgSrc: ava2, // Provide the path to the custom avatar imag
    },
    {
      name: 'John Doe',
      
      expertise: 'Women Organization Representative',
      rating: 4.8,
      reviews: 45,
      badges: ['Motivational', 'Goal-oriented', 'Positive', 'Empathetic'],
      imgSrc: ava1 // Provide the path to the custom avatar image
    },
    {
      name: 'Jane Smith',
      
      expertise: 'Children Counseling Mentor',
      rating: 4.5,
      reviews: 30,
      badges: ['Experienced', 'Insightful', 'Supportive'],
      imgSrc: ava3, // Provide the path to the custom avatar image
    },
    {
      name: 'Sarah Johnson',
      
      expertise: 'Therapist',
      rating: 4.7,
      reviews: 45,
      badges: ['Experienced', 'Trustworthy', 'Financial Planning Expert'],
      imgSrc: ava4, // Provide the path to the custom avatar image
   },
   {
    name: 'John Smith',
    
    expertise: 'Volunteer',
    rating: 4.9,
    reviews: 52,
    badges: ['Knowledgeable', 'Empathetic', 'Health Advocate'],
    imgSrc: ava5, // Provide the path to the custom avatar image
 },
 {
  name: 'Alexa Turner',
  
  expertise: 'Children & Women Center Representative',
  rating: 4.5,
  reviews: 40,
  description: 'Experienced language tutor passionate about making language learning enjoyable and effective...',
  badges: ['Patient', 'Language Enthusiast', 'Effective Teaching'],
  imgSrc: ava6, // Provide the path to the custom avatar image
},

 
   
    // Add more mentor objects as needed
  ];

  // Rest of the component code...

  return (
    <section className="bookings" id="booking">
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="appointment" title="Make An Appointment">
        <div className="row my-3 justify-content-center">
              {mentors.map((mentor, index) => (
                <Mentor key={index} {...mentor} />
              ))}
            </div>
        
        <section className="calendar" id="calendar">

        
       
          </section>
        </Tab>
        <Tab eventKey="signup" title="Sign Up for Volunteer">
          Sign Up for Volunteer
          <section className="signup-form">
          <Form id="submit">
            <Form.Group className="mb-3" controlId="formInformation">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" placeholder="Enter your First Name" />
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" placeholder="Enter your Last Name" />
              <Form.Label>Work and Position</Form.Label>
              <Form.Control type="work" placeholder="Please, provide us your current work and position" />
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email Address" />
              <Form.Label>Phone Number (Optional)</Form.Label>
              <Form.Control type="phone" placeholder="Enter your Phone Number" />
            </Form.Group>
            <Button type="submit">x
              Submit
            </Button>
          </Form>
        </section>
        </Tab>
      </Tabs>
    </section>
  );
  }
export default Booking;
