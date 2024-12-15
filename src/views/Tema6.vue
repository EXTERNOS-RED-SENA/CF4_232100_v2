<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg6
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Casos de estudio y aplicaciones prácticas
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #98E2EC")  
          p.mb-0 Los casos de estudio y las aplicaciones prácticas son esenciales para comprender cómo las tecnologías de monitoreo automatizado transforman la gestión agrícola. Estos ejemplos reales muestran cómo herramientas como SIG, GPS y sensores IoT pueden ser implementadas en diversas situaciones para optimizar procesos, reducir costos y mejorar la sostenibilidad. A través de la agricultura de precisión, los agricultores pueden personalizar sus prácticas en función de datos específicos, maximizando el rendimiento y minimizando el impacto ambiental.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/56.png', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #CBF0F5")
          img(src='@/assets/curso/temas/57.png', alt='' style='width: 85px').mb-3  
          p.mb-0 Este capítulo explora casos prácticos de diferentes cultivos y entornos agrícolas, proporcionando un marco para aplicar los conocimientos adquiridos en escenarios reales. Se destacan los beneficios logrados, las lecciones aprendidas y las mejores prácticas adoptadas, sirviendo como guía para la implementación de soluciones tecnológicas en el campo.
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.1	Implementación de sistemas automatizados en cultivos de alto valor
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/58.png', alt='')
      .col-lg-8
        p.mb-4 Los cultivos de alto valor, como el café, los viñedos y los frutales, requieren un manejo preciso para maximizar su rendimiento y calidad. La implementación de sistemas automatizados de monitoreo y control en estos cultivos ha demostrado ser una estrategia efectiva para optimizar el uso de recursos y mejorar la sostenibilidad. Al integrar tecnologías como sensores IoT, SIG y GPS, los agricultores pueden monitorear en tiempo real variables críticas, como la humedad del suelo y las condiciones climáticas, ajustando automáticamente las operaciones agrícolas.
        AccordionRED.mb-5( clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Caso 1: Monitoreo de humedad en un cultivo de café")
            p.mb-0 En una finca cafetera en Colombia, se instaló un sistema automatizado de monitoreo de humedad del suelo. Utilizando sensores IoT y SIG, los agricultores pudieron identificar áreas con diferentes niveles de humedad y ajustar el riego en consecuencia. Esto resultó en un ahorro del 25 % en agua y un incremento del 15 % en la productividad del cultivo.
          div(titulo="Caso 2: Riego automatizado en viñedos")
            p.mb-0 Un viñedo en España utilizó sensores de humedad y temperatura para implementar un sistema de riego automatizado. La integración con plataformas SIG permitió visualizar las áreas críticas y programar el riego de manera más eficiente. Como resultado, se redujo el consumo de agua en un 30 % y se mejoró la calidad de las uvas, aumentando los ingresos del productor.
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.2	 Comparativa de resultados: métodos tradicionales vs. automatizados
    .row.align-items-center.mb-4
      .col-lg-auto
        img(src="@/assets/curso/temas/52.png", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 La transición de métodos agrícolas tradicionales a sistemas automatizados representa un cambio significativo en la manera en que se gestionan las unidades productivas. Los métodos tradicionales, aunque efectivos en ciertas condiciones, suelen ser más laboriosos, menos precisos y más intensivos en recursos. Por otro lado, los sistemas automatizados optimizan la gestión a través de la recolección y análisis de datos en tiempo real, mejorando la eficiencia y la toma de decisiones.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3 
        div.bg-color-white.box-shadow.px-4.py-5.h-100.hover.tarjeta.text-center
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/60.svg"
            alt=""
            style="width: 90px"
          )
          h4 Uso de agua
          p.mb-0 Los sistemas automatizados de riego han demostrado ser significativamente más eficientes que los métodos tradicionales, reduciendo el consumo de agua hasta en un 40% en ciertos cultivos.
      .col-lg-6.mb-lg-0.mb-3 
        div.bg-color-white.box-shadow.px-4.py-5.h-100.hover.tarjeta.text-center
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/61.svg"
            alt=""
            style="width: 90px"
          )
          h4 Rendimiento del cultivo
          p.mb-0 La agricultura de precisión permite identificar áreas de alto y bajo rendimiento, lo que facilita la aplicación focalizada de insumos y, en consecuencia, un aumento promedio del 20% en la producción.
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.3	Lecciones aprendidas y buenas prácticas
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color:")  
          p.mb-0 La implementación de tecnologías automatizadas en la agricultura no está exenta de desafíos. Sin embargo, cada experiencia práctica aporta lecciones valiosas que ayudan a optimizar futuros proyectos. Este apartado recopila los aprendizajes más relevantes obtenidos de diversos casos de estudio, destacando tanto los desafíos enfrentados como las soluciones implementadas.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/63.png', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #CBF0F5")
          img(src='@/assets/curso/temas/62.svg', alt='' style='width: 85px').mb-3  
          p.mb-0 Así mismo, se presentan buenas prácticas que han demostrado ser efectivas para maximizar el impacto de los sistemas automatizados, como la capacitación del personal, el mantenimiento regular de los equipos y la integración de tecnologías. Estas recomendaciones sirven como una guía práctica para garantizar el éxito en la adopción de estas herramientas tecnológicas.


</template>

<script>
export default {
  name: 'Tema6',
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
