var libros = [
  {
    titulo: "La Magia del Agua en el Lago Titicaca",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-La-Magia-del-Agua-en-el-Lago-Titicaca_1.jpg",
    url: "http://www.fondoeditorialbcp.com/publicaciones/la-magia-del-agua-en-el-lago-titicaca",
    autor: "2012",
    id: 1
  },
  {
    titulo: "La Amazonía",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-La-Amazonia_1.jpg",
    url: "http://www.fondoeditorialbcp.com/publicaciones/la-amazonia",
    autor: "2015",
    id: 2
  },
  {
    titulo: "El Señor de los Milagros",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-El-Senor-de-los-Milagros_1.jpg",
    url:"http://www.fondoeditorialbcp.com/publicaciones/el-senor-de-los-milagros",
    autor: "2016",
    id: 3
  },
  {
    titulo: "Fiestas y Danzas del Perú",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-Fiestas-y-Danzas_1.jpg",
    url: "http://www.fondoeditorialbcp.com/publicaciones/fiestas-y-danzas-del-peru",
    autor: "2019",
    id: 4
  },
  {
    titulo: "Pachacamac",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-Pachacamac_1.jpg",
    url: "http://www.fondoeditorialbcp.com/publicaciones/pachacamac",
    autor: "2017",
    id: 5
  },
  {
    titulo: "Los Chachapoyas",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-Los-Chachapoyas_1.jpg",
    url: "http://www.fondoeditorialbcp.com/publicaciones/los-chachapoyas",
    autor: "2013",
    id: 6
  },
  {
    titulo: "San Pedro de Lima",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-San-Pedro-de-Lima_1.jpg",
    url: "http://www.fondoeditorialbcp.com/publicaciones/san-pedro-de-lima",
    autor: "2018",
    id: 7
  },
  {
    titulo: "Nuestra memoria puesta en valor",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-Nuestra-Memoria-Puesta-en-Valor_1.jpg",
    url: "http://www.fondoeditorialbcp.com/publicaciones/nuestra-memoria-puesta-en-valor",
    autor: "2014",
    id: 8
  },
  {
    titulo: "Arte Imperial Inca",
    imagen: "http://www.fondoeditorialbcp.com/assets/images/PORTADA-Arte-Imperial-Inca.jpg",
    url: "http://www.fondoeditorialbcp.com/publicaciones/arte-imperial-inca",
    autor: "2020",
    id: 9
  }
];

var seleccionados = [];
buscador.addEventListener("input", () => {
  seleccionados.length = 0;
  var fragment = document.createDocumentFragment();
  var elValor = buscador.value;
  if (elValor.length > 0) {
    seleccionados = libros.filter((libro) => libro.titulo.toLowerCase().includes(elValor.toLowerCase()));
    seleccionados.forEach((s) => {
      var lista = document.createElement("li");
      lista.innerHTML = '<a class="resultado-buscador" href="'+s.url+'"><div><img src="'+s.imagen+'"/><div class="datos"><p>"'+s.titulo+'"</p><span>'+s.autor+'</span></div></div></a>';
      fragment.appendChild(lista);
    });
    $('.lista-resultados').addClass('activo');
    resultado.innerHTML = "";
    resultado.appendChild(fragment);

  } else {
  	$('.lista-resultados').removeClass('activo');
    resultado.innerHTML = "";
    resultado.appendChild(fragment);
  }
});