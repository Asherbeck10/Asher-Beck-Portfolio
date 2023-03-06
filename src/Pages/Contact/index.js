import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.css";


const schema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  content: yup.string().min(25).max(150).required(),
  
  
}).required();

const Contact=()=> {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  

  return (
    <div className="Form">
      <div className="title">Contact Me</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(data=>console.log(data))}>
          <input
            type="text"
            {...register("firstName")}
            // name="firstName"
            // ref={register}
            placeholder="First Name..."
          />
         
          <input
            type="text"
            // name="lastName"
            {...register("lastName")}
            placeholder="Last Name..."
            // ref={register}
          />
         
          <input
            type="text"
            {...register("email")}
            // name="email"
            placeholder="Email..."
            // ref={register}
          />
          
          <input
            type="text"
            // name='password'
            {...register("content")}
            placeholder="..."
            // ref={register}
          />
          
          
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
