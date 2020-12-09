function ecrire_piedpage_fr(){
document.write("\
	<div id='footer-outer'>\
		<div id='footer-inner'>\
			<div id='bottom'>\
				<div class='box box1'>\
					<div class='moduletable'>\
 						<div class='bannergroup'>\
							<div class='banneritem'>\
								<a href='https://www.anr-hiatus.github.io' target='_blank' rel='noopener noreferrer' title='HIATUS'>\
									<img src='./logos/hiatus.png' height='150' alt='HIATUS'>\
								</a>\
								<div class='clr'></div>\
							</div>\
						</div>\
					</div>\
				</div>\
				<div class='box box2'>\
					<div class='moduletable'>\
 						<div class='bannergroup'>\
							<div class='banneritem'>\
								<a href='https://www.anr.fr' target='_blank' rel='noopener noreferrer' title='ANR'>\
									<img src='./logos/ANR.jpg' alt='ANR'>\
								</a>\
								<div class='clr'></div>\
							</div>\
						</div>\
					</div>\
				</div>\
				<div class='box box3'>\
					<div class='moduletable'>\
						<div class='bannergroup'>\
							<div class='banneritem'>\
								<a href='https://www.anr.fr' target='_blank' rel='noopener noreferrer' title='ANR'>\
									<img src='./fichiers/rien.jpg' alt=''>\
								</a>\
									<div class='clr'></div>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>\
		<div id='footer-sub'>\
			<div id='footer'>\
				<p>\
					Projet ANR HIATUS\
				</p>\
			</div><!-- end footer -->\
		</div>\
	</div>\
");

}


function ecrire_piedpage_en(){
	ecrire_piedpage_fr();
}
