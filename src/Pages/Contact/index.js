import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.css";


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

  // const [isShow, setIsShow] = React.useState(false);

  const onSubmit = (data) => {
    console.info(data);
  };

  const onError = (errors) => {
    console.error(errors);
  };

  return (
    <div className="contact">
    <div className="Form">
      <div className="title">Contact Me</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit,onError)}>
          <input
            type="text"
            {...register("firstName")}
            // name="firstName"
            // ref={register}
            placeholder="First Name..."
          />
         <p> {errors.firstName?.message} </p>
          <input
            type="text"
            // name="lastName"
            {...register("lastName")}
            placeholder="Last Name..."
            // ref={register}
          />
          <p> {errors.lastName?.message} </p>
         
          <input
            type="text"
            {...register("email")}
            // name="email"
            placeholder="Email..."
            // ref={register}
          />
          <p> {errors.email?.message} </p>
          <input id="content"
            type="text"
            // name='password'
            {...register("content")}
            placeholder="..."
            // ref={register}
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
