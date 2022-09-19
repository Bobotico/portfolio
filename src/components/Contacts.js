import './Contacts.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react';


function Contacts() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8ubh18e', 'template_ea6cptr', form.current, 'T_nV9VyTTC6sjZUCI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              <h1 className="titleContacts">Contact Me!</h1>
              {/* <!-- contact form --> */}
              <form className="form" ref={form} onSubmit={sendEmail}>
                {/* <!-- name --> */}
                <label for="name">Name</label>
                <div className="form-group">
                  <input
                    type="name"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="enter your name"
                  />
                </div>
    
                {/* <!-- email --> */}
                <label for="name">Email address</label>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="enter your email"
                  />
                </div>
    
                {/* <!-- subject --> */}
                <label for="name">Subject</label>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subject"
                    placeholder="enter email subject"
                  />
                </div>
    
                <label for="email_body">Message</label>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    id="email_body"
                    rows="5"
                  ></textarea>
                </div>
    
                <div className='submitButton'>   
                    <button type="submit" className="btn btn-primary button">
                    Submit
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Contacts;