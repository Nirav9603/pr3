import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Appointment(props) {
  const [updatedata, setupdatedata] = useState(false)
  const history = useHistory();


  useEffect(() => {
    let booklocaldata = JSON.parse(localStorage.getItem("Appointment"));
    let propsid = props.location.state;
    if (booklocaldata !== null && propsid !== null && propsid !== undefined) {
      const edata = booklocaldata.filter((v) => v.id === propsid.id);
      formik.setValues(edata[0]);
      history.replace()
      setupdatedata(true)
    }
  }, [])

  const handleupdate = (values) => {
    let booklocaldata = JSON.parse(localStorage.getItem('Appointment'))
    let udata = booklocaldata.map((l) => {
      if (l.id === values.id) {
        return values;
      } else {
        return l;
      }
    })
    localStorage.setItem('Appointment', JSON.stringify(udata));
    history.push('/appointment-list');
    history.replace();
    setupdatedata(false);
    formik.resetForm();
  }

  const handleinsert = (values) => {

    const id = Math.floor(Math.random() * 1000);

    const data = {
      id: id,
      ...values
    }

    let booklocaldata = JSON.parse(localStorage.getItem("Appointment"));

    if (booklocaldata === null) {
      localStorage.setItem("Appointment", JSON.stringify([data]))
    } else {
      booklocaldata.push(data);
      localStorage.setItem("Appointment", JSON.stringify(booklocaldata));
    }
    history.push("/appointment-list");
  }

  let schema = yup.object().shape({
    department: yup.string().required("Please select your department."),
    date: yup.date().required("Please enter your appointment date."),
    phone: yup.number().required("Please enter your phone number."),
    name: yup.string().required("Please enter your name."),
    email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
    message: yup.string().required("Please enter your message.")
  })
  const formik = useFormik({
    initialValues: {
      department: '',
      phone: '',
      name: '',
      email: '',
      date: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      if (updatedata) {
        handleupdate(values)
      } else {
        handleinsert(values)
      }
    },
  }
  )
  let { errors, handleBlur, handleSubmit, handleChange, touched, values } = formik;
  return (
    <>
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>

        <div className='container'>
          <div className='row text-center mb-4'>
            <div className='col-6'>
              <NavLink exact to={"/appointment"}>Book appointment</NavLink>
            </div>
            <div className='col-6'>
              <NavLink exact to={"/appointment-list"}>List appointment</NavLink>
            </div>
          </div>
        </div>

        <Formik values={formik}>
          <Form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input type="text" name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control" id="name" placeholder="Your Name" />
                {errors.name && touched.name ? <p className='error'>{errors.name}</p> : ""}
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control" name="email" id="email" placeholder="Your Email" />

                {errors.email && touched.email ? <p className='error'>{errors.email}</p> : ""}
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control" name="phone" id="phone" placeholder="Your Phone" maxLength={10} />
                {errors.phone && touched.phone ? <p className='error'>{errors.phone}</p> : ""}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input type="date" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                <div className="validate" />
                {errors.date && touched.date ? <p className='error'>{errors.date}</p> : ""}
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="department" id="department" className="form-select"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.department}
                >
                  <option value="">Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
                <div className="validate" />
                {errors.department && touched.department ? <p className='error'>{errors.department}</p> : ""}
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" onChange={handleChange}
                value={values.message} onBlur={handleBlur} name="message" rows={5} placeholder="Message" defaultValue={""} />
              {errors.message && touched.message ? <p className='error'>{errors.message}</p> : ""}
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            <div className="text-center">
              {
                updatedata ? <button type='submit' className="appointment-btn">Update an Appointment</button> : <button type='submit'>Make an Appointment</button>
              }
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Appointment; 