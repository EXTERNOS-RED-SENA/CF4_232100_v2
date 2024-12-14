<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de la variabilidad espacial y temporal
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #F0F7E8 ")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La variabilidad espacial y temporal es un fenómeno intrínseco a los sistemas agrícolas, caracterizado por las diferencias en las propiedades del suelo, las condiciones climáticas y el rendimiento de los cultivos a través del espacio y el tiempo. Comprender y gestionar esta variabilidad es fundamental para la implementación de prácticas de agricultura de precisión. Este capítulo explora las herramientas y métodos necesarios para analizar, interpretar y aprovechar la variabilidad, utilizando tecnologías como los Sistemas de Información Geográfica (SIG), el Sistema de Posicionamiento Global (GPS) y técnicas de geoestadística.
        .col-lg-auto.d-lg-block.d-none
          figure
            img(src='@/assets/curso/temas/22.png', alt='')
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1	Variabilidad espacial
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/23.png', alt='')
      .col-lg-7
        p.mb-4 En el ámbito agrícola, la variabilidad espacial se manifiesta en las diferencias que existen en las propiedades del suelo, el rendimiento de los cultivos y otros factores ambientales dentro de una misma unidad productiva. Estas diferencias no son uniformes y pueden influir significativamente en la productividad y en la eficiencia del uso de recursos. Por lo tanto, comprender y gestionar la variabilidad espacial es esencial para optimizar las prácticas agrícolas y reducir costos.
        .tarjeta.p-4.py-3.color-acento-contenido--borde.bg-white.border-2
          p.mb-0 El análisis de la variabilidad espacial se apoya en herramientas como los Sistemas de Información Geográfica (SIG) y técnicas de interpolación geoestadística, que permiten visualizar y cuantificar estas diferencias a través de mapas temáticos. Este apartado introduce los conceptos clave, métodos de análisis y aplicaciones prácticas para el manejo de la variabilidad espacial en la agricultura de precisión, ofreciendo a los productores una visión detallada de sus campos y permitiéndoles tomar decisiones informadas.
    .bg-slyder.p-4.mn
      .tarjeta.bg-white.p-5
          CarouselRED(tipo='b')
            .row.justify-content-center
              .col-lg-6.mb-4.mb-md-0
                h4 Concepto y relevancia
                p.mb-0 La variabilidad espacial se refiere a las diferencias en las características del suelo y el cultivo en distintas áreas de una unidad productiva. Esta variabilidad puede ser el resultado de factores como la topografía, la composición del suelo, la disponibilidad de agua y los niveles de nutrientes. Entender y mapear esta heterogeneidad permite a los agricultores aplicar insumos de manera más eficiente y focalizada.
              .col-lg-5.col-7
                figure
                  img(src='@/assets/curso/temas/24.png', alt='Texto que describa la imagen')
            .row.justify-content-center
              .col-lg-6.mb-4.mb-md-0
                h4 Técnicas de análisis espacial
                p.mb-0 Las herramientas SIG permiten representar y analizar la variabilidad espacial a través de mapas temáticos y modelos. Dos técnicas fundamentales de interpolación utilizadas en la agricultura son:
                ul.lista-ul--color
                  li.d-flex.mb-1
                    i.fas.fa-check-circle
                    p.mb-0 #[b IDW (Ponderación de la Distancia Inversa):] asigna valores a puntos desconocidos en función de su proximidad a puntos conocidos. Es útil para mapear variables como la humedad del suelo.
                  li.d-flex.mb-1
                    i.fas.fa-check-circle
                    p.mb-0 #[b Kriging:] método geoestadístico que estima valores basados en la estructura de la variación espacial, proporcionando no solo un valor estimado, sino también una medida de la incertidumbre asociada.
              .col-lg-5.col-7
                figure
                  img(src='@/assets/curso/temas/25.png', alt='Texto que describa la imagen')
            .row.justify-content-center
              .col-lg-6.mb-4.mb-md-0
                h4 Aplicaciones prácticas
                p.mb-0 La gestión de la variabilidad espacial en la agricultura va más allá del análisis teórico; su verdadero valor radica en la implementación de soluciones prácticas que optimicen las operaciones en campo. Las aplicaciones prácticas de la variabilidad espacial incluyen la generación de mapas de fertilidad, el análisis de riego y el monitoreo de plagas y enfermedades. Estas herramientas permiten a los agricultores adaptar sus estrategias a las condiciones específicas de cada parcela, maximizando la productividad y minimizando el uso de recursos.
                ul.lista-ul--color
                  li.d-flex.mb-1
                    i.fas.fa-check-circle
                    p.mb-0 #[b Mapeo de fertilidad del suelo:] identificación de áreas con diferentes necesidades de fertilización.
                  li.d-flex.mb-1
                    i.fas.fa-check-circle
                    p.mb-0 #[b Análisis de riego:] identificación de zonas con déficits hídricos para optimizar la aplicación de agua.
                  li.d-flex.mb-1
                    i.fas.fa-check-circle
                    p.mb-0 #[b Monitoreo de plagas y enfermedades:] detección y seguimiento de brotes a nivel local.
              .col-lg-3.col-7
                figure
                  img(src='@/assets/curso/temas/26.png', alt='Texto que describa la imagen')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2	 Variabilidad temporal
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .tarjeta.p-4.py-3.color-secundario--borde.bg-white.border-2.mb-4
          p.mb-0 La variabilidad temporal en la agricultura hace referencia a los cambios que ocurren en las condiciones ambientales y en las características del cultivo a lo largo del tiempo. Estos cambios pueden ser influenciados por factores estacionales, climáticos y eventos inesperados como lluvias intensas o sequías prolongadas. Gestionar esta variabilidad es fundamental para ajustar las prácticas agrícolas y garantizar un rendimiento óptimo.
        p.mb-0 El análisis de la variabilidad temporal implica el uso de datos históricos y en tiempo real, recopilados mediante sensores IoT y procesados en plataformas SIG. Estas herramientas permiten a los agricultores identificar patrones y tendencias que facilitan la planificación y la toma de decisiones, como el momento óptimo para la siembra o la aplicación de riego y fertilizantes. Este apartado explora las herramientas y técnicas para el monitoreo temporal, subrayando su importancia en la agricultura de precisión.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/27.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style='background-color: #E3F0D4')
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/28.png', alt='')
            .col-lg-9
              h4 Concepto y factores involucrados
              p.mb-0 La variabilidad temporal se refiere a los cambios en las condiciones ambientales y las características del cultivo a lo largo del tiempo. Este tipo de variabilidad es influenciado por factores climáticos como la precipitación, la temperatura y los ciclos estacionales. Monitorear y analizar estos cambios es necesario para ajustar las prácticas agrícolas según las condiciones específicas de cada temporada.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.png', alt='')
      .col-lg-8
        .titulo-tres: h3 Herramientas y métodos de análisis temporal
        p.mb-4 El análisis de la variabilidad temporal en la agricultura requiere herramientas y métodos que permitan capturar y entender cómo las condiciones del cultivo y el ambiente cambian a lo largo del tiempo. Entre las herramientas más utilizadas se encuentran las series de tiempo en SIG y los sensores IoT, que proporcionan datos en tiempo real. Estas tecnologías permiten a los agricultores anticiparse a condiciones adversas y ajustar sus prácticas de manera oportuna.
        .p-4(style="background-color: #01B9D1 ")
          .tarjeta.bg-white.p-4.mb-1
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Series de tiempo en SIG: permiten analizar cómo las variables cambian en un mismo punto geográfico a lo largo del tiempo.
          .tarjeta.bg-white.p-4.mb-1
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Análisis de datos climáticos: uso de registros históricos para predecir patrones y planificar actividades agrícolas.
          .tarjeta.bg-white.p-4.mb-1
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Sensores IoT y datos en tiempo real: supervisión continua para ajustar rápidamente las operaciones agrícolas, como el riego y la fertilización.
    .titulo-tres: h3 Aplicaciones prácticas
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 La comprensión de la variabilidad temporal permite a los agricultores responder de manera proactiva a los cambios estacionales y a las condiciones climáticas variables. Aplicaciones prácticas como la planificación de la siembra, el monitoreo del estrés hídrico y la gestión de plagas estacionales son ejemplos de cómo este conocimiento se traduce en acciones concretas que mejoran el rendimiento y la sostenibilidad.
        ul.lista-ul--color.mb-0
          li.d-flex.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Planificación de la siembra:] basada en la predicción de lluvias y temperaturas.
          li.d-flex.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Monitoreo del estrés hídrico:] detección de periodos críticos para programar el riego.
          li.d-flex.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Gestión de plagas estacionales:] identificación de ventanas de tiempo para aplicaciones fitosanitarias.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/31.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 3.
      span Resumen Gestión de la variabilidad espacial y temporal.
    img(src='@/assets/curso/temas/32.svg', alt='La Figura 3 se denomina «Resumen Gestión de la variabilidad espacial y temporal» presenta un esquema sobre la gestión de la variabilidad espacial y temporal en sistemas agrícolas. Aborda su definición, destacando diferencias en el suelo, clima y rendimiento de cultivos. Incluye la importancia de gestionarla para optimizar recursos, herramientas como SIG y GPS para analizarla, métodos de geoestadística para interpretarla, y aplicaciones como eficiencia en riego y manejo de plagas.')
    figcaption Fuente: OIT, 2024.
    








</template>

<script>
export default {
  name: 'Tema3',
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
