import React from 'react';
import InfoCard from './infoCard.component';
import Navbar from './navbar.component';

export default function Sports() {
  return (
    <>
      <Navbar activeClassName="wall_of_fame" />
      <section class="probootstrap-section probootstrap-section-colored">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd">
						<h2>Wall Of Fame</h2>
					</div>
				</div>
			</div>
		</section>
      
    </>
  );
}
