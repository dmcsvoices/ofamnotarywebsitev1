import React, { useState } from 'react';
import ArticleTitle from './ArticleTitle';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faCannabis, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

library.add(fab, faLeaf, faCannabis, faSeedling);

const Input = styled.input`
margin-bottom:10px;
`;

const Section = styled.div`
    visibility: visible;
    display: flex;
    flex-direction: column;

`;

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 10px;
margin-left: 40px;
margin-right: 40px;
margin-bottom:20px;
box-shadow: 2px 2px 7px rgb(22, 7, 7);
background-color: rgb(236, 248, 248);
border-color: rgb(0, 95, 115);
border-radius: 10px; 
border-style: none;`;

const P = styled.p`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 10px;
margin-left: 40px;
margin-right: 40px;
margin-bottom:20px;
box-shadow: 2px 2px 7px rgb(22, 7, 7);
background-color: rgb(236, 248, 248);
border-color: rgb(0, 95, 115);
border-radius: 10px; 
border-style: none;`;

const FORM_ENDPOINT = ""; // TODO - fill on the later step

function ContactForm() {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </>
      );
    }

  return (
    <Section className="form-section">
        <ArticleTitle titleText="How to schedule an appointment" />
        <P> 
        It is really easy to get in touch with me. Simply use the form below and I'll get back to you within an hour of receiving your message!
        </P>
            <Form 
                className="contact-form"   
                id="form-WantToBuy" 
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
            <Section className="form-group">
                <label for="fname">First name:</label>
                <Input type="text" className="form-control" id="fname" name="fname"></Input>
                <label for="lname">Last name:</label>
                <Input type="text" className="form-control"  id="lname" name="lname"></Input>
            
                
                <label for="phonenum">Phone Number:</label>
                <Input type="text" className="form-control" id="phonenum" name="phonenum"></Input>
                <label for="emailaddr">Email Address:</label>
                <Input type="email" className="form-control" id="emailaddr" name="emailaddr"></Input>
            
            <button type="submit" value="Submit" className="btn btn-primary btn-lg">Press here to send us a message!</button>
            </Section>
            </Form>
            
        
    </Section>
   

  )
}

export default ContactForm