<?php
$pageTitle = 'Contact - Diligenttek';
include('./include/head.php') ?>
<main class="inner-pages services main-layout">
  <section class="banner inner-banner contact-banner flex-column">
    <?php include('./include/sm-header.php') ?>
    <div class="container custom-container-lg">
      <div class="banner-content">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="text-white mb-0 pb-20">
              Contact Us
            </h1>
            <span class="text-center justify-content-center breadcrumb fs-20 text-white fw-700"><a class="text-white" href="./">Home <i class="fa-solid fa-chevron-right"></i></a>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section class="contact-sec pt-100 pb-100">
    <div class="container">
      <div class="row row-gap-30 justify-content-between">
        <div class="col-lg-5">
          <div class="d-flex gap-25 mb-24 flex-wrap">
            <div>
              <img src="./assets/images/chat.svg" class="contact-icon" alt="Diligenttek | Contact | Contact">
            </div>
            <div>
              <h4 class="text-black fs-24 fw-700 mb-15">Chat with us</h4>
              <p class="fs-18 text-black">
                We're waiting to help you every Monday-Friday from 9 am to 5 pm EST easily.
              </p>
            </div>
          </div>
          <div class="d-flex gap-25 mb-24 flex-wrap">
            <div>
              <img src="./assets/images/call.svg" class="contact-icon" alt="Diligenttek | Contact | Contact">
            </div>
            <div>
              <h4 class="text-black fs-24 fw-700 mb-15">Give us a call</h4>
              <p class="fs-18 text-black">
                QGive us a ring at <a href="tel:(021) 349 91546" class="link-hover primary-text">(021) 349 91546</a>. Every monday-friday from 9 am to 5 pm.
              </p>
            </div>
          </div>
          <div class="d-flex gap-25 mb-24 flex-wrap">
            <div>
              <img src="./assets/images/email.svg" class="contact-icon" alt="Diligenttek | Contact | Contact">
            </div>
            <div>
              <h4 class="text-black fs-24 fw-700 mb-15">Email Us</h4>
              <p class="fs-18 text-black">
                Drop us an email at <a href="mailto:hr@diligenttek.com" class="link-hover primary-text">hr@diligenttek.com</a> and you'll receive a reply within 24 hours.
              </p>
            </div>
          </div>
          <div class="d-flex gap-25 mb-24 flex-wrap">
            <div>
              <img src="./assets/images/contact-location.svg" class="contact-icon" alt="Diligenttek | Contact | Contact">
            </div>
            <div>
              <h4 class="text-black fs-24 fw-700 mb-15">Address</h4>
              <p class="fs-18 text-black">
              33, Block 4 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh 75300
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <form action="">
            <div class="form-wrapper contact-form-wrapper">
              <h2 class="fs-45 text-white mb-48 ">Let’s build something
                great together.</h2>
              <div class="row">
                <div class="col-md-6">
                  <div class="field-wrap">
                    <input type="text" class="input-field" placeholder="First name *">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field-wrap">
                    <input type="text" class="input-field" placeholder="Last name *">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field-wrap">
                    <input type="text" class="input-field" placeholder="Company name (optional)">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field-wrap">
                    <input type="text" class="input-field" placeholder="Work email *">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field-wrap">
                    <input type="text" class="input-field" placeholder="Phone number *">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field-wrap">
                    <input type="text" class="input-field" placeholder="Tell us about your project (optional)">
                  </div>
                </div>
                <div class="col-md-12">
                  <p class="form-des mb-20">
                    By sending this form, I confirm that I have read
                    and accepted the <a href="" class="text-decoration-underline">Privacy Policy</a>.
                  </p>
                </div>
                <div class="col-md-6">
                  <button class="secondry-btn btn w-100">Send request</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section class="map-sec">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28939.811261184448!2d67.0840870675331!3d24.94990089448397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s33%2C%20Block%204%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075300!5e0!3m2!1sen!2s!4v1727462727867!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
  <?php include('./include/footer.php') ?>
  <?php include('./include/scripts.php') ?>