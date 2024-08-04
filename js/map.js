//Customização de Marcadores
//Marcador de Destinos
let greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  //MODELO DE MARCADOR PARA DESTINO
  //L.marker([], {icon: greenIcon}).addTo(map)
  //.bindPopup('')
  //.openPopup();
  
  //Marcador de Atrativos Locais
  let redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  //MODELO DE MARCADOR PARA ATRATIVO
  //L.marker([], {icon: redIcon}).addTo(map)
  //.bindPopup('')
  //.openPopup();
  let isPopupOpened =  false;
  
  //CRIANDO MAPA E ADICIONANDO MARCADORES
  document.addEventListener('DOMContentLoaded', () =>{
      const map = L.map('map').setView([-5.397, -45.242], 8);
  
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 25,
      minZoom: 3
      }).addTo(map);
  
      //Marcador do Estado
      L.marker([-5.397, -45.242]).addTo(map)
      .bindPopup('Estado do Maranhão, Brasil')
      .openPopup();
  
      //Marcadores de Destinos
      L.marker([-2.55, -44.30], {icon: greenIcon}).addTo(map)
      .bindPopup('São Luís: Patrimônio Histórico, Artístico e Cultural')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      L.marker([-2.720550, -42.837070], {icon: greenIcon}).addTo(map)
      .bindPopup('Barreirinhas: Parque Nacional dos Lençóis Maranhenses, Patrimônio Natural')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      L.marker([-2.4110, -44.4188], {icon: greenIcon}).addTo(map)
      .bindPopup('Alcântara: Patrimônio Histórico')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      L.marker([-7.3317, -47.4757], {icon: greenIcon}).addTo(map)
      .bindPopup('Carolina: Patrimônio Natural')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
      L.marker([-2.7611, -42.2785], {icon: greenIcon}).addTo(map)
      .bindPopup('Tutóia: Patrimônio Natural')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Marcadores de Atrativos Locais
      //Teatro
      L.marker([-2.52905, -44.30247], {icon: redIcon}).addTo(map)
      .bindPopup('Teatro Arthur Azevedo')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Museu
      L.marker([-2.52910, -44.30057], {icon: redIcon}).addTo(map)
      .bindPopup('Museu Histórico e Artistico do Maranhão (MHAM)')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Museu e Centro Cultural
      L.marker([-2.52452, -44.30001], {icon: redIcon}).addTo(map)
      .bindPopup('Complexo Cultural da RFFSA - Estação João Pessoa')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Museu
      L.marker([-2.5287176361201076, -44.30759021780971], {icon: redIcon}).addTo(map)
      .bindPopup('Casa do Maranhão')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Igreja 
      L.marker([-2.52802618844821, -44.30459711629376], {icon: redIcon}).addTo(map)
      .bindPopup('Catedral Metropolitana de Nossa Senhora da Vitória')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Fortificação histórica + Museu de Embarcações Maranhenses (MEMA)
      //+ Museu da Imagem e do Som do Maranhão (MISMA)
      L.marker([-2.50536, -44.31777], {icon: redIcon}).addTo(map)
      .bindPopup('Forte Santo Antônio da Barra de São Luís')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Museu e Local religioso
      L.marker([-2.53359, -44.30498], {icon: redIcon}).addTo(map)
      .bindPopup('Convento das Mercês')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Igreja e Local histórico
      L.marker([-2.40865, -44.41719], {icon: redIcon}).addTo(map)
      .bindPopup('Ruínas da Igreja de São Matias')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Pólo de Ecoturismo
      L.marker([-7.1397, -47.3442], {icon: redIcon}).addTo(map)
      .bindPopup('Ecoturismo na Chapada das Mesas')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  
      //Pólo de Ecoturismo
      L.marker([-2.7483, -42.0749], {icon: redIcon}).addTo(map)
      .bindPopup('Ecoturismo no Delta do Parnaíba')
      //.openPopup();
      .on('click', function() {
        if (!isPopupOpened) {
            this.openPopup();
            isPopupOpened = true;
        }
      });
  });