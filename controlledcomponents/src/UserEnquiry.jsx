import React, { useState, ChangeEvent } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from 'react-toastify';

export default function UserEnquiry() {
  let [formdata, setformdata] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });


  let [userdata, setuserdata] = useState([]);
  let getvalue = (event) => {
    let olddata = { ...formdata };
    let inputname = event.target.name;
    let inputvalue = event.target.value;
    olddata[inputname] = inputvalue;
    setformdata(olddata);
  };
  let handlesubmit = (event) => {
    let currentuserformdata = {
      uname: formdata.uname,
      uemail: formdata.uemail,
      uphone: formdata.uphone,
      umessage: formdata.umessage,
    };

    if(formdata.index===""){

    

    let checkfilterdata=userdata.filter((v)=>v.uemail==formdata.uemail || v.uphone==formdata.uphone)

    if(checkfilterdata.length==1){
        // toast.success("Email or Phone Number already exists...")
    }
    let olduserdata = [...userdata, currentuserformdata]; // Append new form data to the array
    setuserdata(olduserdata);
    setformdata({
        uname: "",
        uemail: "",
        uphone: "",
        umessage: "",
        index: ""}

    )
    }

    else{
      let editindex=formdata.index;
      let oldData=userdata;

      let checkfilterdata=userdata.filter((v,i)=>(v.uemail==formdata.uemail || v.uphone==formdata.uphone) && i!=editindex)
      if(checkfilterdata.length==0){
      oldData[editindex]['uname']=formdata.uname;
      oldData[editindex]['uemail']=formdata.uemail;
      oldData[editindex]['uphone']=formdata.uphone;
      oldData[editindex]['umessage']=formdata.umessage;
      setuserdata(oldData)
      setformdata({
        uname: "",
        uemail: "",
        uphone: "",
        umessage: "",
        index: ""}

    )
       
}
else{
  // toast.success("Email or Phone Number already exists...")
}
    }
    
    event.preventDefault();
  };

  let deleterow=(index)=>{
     let filterdataadterdelete=userdata.filter((v,i)=> i!=index)
     setuserdata(filterdataadterdelete)

  }

  let editrow=(index)=>{
     let editdata=userdata.filter((v,i)=>i==index)[0]
     editdata.index=index
     setformdata(editdata)
  }

  return (
    <Container fluid>
        <ToastContainer/>
      <Container>
      
        <Row>
          <Col className="text-center py-5">
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
             
            <form onSubmit={handlesubmit}>
              <div className="pb-3">
                <label className="form-label">Name</label>
                <input
                  onChange={getvalue}
                  value={formdata.uname}
                  type="text"
                  name="uname" // Correctly set name attribute
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label className="form-label">Email</label>
                <input
                  onChange={getvalue}
                  value={formdata.uemail}
                  type="text"
                  name="uemail" // Correctly set name attribute
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label className="form-label">Phone</label>
                <input
                  onChange={getvalue}
                  value={formdata.uphone}
                  type="text"
                  name="uphone" // Correctly set name attribute
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  onChange={getvalue}
                  value={formdata.umessage}
                  className="form-control"
                  name="umessage" // Correctly set name attribute
                  id=""
                  rows="3"
                ></textarea>
              </div>
              <Button type="submit" className="btn btn-primary">
                Save
              </Button>
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userdata.length >= 1 ? (
                  userdata.map((v, i) => {
                    return (
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{v.uname}</td>
                        <td>{v.uemail}</td>
                        <td>{v.uphone}</td>
                        <td>{v.umessage}</td>
                        <td>
                          <button onClick={()=>deleterow(i)}>Delete</button>
                          <button onClick={()=>editrow(i)}>Edit</button>
                        </td>
                      </tr>
                    );
                  })
                ) : 
                  <tr>
                    <td colSpan={6}>No data found</td>
                  </tr>
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
