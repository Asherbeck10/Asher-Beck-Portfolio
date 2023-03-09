import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./style.css";

// yup schema for validation
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().email().required("Valid Email is Required"),
  content: yup.string().min(25).max(150).required(),
  
  
})

function Contact() {
  const { register, handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();

  const sendEmail = (e) => {
   if(e)
   { e.preventDefault();}

    emailjs.sendForm('service_r4h5a8v', 'template_x595gla', form.current, 'WSB8Sfmm1_KIAsx5g')
      .then((result) => {
          console.log(result.text);
          
         
      }, (error) => {
          console.log(error.text);
          
      });
  };

  const onSubmit = (data, e) => {
  console.info(data);
  sendEmail(e);
};

  const onError = (errors) => {
    console.error(errors);
    
  };

  return (
    <div className="contact">
    <div className="Form">
      <div className="title">Contact Me</div>
      <div className="inputs">
        
        <form ref={form} onSubmit={handleSubmit(onSubmit,onError)}>
          <input
            type="text"
            {...register("firstName")}
            
            placeholder="First Name..."
          />
         <p> {errors.firstName?.message} </p>
          <input
            type="text"
            {...register("lastName")}
            placeholder="Last Name..."
            
           
          />
          <p> {errors.lastName?.message} </p>
         
          <input
            type="text"
            {...register("email")}
           
            placeholder="Email..."
          
          />
          <p> {errors.email?.message} </p>
          <textarea id="message" name="message" rows="5" cols="50"
         
            type="text"
          
            {...register("content")}
            placeholder="..."
          
          />
          <p> {errors.content?.message} </p>
          
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
