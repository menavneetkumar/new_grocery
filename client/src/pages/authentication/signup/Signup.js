import styles from '../form.module.css';
import Authentication from "../Authentication";
import {Link} from "react-router-dom";
import React, { useState } from "react";

const Signup = () => {
//start
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful signup
        console.log("Signup successful!");
      } else {
        // Handle signup error
        console.error("Signup failed.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred:", error);
    }
  };
  //end

    const form =
        <div className={styles['wrapper']}>
            <div className={styles['header']}>
                <div className={styles['title']}>Sign up with your email</div>
                <div className={styles['login']}>Already have an account? <Link to={'/login'}>Login</Link></div>
            </div>
            <div className={styles['form']}>
                <input placeholder={'First Name'} onChange={handleChange}/>
                <input placeholder={'Last Name'} onChange={handleChange}/>
                <input placeholder={'Email'} onChange={handleChange}/>
                <input placeholder={'Password'} type={'password'} onChange={handleChange}/>
                <button className={'btn1'} onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>

    return <Authentication data={form}/>
}

export default Signup;