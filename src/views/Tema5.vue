<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Procesamiento y análisis de datos
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p.mb-4 En la agricultura de precisión, la toma de decisiones basada en datos es un factor crítico para optimizar la gestión de recursos y mejorar el rendimiento de los cultivos. El procesamiento y análisis de datos permiten transformar grandes volúmenes de información en conocimientos accionables. Este proceso es facilitado por herramientas avanzadas de geoestadística, visualización de datos y reportes, que ayudan a identificar patrones, prever riesgos y aplicar soluciones específicas en tiempo real.
        .row.justify-content-center.mb-5
          .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/48.png', alt='')                 
          .col-lg-7
            .p-4.h-100(style="background-color: #CBF0F5 ")
              p.mb-0 Este capítulo se enfoca en los métodos y técnicas utilizados para el análisis de datos en la agricultura, subrayando su papel en la toma de decisiones estratégicas. Se aborda el uso de herramientas estadísticas y geoespaciales para procesar los datos recopilados por sensores IoT y sistemas automatizados, así como la generación de reportes y visualizaciones que facilitan la interpretación de la información.
      .col-3.d-none.d-lg-block: img(src='@/assets/curso/temas/49.png', alt='')
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1	Geoestadística aplicada en la agricultura
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/50.png', alt='')
      .col-lg-7
        p.mb-4 La geoestadística es una rama de la estadística que se enfoca en analizar y modelar fenómenos que varían en el espacio. En el contexto agrícola, esta disciplina es fundamental para entender la variabilidad espacial de las propiedades del suelo, el rendimiento de los cultivos y otras variables clave. A través de técnicas como Kriging e IDW, los agricultores pueden identificar patrones y relaciones que no son evidentes a simple vista, lo que les permite tomar decisiones más informadas y precisas.
        .tarjeta.p-4.py-3.color-acento-contenido--borde.bg-white.border-2
          p.mb-0 La aplicación de la geoestadística en la agricultura de precisión facilita la generación de mapas detallados que destacan áreas con necesidades específicas, optimizando así la distribución de recursos y mejorando la productividad. Este apartado aborda los principios básicos de la geoestadística y sus principales herramientas, explorando su aplicación en la gestión de unidades productivas agrícolas.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AccordionRED.mb-5( clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo=" Introducción a la geoestadística")
            p.mb-0 La #[b geoestadística] es una disciplina que combina métodos estadísticos y geoespaciales para analizar y predecir la distribución de variables en el espacio. En la agricultura, es utilizada para comprender la #[b variabilidad espacial] de factores como la fertilidad del suelo, la humedad y el rendimiento de los cultivos.
          div(titulo="Principales técnicas geoestadísticas")
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Kriging:] estima valores desconocidos en un área con base en datos de puntos conocidos, proporcionando una medida de la incertidumbre asociada.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b DW (Ponderación de la Distancia Inversa):] asigna valores a puntos desconocidos en función de su proximidad a puntos conocidos.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Semivariograma:] mide la similitud entre puntos de datos en función de la distancia, permitiendo modelar la estructura espacial de una variable.
          div(titulo="Aplicaciones prácticas")
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Mapeo de fertilidad del suelo:] determinación de zonas con diferentes necesidades de fertilización.

              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Análisis de variabilidad del rendimiento:] identificación de áreas con bajo rendimiento para aplicar soluciones específicas.

              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Optimización del uso de insumos:] reducción del uso de agua y fertilizantes mediante la aplicación precisa en zonas críticas.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/51.png', alt='')
    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2	 Visualización y reportes en SIG
    .row.align-items-center
      .col-lg-auto
        img(src="@/assets/curso/temas/52.png", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 La capacidad de visualizar datos complejos de manera clara y comprensible es una de las fortalezas clave de los Sistemas de Información Geográfica (SIG). La visualización geoespacial, a través de mapas temáticos, permite a los agricultores interpretar rápidamente la información y tomar decisiones basadas en el análisis espacial. Además, la generación de reportes consolida la información de diversas fuentes en documentos fácilmente interpretables, para la planificación y la comunicación de estrategias.
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Importancia de la visualización de datos" style="background-color: #F3F0EA ")
        .row.justify-content-center
          .col-lg-4.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/40.png', alt='')
          .col-lg-6
            h4 Importancia de la visualización de datos
            p La visualización es una herramienta clave para interpretar grandes volúmenes de datos geoespaciales. Los mapas temáticos generados en plataformas SIG permiten a los agricultores identificar rápidamente áreas críticas y patrones espaciales, facilitando la toma de decisiones informadas.
      .py-4.py-md-5(titulo="Tipos de visualización comúnmente utilizados" style="background-color: #F3F0EA ")
        .row.justify-content-center
          .col-lg-4.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/40.png', alt='')
          .col-lg-6
            h4 Tipos de visualización comúnmente utilizados
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Mapas de variabilidad espacial:] representan la distribución de variables como humedad o fertilidad del suelo.

              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Mapas de rendimiento:] muestran la productividad de diferentes áreas dentro de una unidad productiva.

              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Mapas de análisis temporal:] comparan datos de distintas temporadas para detectar cambios y tendencias.
      .py-4.py-md-5(titulo="Generación de reportes" style="background-color: #F3F0EA ")
        .row.justify-content-center
          .col-lg-4.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/40.png', alt='')
          .col-lg-6
            h4 Generación de reportes
            p Los reportes combinan gráficos, mapas y estadísticas para proporcionar un resumen completo del estado de las variables agrícolas. Estos documentos son fundamentales para comunicar hallazgos, justificar decisiones y planificar estrategias a futuro.
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.3	 Toma de decisiones basada en datos
    p.mb-4 En la agricultura moderna, la toma de decisiones basada en datos es fundamental para maximizar la eficiencia y minimizar los riesgos. Gracias a la recopilación de datos en tiempo real mediante sensores IoT y sistemas automatizados, los agricultores pueden analizar las condiciones actuales y predecir futuros escenarios con mayor precisión. Este enfoque no solo permite un mejor uso de los recursos, sino que también contribuye a la sostenibilidad y resiliencia de las unidades productivas.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/53.png', alt='')
      .col-lg-8
        .titulo-tres: h3 Proceso de toma de decisiones
        p.mb-4 El uso de datos permite a los agricultores tomar decisiones basadas en evidencia, minimizando riesgos y optimizando el uso de recursos. Este proceso incluye:
        .p-4(style="background-color: #01B9D1 ")
          .tarjeta.bg-white.p-4.mb-1
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 #[b Recopilación de datos:] sensores IoT y sistemas automatizados recolectan información en tiempo real.
          .tarjeta.bg-white.p-4.mb-1
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 #[b Análisis y procesamiento:] herramientas geoestadísticas y SIG transforman los datos en información útil.
          .tarjeta.bg-white.p-4.mb-1
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 #[b Implementación de acciones:] las decisiones son ejecutadas automática o manualmente en base a los resultados del análisis.
    .titulo-tres: h3 Ejemplos de decisiones basadas en datos
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 La capacidad de tomar decisiones informadas es uno de los mayores beneficios de la agricultura de precisión. Los datos recolectados a través de sensores IoT, sistemas automatizados y plataformas SIG permiten identificar patrones y tendencias que guían acciones estratégicas en el manejo de los cultivos. Desde la planificación de la siembra hasta la gestión eficiente del riego y el control de plagas, las decisiones basadas en datos optimizan el uso de recursos y mejoran el rendimiento de las unidades productivas.
          br
          br
          | A continuación, se presenta ejemplos concretos de cómo los datos impulsan decisiones clave en el campo. A través de casos prácticos, se evidencia cómo el análisis de información permite a los agricultores responder a las condiciones cambiantes del entorno, aumentar la productividad y garantizar la sostenibilidad a largo plazo.
        ul.lista-ul--color.mb-0
          li.d-flex.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Planificación de la siembra:] selección del mejor momento y lugar basándose en datos climáticos y de suelo.

          li.d-flex.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Gestión del riego:] ajuste de la cantidad y frecuencia del riego según las condiciones actuales del suelo.
          li.d-flex.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Manejo de plagas y enfermedades:] aplicación focalizada de agroquímicos en áreas afectadas.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/54.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 5.
      span Resumen Procesamiento y análisis de datos para la toma de decisiones
      img(src='@/assets/curso/temas/55.svg', alt='La Figura 5 se denomina «Resumen Procesamiento y análisis de datos para la toma de decisiones» y detalla el procesamiento y análisis de datos en la agricultura para la toma de decisiones estratégicas. Resalta la importancia de los datos en la agricultura de precisión, el uso de herramientas avanzadas de geoestadística y visualización, y la transformación de grandes volúmenes de datos en conocimientos prácticos. También aborda la generación de reportes y su papel en decisiones informadas.')
      figcaption Fuente: OIT, 2024.





</template>

<script>
export default {
  name: 'Tema5',
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
