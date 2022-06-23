import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer id="footer">
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div>
                            <h4>Address</h4>
                            <p>F-505, <br />Inovative Plazza<br />New Delhi, India<br /><br /><strong>Phone:</strong> +91 9988776655<br /><strong>Email:</strong> cityhospital@example.com<br /></p>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="https://twitter.com/mr_nirav_9603" target="new" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="https://www.facebook.com/nirav.magatarapara" target="new" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="https://www.instagram.com/_.nirav._08" target="new" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" target="new" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="https://www.linkedin.com/nirav-magatarapara-3205521b7" target="new" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                </div>
            </footer>
        </div>


    );
}

export default Footer;