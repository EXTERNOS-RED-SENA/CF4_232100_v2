<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/s1.png', alt='')
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #F3F0EA").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/s2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El siguiente diagrama ofrece una visión general sintetizada de los temas principales tratados en el componente sobre Sistemas Automatizados para el Monitoreo y Gestión de Labores Agrícolas. Este mapa conceptual ha sido diseñado para ayudar al lector a visualizar cómo se interrelacionan los diferentes elementos que conforman la agricultura de precisión y la gestión tecnológica de unidades productivas.
        p.mb-4 En el centro del diagrama se encuentra el concepto de sistemas automatizados aplicados al monitoreo agrícola, del cual se desprenden áreas clave: la necesidad de integrar tecnologías avanzadas, la implementación de herramientas de monitoreo como SIG, GPS y sensores IoT, y el análisis de datos geoespaciales. Cada uno de estos temas se desglosa en subtemas específicos, como la optimización del uso de insumos y el diseño de estrategias basadas en datos, reflejando la estructura del componente.
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            .p-4(style="background-color: #E3F0D4")
              p.mb-0 Este diagrama también destaca la importancia del riego automatizado, la geoestadística aplicada y la implementación de prácticas de agricultura de precisión, subrayando su papel en la sostenibilidad y competitividad del sector agropecuario.
          .col-lg-6.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/s3.png', alt='')
    p.mb-4 El mapa conceptual actúa como una guía visual complementaria al contenido detallado del componente. Al revisarlo, el aprendiz podrá comprender de manera rápida y clara la amplitud y profundidad de los temas abordados, así como sus interconexiones. Este recurso visual facilita la integración de conceptos clave, permitiendo al lector utilizarlo como una referencia rápida y efectiva en su proceso de aprendizaje.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/s4.svg", alt="La Figura 6 se denomina «Síntesis del componente». El diagrama muestra un mapa conceptual centrado en “Sistemas automatizados para el monitoreo y gestión de labores agrícolas”, que se ramifica en 12 elementos principales. Incluye desde el contexto del sector agropecuario hasta la promoción de la competitividad, pasando por aspectos como herramientas tecnológicas (SIG, GPS, sensores IoT), diseño de estrategias, implementación de riego automatizado y uso de geoestadística. Cada elemento principal se desglosa en subtemas específicos que detallan objetivos, procesos y resultados esperados. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
