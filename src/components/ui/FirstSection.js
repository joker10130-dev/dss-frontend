import React from 'react';

const FirstSection = () => {
  return (
    <div>
      <section class='colored-section' id='title'>
        <div class='container-fluid'>
          <nav class='navbar navbar-expand-lg navbar-dark'>
            <a class='navbar-brand' href='/'>
              mango
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul class='navbar-nav ml-auto'>
                <li class='nav-item'>
                  <a class='nav-link' href='#footer'>
                    Contact
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#features'>
                    KMUTT Restaurant
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#tutorial'>
                    Tutorial
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class='row'>
            <div class='col-lg-6'>
              <h1 class='big-heading'>
                A simple text mining project review restaurant in KMUTT
              </h1>
            </div>
            <div class='col-lg-6'>
              <img
                class='title-image'
                src={require('../../img/mango.png')}
                alt='iphone-mockup'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
