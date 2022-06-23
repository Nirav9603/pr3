import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

function Login(props) {

    const [userType, setuserType] = useState('login');
    const [reset, setreset] = useState(false);

    let initVal;
    let mainschema;
    if (userType == 'login') {
        initVal = {
            password: '',
            email: '',
        }
        mainschema = yup.object().shape({
            email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
            password: yup.string().required("Please enter your password.")
        });
    } else if (userType == 'signup') {
        initVal = {
            name: '',
            password: '',
            email: '',
        }
        mainschema = yup.object().shape({
            name: yup.string().required("Please enter your name."),
            email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
            password: yup.string().required("Please enter your password.")
        });
    } else if (reset == true) {
        initVal = {
            email: '',
        }
        mainschema = yup.object().shape({
            email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
        });
    }

    let schema = mainschema;

    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    }
    )
    let { errors, handleBlur, handleSubmit, touched, values, handleChange } = formik;

    return (
        <div>
            <section id="login" className="login">
                <div className="container">
                    <div className="section-title">
                        {
                            reset ? <h2>Forgot Password</h2> : (userType == 'login') ? <h2>Login</h2> : <h2>Signup</h2>
                        }
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-6 mt-5 mt-lg-0">
                            <Formik validationSchema>
                                <Form action method="post" role="form" className="php-email-form">
                                    {(userType == 'signup') ? <div className="form-group mt-3 mb-3">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name} />
                                        {errors.name || touched.name ? <p className='text-center'>{errors.name}</p> : ""}
                                    </div> : null}

                                    {<div className="form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter Your Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email} />
                                        {errors.email || touched.email ? <p className='text-center'>{errors.email}</p> : ""}
                                    </div>
                                    }

                                    {
                                        reset ? null : <div className="form-group mt-3"> <input type="password" className="form-control" name="subject" id="subject" placeholder="Enter Your Password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password} />
                                            {errors.password && touched.password ? <p className='text-center'>{errors.password}</p> : ""}</div>

                                    }



                                    <div className="my-3">
                                        {
                                            reset ? null : (userType == 'login') ? <div className="sent-message"><a className="apointer" onClick={() => setreset(true)}>Forgot Password?</a></div> : null
                                        }
                                    </div>
                                    <div className="my-3">
                                        {
                                            reset ? null : (userType == 'login') ? <div className="sent-message">create new account? <a className="apointer" onClick={() => setuserType('signup')}>Signup</a></div> : <div className="sent-message">already have an account <a className="apointer" onClick={() => setuserType('login')}>Login</a></div>
                                        }
                                    </div>

                                    <div className="text-center">
                                        {
                                            reset ? <button className='appointment-btn scrollto' type="submit">Check Mail</button> : (userType == 'login') ? <button className='appointment-btn scrollto' type="submit">Login</button> : <button className='appointment-btn scrollto' type="submit">Signup</button>
                                        }

                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;