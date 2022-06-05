function initMap() {

    // The location of uottawa
    const ottawa = { lat: 45.422311, lng: -75.684409 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: ottawa,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: ottawa,
      map: map,
    });
  }
window.initMap = initMap; 
  