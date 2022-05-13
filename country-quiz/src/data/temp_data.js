const tempData = [
  {
    "name": "Afghanistan",
    "capital": "Kabul",
    "flags": {
      "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
    },
    "independent": false
  },
  {
    "name": "Åland Islands",
    "capital": "Mariehamn",
    "flags": {
      "svg": "https://flagcdn.com/ax.svg",
      "png": "https://flagcdn.com/w320/ax.png"
    },
    "independent": false
  },
  {
    "name": "Albania",
    "capital": "Tirana",
    "flags": {
      "svg": "https://flagcdn.com/al.svg",
      "png": "https://flagcdn.com/w320/al.png"
    },
    "independent": false
  },
  {
    "name": "Algeria",
    "capital": "Algiers",
    "flags": {
      "svg": "https://flagcdn.com/dz.svg",
      "png": "https://flagcdn.com/w320/dz.png"
    },
    "independent": false
  },
  {
    "name": "American Samoa",
    "capital": "Pago Pago",
    "flags": {
      "svg": "https://flagcdn.com/as.svg",
      "png": "https://flagcdn.com/w320/as.png"
    },
    "independent": false
  },
  {
    "name": "Andorra",
    "capital": "Andorra la Vella",
    "flags": {
      "svg": "https://flagcdn.com/ad.svg",
      "png": "https://flagcdn.com/w320/ad.png"
    },
    "independent": false
  },
  {
    "name": "Angola",
    "capital": "Luanda",
    "flags": {
      "svg": "https://flagcdn.com/ao.svg",
      "png": "https://flagcdn.com/w320/ao.png"
    },
    "independent": false
  },
  {
    "name": "Anguilla",
    "capital": "The Valley",
    "flags": {
      "svg": "https://flagcdn.com/ai.svg",
      "png": "https://flagcdn.com/w320/ai.png"
    },
    "independent": false
  },
  {
    "name": "Antarctica",
    "flags": {
      "svg": "https://flagcdn.com/aq.svg",
      "png": "https://flagcdn.com/w320/aq.png"
    },
    "independent": false
  },
  {
    "name": "Antigua and Barbuda",
    "capital": "Saint John's",
    "flags": {
      "svg": "https://flagcdn.com/ag.svg",
      "png": "https://flagcdn.com/w320/ag.png"
    },
    "independent": false
  },
  {
    "name": "Argentina",
    "capital": "Buenos Aires",
    "flags": {
      "svg": "https://flagcdn.com/ar.svg",
      "png": "https://flagcdn.com/w320/ar.png"
    },
    "independent": false
  },
  {
    "name": "Armenia",
    "capital": "Yerevan",
    "flags": {
      "svg": "https://flagcdn.com/am.svg",
      "png": "https://flagcdn.com/w320/am.png"
    },
    "independent": false
  },
  {
    "name": "Aruba",
    "capital": "Oranjestad",
    "flags": {
      "svg": "https://flagcdn.com/aw.svg",
      "png": "https://flagcdn.com/w320/aw.png"
    },
    "independent": false
  },
  {
    "name": "Australia",
    "capital": "Canberra",
    "flags": {
      "svg": "https://flagcdn.com/au.svg",
      "png": "https://flagcdn.com/w320/au.png"
    },
    "independent": false
  },
  {
    "name": "Austria",
    "capital": "Vienna",
    "flags": {
      "svg": "https://flagcdn.com/at.svg",
      "png": "https://flagcdn.com/w320/at.png"
    },
    "independent": false
  },
  {
    "name": "Azerbaijan",
    "capital": "Baku",
    "flags": {
      "svg": "https://flagcdn.com/az.svg",
      "png": "https://flagcdn.com/w320/az.png"
    },
    "independent": false
  },
  {
    "name": "Bahamas",
    "capital": "Nassau",
    "flags": {
      "svg": "https://flagcdn.com/bs.svg",
      "png": "https://flagcdn.com/w320/bs.png"
    },
    "independent": false
  },
  {
    "name": "Bahrain",
    "capital": "Manama",
    "flags": {
      "svg": "https://flagcdn.com/bh.svg",
      "png": "https://flagcdn.com/w320/bh.png"
    },
    "independent": false
  },
  {
    "name": "Bangladesh",
    "capital": "Dhaka",
    "flags": {
      "svg": "https://flagcdn.com/bd.svg",
      "png": "https://flagcdn.com/w320/bd.png"
    },
    "independent": false
  },
  {
    "name": "Barbados",
    "capital": "Bridgetown",
    "flags": {
      "svg": "https://flagcdn.com/bb.svg",
      "png": "https://flagcdn.com/w320/bb.png"
    },
    "independent": false
  },
  {
    "name": "Belarus",
    "capital": "Minsk",
    "flags": {
      "svg": "https://flagcdn.com/by.svg",
      "png": "https://flagcdn.com/w320/by.png"
    },
    "independent": false
  },
  {
    "name": "Belgium",
    "capital": "Brussels",
    "flags": {
      "svg": "https://flagcdn.com/be.svg",
      "png": "https://flagcdn.com/w320/be.png"
    },
    "independent": false
  },
  {
    "name": "Belize",
    "capital": "Belmopan",
    "flags": {
      "svg": "https://flagcdn.com/bz.svg",
      "png": "https://flagcdn.com/w320/bz.png"
    },
    "independent": false
  },
  {
    "name": "Benin",
    "capital": "Porto-Novo",
    "flags": {
      "svg": "https://flagcdn.com/bj.svg",
      "png": "https://flagcdn.com/w320/bj.png"
    },
    "independent": false
  },
  {
    "name": "Bermuda",
    "capital": "Hamilton",
    "flags": {
      "svg": "https://flagcdn.com/bm.svg",
      "png": "https://flagcdn.com/w320/bm.png"
    },
    "independent": false
  },
  {
    "name": "Bhutan",
    "capital": "Thimphu",
    "flags": {
      "svg": "https://flagcdn.com/bt.svg",
      "png": "https://flagcdn.com/w320/bt.png"
    },
    "independent": false
  },
  {
    "name": "Bolivia (Plurinational State of)",
    "capital": "Sucre",
    "flags": {
      "svg": "https://flagcdn.com/bo.svg",
      "png": "https://flagcdn.com/w320/bo.png"
    },
    "independent": false
  },
  {
    "name": "Bonaire, Sint Eustatius and Saba",
    "capital": "Kralendijk",
    "flags": {
      "svg": "https://flagcdn.com/bq.svg",
      "png": "https://flagcdn.com/w320/bq.png"
    },
    "independent": false
  },
  {
    "name": "Bosnia and Herzegovina",
    "capital": "Sarajevo",
    "flags": {
      "svg": "https://flagcdn.com/ba.svg",
      "png": "https://flagcdn.com/w320/ba.png"
    },
    "independent": false
  },
  {
    "name": "Botswana",
    "capital": "Gaborone",
    "flags": {
      "svg": "https://flagcdn.com/bw.svg",
      "png": "https://flagcdn.com/w320/bw.png"
    },
    "independent": false
  },
  {
    "name": "Bouvet Island",
    "flags": {
      "svg": "https://flagcdn.com/bv.svg",
      "png": "https://flagcdn.com/w320/bv.png"
    },
    "independent": false
  },
  {
    "name": "Brazil",
    "capital": "Brasília",
    "flags": {
      "svg": "https://flagcdn.com/br.svg",
      "png": "https://flagcdn.com/w320/br.png"
    },
    "independent": false
  },
  {
    "name": "British Indian Ocean Territory",
    "capital": "Diego Garcia",
    "flags": {
      "svg": "https://flagcdn.com/io.svg",
      "png": "https://flagcdn.com/w320/io.png"
    },
    "independent": false
  },
  {
    "name": "United States Minor Outlying Islands",
    "flags": {
      "svg": "https://flagcdn.com/um.svg",
      "png": "https://flagcdn.com/w320/um.png"
    },
    "independent": false
  },
  {
    "name": "Virgin Islands (British)",
    "capital": "Road Town",
    "flags": {
      "svg": "https://flagcdn.com/vg.svg",
      "png": "https://flagcdn.com/w320/vg.png"
    },
    "independent": false
  },
  {
    "name": "Virgin Islands (U.S.)",
    "capital": "Charlotte Amalie",
    "flags": {
      "svg": "https://flagcdn.com/vi.svg",
      "png": "https://flagcdn.com/w320/vi.png"
    },
    "independent": false
  },
  {
    "name": "Brunei Darussalam",
    "capital": "Bandar Seri Begawan",
    "flags": {
      "svg": "https://flagcdn.com/bn.svg",
      "png": "https://flagcdn.com/w320/bn.png"
    },
    "independent": false
  },
  {
    "name": "Bulgaria",
    "capital": "Sofia",
    "flags": {
      "svg": "https://flagcdn.com/bg.svg",
      "png": "https://flagcdn.com/w320/bg.png"
    },
    "independent": false
  },
  {
    "name": "Burkina Faso",
    "capital": "Ouagadougou",
    "flags": {
      "svg": "https://flagcdn.com/bf.svg",
      "png": "https://flagcdn.com/w320/bf.png"
    },
    "independent": false
  },
  {
    "name": "Burundi",
    "capital": "Gitega",
    "flags": {
      "svg": "https://flagcdn.com/bi.svg",
      "png": "https://flagcdn.com/w320/bi.png"
    },
    "independent": false
  },
  {
    "name": "Cambodia",
    "capital": "Phnom Penh",
    "flags": {
      "svg": "https://flagcdn.com/kh.svg",
      "png": "https://flagcdn.com/w320/kh.png"
    },
    "independent": false
  },
  {
    "name": "Cameroon",
    "capital": "Yaoundé",
    "flags": {
      "svg": "https://flagcdn.com/cm.svg",
      "png": "https://flagcdn.com/w320/cm.png"
    },
    "independent": false
  },
  {
    "name": "Canada",
    "capital": "Ottawa",
    "flags": {
      "svg": "https://flagcdn.com/ca.svg",
      "png": "https://flagcdn.com/w320/ca.png"
    },
    "independent": false
  },
  {
    "name": "Cabo Verde",
    "capital": "Praia",
    "flags": {
      "svg": "https://flagcdn.com/cv.svg",
      "png": "https://flagcdn.com/w320/cv.png"
    },
    "independent": false
  },
  {
    "name": "Cayman Islands",
    "capital": "George Town",
    "flags": {
      "svg": "https://flagcdn.com/ky.svg",
      "png": "https://flagcdn.com/w320/ky.png"
    },
    "independent": false
  },
  {
    "name": "Central African Republic",
    "capital": "Bangui",
    "flags": {
      "svg": "https://flagcdn.com/cf.svg",
      "png": "https://flagcdn.com/w320/cf.png"
    },
    "independent": false
  },
  {
    "name": "Chad",
    "capital": "N'Djamena",
    "flags": {
      "svg": "https://flagcdn.com/td.svg",
      "png": "https://flagcdn.com/w320/td.png"
    },
    "independent": false
  },
  {
    "name": "Chile",
    "capital": "Santiago",
    "flags": {
      "svg": "https://flagcdn.com/cl.svg",
      "png": "https://flagcdn.com/w320/cl.png"
    },
    "independent": false
  },
  {
    "name": "China",
    "capital": "Beijing",
    "flags": {
      "svg": "https://flagcdn.com/cn.svg",
      "png": "https://flagcdn.com/w320/cn.png"
    },
    "independent": false
  },
  {
    "name": "Christmas Island",
    "capital": "Flying Fish Cove",
    "flags": {
      "svg": "https://flagcdn.com/cx.svg",
      "png": "https://flagcdn.com/w320/cx.png"
    },
    "independent": false
  },
  {
    "name": "Cocos (Keeling) Islands",
    "capital": "West Island",
    "flags": {
      "svg": "https://flagcdn.com/cc.svg",
      "png": "https://flagcdn.com/w320/cc.png"
    },
    "independent": false
  },
  {
    "name": "Colombia",
    "capital": "Bogotá",
    "flags": {
      "svg": "https://flagcdn.com/co.svg",
      "png": "https://flagcdn.com/w320/co.png"
    },
    "independent": false
  },
  {
    "name": "Comoros",
    "capital": "Moroni",
    "flags": {
      "svg": "https://flagcdn.com/km.svg",
      "png": "https://flagcdn.com/w320/km.png"
    },
    "independent": false
  },
  {
    "name": "Congo",
    "capital": "Brazzaville",
    "flags": {
      "svg": "https://flagcdn.com/cg.svg",
      "png": "https://flagcdn.com/w320/cg.png"
    },
    "independent": false
  },
  {
    "name": "Congo (Democratic Republic of the)",
    "capital": "Kinshasa",
    "flags": {
      "svg": "https://flagcdn.com/cd.svg",
      "png": "https://flagcdn.com/w320/cd.png"
    },
    "independent": false
  },
  {
    "name": "Cook Islands",
    "capital": "Avarua",
    "flags": {
      "svg": "https://flagcdn.com/ck.svg",
      "png": "https://flagcdn.com/w320/ck.png"
    },
    "independent": false
  },
  {
    "name": "Costa Rica",
    "capital": "San José",
    "flags": {
      "svg": "https://flagcdn.com/cr.svg",
      "png": "https://flagcdn.com/w320/cr.png"
    },
    "independent": false
  },
  {
    "name": "Croatia",
    "capital": "Zagreb",
    "flags": {
      "svg": "https://flagcdn.com/hr.svg",
      "png": "https://flagcdn.com/w320/hr.png"
    },
    "independent": false
  },
  {
    "name": "Cuba",
    "capital": "Havana",
    "flags": {
      "svg": "https://flagcdn.com/cu.svg",
      "png": "https://flagcdn.com/w320/cu.png"
    },
    "independent": false
  },
  {
    "name": "Curaçao",
    "capital": "Willemstad",
    "flags": {
      "svg": "https://flagcdn.com/cw.svg",
      "png": "https://flagcdn.com/w320/cw.png"
    },
    "independent": false
  },
  {
    "name": "Cyprus",
    "capital": "Nicosia",
    "flags": {
      "svg": "https://flagcdn.com/cy.svg",
      "png": "https://flagcdn.com/w320/cy.png"
    },
    "independent": false
  },
  {
    "name": "Czech Republic",
    "capital": "Prague",
    "flags": {
      "svg": "https://flagcdn.com/cz.svg",
      "png": "https://flagcdn.com/w320/cz.png"
    },
    "independent": false
  },
  {
    "name": "Denmark",
    "capital": "Copenhagen",
    "flags": {
      "svg": "https://flagcdn.com/dk.svg",
      "png": "https://flagcdn.com/w320/dk.png"
    },
    "independent": false
  },
  {
    "name": "Djibouti",
    "capital": "Djibouti",
    "flags": {
      "svg": "https://flagcdn.com/dj.svg",
      "png": "https://flagcdn.com/w320/dj.png"
    },
    "independent": false
  },
  {
    "name": "Dominica",
    "capital": "Roseau",
    "flags": {
      "svg": "https://flagcdn.com/dm.svg",
      "png": "https://flagcdn.com/w320/dm.png"
    },
    "independent": false
  },
  {
    "name": "Dominican Republic",
    "capital": "Santo Domingo",
    "flags": {
      "svg": "https://flagcdn.com/do.svg",
      "png": "https://flagcdn.com/w320/do.png"
    },
    "independent": false
  },
  {
    "name": "Ecuador",
    "capital": "Quito",
    "flags": {
      "svg": "https://flagcdn.com/ec.svg",
      "png": "https://flagcdn.com/w320/ec.png"
    },
    "independent": false
  },
  {
    "name": "Egypt",
    "capital": "Cairo",
    "flags": {
      "svg": "https://flagcdn.com/eg.svg",
      "png": "https://flagcdn.com/w320/eg.png"
    },
    "independent": false
  },
  {
    "name": "El Salvador",
    "capital": "San Salvador",
    "flags": {
      "svg": "https://flagcdn.com/sv.svg",
      "png": "https://flagcdn.com/w320/sv.png"
    },
    "independent": false
  },
  {
    "name": "Equatorial Guinea",
    "capital": "Malabo",
    "flags": {
      "svg": "https://flagcdn.com/gq.svg",
      "png": "https://flagcdn.com/w320/gq.png"
    },
    "independent": false
  },
  {
    "name": "Eritrea",
    "capital": "Asmara",
    "flags": {
      "svg": "https://flagcdn.com/er.svg",
      "png": "https://flagcdn.com/w320/er.png"
    },
    "independent": false
  },
  {
    "name": "Estonia",
    "capital": "Tallinn",
    "flags": {
      "svg": "https://flagcdn.com/ee.svg",
      "png": "https://flagcdn.com/w320/ee.png"
    },
    "independent": false
  },
  {
    "name": "Ethiopia",
    "capital": "Addis Ababa",
    "flags": {
      "svg": "https://flagcdn.com/et.svg",
      "png": "https://flagcdn.com/w320/et.png"
    },
    "independent": false
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "capital": "Stanley",
    "flags": {
      "svg": "https://flagcdn.com/fk.svg",
      "png": "https://flagcdn.com/w320/fk.png"
    },
    "independent": false
  },
  {
    "name": "Faroe Islands",
    "capital": "Tórshavn",
    "flags": {
      "svg": "https://flagcdn.com/fo.svg",
      "png": "https://flagcdn.com/w320/fo.png"
    },
    "independent": false
  },
  {
    "name": "Fiji",
    "capital": "Suva",
    "flags": {
      "svg": "https://flagcdn.com/fj.svg",
      "png": "https://flagcdn.com/w320/fj.png"
    },
    "independent": false
  },
  {
    "name": "Finland",
    "capital": "Helsinki",
    "flags": {
      "svg": "https://flagcdn.com/fi.svg",
      "png": "https://flagcdn.com/w320/fi.png"
    },
    "independent": false
  },
  {
    "name": "France",
    "capital": "Paris",
    "flags": {
      "svg": "https://flagcdn.com/fr.svg",
      "png": "https://flagcdn.com/w320/fr.png"
    },
    "independent": false
  },
  {
    "name": "French Guiana",
    "capital": "Cayenne",
    "flags": {
      "svg": "https://flagcdn.com/gf.svg",
      "png": "https://flagcdn.com/w320/gf.png"
    },
    "independent": false
  },
  {
    "name": "French Polynesia",
    "capital": "Papeetē",
    "flags": {
      "svg": "https://flagcdn.com/pf.svg",
      "png": "https://flagcdn.com/w320/pf.png"
    },
    "independent": false
  },
  {
    "name": "French Southern Territories",
    "capital": "Port-aux-Français",
    "flags": {
      "svg": "https://flagcdn.com/tf.svg",
      "png": "https://flagcdn.com/w320/tf.png"
    },
    "independent": false
  },
  {
    "name": "Gabon",
    "capital": "Libreville",
    "flags": {
      "svg": "https://flagcdn.com/ga.svg",
      "png": "https://flagcdn.com/w320/ga.png"
    },
    "independent": false
  },
  {
    "name": "Gambia",
    "capital": "Banjul",
    "flags": {
      "svg": "https://flagcdn.com/gm.svg",
      "png": "https://flagcdn.com/w320/gm.png"
    },
    "independent": false
  },
  {
    "name": "Georgia",
    "capital": "Tbilisi",
    "flags": {
      "svg": "https://flagcdn.com/ge.svg",
      "png": "https://flagcdn.com/w320/ge.png"
    },
    "independent": false
  },
  {
    "name": "Germany",
    "capital": "Berlin",
    "flags": {
      "svg": "https://flagcdn.com/de.svg",
      "png": "https://flagcdn.com/w320/de.png"
    },
    "independent": false
  },
  {
    "name": "Ghana",
    "capital": "Accra",
    "flags": {
      "svg": "https://flagcdn.com/gh.svg",
      "png": "https://flagcdn.com/w320/gh.png"
    },
    "independent": false
  },
  {
    "name": "Gibraltar",
    "capital": "Gibraltar",
    "flags": {
      "svg": "https://flagcdn.com/gi.svg",
      "png": "https://flagcdn.com/w320/gi.png"
    },
    "independent": false
  },
  {
    "name": "Greece",
    "capital": "Athens",
    "flags": {
      "svg": "https://flagcdn.com/gr.svg",
      "png": "https://flagcdn.com/w320/gr.png"
    },
    "independent": false
  },
  {
    "name": "Greenland",
    "capital": "Nuuk",
    "flags": {
      "svg": "https://flagcdn.com/gl.svg",
      "png": "https://flagcdn.com/w320/gl.png"
    },
    "independent": false
  },
  {
    "name": "Grenada",
    "capital": "St. George's",
    "flags": {
      "svg": "https://flagcdn.com/gd.svg",
      "png": "https://flagcdn.com/w320/gd.png"
    },
    "independent": false
  },
  {
    "name": "Guadeloupe",
    "capital": "Basse-Terre",
    "flags": {
      "svg": "https://flagcdn.com/gp.svg",
      "png": "https://flagcdn.com/w320/gp.png"
    },
    "independent": false
  },
  {
    "name": "Guam",
    "capital": "Hagåtña",
    "flags": {
      "svg": "https://flagcdn.com/gu.svg",
      "png": "https://flagcdn.com/w320/gu.png"
    },
    "independent": false
  },
  {
    "name": "Guatemala",
    "capital": "Guatemala City",
    "flags": {
      "svg": "https://flagcdn.com/gt.svg",
      "png": "https://flagcdn.com/w320/gt.png"
    },
    "independent": false
  },
  {
    "name": "Guernsey",
    "capital": "St. Peter Port",
    "flags": {
      "svg": "https://flagcdn.com/gg.svg",
      "png": "https://flagcdn.com/w320/gg.png"
    },
    "independent": false
  },
  {
    "name": "Guinea",
    "capital": "Conakry",
    "flags": {
      "svg": "https://flagcdn.com/gn.svg",
      "png": "https://flagcdn.com/w320/gn.png"
    },
    "independent": false
  },
  {
    "name": "Guinea-Bissau",
    "capital": "Bissau",
    "flags": {
      "svg": "https://flagcdn.com/gw.svg",
      "png": "https://flagcdn.com/w320/gw.png"
    },
    "independent": false
  },
  {
    "name": "Guyana",
    "capital": "Georgetown",
    "flags": {
      "svg": "https://flagcdn.com/gy.svg",
      "png": "https://flagcdn.com/w320/gy.png"
    },
    "independent": false
  },
  {
    "name": "Haiti",
    "capital": "Port-au-Prince",
    "flags": {
      "svg": "https://flagcdn.com/ht.svg",
      "png": "https://flagcdn.com/w320/ht.png"
    },
    "independent": false
  },
  {
    "name": "Heard Island and McDonald Islands",
    "flags": {
      "svg": "https://flagcdn.com/hm.svg",
      "png": "https://flagcdn.com/w320/hm.png"
    },
    "independent": false
  },
  {
    "name": "Vatican City",
    "capital": "Vatican City",
    "flags": {
      "svg": "https://flagcdn.com/va.svg",
      "png": "https://flagcdn.com/w320/va.png"
    },
    "independent": false
  },
  {
    "name": "Honduras",
    "capital": "Tegucigalpa",
    "flags": {
      "svg": "https://flagcdn.com/hn.svg",
      "png": "https://flagcdn.com/w320/hn.png"
    },
    "independent": false
  },
  {
    "name": "Hungary",
    "capital": "Budapest",
    "flags": {
      "svg": "https://flagcdn.com/hu.svg",
      "png": "https://flagcdn.com/w320/hu.png"
    },
    "independent": false
  },
  {
    "name": "Hong Kong",
    "capital": "City of Victoria",
    "flags": {
      "svg": "https://flagcdn.com/hk.svg",
      "png": "https://flagcdn.com/w320/hk.png"
    },
    "independent": false
  },
  {
    "name": "Iceland",
    "capital": "Reykjavík",
    "flags": {
      "svg": "https://flagcdn.com/is.svg",
      "png": "https://flagcdn.com/w320/is.png"
    },
    "independent": false
  },
  {
    "name": "India",
    "capital": "New Delhi",
    "flags": {
      "svg": "https://flagcdn.com/in.svg",
      "png": "https://flagcdn.com/w320/in.png"
    },
    "independent": false
  },
  {
    "name": "Indonesia",
    "capital": "Jakarta",
    "flags": {
      "svg": "https://flagcdn.com/id.svg",
      "png": "https://flagcdn.com/w320/id.png"
    },
    "independent": false
  },
  {
    "name": "Ivory Coast",
    "capital": "Yamoussoukro",
    "flags": {
      "svg": "https://flagcdn.com/ci.svg",
      "png": "https://flagcdn.com/w320/ci.png"
    },
    "independent": false
  },
  {
    "name": "Iran (Islamic Republic of)",
    "capital": "Tehran",
    "flags": {
      "svg": "https://flagcdn.com/ir.svg",
      "png": "https://flagcdn.com/w320/ir.png"
    },
    "independent": false
  },
  {
    "name": "Iraq",
    "capital": "Baghdad",
    "flags": {
      "svg": "https://flagcdn.com/iq.svg",
      "png": "https://flagcdn.com/w320/iq.png"
    },
    "independent": false
  },
  {
    "name": "Ireland",
    "capital": "Dublin",
    "flags": {
      "svg": "https://flagcdn.com/ie.svg",
      "png": "https://flagcdn.com/w320/ie.png"
    },
    "independent": false
  },
  {
    "name": "Isle of Man",
    "capital": "Douglas",
    "flags": {
      "svg": "https://flagcdn.com/im.svg",
      "png": "https://flagcdn.com/w320/im.png"
    },
    "independent": false
  },
  {
    "name": "Israel",
    "capital": "Jerusalem",
    "flags": {
      "svg": "https://flagcdn.com/il.svg",
      "png": "https://flagcdn.com/w320/il.png"
    },
    "independent": false
  },
  {
    "name": "Italy",
    "capital": "Rome",
    "flags": {
      "svg": "https://flagcdn.com/it.svg",
      "png": "https://flagcdn.com/w320/it.png"
    },
    "independent": false
  },
  {
    "name": "Jamaica",
    "capital": "Kingston",
    "flags": {
      "svg": "https://flagcdn.com/jm.svg",
      "png": "https://flagcdn.com/w320/jm.png"
    },
    "independent": false
  },
  {
    "name": "Japan",
    "capital": "Tokyo",
    "flags": {
      "svg": "https://flagcdn.com/jp.svg",
      "png": "https://flagcdn.com/w320/jp.png"
    },
    "independent": false
  },
  {
    "name": "Jersey",
    "capital": "Saint Helier",
    "flags": {
      "svg": "https://flagcdn.com/je.svg",
      "png": "https://flagcdn.com/w320/je.png"
    },
    "independent": false
  },
  {
    "name": "Jordan",
    "capital": "Amman",
    "flags": {
      "svg": "https://flagcdn.com/jo.svg",
      "png": "https://flagcdn.com/w320/jo.png"
    },
    "independent": false
  },
  {
    "name": "Kazakhstan",
    "capital": "Nur-Sultan",
    "flags": {
      "svg": "https://flagcdn.com/kz.svg",
      "png": "https://flagcdn.com/w320/kz.png"
    },
    "independent": false
  },
  {
    "name": "Kenya",
    "capital": "Nairobi",
    "flags": {
      "svg": "https://flagcdn.com/ke.svg",
      "png": "https://flagcdn.com/w320/ke.png"
    },
    "independent": false
  },
  {
    "name": "Kiribati",
    "capital": "South Tarawa",
    "flags": {
      "svg": "https://flagcdn.com/ki.svg",
      "png": "https://flagcdn.com/w320/ki.png"
    },
    "independent": false
  },
  {
    "name": "Kuwait",
    "capital": "Kuwait City",
    "flags": {
      "svg": "https://flagcdn.com/kw.svg",
      "png": "https://flagcdn.com/w320/kw.png"
    },
    "independent": false
  },
  {
    "name": "Kyrgyzstan",
    "capital": "Bishkek",
    "flags": {
      "svg": "https://flagcdn.com/kg.svg",
      "png": "https://flagcdn.com/w320/kg.png"
    },
    "independent": false
  },
  {
    "name": "Lao People's Democratic Republic",
    "capital": "Vientiane",
    "flags": {
      "svg": "https://flagcdn.com/la.svg",
      "png": "https://flagcdn.com/w320/la.png"
    },
    "independent": false
  },
  {
    "name": "Latvia",
    "capital": "Riga",
    "flags": {
      "svg": "https://flagcdn.com/lv.svg",
      "png": "https://flagcdn.com/w320/lv.png"
    },
    "independent": false
  },
  {
    "name": "Lebanon",
    "capital": "Beirut",
    "flags": {
      "svg": "https://flagcdn.com/lb.svg",
      "png": "https://flagcdn.com/w320/lb.png"
    },
    "independent": false
  },
  {
    "name": "Lesotho",
    "capital": "Maseru",
    "flags": {
      "svg": "https://flagcdn.com/ls.svg",
      "png": "https://flagcdn.com/w320/ls.png"
    },
    "independent": false
  },
  {
    "name": "Liberia",
    "capital": "Monrovia",
    "flags": {
      "svg": "https://flagcdn.com/lr.svg",
      "png": "https://flagcdn.com/w320/lr.png"
    },
    "independent": false
  },
  {
    "name": "Libya",
    "capital": "Tripoli",
    "flags": {
      "svg": "https://flagcdn.com/ly.svg",
      "png": "https://flagcdn.com/w320/ly.png"
    },
    "independent": false
  },
  {
    "name": "Liechtenstein",
    "capital": "Vaduz",
    "flags": {
      "svg": "https://flagcdn.com/li.svg",
      "png": "https://flagcdn.com/w320/li.png"
    },
    "independent": false
  },
  {
    "name": "Lithuania",
    "capital": "Vilnius",
    "flags": {
      "svg": "https://flagcdn.com/lt.svg",
      "png": "https://flagcdn.com/w320/lt.png"
    },
    "independent": false
  },
  {
    "name": "Luxembourg",
    "capital": "Luxembourg",
    "flags": {
      "svg": "https://flagcdn.com/lu.svg",
      "png": "https://flagcdn.com/w320/lu.png"
    },
    "independent": false
  },
  {
    "name": "Macao",
    "flags": {
      "svg": "https://flagcdn.com/mo.svg",
      "png": "https://flagcdn.com/w320/mo.png"
    },
    "independent": false
  },
  {
    "name": "North Macedonia",
    "capital": "Skopje",
    "flags": {
      "svg": "https://flagcdn.com/mk.svg",
      "png": "https://flagcdn.com/w320/mk.png"
    },
    "independent": false
  },
  {
    "name": "Madagascar",
    "capital": "Antananarivo",
    "flags": {
      "svg": "https://flagcdn.com/mg.svg",
      "png": "https://flagcdn.com/w320/mg.png"
    },
    "independent": false
  },
  {
    "name": "Malawi",
    "capital": "Lilongwe",
    "flags": {
      "svg": "https://flagcdn.com/mw.svg",
      "png": "https://flagcdn.com/w320/mw.png"
    },
    "independent": false
  },
  {
    "name": "Malaysia",
    "capital": "Kuala Lumpur",
    "flags": {
      "svg": "https://flagcdn.com/my.svg",
      "png": "https://flagcdn.com/w320/my.png"
    },
    "independent": false
  },
  {
    "name": "Maldives",
    "capital": "Malé",
    "flags": {
      "svg": "https://flagcdn.com/mv.svg",
      "png": "https://flagcdn.com/w320/mv.png"
    },
    "independent": false
  },
  {
    "name": "Mali",
    "capital": "Bamako",
    "flags": {
      "svg": "https://flagcdn.com/ml.svg",
      "png": "https://flagcdn.com/w320/ml.png"
    },
    "independent": false
  },
  {
    "name": "Malta",
    "capital": "Valletta",
    "flags": {
      "svg": "https://flagcdn.com/mt.svg",
      "png": "https://flagcdn.com/w320/mt.png"
    },
    "independent": false
  },
  {
    "name": "Marshall Islands",
    "capital": "Majuro",
    "flags": {
      "svg": "https://flagcdn.com/mh.svg",
      "png": "https://flagcdn.com/w320/mh.png"
    },
    "independent": false
  },
  {
    "name": "Martinique",
    "capital": "Fort-de-France",
    "flags": {
      "svg": "https://flagcdn.com/mq.svg",
      "png": "https://flagcdn.com/w320/mq.png"
    },
    "independent": false
  },
  {
    "name": "Mauritania",
    "capital": "Nouakchott",
    "flags": {
      "svg": "https://flagcdn.com/mr.svg",
      "png": "https://flagcdn.com/w320/mr.png"
    },
    "independent": false
  },
  {
    "name": "Mauritius",
    "capital": "Port Louis",
    "flags": {
      "svg": "https://flagcdn.com/mu.svg",
      "png": "https://flagcdn.com/w320/mu.png"
    },
    "independent": false
  },
  {
    "name": "Mayotte",
    "capital": "Mamoudzou",
    "flags": {
      "svg": "https://flagcdn.com/yt.svg",
      "png": "https://flagcdn.com/w320/yt.png"
    },
    "independent": false
  },
  {
    "name": "Mexico",
    "capital": "Mexico City",
    "flags": {
      "svg": "https://flagcdn.com/mx.svg",
      "png": "https://flagcdn.com/w320/mx.png"
    },
    "independent": false
  },
  {
    "name": "Micronesia (Federated States of)",
    "capital": "Palikir",
    "flags": {
      "svg": "https://flagcdn.com/fm.svg",
      "png": "https://flagcdn.com/w320/fm.png"
    },
    "independent": false
  },
  {
    "name": "Moldova (Republic of)",
    "capital": "Chișinău",
    "flags": {
      "svg": "https://flagcdn.com/md.svg",
      "png": "https://flagcdn.com/w320/md.png"
    },
    "independent": false
  },
  {
    "name": "Monaco",
    "capital": "Monaco",
    "flags": {
      "svg": "https://flagcdn.com/mc.svg",
      "png": "https://flagcdn.com/w320/mc.png"
    },
    "independent": false
  },
  {
    "name": "Mongolia",
    "capital": "Ulan Bator",
    "flags": {
      "svg": "https://flagcdn.com/mn.svg",
      "png": "https://flagcdn.com/w320/mn.png"
    },
    "independent": false
  },
  {
    "name": "Montenegro",
    "capital": "Podgorica",
    "flags": {
      "svg": "https://flagcdn.com/me.svg",
      "png": "https://flagcdn.com/w320/me.png"
    },
    "independent": false
  },
  {
    "name": "Montserrat",
    "capital": "Plymouth",
    "flags": {
      "svg": "https://flagcdn.com/ms.svg",
      "png": "https://flagcdn.com/w320/ms.png"
    },
    "independent": false
  },
  {
    "name": "Morocco",
    "capital": "Rabat",
    "flags": {
      "svg": "https://flagcdn.com/ma.svg",
      "png": "https://flagcdn.com/w320/ma.png"
    },
    "independent": false
  },
  {
    "name": "Mozambique",
    "capital": "Maputo",
    "flags": {
      "svg": "https://flagcdn.com/mz.svg",
      "png": "https://flagcdn.com/w320/mz.png"
    },
    "independent": false
  },
  {
    "name": "Myanmar",
    "capital": "Naypyidaw",
    "flags": {
      "svg": "https://flagcdn.com/mm.svg",
      "png": "https://flagcdn.com/w320/mm.png"
    },
    "independent": false
  },
  {
    "name": "Namibia",
    "capital": "Windhoek",
    "flags": {
      "svg": "https://flagcdn.com/na.svg",
      "png": "https://flagcdn.com/w320/na.png"
    },
    "independent": false
  },
  {
    "name": "Nauru",
    "capital": "Yaren",
    "flags": {
      "svg": "https://flagcdn.com/nr.svg",
      "png": "https://flagcdn.com/w320/nr.png"
    },
    "independent": false
  },
  {
    "name": "Nepal",
    "capital": "Kathmandu",
    "flags": {
      "svg": "https://flagcdn.com/np.svg",
      "png": "https://flagcdn.com/w320/np.png"
    },
    "independent": false
  },
  {
    "name": "Netherlands",
    "capital": "Amsterdam",
    "flags": {
      "svg": "https://flagcdn.com/nl.svg",
      "png": "https://flagcdn.com/w320/nl.png"
    },
    "independent": false
  },
  {
    "name": "New Caledonia",
    "capital": "Nouméa",
    "flags": {
      "svg": "https://flagcdn.com/nc.svg",
      "png": "https://flagcdn.com/w320/nc.png"
    },
    "independent": false
  },
  {
    "name": "New Zealand",
    "capital": "Wellington",
    "flags": {
      "svg": "https://flagcdn.com/nz.svg",
      "png": "https://flagcdn.com/w320/nz.png"
    },
    "independent": false
  },
  {
    "name": "Nicaragua",
    "capital": "Managua",
    "flags": {
      "svg": "https://flagcdn.com/ni.svg",
      "png": "https://flagcdn.com/w320/ni.png"
    },
    "independent": false
  },
  {
    "name": "Niger",
    "capital": "Niamey",
    "flags": {
      "svg": "https://flagcdn.com/ne.svg",
      "png": "https://flagcdn.com/w320/ne.png"
    },
    "independent": false
  },
  {
    "name": "Nigeria",
    "capital": "Abuja",
    "flags": {
      "svg": "https://flagcdn.com/ng.svg",
      "png": "https://flagcdn.com/w320/ng.png"
    },
    "independent": false
  },
  {
    "name": "Niue",
    "capital": "Alofi",
    "flags": {
      "svg": "https://flagcdn.com/nu.svg",
      "png": "https://flagcdn.com/w320/nu.png"
    },
    "independent": false
  },
  {
    "name": "Norfolk Island",
    "capital": "Kingston",
    "flags": {
      "svg": "https://flagcdn.com/nf.svg",
      "png": "https://flagcdn.com/w320/nf.png"
    },
    "independent": false
  },
  {
    "name": "Korea (Democratic People's Republic of)",
    "capital": "Pyongyang",
    "flags": {
      "svg": "https://flagcdn.com/kp.svg",
      "png": "https://flagcdn.com/w320/kp.png"
    },
    "independent": false
  },
  {
    "name": "Northern Mariana Islands",
    "capital": "Saipan",
    "flags": {
      "svg": "https://flagcdn.com/mp.svg",
      "png": "https://flagcdn.com/w320/mp.png"
    },
    "independent": false
  },
  {
    "name": "Norway",
    "capital": "Oslo",
    "flags": {
      "svg": "https://flagcdn.com/no.svg",
      "png": "https://flagcdn.com/w320/no.png"
    },
    "independent": false
  },
  {
    "name": "Oman",
    "capital": "Muscat",
    "flags": {
      "svg": "https://flagcdn.com/om.svg",
      "png": "https://flagcdn.com/w320/om.png"
    },
    "independent": false
  },
  {
    "name": "Pakistan",
    "capital": "Islamabad",
    "flags": {
      "svg": "https://flagcdn.com/pk.svg",
      "png": "https://flagcdn.com/w320/pk.png"
    },
    "independent": false
  },
  {
    "name": "Palau",
    "capital": "Ngerulmud",
    "flags": {
      "svg": "https://flagcdn.com/pw.svg",
      "png": "https://flagcdn.com/w320/pw.png"
    },
    "independent": false
  },
  {
    "name": "Palestine, State of",
    "capital": "Ramallah",
    "flags": {
      "svg": "https://flagcdn.com/ps.svg",
      "png": "https://flagcdn.com/w320/ps.png"
    },
    "independent": false
  },
  {
    "name": "Panama",
    "capital": "Panama City",
    "flags": {
      "svg": "https://flagcdn.com/pa.svg",
      "png": "https://flagcdn.com/w320/pa.png"
    },
    "independent": false
  },
  {
    "name": "Papua New Guinea",
    "capital": "Port Moresby",
    "flags": {
      "svg": "https://flagcdn.com/pg.svg",
      "png": "https://flagcdn.com/w320/pg.png"
    },
    "independent": false
  },
  {
    "name": "Paraguay",
    "capital": "Asunción",
    "flags": {
      "svg": "https://flagcdn.com/py.svg",
      "png": "https://flagcdn.com/w320/py.png"
    },
    "independent": false
  },
  {
    "name": "Peru",
    "capital": "Lima",
    "flags": {
      "svg": "https://flagcdn.com/pe.svg",
      "png": "https://flagcdn.com/w320/pe.png"
    },
    "independent": false
  },
  {
    "name": "Philippines",
    "capital": "Manila",
    "flags": {
      "svg": "https://flagcdn.com/ph.svg",
      "png": "https://flagcdn.com/w320/ph.png"
    },
    "independent": false
  },
  {
    "name": "Pitcairn",
    "capital": "Adamstown",
    "flags": {
      "svg": "https://flagcdn.com/pn.svg",
      "png": "https://flagcdn.com/w320/pn.png"
    },
    "independent": false
  },
  {
    "name": "Poland",
    "capital": "Warsaw",
    "flags": {
      "svg": "https://flagcdn.com/pl.svg",
      "png": "https://flagcdn.com/w320/pl.png"
    },
    "independent": false
  },
  {
    "name": "Portugal",
    "capital": "Lisbon",
    "flags": {
      "svg": "https://flagcdn.com/pt.svg",
      "png": "https://flagcdn.com/w320/pt.png"
    },
    "independent": false
  },
  {
    "name": "Puerto Rico",
    "capital": "San Juan",
    "flags": {
      "svg": "https://flagcdn.com/pr.svg",
      "png": "https://flagcdn.com/w320/pr.png"
    },
    "independent": false
  },
  {
    "name": "Qatar",
    "capital": "Doha",
    "flags": {
      "svg": "https://flagcdn.com/qa.svg",
      "png": "https://flagcdn.com/w320/qa.png"
    },
    "independent": false
  },
  {
    "name": "Republic of Kosovo",
    "capital": "Pristina",
    "flags": {
      "svg": "https://flagcdn.com/xk.svg",
      "png": "https://flagcdn.com/w320/xk.png"
    },
    "independent": false
  },
  {
    "name": "Réunion",
    "capital": "Saint-Denis",
    "flags": {
      "svg": "https://flagcdn.com/re.svg",
      "png": "https://flagcdn.com/w320/re.png"
    },
    "independent": false
  },
  {
    "name": "Romania",
    "capital": "Bucharest",
    "flags": {
      "svg": "https://flagcdn.com/ro.svg",
      "png": "https://flagcdn.com/w320/ro.png"
    },
    "independent": false
  },
  {
    "name": "Russian Federation",
    "capital": "Moscow",
    "flags": {
      "svg": "https://flagcdn.com/ru.svg",
      "png": "https://flagcdn.com/w320/ru.png"
    },
    "independent": false
  },
  {
    "name": "Rwanda",
    "capital": "Kigali",
    "flags": {
      "svg": "https://flagcdn.com/rw.svg",
      "png": "https://flagcdn.com/w320/rw.png"
    },
    "independent": false
  },
  {
    "name": "Saint Barthélemy",
    "capital": "Gustavia",
    "flags": {
      "svg": "https://flagcdn.com/bl.svg",
      "png": "https://flagcdn.com/w320/bl.png"
    },
    "independent": false
  },
  {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "capital": "Jamestown",
    "flags": {
      "svg": "https://flagcdn.com/sh.svg",
      "png": "https://flagcdn.com/w320/sh.png"
    },
    "independent": false
  },
  {
    "name": "Saint Kitts and Nevis",
    "capital": "Basseterre",
    "flags": {
      "svg": "https://flagcdn.com/kn.svg",
      "png": "https://flagcdn.com/w320/kn.png"
    },
    "independent": false
  },
  {
    "name": "Saint Lucia",
    "capital": "Castries",
    "flags": {
      "svg": "https://flagcdn.com/lc.svg",
      "png": "https://flagcdn.com/w320/lc.png"
    },
    "independent": false
  },
  {
    "name": "Saint Martin (French part)",
    "capital": "Marigot",
    "flags": {
      "svg": "https://flagcdn.com/mf.svg",
      "png": "https://flagcdn.com/w320/mf.png"
    },
    "independent": false
  },
  {
    "name": "Saint Pierre and Miquelon",
    "capital": "Saint-Pierre",
    "flags": {
      "svg": "https://flagcdn.com/pm.svg",
      "png": "https://flagcdn.com/w320/pm.png"
    },
    "independent": false
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "capital": "Kingstown",
    "flags": {
      "svg": "https://flagcdn.com/vc.svg",
      "png": "https://flagcdn.com/w320/vc.png"
    },
    "independent": false
  },
  {
    "name": "Samoa",
    "capital": "Apia",
    "flags": {
      "svg": "https://flagcdn.com/ws.svg",
      "png": "https://flagcdn.com/w320/ws.png"
    },
    "independent": false
  },
  {
    "name": "San Marino",
    "capital": "City of San Marino",
    "flags": {
      "svg": "https://flagcdn.com/sm.svg",
      "png": "https://flagcdn.com/w320/sm.png"
    },
    "independent": false
  },
  {
    "name": "Sao Tome and Principe",
    "capital": "São Tomé",
    "flags": {
      "svg": "https://flagcdn.com/st.svg",
      "png": "https://flagcdn.com/w320/st.png"
    },
    "independent": false
  },
  {
    "name": "Saudi Arabia",
    "capital": "Riyadh",
    "flags": {
      "svg": "https://flagcdn.com/sa.svg",
      "png": "https://flagcdn.com/w320/sa.png"
    },
    "independent": false
  },
  {
    "name": "Senegal",
    "capital": "Dakar",
    "flags": {
      "svg": "https://flagcdn.com/sn.svg",
      "png": "https://flagcdn.com/w320/sn.png"
    },
    "independent": false
  },
  {
    "name": "Serbia",
    "capital": "Belgrade",
    "flags": {
      "svg": "https://flagcdn.com/rs.svg",
      "png": "https://flagcdn.com/w320/rs.png"
    },
    "independent": false
  },
  {
    "name": "Seychelles",
    "capital": "Victoria",
    "flags": {
      "svg": "https://flagcdn.com/sc.svg",
      "png": "https://flagcdn.com/w320/sc.png"
    },
    "independent": false
  },
  {
    "name": "Sierra Leone",
    "capital": "Freetown",
    "flags": {
      "svg": "https://flagcdn.com/sl.svg",
      "png": "https://flagcdn.com/w320/sl.png"
    },
    "independent": false
  },
  {
    "name": "Singapore",
    "capital": "Singapore",
    "flags": {
      "svg": "https://flagcdn.com/sg.svg",
      "png": "https://flagcdn.com/w320/sg.png"
    },
    "independent": false
  },
  {
    "name": "Sint Maarten (Dutch part)",
    "capital": "Philipsburg",
    "flags": {
      "svg": "https://flagcdn.com/sx.svg",
      "png": "https://flagcdn.com/w320/sx.png"
    },
    "independent": false
  },
  {
    "name": "Slovakia",
    "capital": "Bratislava",
    "flags": {
      "svg": "https://flagcdn.com/sk.svg",
      "png": "https://flagcdn.com/w320/sk.png"
    },
    "independent": false
  },
  {
    "name": "Slovenia",
    "capital": "Ljubljana",
    "flags": {
      "svg": "https://flagcdn.com/si.svg",
      "png": "https://flagcdn.com/w320/si.png"
    },
    "independent": false
  },
  {
    "name": "Solomon Islands",
    "capital": "Honiara",
    "flags": {
      "svg": "https://flagcdn.com/sb.svg",
      "png": "https://flagcdn.com/w320/sb.png"
    },
    "independent": false
  },
  {
    "name": "Somalia",
    "capital": "Mogadishu",
    "flags": {
      "svg": "https://flagcdn.com/so.svg",
      "png": "https://flagcdn.com/w320/so.png"
    },
    "independent": false
  },
  {
    "name": "South Africa",
    "capital": "Pretoria",
    "flags": {
      "svg": "https://flagcdn.com/za.svg",
      "png": "https://flagcdn.com/w320/za.png"
    },
    "independent": false
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "capital": "King Edward Point",
    "flags": {
      "svg": "https://flagcdn.com/gs.svg",
      "png": "https://flagcdn.com/w320/gs.png"
    },
    "independent": false
  },
  {
    "name": "Korea (Republic of)",
    "capital": "Seoul",
    "flags": {
      "svg": "https://flagcdn.com/kr.svg",
      "png": "https://flagcdn.com/w320/kr.png"
    },
    "independent": false
  },
  {
    "name": "Spain",
    "capital": "Madrid",
    "flags": {
      "svg": "https://flagcdn.com/es.svg",
      "png": "https://flagcdn.com/w320/es.png"
    },
    "independent": false
  },
  {
    "name": "Sri Lanka",
    "capital": "Sri Jayawardenepura Kotte",
    "flags": {
      "svg": "https://flagcdn.com/lk.svg",
      "png": "https://flagcdn.com/w320/lk.png"
    },
    "independent": false
  },
  {
    "name": "Sudan",
    "capital": "Khartoum",
    "flags": {
      "svg": "https://flagcdn.com/sd.svg",
      "png": "https://flagcdn.com/w320/sd.png"
    },
    "independent": false
  },
  {
    "name": "South Sudan",
    "capital": "Juba",
    "flags": {
      "svg": "https://flagcdn.com/ss.svg",
      "png": "https://flagcdn.com/w320/ss.png"
    },
    "independent": false
  },
  {
    "name": "Suriname",
    "capital": "Paramaribo",
    "flags": {
      "svg": "https://flagcdn.com/sr.svg",
      "png": "https://flagcdn.com/w320/sr.png"
    },
    "independent": false
  },
  {
    "name": "Svalbard and Jan Mayen",
    "capital": "Longyearbyen",
    "flags": {
      "svg": "https://flagcdn.com/sj.svg",
      "png": "https://flagcdn.com/w320/sj.png"
    },
    "independent": false
  },
  {
    "name": "Swaziland",
    "capital": "Mbabane",
    "flags": {
      "svg": "https://flagcdn.com/sz.svg",
      "png": "https://flagcdn.com/w320/sz.png"
    },
    "independent": false
  },
  {
    "name": "Sweden",
    "capital": "Stockholm",
    "flags": {
      "svg": "https://flagcdn.com/se.svg",
      "png": "https://flagcdn.com/w320/se.png"
    },
    "independent": false
  },
  {
    "name": "Switzerland",
    "capital": "Bern",
    "flags": {
      "svg": "https://flagcdn.com/ch.svg",
      "png": "https://flagcdn.com/w320/ch.png"
    },
    "independent": false
  },
  {
    "name": "Syrian Arab Republic",
    "capital": "Damascus",
    "flags": {
      "svg": "https://flagcdn.com/sy.svg",
      "png": "https://flagcdn.com/w320/sy.png"
    },
    "independent": false
  },
  {
    "name": "Taiwan",
    "capital": "Taipei",
    "flags": {
      "svg": "https://flagcdn.com/tw.svg",
      "png": "https://flagcdn.com/w320/tw.png"
    },
    "independent": false
  },
  {
    "name": "Tajikistan",
    "capital": "Dushanbe",
    "flags": {
      "svg": "https://flagcdn.com/tj.svg",
      "png": "https://flagcdn.com/w320/tj.png"
    },
    "independent": false
  },
  {
    "name": "Tanzania, United Republic of",
    "capital": "Dodoma",
    "flags": {
      "svg": "https://flagcdn.com/tz.svg",
      "png": "https://flagcdn.com/w320/tz.png"
    },
    "independent": false
  },
  {
    "name": "Thailand",
    "capital": "Bangkok",
    "flags": {
      "svg": "https://flagcdn.com/th.svg",
      "png": "https://flagcdn.com/w320/th.png"
    },
    "independent": false
  },
  {
    "name": "Timor-Leste",
    "capital": "Dili",
    "flags": {
      "svg": "https://flagcdn.com/tl.svg",
      "png": "https://flagcdn.com/w320/tl.png"
    },
    "independent": false
  },
  {
    "name": "Togo",
    "capital": "Lomé",
    "flags": {
      "svg": "https://flagcdn.com/tg.svg",
      "png": "https://flagcdn.com/w320/tg.png"
    },
    "independent": false
  },
  {
    "name": "Tokelau",
    "capital": "Fakaofo",
    "flags": {
      "svg": "https://flagcdn.com/tk.svg",
      "png": "https://flagcdn.com/w320/tk.png"
    },
    "independent": false
  },
  {
    "name": "Tonga",
    "capital": "Nuku'alofa",
    "flags": {
      "svg": "https://flagcdn.com/to.svg",
      "png": "https://flagcdn.com/w320/to.png"
    },
    "independent": false
  },
  {
    "name": "Trinidad and Tobago",
    "capital": "Port of Spain",
    "flags": {
      "svg": "https://flagcdn.com/tt.svg",
      "png": "https://flagcdn.com/w320/tt.png"
    },
    "independent": false
  },
  {
    "name": "Tunisia",
    "capital": "Tunis",
    "flags": {
      "svg": "https://flagcdn.com/tn.svg",
      "png": "https://flagcdn.com/w320/tn.png"
    },
    "independent": false
  },
  {
    "name": "Turkey",
    "capital": "Ankara",
    "flags": {
      "svg": "https://flagcdn.com/tr.svg",
      "png": "https://flagcdn.com/w320/tr.png"
    },
    "independent": false
  },
  {
    "name": "Turkmenistan",
    "capital": "Ashgabat",
    "flags": {
      "svg": "https://flagcdn.com/tm.svg",
      "png": "https://flagcdn.com/w320/tm.png"
    },
    "independent": false
  },
  {
    "name": "Turks and Caicos Islands",
    "capital": "Cockburn Town",
    "flags": {
      "svg": "https://flagcdn.com/tc.svg",
      "png": "https://flagcdn.com/w320/tc.png"
    },
    "independent": false
  },
  {
    "name": "Tuvalu",
    "capital": "Funafuti",
    "flags": {
      "svg": "https://flagcdn.com/tv.svg",
      "png": "https://flagcdn.com/w320/tv.png"
    },
    "independent": false
  },
  {
    "name": "Uganda",
    "capital": "Kampala",
    "flags": {
      "svg": "https://flagcdn.com/ug.svg",
      "png": "https://flagcdn.com/w320/ug.png"
    },
    "independent": false
  },
  {
    "name": "Ukraine",
    "capital": "Kyiv",
    "flags": {
      "svg": "https://flagcdn.com/ua.svg",
      "png": "https://flagcdn.com/w320/ua.png"
    },
    "independent": false
  },
  {
    "name": "United Arab Emirates",
    "capital": "Abu Dhabi",
    "flags": {
      "svg": "https://flagcdn.com/ae.svg",
      "png": "https://flagcdn.com/w320/ae.png"
    },
    "independent": false
  },
  {
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "capital": "London",
    "flags": {
      "svg": "https://flagcdn.com/gb.svg",
      "png": "https://flagcdn.com/w320/gb.png"
    },
    "independent": false
  },
  {
    "name": "United States of America",
    "capital": "Washington, D.C.",
    "flags": {
      "svg": "https://flagcdn.com/us.svg",
      "png": "https://flagcdn.com/w320/us.png"
    },
    "independent": false
  },
  {
    "name": "Uruguay",
    "capital": "Montevideo",
    "flags": {
      "svg": "https://flagcdn.com/uy.svg",
      "png": "https://flagcdn.com/w320/uy.png"
    },
    "independent": false
  },
  {
    "name": "Uzbekistan",
    "capital": "Tashkent",
    "flags": {
      "svg": "https://flagcdn.com/uz.svg",
      "png": "https://flagcdn.com/w320/uz.png"
    },
    "independent": false
  },
  {
    "name": "Vanuatu",
    "capital": "Port Vila",
    "flags": {
      "svg": "https://flagcdn.com/vu.svg",
      "png": "https://flagcdn.com/w320/vu.png"
    },
    "independent": false
  },
  {
    "name": "Venezuela (Bolivarian Republic of)",
    "capital": "Caracas",
    "flags": {
      "svg": "https://flagcdn.com/ve.svg",
      "png": "https://flagcdn.com/w320/ve.png"
    },
    "independent": false
  },
  {
    "name": "Vietnam",
    "capital": "Hanoi",
    "flags": {
      "svg": "https://flagcdn.com/vn.svg",
      "png": "https://flagcdn.com/w320/vn.png"
    },
    "independent": false
  },
  {
    "name": "Wallis and Futuna",
    "capital": "Mata-Utu",
    "flags": {
      "svg": "https://flagcdn.com/wf.svg",
      "png": "https://flagcdn.com/w320/wf.png"
    },
    "independent": false
  },
  {
    "name": "Western Sahara",
    "capital": "El Aaiún",
    "flags": {
      "svg": "https://flagcdn.com/eh.svg",
      "png": "https://flagcdn.com/w320/eh.png"
    },
    "independent": false
  },
  {
    "name": "Yemen",
    "capital": "Sana'a",
    "flags": {
      "svg": "https://flagcdn.com/ye.svg",
      "png": "https://flagcdn.com/w320/ye.png"
    },
    "independent": false
  },
  {
    "name": "Zambia",
    "capital": "Lusaka",
    "flags": {
      "svg": "https://flagcdn.com/zm.svg",
      "png": "https://flagcdn.com/w320/zm.png"
    },
    "independent": false
  },
  {
    "name": "Zimbabwe",
    "capital": "Harare",
    "flags": {
      "svg": "https://flagcdn.com/zw.svg",
      "png": "https://flagcdn.com/w320/zw.png"
    },
    "independent": false
  }
]

export default tempData;