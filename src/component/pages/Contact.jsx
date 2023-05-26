import React, { useState } from "react";
const Contact = () => {
    const [data , setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:""

    })
const [flag , setFlag] = useState(false);
    const inputEvent = (event)=>{
        const {name,value} = event.target;
        setData((preValue)=>{
            return {
                ...preValue,
                [name]:value
            }
        })

    }
    const formSubmit = (e)=>{
        e.preventDefault();
        if(data.fullname && data.phone && data.email && data.message){
            setFlag(true)
        }
        
       setData({ fullname: '',phone: '', email: '', message: '' });

    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {flag?<h2 style={{color:"green"}}>Form submitted Successfully,{data.fullname}</h2>:""}
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="fullnameinput"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullnameinput"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="phoneInput"
                  class="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phoneInput"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  on
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
