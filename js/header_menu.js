function ecrire_liste_pour_menu_et_bandeau_fr(){
document.write("\
					<li><a href='index.html'>Accueil</a></li>\
					<li><a href='presentation.html'>Pr\u00e9sentation</a></li>\
					<li><a href='consortium.html'>Consortium</a></li>\
					<li><a href='publications.html'>Publications</a></li>\
					<li><a href='actualites.html'>Actualit\u00e9s</a></li>\
					<li><a href='contact.html'>Contact</a></li>\
");
}


function ecrire_liste_pour_menu_et_bandeau_en(){
document.write("\
					<li><a href='index_en.html'>Home</a></li>\
					<li><a href='presentation.html'>Presentation</a></li>\
					<li><a href='consortium.html'>Team</a></li>\
					<li><a href='publications.html'>Publications</a></li>\
					<li><a href='actualites.html'>News</a></li>\
					<li><a href='contact.html'>Contact</a></li>\
");
}




function ecrire_header_fr(adresse_page_langue_alternative){
document.write("\
			<div id='header'>\
				<div class='logoheader'>\
					<h1 id='logo'>\
						HIATUS\
						<span class='header1'>\
						</span>\
					</h1>\
				</div>\
				<h2 class='unseen'>Navigation de recherche</h2>\
				<h3 class='unseen'>Navigation</h3>\
				<ul class='nav menu mod-list'>\
");
ecrire_liste_pour_menu_et_bandeau_fr();
/*					
					<li><a href='index.html'>Accueil</a></li>\
					<li><a href='presentation.html'>Pr\u00e9sentation</a></li>\
					<li><a href='consortium.html'>Consortium</a></li>\
					<li><a href='publications.html'>Publications</a></li>\
					<li><a href='actualites.html'>Actualit\u00e9s</a></li>\
					<li><a href='contact.html'>Contact</a></li>\
*/
document.write("				</ul>\
\
				<div id='line'>\
					<h3 class='unseen'> </h3>\
					<a href='");
document.write(adresse_page_langue_alternative);
document.write("'><img src='fichiers/UK.png' width=40></a>\
				</div>\
\
				<div id='header-image'>\
					<img src='./fichiers/entete_hiatus.png' alt='Logo'>\
				</div>\
\
			</div><!-- end header -->\
\
");
}


function ecrire_header_en(adresse_page_langue_alternative){
document.write("\
			<div id='header'>\
				<div class='logoheader'>\
					<h1 id='logo'>\
						HIATUS\
						<span class='header1'>\
						</span>\
					</h1>\
				</div>\
				<h2 class='unseen'>Navigation de recherche</h2>\
				<h3 class='unseen'>Navigation</h3>\
				<ul class='nav menu mod-list'>\
");
ecrire_liste_pour_menu_et_bandeau_en();
document.write("				</ul>\
\
				<div id='line'>\
					<h3 class='unseen'> </h3>\
					<a href='");
document.write(adresse_page_langue_alternative);
document.write("'><img src='fichiers/FR.png' width=40></a>\
				</div>\
\
				<div id='header-image'>\
					<img src='./fichiers/entete_hiatus.png' alt='Logo'>\
				</div>\
\
			</div><!-- end header -->\
\
");
}

function ecrire_menu_fr(){
document.write("\
			<div id='contentarea'>\
				<div id='breadcrumbs'>\
				</div>\
				<div class='left1 leftbigger' id='nav' role='navigation'>\
					<div class='moduletable_menu'>\
						<ul class='nav menu mod-list'>\
");
ecrire_liste_pour_menu_et_bandeau_fr();
/*
							<li><a href='index.html'>Accueil</a></li>\
							<li><a href='presentation.html'>Pr\u00e9sentation</a></li>\
							<li><a href='consortium.html'>Consortium</a></li>\
							<li><a href='publications.html'>Publications</a></li>\
							<li><a href='actualites.html'>Actualit\u00e9s</a></li>\
							<li><a href='contact.html'>Contact</a></li>\
*/
document.write("				</ul>\
					</div>\
\
\
				</div><!-- end navi -->\
\
");
}


function ecrire_menu_en(){
document.write("\
			<div id='contentarea'>\
				<div id='breadcrumbs'>\
				</div>\
				<div class='left1 leftbigger' id='nav' role='navigation'>\
					<div class='moduletable_menu'>\
						<ul class='nav menu mod-list'>\
");
ecrire_liste_pour_menu_et_bandeau_en();
document.write("				</ul>\
					</div>\
\
\
				</div><!-- end navi -->\
\
");
}
