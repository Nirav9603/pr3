import * as yup from 'yup';
import { ErrorMessage, Form, Formik, useFormik } from 'formik';

function Login(props) {


  
  let schema = yup.object().shape({
      name: yup.string().required("Please enter your name."),
      number: yup.string().required("Please enter your number."),
      email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id.")  
    });

  const formik = useFormik({
    initialValues: {name: '',
    number: '',
    email: '',},
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  let { errors, handleBlur, handleSubmit, touched, values, handleChange } = formik;

  return (
    <div className="container">
      <div className="section-title">
          <h2>Appointment</h2>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 mt-5 mt-lg-0">
          <Formik validationSchema>
            <Form onSubmit={handleSubmit} className="php-email-form">
              <>
                {
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="text" name="name" className="form-control shadow-none" id="name" placeholder="Enter Your Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      </div>
                      {errors.name || touched.name ? <p className='text-center'>{errors.name}</p> : ""}
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="text" name="number" className="form-control shadow-none" id="number" placeholder="Enter Your Mobile Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.number}
                        />
                      </div>
                      {errors.number || touched.number ? <p className='text-center'>{errors.number}</p> : ""}
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="text" name="email" className="form-control shadow-none" id="email" placeholder="Enter Your Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {errors.email || touched.email ? <p className='text-center'>{errors.email}</p> : ""}
                    </div>
                  </>
                }

                {
                  <div className="text-center my-3">
                    <button className="appointment-btn scrollto border-0 ms-0" type='submit'>Submit</button>
                  </div>
                }

              </>


            </Form>
          </Formik>
        </div>
      </div>
    </div>

  );
}

export default Login;