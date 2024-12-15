<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de los sistemas de información
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #B0C4D7")  
          p.mb-0 Los Sistemas de Información Geográfica (SIG) y el Sistema de Posicionamiento Global (GPS) son pilares fundamentales en la implementación de sistemas automatizados para el monitoreo y gestión de labores agrícolas. Estas herramientas permiten analizar y gestionar grandes volúmenes de datos georreferenciados, lo que es valioso para la agricultura de precisión. Este capítulo proporciona una fundamentación teórica sólida sobre estos sistemas, explorando sus componentes, funcionamiento y aplicaciones en el ámbito agropecuario.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.png', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #D7E1EB")
          img(src='@/assets/curso/temas/12.svg', alt='' style='width: 85px').mb-3  
          p.mb-0 Así mimo, se incluye una revisión de los sensores IoT, que se integran con SIG y GPS para monitorear variables agrícolas en tiempo real. Esta combinación tecnológica permite a los agricultores tomar decisiones basadas en datos precisos, optimizando los recursos y mejorando la sostenibilidad del sistema productivo. 
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1	Sistemas de Información Geográfica (SIG)
    .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/temas/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0  En la agricultura moderna, el manejo eficiente de grandes volúmenes de datos espaciales es clave para la toma de decisiones precisas y oportunas. Los Sistemas de Información Geográfica (SIG) se han consolidado como una herramienta fundamental para integrar y analizar información georreferenciada, permitiendo visualizar y comprender patrones espaciales complejos. A través de mapas, modelos y análisis espaciales, los SIG facilitan la identificación de áreas críticas en las unidades productivas, optimizando así las operaciones agrícolas y contribuyendo a una gestión más sostenible.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 El GPS es un sistema de navegación por satélite que permite determinar la posición geográfica precisa de una persona, animal o cosa en cualquier lugar del mundo. Fue desarrollado originalmente por el Departamento de Defensa de los Estados Unidos y es operado por una constelación de al menos 24 satélites en órbita terrestre.
        .p-4(style="background-color:  #98E2EC")  
          p.mb-0 El GPS funciona mediante la recepción de señales de radio emitidas por los satélites, que contienen información sobre ubicación y el tiempo. Para que se pueda generar la ubicación, deben al menos encontrarse la señal emitida por cuatro satélites los cuales deben estar visibles desde el receptor para calcular coordenadas tridimensionales, que corresponden a la latitud, la longitud y la altitud, o a su equivalente de geolocalización.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/14.png', alt='')   
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/15.png', alt='')
      .col-lg-8
        p.mb-4 Sus principales usos incluyen:
        ul.lista-ul--color
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 Navegación en medios de transporte terrestre, marítimo y aéreo.
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 Geolocalización en dispositivos móviles y aplicaciones de mapas.     
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 Monitoreo de flotas, de actividades deportivas y útil para movilizarse y para el rescate.      
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 Agricultura de precisión y levantamientos topográficos.
        p.mb-0 Es un sistema confiable, de alta precisión, y está disponible globalmente de forma gratuita para el uso civil, existiendo otros sistemas de navegación como el Glonass, el Beidou, y el sistema Galileo.  
    .bg-slyder.mn.p-5.mb-5
      .tarjeta.bg-white.p-5
        CarouselRED(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Componentes de un GPS
              ul.lista-ul--color
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Datos vectoriales:] representan elementos geográficos como puntos, líneas y polígonos (e.g., pozos, caminos y parcelas).
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Datos ráster:] imágenes o mapas compuestos por una matriz de píxeles, que representan variables continuas como elevación o humedad del suelo.
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Bases de datos espaciales:] almacenan información tabular relacionada con los elementos geográficos.
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Software:] herramientas como QGIS, ArcGIS o similares que permiten la manipulación y análisis de datos geoespaciales.
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/16.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Aplicaciones en agricultura
              p Los SIG son cada vez más importantes para la agricultura de precisión, permitiendo:
              ul.lista-ul--color
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Mapeo de rendimiento:] identificación de áreas con diferentes niveles de productividad.
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Análisis de suelos:] mapas de fertilidad y propiedades físicas del suelo.
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Monitoreo de plagas y enfermedades:] detección y seguimiento geoespacial de brotes.
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/17.png', alt='Texto que describa la imagen')
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2	Sistema de Posicionamiento Global (GPS)
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 El Sistema de Posicionamiento Global (GPS) es una tecnología que se usa para el monitoreo y gestión de labores agrícolas. Su capacidad para proporcionar datos de localización precisos en tiempo real permite a los agricultores mejorar la eficiencia de tareas como la delimitación de parcelas, la planificación de rutas de maquinaria y el muestreo georreferenciado. Esta herramienta se integra perfectamente con otros sistemas tecnológicos, como los SIG, para generar análisis geoespaciales más detallados y precisos.
        AccordionRED.mb-5( clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Fundamentos del GPS")
            p.mb-0 El Sistema de Posicionamiento Global (GPS) utiliza una red de satélites para determinar la ubicación exacta de un objeto en la superficie terrestre. Su precisión y capacidad para trabajar en tiempo real lo hacen invaluable en el monitoreo agrícola.
          div(titulo="Componentes del GPS")
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Segmento espacial:] satélites que emiten señales.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Segmento de control:] estaciones en tierra que supervisan y ajustan las órbitas satelitales.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Segmento del usuario:] receptores GPS que capturan señales y calculan la posición geográfica.
          div(titulo="Aplicaciones en agricultura")
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Delimitación de parcelas:] precisión en la división y gestión de áreas de cultivo.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Rutas de maquinaria agrícola:] optimización de trayectorias para labores como siembra y cosecha.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Muestreo georreferenciado:] toma de muestras de suelo o plantas en ubicaciones específicas
      .col-lg-4.col-7: img(src='@/assets/curso/temas/18.png', alt='')
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3	Sensores IoT en la agricultura
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.png', alt='')
      .col-lg-7
        p.mb-4 La revolución tecnológica en la agricultura no estaría completa sin la incorporación de los sensores IoT (Internet de las Cosas). Estos dispositivos recopilan datos en tiempo real sobre diversas variables agrícolas, como la humedad del suelo, la temperatura y los niveles de nutrientes, y los transmiten de manera automática para su análisis y procesamiento. La integración de sensores IoT con SIG y GPS permite una supervisión continua y precisa de las condiciones de campo, facilitando la automatización de decisiones críticas como el riego o la fertilización.
        AccordionRED.mb-5( clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Concepto y tipos de sensores IoT")
            p.mb-0 Los sensores IoT son dispositivos que recopilan datos específicos en campo y los transmiten en tiempo real a través de redes inalámbricas. En el ámbito agrícola, estos sensores permiten medir parámetros críticos como la humedad del suelo, la temperatura, la salinidad y los niveles de nutrientes.
          div(titulo="Tipos de sensores utilizados")
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Sensores de humedad del suelo: miden el contenido de agua en el suelo, facilitando la optimización del riego.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Sensores climáticos: registran temperatura, humedad relativa y velocidad del viento.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Sensores de nutrientes: detectan niveles de nitrógeno, fósforo y potasio en el suelo.
    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4	Integración con SIG y GPS
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/20.png', alt='')
      .col-lg-9
        p.mb-4 Los datos recolectados por sensores IoT se integran en tiempo real con plataformas SIG y GPS, lo que permite:
        ul.lista-ul--color
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 #[b Monitoreo continuo:] supervisión constante de las condiciones del cultivo.
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 #[b Toma de decisiones automatizada:] activación de sistemas como riego o fertilización basados en datos específicos.
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 #[b Visualización espacial:] representación de variables en mapas para identificar patrones y áreas críticas.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2.
      span Resumen Fundamentos de los sistemas de información
    img(src='@/assets/curso/temas/21.svg', alt='La Figura 2 se denomina «Resumen Fundamentos de los sistemas de información» ilustra los fundamentos de los sistemas de información en la agricultura, destacando el uso de los Sistemas de Información Geográfica (SIG) y el Sistema de Posicionamiento Global (GPS). Se abordan sus componentes, funciones y aplicaciones en el monitoreo de cultivos, planificación de riego y control de plagas. También se resalta la integración de sensores IoT con estas tecnologías.')
    figcaption Fuente: OIT, 2024.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
