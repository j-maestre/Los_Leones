import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './footer.css';


/**
 * FOOTER COMPONENT FOR ALL Los Leones APP
 */

const Footer: React.FC = () => {
   
        return (
            <section className="footer">
                <div className="copyrights">
                    <div className="container-fluid">
                        <div className="footer-distributed">
                            <div className="footer-left">
                                <p className="footer-links">
                                    <a href="#">Home</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Pricing</a>
                                    <a href="#">About</a>
                                    <a href="#">Faq</a>
                                    <a href="#">Contact</a>
                                </p>
                                <p className="footer-company-name">All Rights Reserved. &copy; 2021 <a href="#">Deluxe Interior</a></p>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    
}
export default Footer;