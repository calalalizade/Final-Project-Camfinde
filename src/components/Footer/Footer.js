import React from 'react'
import "./Footer.css"

import { TextField , Button , Snackbar , Alert , Slide } from "@mui/material"

import { useInView } from 'react-intersection-observer';

import { HashLink as Link } from 'react-router-hash-link';


function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

function Footer() {
    
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
  
    const handleClick = (Transition) => (e) => {
        e.preventDefault();
        setTransition(() => Transition);
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const { ref, inView: isVisible } = useInView({
        triggerOnce: true,
    });
    

    return (
      <section className="footer_container">
          <div className="footer_top">

            <div className="footer_about">
                <h2>ABOUT US</h2>
                <div className="line"></div>
                <p ref={ref} className={`about_desc ${isVisible ? "animate_about" : ""}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In vel massa eget arcu dignissim euismod. Aenean ac risus arcu. 
                    Suspendisse turpis sem, eleifend vestibulum euismod vitae, volutpat aliquam lectus. 
                    Mauris nibh leo, sagittis in eros a, ultricies consequat purus. 
                    Donec iaculis lorem id egestas faucibus. 
                    Praesent sit amet tellus id orci laoreet efficitur. 
                    Cras in velit ornare, placerat elit eget, luctus magna. 
                    Maecenas quis massa sagittis, vulputate risus eget, suscipit neque. 
                    Sed fermentum mi ut lorem euismod pharetra. Aliquam porttitor elit ac tortor dapibus, eu mattis justo volutpat.
                    Phasellus quis vestibulum metus. 
                    Nam eget vehicula dolor. Sed eget aliquam lacus. Mauris aliquam feugiat mi id fringilla. 
                    Mauris vel lorem faucibus, mollis arcu vitae, hendrerit erat. 
                    Fusce a orci aliquet, pharetra ipsum commodo, ornare nunc. 
                    Suspendisse ac augue blandit, mattis neque eu, scelerisque magna. 
                    Proin egestas luctus nibh sit amet suscipit. Nulla ultrices arcu vitae molestie blandit.
                    Phasellus quis vestibulum metus. Nam eget vehicula dolor. Sed eget aliquam lacus. 
                    Mauris aliquam feugiat mi id fringilla. Mauris vel lorem faucibus, mollis arcu vitae, hendrerit erat. 
                    Fusce a orci aliquet, pharetra ipsum commodo, ornare nunc. 
                    Suspendisse ac augue blandit, mattis neque eu, scelerisque magna. 
                    Proin egestas luctus nibh sit amet suscipit. Nulla ultrices arcu vitae molestie blandit.
                </p>
            </div>

            <div className="contact_container">
                <h2>CONTACT US</h2>
                <form onSubmit={handleClick(TransitionLeft)} className="contact_form"> 
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" required />
                    <TextField type="email" id="outlined-basic" label="Email" variant="outlined" required />
                    <TextField type="number" id="outlined-basic" label="Number" variant="outlined" />
                    <TextField 
                        id="outlined-multiline-static"
                        label="Your Message"
                        multiline
                        rows={5}
                        required
                    />
                    <Button type="submit" variant='contained'>Submit</Button>
                    <Snackbar 
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={transition}
                      key={transition ? transition.name : ''}
                    >
                      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                          Thank you for getting in touch! 
                      </Alert>
                      </Snackbar>
                </form>
            </div>
          </div>

          <div className="footer_bottom">
              <div className='footer_link'>
                 <Link to="/page#about-us">Services</Link>
                 <Link to="/page#terms-and-conditions">Terms and Conditions</Link>
                 <Link to="/page#privacy-statement">Privacy Statement</Link>
                 <Link to="/page#cookies-policies">Cookies Policy</Link>
              </div>
              <div className='footer_author'>
                  <span>©️ Copyright 2022.</span>
                  <span>All rights reserved. Powered by the <span className='author_name'>Jalal Alizadeh</span></span>
              </div>
          </div>
      </section>
  )
}

export default Footer