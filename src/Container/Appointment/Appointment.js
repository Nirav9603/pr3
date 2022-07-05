import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Login(props) {

  let schema = yup.object().shape({
    name: yup.string().required("Enter Your Name"),
    email: yup.string().email("Pleace Enter Valid Mail").required("Enter Your Mail"),
    phone: yup.string().required("Enter Your Phone Number"),
    date: yup.string().required("Select Date"),
    department: yup.string().required("Select Department"),
    message: yup.string().required("Enetr Any Message")
  });

  const formikObj = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, handleBlur, handleSubmit, errors, touched } = formikObj

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>
        <Formik values={formikObj}>
          <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? <span>{errors.name}</span> : ""}
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? <span>{errors.email}</span> : ""}
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone ? <span>{errors.phone}</span> : ""}
                <div className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input
                  type="datetime"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.date && touched.date ? <span>{errors.date}</span> : ""}
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >

                  <option value>Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
                {errors.department && touched.department ? <span>{errors.department}</span> : ""}
                <div className="validate" />
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message (Optional)"
                defaultValue={""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message ? <span>{errors.message}</span> : ""}
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Make an Appointment</button></div>
          </Form>
        </Formik>
      </div>
    </section>


  );
}

export default Login;