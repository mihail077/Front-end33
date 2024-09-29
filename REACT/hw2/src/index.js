import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
  <header className="header">
    <h1>Welcome to Our Service</h1>
    <p>Your success is our priority.</p>
  </header>

  <section className="features">
    <h2>Why Choose Us?</h2>
    <div className="feature">
      <h3>Quality</h3>
      <p>We provide top-notch quality services that ensure your satisfaction.</p>
    </div>
    <div className="feature">
      <h3>Reliability</h3>
      <p>Our services are reliable and you can count on us anytime.</p>
    </div>
    <div className="feature">
      <h3>Support</h3>
      <p>We offer 24/7 support to help you with any issues or questions.</p>
    </div>
  </section>

  <section className="contact">

    <h2>Contact Us</h2>

    tel. 123456789
    <br></br>
    tel. 987654321
    <br></br>
    email: name@example.com

  </section>
        
  </div>
);

