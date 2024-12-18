<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a los sistemas automatizados en la agricultura
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #C8E2AA")  
          p.mb-0 La agricultura moderna enfrenta desafíos significativos, como el cambio climático, la presión para aumentar la productividad y la necesidad de gestionar los recursos naturales de manera sostenible. En este contexto, los sistemas automatizados han emergido como una solución integral para mejorar la eficiencia y sostenibilidad en las labores agrícolas. Estas tecnologías permiten la recopilación, análisis y gestión de datos en tiempo real, facilitando la toma de decisiones basadas en información precisa y contextualizada.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/5.png', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #E3F0D4")  
          p.mb-0 Este capítulo introduce los fundamentos de los sistemas automatizados aplicados a la agricultura, destacando su importancia para optimizar el uso de recursos, incrementar la productividad y reducir el impacto ambiental. Se abordan las principales tecnologías involucradas, como los Sistemas de Información Geográfica (SIG), el Sistema de Posicionamiento Global (GPS) y los sensores IoT. Estas herramientas no solo permiten monitorear las condiciones del campo, sino que también contribuyen a gestionar la variabilidad espacial y temporal, un factor crítico en la agricultura de precisión.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1	Importancia del monitoreo agrícola automatizado
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        p.mb-0 La evolución tecnológica en el sector agropecuario ha permitido la implementación de sistemas automatizados que optimizan la gestión de las unidades productivas. El monitoreo agrícola automatizado es un pilar fundamental para mejorar la eficiencia en la toma de decisiones, ya que permite recopilar datos precisos y en tiempo real sobre las condiciones del cultivo, el suelo y el clima. Estas tecnologías no solo incrementan la productividad, sino que también contribuyen a la sostenibilidad al reducir el uso excesivo de insumos como el agua y los fertilizantes.
      .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/6.png', alt='')
      .col-lg-4
        .tarjeta.p-4(style="background-color: #EAEFF4 ")
          img(src='@/assets/curso/temas/7.svg', alt='' style='width: 87px').mb-4
          p.mb-0 La agricultura de precisión, que se basa en el análisis detallado de datos, se ha convertido en una estrategia clave para enfrentar los desafíos actuales, como el cambio climático y la creciente demanda de alimentos. A través del monitoreo automatizado, los productores pueden identificar variaciones dentro de sus parcelas y aplicar medidas correctivas específicas, mejorando así la eficiencia y reduciendo costos operativos.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2	Beneficios en la gestión de recursos y sostenibilidad
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/8.png', alt='')
      .col-lg-8
        p.mb-4 Los sistemas automatizados permiten una gestión óptima de los recursos agrícolas al ofrecer información detallada y en tiempo real. Estos sistemas integran tecnologías como sensores IoT, SIG y GPS para medir y analizar variables críticas como la humedad del suelo, la temperatura y el nivel de nutrientes. Esto habilitas prácticas más sostenibles al reducir el impacto ambiental y optimizar el uso de insumos.
          br
          br
          | #[b Principales beneficios:]
        ul.lista-ul--color
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 #[b Eficiencia en el uso de recursos:] reducción en el consumo de agua y fertilizantes.
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 #[b Mejor toma de decisiones:] basada en datos precisos y específicos de cada zona del cultivo.
          li.d-flex.mb-1
            i.fas.fa-check-circle
            p.mb-0 #[b Sostenibilidad ambiental:] minimización del impacto ambiental y mejor gestión del suelo y el agua.
        p.mb-0 Estos beneficios no solo mejoran la productividad, sino que también fortalecen la resiliencia del sector agropecuario frente a cambios climáticos y económicos.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3	Tecnologías clave: SIG, GPS y Sensores IoT
    p.mb-4 La integración de tecnologías avanzadas es esencial para el monitoreo y gestión de labores agrícolas. Cada una de estas herramientas juega un papel fundamental en la recopilación y análisis de datos georreferenciados.
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/9.png', alt='')
      .col-lg-9
        AccordionRED.mb-5(clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Sistemas de Información Geográfica (SIG)")
            p.mb-0 La capacidad de cambiar la magnitud del voltaje mediante transformadores facilita la transmisión eficiente de energía en redes eléctricas de larga distancia.
          div(titulo="Sistema de Posicionamiento Global (GPS)")
            p.mb-0 El GPS proporciona coordenadas geográficas precisas para delimitar parcelas y planificar rutas de maquinaria agrícola. Su integración con SIG mejora la precisión en la gestión espacial de las unidades productivas.
          div(titulo="Sensores IoT")
            p.mb-0 Los sensores IoT recopilan datos en tiempo real sobre variables críticas del cultivo, como la humedad del suelo y la temperatura. Estos datos se integran en sistemas automatizados para ajustar prácticas agrícolas en tiempo real, como el riego o la fertilización.
    p.mb-4 La combinación de estas tecnologías forma la base de los sistemas de monitoreo automatizado, permitiendo una gestión más eficiente y sostenible de las labores agrícolas.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Resumen Introducción a los sistemas automatizados en la agricultura
    img(src='@/assets/curso/temas/10.svg', alt='La Figura 1 se denomina «Resumen Introducción a los sistemas automatizados en la agricultura» presenta una visión estructurada de los sistemas automatizados en la agricultura, destacando los desafíos significativos que enfrenta el sector, como el cambio climático y la gestión sostenible de recursos. Se enfatiza el papel de estas tecnologías como soluciones integrales para optimizar el uso de recursos, incrementar la productividad y reducir el impacto ambiental. También se identifican las principales herramientas involucradas, como los sistemas de información geográfica (SIG), el GPS y los sensores IoT.  ')
    figcaption Fuente: OIT, 2024.   


      
                                                                                                                                      
</template>

<script>
export default {
  name: 'Tema1',
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
