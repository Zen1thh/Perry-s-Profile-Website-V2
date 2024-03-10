// Function to populate the country dropdown
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'alert-danger'
    const alerts = document.querySelectorAll('.alert-danger')

    setTimeout(() => {
        alerts.forEach(alert => {

            alert.style.display = 'none';
        });
    }, 3000); 
});



function populateCountries() {
    const countries = [
        "Philippines"
    ];

    const select = document.getElementById("countrySelect");

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.text = country;
        select.appendChild(option);
    });

    hideProvinceAndBarangay();

    updateMunicipalDropdownText("Select a City/Municipal");

    // Event listener for country select change
    select.addEventListener("change", function() {
        const selectedCountry = select.value;
        const provinceSelect = document.getElementById("ProvinceSelect");
        const barangaySelect = document.getElementById("BarangaySelect");
        const provinceLabel = document.querySelector('label[for="Province"]');
        const barangayLabel = document.querySelector('label[for="Barangay"]');

        if (selectedCountry === "Philippines") {
            SelectedProvince(); 
            provinceSelect.style.display = "block";
            barangaySelect.style.display = "block";
            provinceLabel.style.display = "block";
            barangayLabel.style.display = "block";
            
            // Update municipal dropdown text
            updateMunicipalDropdownText("Select a Province First.");
        } else {
            hideProvinceAndBarangay();
            // Update municipal dropdown text
            updateMunicipalDropdownText("Select a City/Municipal");
        }
    });
}


// Call the populateCountries function when the document is ready
document.addEventListener("DOMContentLoaded", function() {
    populateCountries();
});

// Function to hide province and barangay
function hideProvinceAndBarangay() {
    const provinceSelect = document.getElementById("ProvinceSelect");
    const barangaySelect = document.getElementById("BarangaySelect");
    const provinceLabel = document.querySelector('label[for="Province"]');
    const barangayLabel = document.querySelector('label[for="Barangay"]');

    provinceSelect.style.display = "none";
    barangaySelect.style.display = "none";
    provinceLabel.style.display = "none";
    barangayLabel.style.display = "none";
}


// Function to populate provinces
function SelectedProvince() {
    const province = [
        "Select Province.",
        "Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan",
        "Batanes", "Batangas", "Benguet", "Biliran", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", 
        "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Cotabato", "Davao de Oro (formerly Compostela Valley)", 
        "Davao del Norte", "Davao del Sur", "Davao Occidental", "Davao Oriental", "Dinagat Islands", "Eastern Samar", 
        "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "La Union", "Laguna", 
        "Lanao del Norte", "Lanao del Sur", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Metro Manila", 
        "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", 
        "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Occidental Mindoro", "Oriental Mindoro", "Palawan", 
        "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar (Western Samar)", "Sarangani", 
        "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", 
        "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"
    ];

    const select = document.getElementById("ProvinceSelect");

    province.forEach(province => {
        const option = document.createElement("option");
        option.value = province;
        option.text = province;
        select.appendChild(option);
    });
}

// Event listener for province select change
document.getElementById("ProvinceSelect").addEventListener("change", function() {
    const selectedProvince = this.value;
    const municipalSelect = document.getElementById("MunicipalSelect");

    if (selectedProvince !== "Select Province.") {
        // Populate the city/municipalities based on selected province
        populateCitiesMunicipalities(selectedProvince);
        municipalSelect.disabled = false; // Enable the municipal dropdown
    } else {
        // If "Select Province" is selected, clear and disable the municipal dropdown
        municipalSelect.innerHTML = '<option value="" selected>Select City/Municipal.</option>';
        municipalSelect.disabled = true;
    }
});

// Function to populate the cities/municipalities dropdown based on the selected province
function populateCitiesMunicipalities(selectedProvince) {
    const municipalities = {

        'Abra'  : [
            'Bangued','Boliney','Bucay','Bucloc','Daguioman','Danglas',
            'Dolores','La Paz','Lacub','Lagangilang','Lagayan','Langiden',
            'Licuan-Baay','Luba','Malibcong','Manabo','Peñarrubia','Pidigan',
            'Pilar','Sallapadan','San Isidro','San Juan','San Quintin','Tayum',
            'Tineg','Tubo','Villaviciosa'
            ],
        'Agusan del Norte' : [
            'Buenavista','Butuan','Cabadbaran','Carmen','Jabonga','Kitcharao',
            'Las Nieves','Magallanes','Nasipit','Remedios T. Romualdez','Santiago',
            'Tubay'
            ],
        'Agusan del Sur' : [
            'Bayugan','Bunawan','Esperanza','La Paz','Loreto','Prosperidad',
            'Rosario','San Francisco','San Luis','Santa Josefa','Sibagat',
            'Talacogon','Trento','Veruela'
            ],
        'Aklan' : [
            'Altavas','Balete','Banga','Batan','Buruanga','Ibajay',
            'Kalibo','Lezo','Libacao','Madalag','Makato','Malay',
            'Malinao','Nabas','New Washington','Numancia','Tangalan'
            ],
        'Albay' : [
            'Bacacay','Camalig','Daraga','Guinobatan','Jovellar','Legazpi',
            'Libon','Ligao','Malilipot','Malinao','Manito','Oas',
            'Pio Duran','Polangui','Rapu-Rapu','Santo Domingo','Tabaco',
            'Tiwi'
            ],
        'Antique' : [
            'Anini-y','Barbaza','Belison','Bugasong','Caluya','Culasi',
            'Hamtic','Laua-an','Libertad','Pandan','Patnongon','San Jose de Buenavista',
            'San Remigio','Sebaste','Sibalom','Tibiao','Tobias Fornier','Valderrama'
            ],
        'Apayao' : [
            'Calanasan','Conner','Flora','Kabugao','Luna','Pudtol',
            'Santa Marcela'
            ],
        'Aurora' : [
            'Baler','Casiguran','Dilasag','Dinalungan','Dingalan','Dipaculao',
            'Maria Aurora','San Luis'
            ],
        'Basilan' : [
            'Akbar','Al-Barka','Hadji Mohammad Ajul','Hadji Muhtamad','Isabela City','Lamitan',
            'Lantawan','Maluso','Sumisip','Tabuan-Lasa','Tipo-Tipo','Tuburan',
            'Ungkaya Pukan'
            ],
        'Bataan' : [
            'Abucay','Bagac','Balanga','Dinalupihan','Hermosa','Limay',
            'Mariveles','Morong','Orani','Orion','Pilar','Samal',
            ],
        'Batanes' : [
            'Basco','Itbayat','Ivana','Mahatao','Sabtang','Uyugan'
            ],
        'Batangas' : [
            'Agoncillo','Alitagtag','Balayan','Balete','Batangas City','Bauan',
            'Calaca','Calatagan','Cuenca','Ibaan','Laurel','Lemery',
            'Lian','Lipa','Lobo','Mabini', 'Malvar','Mataas na kahoy',
            'Nasugbu','Padre Garcia','Rosario','San Jose','San Juan','San Luis',
            'San Nicolas','San Pascual','Santa Teresita','Santo Tomas','Taal',
            'Talisay','Tanauan','Taysan','Tingloy','Tuy'
            ],
        'Benguet' : [
            'Atok','Baguio','Bakun','Bokod','Buguias','Itogon',
            'Kabayan','Kapangan','Kibungan','La Trinidad','Mankayan','Sablan',
            'Tuba','Tublay'
            ],
        'Biliran' : [
            'Almeria','Biliran','Cabucgayan','Caibiran','Culaba','Kawayan',
            'Maripipi','Naval'
            ],
        'Bohol' : [
            'Alicia','Anda','Batuan','Bilar','Candijay','Carmen',
            'Dimiao','Duero','Garcia Hernandez','Guindulman','Jagna','Sevilla',
            'Lila','Loay','Loboc','Mabini', 'Pilar','Sierra Bullones',
            'Valencia'
            ],  
        'Bukidnon' : [
            'Baungon','Cabanglasan','Damulog','Dangcagan','Don Carlos','Impasugong',
            'Kadingilan','Kalilangan','Kibawe','Kitaotao','Lantapan','Libona',
            'Malaybalay','Malitbog','Manolo Fortich','Maramag', 'Pangantucan','Quezon',
            'San Fernando','Sumilao','Talakag','Valencia'
            ],
        'Bulacan' : [
            'Angat','Balagtas','Baliuag','Bocaue','Bulakan','Bustos',
            'Calumpit','Doña Remedios Trinidad','Guiguinto','Hagonoy','Malolos','Marilao',
            'Meycauayan','Norzagaray','Obando','Pandi', 'Paombong','Plaridel',
            'Pulilan','San Ildefonso','San Jose del Monte','San Miguel','San Rafael','Santa Maria'
            ],
        'Cagayan' : [
            'Abulug','Alcala','Allacapan','Amulung','Aparri','Baggao',
            'Ballesteros','Buguey','Calayan','Camalaniugan','Claveria','Enrile',
            'Gattaran','Gonzaga','Iguig','Lal-lo', 'Lasam','Pamplona',
            'Peñablanca','Piat','Rizal','Sanchez-Mira','Santa Ana','Santa Praxedes',
            'Santa Teresita','Santo Niño','Solana','Tuao','Tuguegarao City'
            ],  
        'Camarines Norte' : [
            'Basud','Capalonga','Daet','Jose Panganiban','Labo','Mercedes',
            'Paracale','San Lorenzo Ruiz','San Vicente','Santa Elena','Talisay','Vinzons',
            ],
        'Camarines Sur' : [
            'Baao','Balatan','Bato','Bombon','Buhi','Bula',
            'Cabusao','Calabanga','Camaligan','Canaman','Caramoan','Del Gallego',
            'Gainza','Garchitorena','Goa','Iriga','Lagonoy','Libmanan',
            'Lupi','Magarao','Milaor','Minalabac','Nabua','Naga',
            'Ocampo','Pamplona','Pasacao','Pili','Presentacion','Ragay',
            'Sagñay','San Fernando','San Jose','Sipocot','Siruma','Tigaon',
            'Tinambac'
            ],
        'Camiguin' : [
            'Catarman','Guinsiliban','Mahinog','Mambajao','Sagay'
            ],
        'Capiz' : [
            'Cuartero','Dao','Dumalag','Dumarao','Ivisan','Jamindan',
            'Maayon','Mambusao','Panay','Panitan','Pilar','Pontevedra',
            'President Roxas','Roxas City','Sapian','Sigma', 'Tapaz'
            ],
        'Catanduanes' : [
            'Bagamanoc','Baras','Bato','Caramoran','Gigmoto','Pandan',
            'Panganiban','San Andres','San Miguel','Viga','Virac'
            ],
        'Cavite' : [
            'Alfonso','Amadeo','Bacoor','Carmona','Cavite City','Dasmariñas',
            'General Emilio Aguinaldo','General Mariano Alvarez','General Trias','Imus','Indang','Kawit',
            'Magallanes','Maragondon','Mendez','Naic','Noveleta','Rosario',
            'Silang','Tagaytay','Tanza','Ternate','Trece Martires'
            ],
        'Cebu' : [
            'Alcantara','Alcoy','Alegria','Aloguinsan','Argao','Asturias',
            'Badian','Balamban','Bantayan','Barili','Bogo','Boljoon',
            'Borbon','Carcar','Carmen','Catmon','Cebu City','Compostela',
            'Consolacion','Cordova','Daanbantayan','Dalaguete','Danao','Dumanjug',
            'Ginatilan','Lapu-Lapu','Liloan','Madridejos','Malabuyoc','Mandaue',
            'Medellin','Minglanilla','Moalboal','Naga','Oslob','Pilar',
            'Pinamungajan','Poro','Ronda','Samboan','San Fernando','San Francisco',
            'San Remigio','Santa Fe','Santander','Sibonga','Sogod','Tabogon',
            'Tabuelan','Talisay','Toledo','Tuburan','Tudela'
            ],
        'Compostela Valley' : [
            'Compostela','Laak','Mabini','Maco','Maragusan','Mawab',
            'Monkayo','Montevista','Nabunturan','New Bataan','Pantukan'
            ],
        'Cotabato' : [
            'Alamada','Aleosan','Antipas','Arakan','Banisilan','Carmen',
            'Kabacan','Kidapawan','Libungan','M\'lang','Magpet','Makilala',
            'Matalam','Midsayap','Pigcawayan','Pikit','President Roxas','Tulunan'
            ],
        'Davao del Norte' : [
            'Asuncion','Braulio E. Dujali','Carmen','Kapalong','New Corella','Panabo',
            'Samal','San Isidro','Santo Tomas','Tagum','Talaingod'
            ],  
        'Davao del Sur' : [
            'Bansalan','Davao City','Digos','Hagonoy','Kiblawan','Magsaysay',
            'Malalag','Matanao','Padada','Santa Cruz','Sulop'
            ],
        'Davao Oriental' : [
            'Baganga','Banaybanay','Boston','Caraga','Cateel','Governor Generoso',
            'Lupon','Manay','Mati','San Isidro','Tarragona'
            ],  
        'Dinagat Islands' : [
            'Basilisa','Cagdianao','Dinagat','Libjo','Loreto','San Jose',
            'Tubajon'
            ],
        'Eastern Samar' : [
            'Arteche','Balangiga','Balangkayan','Borongan','Can-avid','Dolores',
            'General MacArthur','Giporlos','Guiuan','Hernani','Jipapad','Lawaan',
            'Llorente','Maslog','Maydolong','Mercedes','Oras','Quinapondan',
            'Salcedo','San Julian','San Policarpo','Sulat','Taft'
            ],  
        'Guimaras' : [
            'Buenavista','Jordan','Nueva Valencia','San Lorenzo','Sibunag'
            ],
        'Ifugao' : [
            'Aguinaldo','Alfonso Lista','Asipulo','Banaue','Hingyon','Hungduan',
            'Kiangan','Lagawe','Lamut','Mayoyao','Tinoc'
            ],  
        'Ilocos Norte' : [
            'Adams','Bacarra','Badoc','Bangui','Banna','Batac',
            'Burgos','Carasi','Currimao','Dingras','Dumalneg','Laoag',
            'Marcos','Nueva Era','Pagudpud','Paoay','Pasuquin','Piddig',
            'Pinili','San Nicolas','Sarrat','Solsona','Vintar'
            ],
        'Ilocos Sur' : [
            'Alilem','Banayoyo','Bantay','Burgos','Cabugao','Candon',
            'Caoayan','Cervantes','Galimuyod','Gregorio del Pilar','Lidlidda','Magsingal',
            'Nagbukel','Narvacan','Quirino','Salcedo','San Emilio','San Esteban',
            'San Ildefonso','San Juan','San Vicente','Santa','Santa Catalina','Santa Cruz',
            'Santa Lucia','Santa Maria','Santiago','Santo Domingo','Sigay','Sinait',
            'Sugpon','Suyo','Tagudin','Vigan'
            ],
        'Iloilo' : [
            'Ajuy','Alimodian','Anilao','Badiangan','Balasan','Banate',
            'Barotac Nuevo','Barotac Viejo','Batad','Bingawan','Cabatuan','Calinog',
            'Carles','Concepcion','Dingle','Dueñas','Dumangas','Estancia',
            'Guimbal','Igbaras','Iloilo City','Janiuay','Lambunao','Leganes',
            'Lemery','Leon','Maasin','Miagao','Mina','New Lucena',
            'Oton','Passi','Pavia','Pototan','San Dionisio','San Enrique',
            'San Joaquin','San Miguel','San Rafael','Santa Barbara','Sara','Tigbauan',
            'Tubungan','Zarraga'
            ],
        'Isabela' : [
            'Alicia','Angadanan','Aurora','Benito Soliven','Burgos','Cabagan',
            'Cabatuan','Cauayan','Cordon','Delfin Albano','Dinapigue','Divilacan',
            'Echague','Gamu','Ilagan','Jones','Luna','Maconacon',
            'Mallig','Naguilian','Palanan','Quezon','Quirino','Ramon',
            'Reina Mercedes','Roxas','San Agustin','San Guillermo','San Isidro','San Manuel',
            'San Mariano','San Mateo','San Pablo','Santa Maria','Santiago','Santo Tomas',
            'Tumauini'
            ],
        'Kalinga' : [
            'Balbalan','Lubuagan','Pasil','Pinukpuk','Rizal','Tabuk',
            'Tanudan','Tinglayan'
            ],
        'La Union' : [
            'Agoo','Aringay','Bacnotan','Bagulin','Balaoan','Bangar',
            'Bauang','Burgos','Caba','Luna','Naguilian','Pugo',
            'Rosario','San Fernando','San Gabriel','San Juan','Santo Tomas','Santol',
            'Sudipen','Tubao'
            ],
        'Laguna' : [
            'Alaminos','Bay','Biñan','Cabuyao','Calamba','Calauan',
            'Cavinti','Famy','Kalayaan','Liliw','Los Baños','Luisiana',
            'Lumban','Mabitac','Magdalena','Majayjay','Nagcarlan','Paete',
            'Pagsanjan','Pakil','Pangil','Pila','Rizal','San Pablo','San Pedro',
            'Santa Cruz','Santa Maria','Santa Rosa','Siniloan','Victoria'
            ],
        'Lanao del Norte' : [
            'Bacolod','Baloi','Baroy','Iligan','Kapatagan','Kauswagan',
            'Kolambugan','Lala','Linamon','Magsaysay','Maigo','Matungao',
            'Munai','Nunungan','Pantao Ragat','Pantar','Poona Piagapo','Salvador',
            'Sapad','Sultan Naga Dimaporo','Tagoloan','Tangcal','Tubod'
            ],
        'Lanao del Sur' : [
            'Amai Manabilang','Bacolod-Kalawi','Balabagan','Balindong','Bayang','Binidayan',
            'Buadiposo-Buntong','Bubong','Butig','Calanogas','Ditsaan-Ramain','Ganassi',
            'Kapai','Kapatagan','Lumba-Bayabao','Lumbaca-Unayan','Lumbatan','Lumbayanague',
            'Madalum','Madamba','Maguing','Malabang','Marantao','Marawi',
            'Marogong','Masiu','Mulondo','Pagayawan','Piagapo','Picong',
            'Poona Bayabao','Pualas','Saguiaran','Sultan Dumalondong','Tagoloan II','Tamparan',
            'Taraka','Tubaran','Tugaya','Wao'
            ],
        'Leyte' : [
            'Abuyog','Alangalang','Albuera','Babatngon','Barugo','Bato',
            'Baybay','Burauen','Calubian','Capoocan','Carigara','Dagami',
            'Dulag','Hilongos','Hindang','Inopacan','Isabel','Jaro',
            'Javier','Julita','Kananga','La Paz','Leyte','MacArthur',
            'Mahaplag','Matag-ob','Matalom','Mayorga','Merida','Ormoc',
            'Palo','Palompon','Pastrana','San Isidro','San Miguel','Santa Fe',
            'Tabango','Tabontabon','Tacloban','Tanauan','Tolosa','Tunga',
            'Villaba'
            ],
        'Maguindanao' : [
            'Barira','Buldon','Datu Anggal Midtimbang','Datu Blah T. Sinsuat','Datu Odin Sinsuat','Kabuntalan',
            'Matanog','Northern Kabuntalan','Parang','Sultan Kudarat','Sultan Mastura','Sultan Sumagka',
            'Upi'
            ],
        'Marinduque' : [
            'Boac','Buenavista','Gasan','Mogpog','Santa Cruz','Torrijos'
            ],  
        'Masbate' : [
            'Aroroy','Baleno','Balud','Batuan','Cataingan','Cawayan',
            'Claveria','Dimasalang','Esperanza','Mandaon','Masbate City','Milagros',
            'Mobo','Monreal','Palanas','Pio V. Corpuz','Placer','San Fernando',
            'San Jacinto','San Pascual','Uson'  
            ],
        'Metro Manila' : [
            'Caloocan','Las Piñas','Makati','Malabon','Mandaluyong','Manila',
            'Marikina','Muntinlupa','Navotas','Parañaque','Pasay','Pasig',
            'Pateros','Quezon City','San Juan','Taguig','Valenzuela'
            ],
        'Misamis Occidental' : [
            'Aloran','Baliangao','Bonifacio','Calamba','Clarin','Concepcion',
            'Don Victoriano Chiongbian','Jimenez','Lopez Jaena','Oroquieta','Ozamiz','Panaon',
            'Plaridel','Sapang Dalaga','Sinacaban','Tangub','Tudela'
            ],
        'Misamis Oriental' : [
            'Alubijid','Balingasag','Balingoan','Binuangan','Cagayan de Oro','Claveria',
            'El Salvador','Gingoog','Gitagum','Initao','Jasaan','Kinoguitan',
            'Lagonglong','Laguindingan','Libertad','Lugait','Magsaysay','Manticao',
            'Medina','Naawan','Opol','Salay','Sugbongcogon','Tagoloan', 
            'Talisayan','Villanueva'
            ],
        'Mountain Province' : [
            'Barlig','Bauko','Besao','Bontoc','Natonin','Paracelis',
            'Sabangan','Sadanga','Sagada','Tadian'
            ],  
        'Negros Occidental' : [
            'Bacolod','Bago','Binalbagan','Cadiz','Calatrava','Candoni',
            'Cauayan','Enrique B. Magalona','Escalante','Himamaylan','Hinigaran','Hinoba-an',
            'Ilog','Isabela','Kabankalan','La Carlota','La Castellana','Manapla',
            'Moises Padilla','Murcia','Pontevedra','Pulupandan','Sagay','Salvador Benedicto',
            'San Carlos','San Enrique','Silay','Sipalay','Talisay','Toboso',
            'Valladolid','Victorias'
            ],      
        'Negros Oriental' : [
            'Amlan','Ayungon','Bacong','Bais','Basay','Bayawan',
            'Bindoy','Canlaon','Dauin','Dumaguete','Guihulngan','Jimalalud',
            'La Libertad','Mabinay','Manjuyod','Pamplona','San Jose','Santa Catalina',
            'Siaton','Sibulan','Tanjay','Tayasan','Valencia','Vallehermoso',
            'Zamboanguita'
            ],
        'Northern Samar' : [
            'Allen','Biri','Bobon','Capul','Catarman','Catubig',
            'Gamay','Laoang','Lapinig','Las Navas','Lavezares','Lope de Vega',
            'Mapanas','Mondragon','Palapag','Pambujan','Rosario','San Antonio',
            'San Isidro','San Jose','San Roque','San Vicente','Silvino Lobos','Victoria'
            ],  
        'Nueva Ecija' : [
            'Aliaga','Bongabon','Cabanatuan','Cabiao','Carranglan','Cuyapo',
            'Gabaldon','Gapan','General Mamerto Natividad','General Tinio','Guimba','Jaen',
            'Laur','Licab','Llanera','Lupao','Muñoz','Nampicuan',
            'Palayan','Pantabangan','Peñaranda','Quezon','Rizal','San Antonio',
            'San Isidro','Cabaritan','San Leonardo','Santa Rosa','Santo Domingo','Talavera',
            'Talugtug','Zaragoza'
            ],
        'Nueva Vizcaya' : [
            'Alfonso Castañeda','Ambaguio','Aritao','Bagabag','Bambang','Bayombong',
            'Diadi','Dupax del Norte','Dupax del Sur','Kasibu','Kayapa','Quezon',
            'Santa Fe','Solano','Villaverde'
            ],
        'Occidental Mindoro' : [
            'Abra de Ilog','Calintaan','Looc','Lubang','Magsaysay','Mamburao',
            'Paluan','Rizal','Sablayan','San Jose','Santa Cruz'
            ],
        'Oriental Mindoro' : [
            'Baco','Bansud','Bongabong','Bulalacao','Calapan','Gloria',
            'Mansalay','Naujan','Pinamalayan','Pola','Puerto Galera','Roxas',
            'San Teodoro','Socorro','Victoria'
            ],
        'Palawan' : [
            'Aborlan','Agutaya','Araceli','Balabac','Bataraza','Brooke\'s Point',
            'Busuanga','Cagayancillo','Coron','Culion','Cuyo','Dumaran',
            'El Nido','Kalayaan','Linapacan','Magsaysay','Narra','Puerto Princesa',     
            'Quezon','Rizal','Roxas','San Vicente','Sofronio Española','Taytay'
            ],  
        'Pampanga' : [
            'Angeles','Apalit','Arayat','Bacolor','Candaba','Floridablanca',
            'Guagua','Lubao','Mabalacat','Macabebe','Magalang','Masantol',
            'Mexico','Minalin','Porac','San Fernando','San Luis','San Simon',       
            'Santa Ana','Santa Rita','Santo Tomas','Sasmuan'
            ],
        'Pangasinan' : [
            'Agno','Aguilar','Alaminos','Alcala','Anda','Asingan',
            'Balungao','Bani','Basista','Bautista','Bayambang','Binalonan',
            'Binmaley','Bolinao','Bugallon','Burgos','Calasiao','Dasol',        
            'Dagupan','Dasol','Infanta','Labrador','Laoac','Lingayen',
            'Mabini','Malasiqui','Manaoag','Mangaldan','Mangatarem','Mapandan',
            'Natividad','Pozorrubio','Rosales','San Carlos','San Fabian','San Jacinto', 
            'San Manuel','San Nicolas','San Quintin','Santa Barbara','Santa Maria','Santo Tomas',
            'Sison','Sual','Tayug','Umingan','Urbiztondo','Urdaneta',
            'Villasis'
            ],
        'Quezon' : [
            'Agdangan','Alabat','Atimonan','Buenavista','Burdeos','Calauag',
            'Candelaria','Catanauan','Dolores','General Luna','General Nakar','Guinayangan',
            'Gumaca','Infanta','Jomalig','Lopez','Lucban','Lucena',     
            'Macalelon','Mauban','Mulanay','Padre Burgos','Pagbilao','Panukulan',
            'Patnanungan','Perez','Pitogo','Plaridel','Polillo','Quezon',
            'Real','Sampaloc','San Andres','San Antonio','San Francisco','San Narciso', 
            'Sariaya','Tagkawayan','Tayabas','Tiaong','Unisan'
            ],      
        'Quirino' : [
            'Aglipay','Cabarroguis','Diffun','Maddela','Nagtipunan','Saguday'
            ],
        'Rizal' : [
            'Angono','Antipolo','Baras','Binangonan','Cainta','Cardona',
            'Jalajala','Morong','Pililla','Rodriguez','San Mateo','Tanay',
            'Taytay','Teresa'       
            ],
        'Romblon' : [
            'Alcantara','Banton','Cajidiocan','Calatrava','Concepcion','Corcuera',
            'Ferrol','Looc','Magdiwang','Odiongan','Romblon','San Agustin',
            'San Andres','San Fernando','San Jose','Santa Fe','Santa Maria'     
            ],
        'Samar' : [
            'Almagro','Basey','Calbayog','Calbiga','Catbalogan','Daram',
            'Gandara','Hinabangan','Jiabong','Marabut','Matuguinao','Motiong',
            'Pagsanghan','Paranas','Pinabacdao','San Jorge','San Jose de Buan','San Sebastian',     
            'Santa Margarita','Santa Rita','Santo Niño','Tagapul-an','Talalora','Tarangnan',
            'Villareal','Zumarraga'
            ],
        'Sarangani' : [
            'Alabel','Glan','Kiamba','Maasim','Maitum','Malapatan',
            'Malungon'  
            ],
        'Shariff Kabunsuan' : [
            'Barira','Buldon','Datu Blah T. Sinsuat','Datu Odin Sinsuat','Kabuntalan','Matanog',
            'Northern Kabuntalan','Parang','Sultan Kudarat','Sultan Mastura','Upi'      
            ],      
        'Siquijor' : [
            'Enrique Villanueva','Larena','Lazi','Maria','San Juan','Siquijor'
            ],
        'Sorsogon' : [
            'Barcelona','Bulan','Bulusan','Casiguran','Castilla','Donsol',
            'Gubat','Irosin','Juban','Magallanes','Matnog','Pilar',
            'Prieto Diaz','Santa Magdalena','Sorsogon City'
            ],  
        'South Cotabato' : [
            'Banga','General Santos','Koronadal','Lake Sebu','Norala','Polomolok',
            'Santo Niño','Surallah','T\'Boli','Tampakan','Tantangan','Tupi'
            ],
        'Southern Leyte' : [
            'Anahawan','Bontoc','Hinunangan','Hinundayan','Libagon','Liloan',
            'Limasawa','Maasin','Macrohon','Malitbog','Padre Burgos','Pintuyan',
            'Saint Bernard','San Francisco','San Juan','San Ricardo','Silago','Sogod',      
            'Tomas Oppus'
            ],
        'Sultan Kudarat' : [
            'Bagumbayan','Columbio','Esperanza','Isulan','Kalamansig','Lambayong',
            'Lebak','Lutayan','Palimbang','President Quirino','Senator Ninoy Aquino','Tacurong'
            ],
        'Sulu' : [
            'Banguingui','Hadji Panglima Tahil','Indanan','Jolo','Kalingalan Caluang','Lugus',
            'Luuk','Maimbung','Old Panamao','Omar','Pandami','Panglima Estino',
            'Pangutaran','Parang','Pata','Patikul','Siasi','Talipao',       
            'Tapul'
            ],
        'Surigao del Norte' : [
            'Alegria','Bacuag','Burgos','Claver','Dapa','Del Carmen',
            'General Luna','Gigaquit','Mainit','Malimono','Pilar','Placer',
            'San Benito','San Francisco','San Isidro','Santa Monica','Sison','Socorro',     
            'Surigao City','Tagana-an','Tubod'
            ],  
        'Surigao del Sur' : [
            'Barobo','Bayabas','Bislig','Cagwait','Cantilan','Carmen',
            'Carrascal','Cortes','Hinatuan','Lanuza','Lianga','Lingig',
            'Madrid','Marihatag','San Agustin','San Miguel','Tagbina','Tago',       
            'Tandag'
            ],      
        'Tarlac' : [
            'Anao','Bamban','Camiling','Capas','Concepcion','Gerona',
            'La Paz','Mayantoc','Moncada','Paniqui','Pura','Ramos',
            'San Clemente','San Jose','San Manuel','Santa Ignacia','Tarlac City','Victoria'
            ],
        'Tawi-Tawi' : [
            'Bongao','Languyan','Mapun','Panglima Sugala','Sapa-Sapa','Sibutu',
            'Simunul','Sitangkai','South Ubian','Tandubas','Turtle Islands'
            ],
        'Zambales' : [
            'Botolan','Cabangan','Candelaria','Iba','Masinloc','Olongapo',
            'Palauig','San Antonio','San Felipe','San Marcelino','San Narciso',
            'Santa Cruz','Subic'        
            ],
        'Zamboanga del Norte' : [
            'Baliguian','Dapitan','Dipolog','Godod','Gutalac','Jose Dalman',
            'Kalawit','Katipunan','La Libertad','Labason','Leon B. Postigo','Liloy',
            'Manukan','Mutia','Piñan','Polanco','President Manuel A. Roxas','Rizal',        
            'Salug','Sergio Osmeña Sr.','Siayan','Sibuco','Sibutad','Sindangan',
            'Siocon','Sirawai','Tampilisan'
            ],
        'Zamboanga del Sur' : [
            'Aurora','Bayog','Dimataling','Dinas','Dumalinao','Dumingag',
            'Guipos','Josefina','Kumalarang','Labangan','Lakewood','Lapuyan',
            'Mahayag','Margosatubig','Midsalip','Molave','Pagadian','Pitogo',       
            'Ramon Magsaysay','San Miguel','San Pablo','Sominot','Tabina','Tambulig',
            'Tigbao','Tukuran','Vincenzo A. Sagun','Zamboanga City'
            ],
        'Zamboanga Sibugay' : [
            'Alicia','Buug','Diplahan','Imelda','Ipil','Kabasalan',
            'Mabuhay','Malangas','Naga','Olutanga','Payao','Roseller Lim',
            'Siay','Talusan','Titay','Tungawan'
            ],          
     

    };

    const municipalSelect = document.getElementById("MunicipalSelect");

    // Clear previous options
    municipalSelect.innerHTML = "";

    // Populate options based on selected province
    municipalities[selectedProvince].forEach(municipality => {
        const option = document.createElement("option");
        option.value = municipality;
        option.text = municipality;
        municipalSelect.appendChild(option);
    });
}

// Function to update municipal dropdown text
function updateMunicipalDropdownText(text) {
    const municipalSelect = document.getElementById("MunicipalSelect");
    municipalSelect.innerHTML = `<option value="" selected>${text}</option>`;
}


//For Animation 
window.onload = function() {
    setTimeout(start, 200);
};

function start() {

    //Helpers
    function lineToAngle(x1, y1, length, radians) {
        var x2 = x1 + length * Math.cos(radians),
            y2 = y1 + length * Math.sin(radians);
        return { x: x2, y: y2 };
    }

    function randomRange(min, max) {
        return min + Math.random() * (max - min);
    }

    function degreesToRads(degrees) {
        return degrees / 180 * Math.PI;
    }

    //Particle
    var particle = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 0,

        create: function(x, y, speed, direction) {
            var obj = Object.create(this);
            obj.x = x;
            obj.y = y;
            obj.vx = Math.cos(direction) * speed;
            obj.vy = Math.sin(direction) * speed;
            return obj;
        },

        getSpeed: function() {
            return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        },

        setSpeed: function(speed) {
            var heading = this.getHeading();
            this.vx = Math.cos(heading) * speed;
            this.vy = Math.sin(heading) * speed;
        },

        getHeading: function() {
            return Math.atan2(this.vy, this.vx);
        },

        setHeading: function(heading) {
            var speed = this.getSpeed();
            this.vx = Math.cos(heading) * speed;
            this.vy = Math.sin(heading) * speed;
        },

        update: function() {
            this.x += this.vx;
            this.y += this.vy;
        }
    };

    //Canvas and settings
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        stars = [],
        shootingStars = [],
        layers = [
            { speed: 0.015, scale: 0.2, count: 320 },
            { speed: 0.03, scale: 0.5, count: 50 },
            { speed: 0.05, scale: 0.75, count: 30 }
        ],
        starsAngle = 145,
        shootingStarSpeed = {
            min: 15,
            max: 20
        },
        shootingStarOpacityDelta = 0.01,
        trailLengthDelta = 0.01,
        shootingStarEmittingInterval = 2000,
        shootingStarLifeTime = 500,
        maxTrailLength = 300,
        starBaseRadius = 2,
        shootingStarRadius = 3,
        paused = false;

    //Create all stars
    for (var j = 0; j < layers.length; j += 1) {
        var layer = layers[j];
        for (var i = 0; i < layer.count; i += 1) {
            var star = particle.create(randomRange(0, width), randomRange(0, height), 0, 0);
            star.radius = starBaseRadius * layer.scale;
            star.setSpeed(layer.speed);
            star.setHeading(degreesToRads(starsAngle));
            stars.push(star);
        }
    }

    function createShootingStar() {
        var shootingStar = particle.create(randomRange(width / 2, width), randomRange(0, height / 2), 0, 0);
        shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
        shootingStar.setHeading(degreesToRads(starsAngle));
        shootingStar.radius = shootingStarRadius;
        shootingStar.opacity = 0;
        shootingStar.trailLengthDelta = 0;
        shootingStar.isSpawning = true;
        shootingStar.isDying = false;
        shootingStars.push(shootingStar);
    }

    function killShootingStar(shootingStar) {
        setTimeout(function() {
            shootingStar.isDying = true;
        }, shootingStarLifeTime);
    }

    function update() {
        if (!paused) {
            context.clearRect(0, 0, width, height);
            context.fillStyle = "#282a3a";
            context.fillRect(0, 0, width, height);
            context.fill();

            for (var i = 0; i < stars.length; i += 1) {
                var star = stars[i];
                star.update();
                drawStar(star);
                if (star.x > width) {
                    star.x = 0;
                }
                if (star.x < 0) {
                    star.x = width;
                }
                if (star.y > height) {
                    star.y = 0;
                }
                if (star.y < 0) {
                    star.y = height;
                }
            }

            for (i = 0; i < shootingStars.length; i += 1) {
                var shootingStar = shootingStars[i];
                if (shootingStar.isSpawning) {
                    shootingStar.opacity += shootingStarOpacityDelta;
                    if (shootingStar.opacity >= 1.0) {
                        shootingStar.isSpawning = false;
                        killShootingStar(shootingStar);
                    }
                }
                if (shootingStar.isDying) {
                    shootingStar.opacity -= shootingStarOpacityDelta;
                    if (shootingStar.opacity <= 0.0) {
                        shootingStar.isDying = false;
                        shootingStar.isDead = true;
                    }
                }
                shootingStar.trailLengthDelta += trailLengthDelta;

                shootingStar.update();
                if (shootingStar.opacity > 0.0) {
                    drawShootingStar(shootingStar);
                }
            }

            //Delete dead shooting shootingStars
            for (i = shootingStars.length -1; i >= 0 ; i--){
                if (shootingStars[i].isDead){
                    shootingStars.splice(i, 1);
                }
            }
        }
        requestAnimationFrame(update);
    }

    function drawStar(star) {
        context.fillStyle = "rgb(255, 221, 157)";
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        context.fill();
    }

    function drawShootingStar(p) {
        var x = p.x,
            y = p.y,
            currentTrailLength = (maxTrailLength * p.trailLengthDelta),
            pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

        context.fillStyle = "rgba(255, 255, 255, " + p.opacity + ")";
        // context.beginPath();
        // context.arc(x, y, p.radius, 0, Math.PI * 2, false);
        // context.fill();
        var starLength = 5;
        context.beginPath();
        context.moveTo(x - 1, y + 1);

        context.lineTo(x, y + starLength);
        context.lineTo(x + 1, y + 1);

        context.lineTo(x + starLength, y);
        context.lineTo(x + 1, y - 1);

        context.lineTo(x, y + 1);
        context.lineTo(x, y - starLength);

        context.lineTo(x - 1, y - 1);
        context.lineTo(x - starLength, y);

        context.lineTo(x - 1, y + 1);
        context.lineTo(x - starLength, y);

        context.closePath();
        context.fill();

        //trail
        context.fillStyle = "rgba(255, 221, 157, " + p.opacity + ")";
        context.beginPath();
        context.moveTo(x - 1, y - 1);
        context.lineTo(pos.x, pos.y);
        context.lineTo(x + 1, y + 1);
        context.closePath();
        context.fill();
    }

    //Run
    update();

    //Shooting stars
    setInterval(function() {
        if (paused) return;
        createShootingStar();
    }, shootingStarEmittingInterval);

    window.onfocus = function () {
      paused = false;
    };

    window.onblur = function () {
      paused = true;
    };

}

