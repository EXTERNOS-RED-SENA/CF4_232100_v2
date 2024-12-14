export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de datos y estructuras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de datos y análisis',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de modelado de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estructuras de datos fundamentales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad y tratamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características de calidad de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de extracción y filtrado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Transformación e integración de datos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de bases de datos	8',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Bases de datos relacionales y no relacionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Operaciones CRUD y consultas básicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Gestión y optimización de bases de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Introducción a la Inteligencia Artificial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos fundamentales de IA',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicaciones y casos de uso',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Herramientas básicas para IA',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Conclusiones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Sistemas automatizados para el monitoreo y gestión de labores agrícolas',
    Description:
      'Este componente aborda la implementación de sistemas automatizados para el monitoreo y gestión de labores agrícolas, utilizando herramientas como Sistemas de Información Geográfica (SIG), Sistema de Posicionamiento Global (GPS) y sensores IoT. A través de estas tecnologías, el aprendiz desarrollará competencias para recopilar, procesar y analizar datos en tiempo real, mejorando la precisión en la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
