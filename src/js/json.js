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
        titulo: 'Introducción a los sistemas automatizados en la agricultura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia del monitoreo agrícola automatizado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Beneficios en la gestión de recursos y sostenibilidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tecnologías clave: SIG, GPS y Sensores IoT',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de los sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas de Información Geográfica (SIG)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Sistema de Posicionamiento Global (GPS)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sensores IoT en la agricultura',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Integración con SIG y GPS',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de la variabilidad espacial y temporal	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Variabilidad espacial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Variabilidad temporal	',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistemas automatizados de adquisición de datos	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Arquitectura de un sistema automatizado	',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '	Integración de SIG y GPS en sistemas de monitoreo	',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Riego automatizado',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Procesamiento y análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Geoestadística aplicada en la agricultura		',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: '	Visualización y reportes en SIG		',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Toma de decisiones basada en datos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Casos de estudio y aplicaciones prácticas	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Implementación de sistemas automatizados en cultivos de alto valor	',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              '	Comparativa de resultados: métodos tradicionales vs. automatizados	',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Lecciones aprendidas y buenas prácticas	',
            hash: 't_6_3',
          },
        ],
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
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
}
