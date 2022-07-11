import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { NavLink, useHistory } from 'react-router-dom';

function AppoinmentList(props) {
  const history = useHistory();
  const getdata = () => {
    let booklocaldata = JSON.parse(localStorage.getItem("Appointment"));
    if (booklocaldata !== null) {
      setdata(booklocaldata)
    }
  }
  const [data, setdata] = useState([])
  useEffect(() => {
    getdata();
  }, [])
  const editbtn = (id) => {
    history.push("/appointment", { id: id })
  }
  const deletebtn = (delteid) => {
    let booklocaldata = JSON.parse(localStorage.getItem("Appointment"));
    const deletedata = booklocaldata.filter((v) => v.id !== delteid);
    localStorage.setItem("Appointment", JSON.stringify(deletedata))
    getdata();
  }
  return (
    <>
      <div className='container'>
        <div className='row text-center my-4'>
          <div className='col-6'>
            <NavLink exact to={"/appointment"}>Book appointment</NavLink>
          </div>
          <div className='col-6'>
            <NavLink exact to={"/appointment-list"}>List appointment</NavLink>
          </div>
        </div>
      </div>
      {
        data.map((d) => {
          return (
            <>
              <div className='container'>
                <Card>
                  <CardBody className='row'>
                    <div className='col-md-6'>
                    <CardTitle tag="h5">
                      {d.name}
                    </CardTitle>
                    <CardText>
                      {d.date}
                    </CardText>
                    </div>
                    <div className='col-md-6 text-end'>
                    <Button color="primary" onClick={() => { editbtn(d.id) }} className='shadow-none me-2'>
                      Edit
                    </Button>
                    <Button color="danger" id="btn" onClick={() => { deletebtn(d.id) }} className='shadow-none'>
                      Delete
                    </Button>
                    </div>
                    
                  </CardBody>
                </Card>
              </div>
            </>
          )
        })
      }
    </>

  );
}

export default AppoinmentList;