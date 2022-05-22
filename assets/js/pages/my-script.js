const baseURL = "/";
const baseURLUploads = "/";
const baseURLChat = "/";
const countriesObj = {
  "AF": "Afghanistan",
  "AX": "Åland Islands",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua and Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia, Plurinational State of",
  "BQ": "Bonaire, Sint Eustatius and Saba",
  "BA": "Bosnia and Herzegovina",
  "BW": "Botswana",
  "BV": "Bouvet Island",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "CV": "Cape Verde",
  "KY": "Cayman Islands",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands",
  "CO": "Colombia",
  "KM": "Comoros",
  "CG": "Congo",
  "CD": "Congo, the Democratic Republic of the",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "Côte d'Ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Curaçao",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (Malvinas)",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories",
  "GA": "Gabon",
  "GM": "Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island and McDonald Islands",
  "VA": "Holy See (Vatican City State)",
  "HN": "Honduras",
  "HK": "Hong Kong",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran, Islamic Republic of",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KP": "Korea, Democratic People's Republic of",
  "KR": "Korea, Republic of",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People's Democratic Republic",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MK": "Macedonia, the former Yugoslav Republic of",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia, Federated States of",
  "MD": "Moldova, Republic of",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestinian Territory, Occupied",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RE": "Réunion",
  "RO": "Romania",
  "RU": "Russian Federation",
  "RW": "Rwanda",
  "BL": "Saint Barthélemy",
  "SH": "Saint Helena, Ascension and Tristan da Cunha",
  "KN": "Saint Kitts and Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin (French part)",
  "PM": "Saint Pierre and Miquelon",
  "VC": "Saint Vincent and the Grenadines",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome and Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SX": "Sint Maarten (Dutch part)",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia and the South Sandwich Islands",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan",
  "SR": "Suriname",
  "SJ": "Svalbard and Jan Mayen",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syrian Arab Republic",
  "TW": "Taiwan, Province of China",
  "TJ": "Tajikistan",
  "TZ": "Tanzania, United Republic of",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad and Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks and Caicos Islands",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "US": "United States",
  "UM": "United States Minor Outlying Islands",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela, Bolivarian Republic of",
  "VN": "Viet Nam",
  "VG": "Virgin Islands, British",
  "VI": "Virgin Islands, U.S.",
  "WF": "Wallis and Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
};

// countries select
const countries = [
  { value: "AF", text: "Afghanistan" },
  { value: "AX", text: "Åland Islands" },
  { value: "AL", text: "Albania" },
  { value: "DZ", text: "Algeria" },
  { value: "AS", text: "American Samoa" },
  { value: "AD", text: "Andorra" },
  { value: "AO", text: "Angola" },
  { value: "AI", text: "Anguilla" },
  { value: "AQ", text: "Antarctica" },
  { value: "AG", text: "Antigua and Barbuda" },
  { value: "AR", text: "Argentina" },
  { value: "AM", text: "Armenia" },
  { value: "AW", text: "Aruba" },
  { value: "AU", text: "Australia" },
  { value: "AT", text: "Austria" },
  { value: "AZ", text: "Azerbaijan" },
  { value: "BS", text: "Bahamas" },
  { value: "BH", text: "Bahrain" },
  { value: "BD", text: "Bangladesh" },
  { value: "BB", text: "Barbados" },
  { value: "BY", text: "Belarus" },
  { value: "BE", text: "Belgium" },
  { value: "BZ", text: "Belize" },
  { value: "BJ", text: "Benin" },
  { value: "BM", text: "Bermuda" },
  { value: "BT", text: "Bhutan" },
  { value: "BO", text: "Bolivia, Plurinational State of" },
  { value: "BQ", text: "Bonaire, Sint Eustatius and Saba" },
  { value: "BA", text: "Bosnia and Herzegovina" },
  { value: "BW", text: "Botswana" },
  { value: "BV", text: "Bouvet Island" },
  { value: "BR", text: "Brazil" },
  { value: "IO", text: "British Indian Ocean Territory" },
  { value: "BN", text: "Brunei Darussalam" },
  { value: "BG", text: "Bulgaria" },
  { value: "BF", text: "Burkina Faso" },
  { value: "BI", text: "Burundi" },
  { value: "KH", text: "Cambodia" },
  { value: "CM", text: "Cameroon" },
  { value: "CA", text: "Canada" },
  { value: "CV", text: "Cape Verde" },
  { value: "KY", text: "Cayman Islands" },
  { value: "CF", text: "Central African Republic" },
  { value: "TD", text: "Chad" },
  { value: "CL", text: "Chile" },
  { value: "CN", text: "China" },
  { value: "CX", text: "Christmas Island" },
  { value: "CC", text: "Cocos (Keeling) Islands" },
  { value: "CO", text: "Colombia" },
  { value: "KM", text: "Comoros" },
  { value: "CG", text: "Congo" },
  { value: "CD", text: "Congo, the Democratic Republic of the" },
  { value: "CK", text: "Cook Islands" },
  { value: "CR", text: "Costa Rica" },
  { value: "CI", text: "Côte d'Ivoire" },
  { value: "HR", text: "Croatia" },
  { value: "CU", text: "Cuba" },
  { value: "CW", text: "Curaçao" },
  { value: "CY", text: "Cyprus" },
  { value: "CZ", text: "Czech Republic" },
  { value: "DK", text: "Denmark" },
  { value: "DJ", text: "Djibouti" },
  { value: "DM", text: "Dominica" },
  { value: "DO", text: "Dominican Republic" },
  { value: "EC", text: "Ecuador" },
  { value: "EG", text: "Egypt" },
  { value: "SV", text: "El Salvador" },
  { value: "GQ", text: "Equatorial Guinea" },
  { value: "ER", text: "Eritrea" },
  { value: "EE", text: "Estonia" },
  { value: "ET", text: "Ethiopia" },
  { value: "FK", text: "Falkland Islands (Malvinas)" },
  { value: "FO", text: "Faroe Islands" },
  { value: "FJ", text: "Fiji" },
  { value: "FI", text: "Finland" },
  { value: "FR", text: "France" },
  { value: "GF", text: "French Guiana" },
  { value: "PF", text: "French Polynesia" },
  { value: "TF", text: "French Southern Territories" },
  { value: "GA", text: "Gabon" },
  { value: "GM", text: "Gambia" },
  { value: "GE", text: "Georgia" },
  { value: "DE", text: "Germany" },
  { value: "GH", text: "Ghana" },
  { value: "GI", text: "Gibraltar" },
  { value: "GR", text: "Greece" },
  { value: "GL", text: "Greenland" },
  { value: "GD", text: "Grenada" },
  { value: "GP", text: "Guadeloupe" },
  { value: "GU", text: "Guam" },
  { value: "GT", text: "Guatemala" },
  { value: "GG", text: "Guernsey" },
  { value: "GN", text: "Guinea" },
  { value: "GW", text: "Guinea-Bissau" },
  { value: "GY", text: "Guyana" },
  { value: "HT", text: "Haiti" },
  { value: "HM", text: "Heard Island and McDonald Islands" },
  { value: "VA", text: "Holy See (Vatican City State)" },
  { value: "HN", text: "Honduras" },
  { value: "HK", text: "Hong Kong" },
  { value: "HU", text: "Hungary" },
  { value: "IS", text: "Iceland" },
  { value: "IN", text: "India" },
  { value: "ID", text: "Indonesia" },
  { value: "IR", text: "Iran, Islamic Republic of" },
  { value: "IQ", text: "Iraq" },
  { value: "IE", text: "Ireland" },
  { value: "IM", text: "Isle of Man" },
  { value: "IL", text: "Israel" },
  { value: "IT", text: "Italy" },
  { value: "JM", text: "Jamaica" },
  { value: "JP", text: "Japan" },
  { value: "JE", text: "Jersey" },
  { value: "JO", text: "Jordan" },
  { value: "KZ", text: "Kazakhstan" },
  { value: "KE", text: "Kenya" },
  { value: "KI", text: "Kiribati" },
  { value: "KP", text: "Korea, Democratic People's Republic of" },
  { value: "KR", text: "Korea, Republic of" },
  { value: "KW", text: "Kuwait" },
  { value: "KG", text: "Kyrgyzstan" },
  { value: "LA", text: "Lao People's Democratic Republic" },
  { value: "LV", text: "Latvia" },
  { value: "LB", text: "Lebanon" },
  { value: "LS", text: "Lesotho" },
  { value: "LR", text: "Liberia" },
  { value: "LY", text: "Libya" },
  { value: "LI", text: "Liechtenstein" },
  { value: "LT", text: "Lithuania" },
  { value: "LU", text: "Luxembourg" },
  { value: "MO", text: "Macao" },
  { value: "MK", text: "Macedonia, the former Yugoslav Republic of" },
  { value: "MG", text: "Madagascar" },
  { value: "MW", text: "Malawi" },
  { value: "MY", text: "Malaysia" },
  { value: "MV", text: "Maldives" },
  { value: "ML", text: "Mali" },
  { value: "MT", text: "Malta" },
  { value: "MH", text: "Marshall Islands" },
  { value: "MQ", text: "Martinique" },
  { value: "MR", text: "Mauritania" },
  { value: "MU", text: "Mauritius" },
  { value: "YT", text: "Mayotte" },
  { value: "MX", text: "Mexico" },
  { value: "FM", text: "Micronesia, Federated States of" },
  { value: "MD", text: "Moldova, Republic of" },
  { value: "MC", text: "Monaco" },
  { value: "MN", text: "Mongolia" },
  { value: "ME", text: "Montenegro" },
  { value: "MS", text: "Montserrat" },
  { value: "MA", text: "Morocco" },
  { value: "MZ", text: "Mozambique" },
  { value: "MM", text: "Myanmar" },
  { value: "NA", text: "Namibia" },
  { value: "NR", text: "Nauru" },
  { value: "NP", text: "Nepal" },
  { value: "NL", text: "Netherlands" },
  { value: "NC", text: "New Caledonia" },
  { value: "NZ", text: "New Zealand" },
  { value: "NI", text: "Nicaragua" },
  { value: "NE", text: "Niger" },
  { value: "NG", text: "Nigeria" },
  { value: "NU", text: "Niue" },
  { value: "NF", text: "Norfolk Island" },
  { value: "MP", text: "Northern Mariana Islands" },
  { value: "NO", text: "Norway" },
  { value: "OM", text: "Oman" },
  { value: "PK", text: "Pakistan" },
  { value: "PW", text: "Palau" },
  { value: "PS", text: "Palestinian Territory, Occupied" },
  { value: "PA", text: "Panama" },
  { value: "PG", text: "Papua New Guinea" },
  { value: "PY", text: "Paraguay" },
  { value: "PE", text: "Peru" },
  { value: "PH", text: "Philippines" },
  { value: "PN", text: "Pitcairn" },
  { value: "PL", text: "Poland" },
  { value: "PT", text: "Portugal" },
  { value: "PR", text: "Puerto Rico" },
  { value: "QA", text: "Qatar" },
  { value: "RE", text: "Réunion" },
  { value: "RO", text: "Romania" },
  { value: "RU", text: "Russian Federation" },
  { value: "RW", text: "Rwanda" },
  { value: "BL", text: "Saint Barthélemy" },
  { value: "SH", text: "Saint Helena, Ascension and Tristan da Cunha" },
  { value: "KN", text: "Saint Kitts and Nevis" },
  { value: "LC", text: "Saint Lucia" },
  { value: "MF", text: "Saint Martin (French part)" },
  { value: "PM", text: "Saint Pierre and Miquelon" },
  { value: "VC", text: "Saint Vincent and the Grenadines" },
  { value: "WS", text: "Samoa" },
  { value: "SM", text: "San Marino" },
  { value: "ST", text: "Sao Tome and Principe" },
  { value: "SA", text: "Saudi Arabia" },
  { value: "SN", text: "Senegal" },
  { value: "RS", text: "Serbia" },
  { value: "SC", text: "Seychelles" },
  { value: "SL", text: "Sierra Leone" },
  { value: "SG", text: "Singapore" },
  { value: "SX", text: "Sint Maarten (Dutch part)" },
  { value: "SK", text: "Slovakia" },
  { value: "SI", text: "Slovenia" },
  { value: "SB", text: "Solomon Islands" },
  { value: "SO", text: "Somalia" },
  { value: "ZA", text: "South Africa" },
  { value: "GS", text: "South Georgia and the South Sandwich Islands" },
  { value: "SS", text: "South Sudan" },
  { value: "ES", text: "Spain" },
  { value: "LK", text: "Sri Lanka" },
  { value: "SD", text: "Sudan" },
  { value: "SR", text: "Suriname" },
  { value: "SJ", text: "Svalbard and Jan Mayen" },
  { value: "SZ", text: "Swaziland" },
  { value: "SE", text: "Sweden" },
  { value: "CH", text: "Switzerland" },
  { value: "SY", text: "Syrian Arab Republic" },
  { value: "TW", text: "Taiwan, Province of China" },
  { value: "TJ", text: "Tajikistan" },
  { value: "TZ", text: "Tanzania, United Republic of" },
  { value: "TH", text: "Thailand" },
  { value: "TL", text: "Timor-Leste" },
  { value: "TG", text: "Togo" },
  { value: "TK", text: "Tokelau" },
  { value: "TO", text: "Tonga" },
  { value: "TT", text: "Trinidad and Tobago" },
  { value: "TN", text: "Tunisia" },
  { value: "TR", text: "Turkey" },
  { value: "TM", text: "Turkmenistan" },
  { value: "TC", text: "Turks and Caicos Islands" },
  { value: "TV", text: "Tuvalu" },
  { value: "UG", text: "Uganda" },
  { value: "UA", text: "Ukraine" },
  { value: "AE", text: "United Arab Emirates" },
  { value: "GB", text: "United Kingdom" },
  { value: "US", text: "United States" },
  { value: "UM", text: "United States Minor Outlying Islands" },
  { value: "UY", text: "Uruguay" },
  { value: "UZ", text: "Uzbekistan" },
  { value: "VU", text: "Vanuatu" },
  { value: "VE", text: "Venezuela, Bolivarian Republic of" },
  { value: "VN", text: "Viet Nam" },
  { value: "VG", text: "Virgin Islands, British" },
  { value: "VI", text: "Virgin Islands, U.S." },
  { value: "WF", text: "Wallis and Futuna" },
  { value: "EH", text: "Western Sahara" },
  { value: "YE", text: "Yemen" },
  { value: "ZM", text: "Zambia" },
  { value: "ZW", text: "Zimbabwe" }
];

// month select
const monthL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// year select
const currentYear = (new Date()).getFullYear();
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
const years = range(currentYear + 10, currentYear - 50, -1);

// levels
const levels = ['', 'Standard', 'Featured', 'Premium'];

$(document).ready(() => {
  $('.countries').append(
    countries.map((el) => `<option value="${el.value}">${el.text}</option>`).join('')
  );

  $('.month').append(
    monthL.map(el => `<option value="${el}">${el}</option>`).join('')
  );

  $('.year').append(
    years.map(el => `<option value="${el}">${el}</option>`).join('')
  );
});


// ##############################################################################################################################################
// function global ##############################################################################################################################
// ##############################################################################################################################################

function logout() {
  window.localStorage.clear();
  window.location = 'auth.html';
}

function SwalError() {
  Swal.fire({
    text: "Sorry, looks like there are some errors detected, please try again.",
    icon: "error",
    buttonsStyling: false,
    confirmButtonText: "Ok, got it!",
    customClass: {
      confirmButton: "btn font-weight-bold btn-light"
    }
  })
}

// autocomplete using typehead #####################################################################
function substringMatcher(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function (i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};


// ##############################################################################################################################################
// function converters ##########################################################################################################################
// ##############################################################################################################################################

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

function date_my(val) {
  return val ? moment(val).format('MMM YYYY') : 'Present';
}

function date_format(val) {
  return val ? moment(val).format('DD MMM YYYY') : " ";
}

function date_fromNow(val) {
  return val ? moment(val).fromNow() : " ";
}

function total_work_experience(work_experience) {
  let moments = work_experience.map(d => moment(d.joiningDate));
  let firstJoining = moment.min(moments);
  let now = moment(new Date()); //todays date
  let duration = moment.duration(now.diff(firstJoining));
  return Math.round(duration.asYears());
}


// ##############################################################################################################################################
// elenents converters ##########################################################################################################################
// ##############################################################################################################################################

// alert message 
const alertMessage = (msg, type) =>
  /* html */ `
    <div class="alert alert-custom alert-outline-${type} alert-shadow fade show mb-10 p-4" role="alert">
      <div class="alert-icon"><i class="flaticon-warning"></i></div>
      <div class="alert-text">
        <b>${type == 'danger' ? 'Oops.' : ''}</b>
        ${msg}
      </div>
      <div class="alert-close">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="ki ki-close"></i></span>
        </button>
      </div>
    </div>
  `;

// null exception
const isNull = val => val == null ? 'Not Specified' : val;


// quries selector 
window.queries = {};
$.each(document.location.search.substr(1).split('&'), function (c, q) {
  var i = q.split('=');
  i.length > 1 && (queries[i[0].toString()] = i[1].toString());
});
