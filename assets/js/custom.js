// place your custom js here

// Hero Slider
$('.js-hero-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

// Testimonial Slider
$('.js-testi-slider').slick();

// Partner Logo Slider
$('.js-partner-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Go Up Button
$('.js-upper-link').on('click', function(event){
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  }
});

// Map
var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#d3d3d3",
    state_hover_color: "#3CB371",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    IDN1136: {
      name: "Aceh"
    },
    IDN1185: {
      name: "Kalimantan Timur"
    },
    IDN1223: {
      name: "Jawa Barat"
    },
    IDN1224: {
      name: "Jawa Tengah"
    },
    IDN1225: {
      name: "Bengkulu"
    },
    IDN1226: {
      name: "Banten"
    },
    IDN1227: {
      name: "Jakarta Raya"
    },
    IDN1228: {
      name: "Kalimantan Barat"
    },
    IDN1229: {
      name: "Lampung"
    },
    IDN1230: {
      name: "Sumatera Selatan"
    },
    IDN1231: {
      name: "Bangka-Belitung"
    },
    IDN1232: {
      name: "Bali"
    },
    IDN1233: {
      name: "Jawa Timur"
    },
    IDN1234: {
      name: "Kalimantan Selatan"
    },
    IDN1235: {
      name: "Nusa Tenggara Timur"
    },
    IDN1236: {
      name: "Sulawesi Selatan"
    },
    IDN1237: {
      name: "Sulawesi Barat"
    },
    IDN1796: {
      name: "Kepulauan Riau"
    },
    IDN1837: {
      name: "Gorontalo"
    },
    IDN1930: {
      name: "Jambi"
    },
    IDN1931: {
      name: "Kalimantan Tengah"
    },
    IDN1933: {
      name: "Irian Jaya Barat"
    },
    IDN381: {
      name: "Sumatera Utara"
    },
    IDN492: {
      name: "Riau"
    },
    IDN513: {
      name: "Sulawesi Utara"
    },
    IDN538: {
      name: "Maluku Utara"
    },
    IDN539: {
      name: "Sumatera Barat"
    },
    IDN540: {
      name: "Yogyakarta"
    },
    IDN554: {
      name: "Maluku"
    },
    IDN555: {
      name: "Nusa Tenggara Barat"
    },
    IDN556: {
      name: "Sulawesi Tenggara"
    },
    IDN557: {
      name: "Sulawesi Tengah"
    },
    IDN558: {
      name: "Papua"
    }
  },
  locations: {},
  labels: {},
  regions: {}
};

// Graph
window.onload = function () {
  var chartPohon = new CanvasJS.Chart("chartPohon", {
    animationEnabled: true,
    theme: "light2", // can choose: "light1", "light2", "dark1", "dark2"
    title:{
      text: ""
    },
    axisY: {
      title: ""
    },
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      dataPoints: [      
        { y: 98835, label: "Jumlah Pohon" },
        { y: 67440,  label: "Pohon Produktif" }
      ]
    }]
  });
  chartPohon.render();

  var chartLahan = new CanvasJS.Chart("chartLahan", {
    animationEnabled: true,
    theme: "light2", // can choose: "light1", "light2", "dark1", "dark2"
    title:{
      text: ""
    },
    axisY: {
      title: ""
    },
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      dataPoints: [      
        { y: 121.6, label: "Luas Lahan" },
        { y: 55.3,  label: "Luas Tanam" }
      ]
    }]
  });
  chartLahan.render();

  var chartBudi = new CanvasJS.Chart("chartBudi", {
    exportEnabled: true,
    animationEnabled: true,
    data: [{
      type: "doughnut",
		  startAngle: 60,
      showInLegend: true,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} - {y}%",
      dataPoints: [
        { y: 26, name: "Perawatan Tanaman" },
        { y: 17.8, name: "Pengolahan lahan" },
        { y: 47.36, name: "Persiapan penanaman", exploded: true}
      ]
    }]
  });
  chartBudi.render();
  
  var chartPola = new CanvasJS.Chart("chartPola", {
    exportEnabled: true,
    animationEnabled: true,
    data: [{
      type: "doughnut",
		  startAngle: 60,
      showInLegend: true,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} - {y}%",
      dataPoints: [
        { y: 9.31, name: "Pengeringan"},
        { y: 10.31, name: "Pemanenan" },
        { y: 10.35, name: "Pencucian dan Perendaman" },
        { y: 20.35, name: "Pengemasan dan Penyimpanan", exploded: true}
      ]
    }]
  });
  chartPola.render();

  var chartProyeksi1 = new CanvasJS.Chart("chartProyeksi1", {
    animationEnabled: true,
    theme: "light1", // can choose: "light1", "light2", "dark1", "dark2"
    title:{
      text: ""
    },
    axisY: {
      title: ""
    },
    backgroundColor: "transparent",
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      dataPoints: [      
        { y: 98835, label: "Jumlah Pohon" },
        { y: 67440,  label: "Pohon Produktif" }
      ]
    }]
  });
  chartProyeksi1.render();

  var chartProyeksi2 = new CanvasJS.Chart("chartProyeksi2", {
    animationEnabled: true,
    theme: "light1", // can choose: "light1", "light2", "dark1", "dark2"
    title:{
      text: ""
    },
    axisY: {
      title: ""
    },
    backgroundColor: "transparent",
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      dataPoints: [      
        { y: 121.6, label: "Luas Lahan" },
        { y: 55.3,  label: "Luas Tanam" }
      ]
    }]
  });
  chartProyeksi2.render();
}

var supportedLocale = {
  id_ID: {
      name: "Bahasa Indonesia",
      imageSrc: "assets/images/indonesia-flag.jpg"
  },
  en_US: {
      name: "English (US)",
      imageSrc: "assets/images/us-flag.jpg"
  }
};

$.each($(".language-set"), function(key, elem) {
  $(elem).click(function(event) {
      var locale = $(this).data('locale');
      var localeSelectData = supportedLocale[locale];

      // set language based on locale
      $("#dropdownLanguageButton").html(
          '<p class="language__text caption">' + localeSelectData.name + '</p><img src="' + localeSelectData.imageSrc + '" class="language__flag" width="32" height="32" alt="menu">'
      );
  });
});
