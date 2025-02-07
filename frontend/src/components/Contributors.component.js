import React from 'react';
import InfoCard from './infoCard.component';
import Navbar from './navbar.component';

export default function Sports() {
  return (
    <>
      <Navbar activeClassName="contributors" />
      <section class="probootstrap-section probootstrap-section-colored">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd">
            <h2>Contributions</h2>
          </div>
        </div>
      </div>
    </section>
   <section>
   <ul className="probootstrap-side-menu">
                      <li>
                        {/* <!-- Tech --> */}
                        {/* update with backend */}
                        <InfoCard
                          info={{
                            name: "Shidarth pandi",
                            image: "",
                            position: "Sports Secretary",
                            facebook_id:
                            "https://www.facebook.com/siddhu8101",
                            email_id:
                              "sports_secretary@students.iitmandi.ac.in",
                          }}
                        />
                      </li>
                    </ul>
   </section>
    <section class="probootstrap-section">
     <div class=" text-center">
       <h2>Willing to contribute?</h2>
     </div>
     <div
       class="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated contributing-button">
       <a class="" href="https://github.com/KamandPrompt/Gymkhana-IITMandi">Contribute Now</a>
     </div>
   </section>
    </>
  );
}
