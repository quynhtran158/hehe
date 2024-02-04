import React from "react";
import "../Footer/Footer.css"

const Footer = () => {
    return(
        <>
        <div className="Footer">
        <style>
  @import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap');
</style>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <h3><span>Safe</span>Route</h3>
                        <p>We are providing safe services for disabilities, women, and children</p>
                        <div className="footer-icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5>Quick Links</h5>
                        <ul>
                            <li className="nav-item">
                                <a className="" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Booking</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Map</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <h5>Contact Us</h5>
                        <p><i class="fa-solid fa-phone-volume"></i> +12 3456789</p>
                        <p><i class="fa-solid fa-envelope"></i> WixTeam_Greencastle@gmail.com</p>
                        <p><i class="fa-solid fa-paper-plane"></i> Greencastle, IN 46135</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Last-footer'>
            {" "}
              &copy;{new Date().getFullYear()} All Rights Reserved
        </div>
    </>
    );
};
export default Footer;