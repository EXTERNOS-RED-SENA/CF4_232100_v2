<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Introducción a la Inteligencia Artificial
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #E4F7FA ")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La recopilación y análisis de datos en tiempo real se han convertido en pilares fundamentales para la agricultura de precisión. Los sistemas automatizados de adquisición de datos integran diversas tecnologías, como sensores IoT, plataformas SIG y GPS, para monitorear continuamente las variables críticas de una unidad productiva. Estos sistemas permiten una gestión más eficiente y precisa de recursos, como el agua y los fertilizantes, y facilitan la toma de decisiones informadas.
        .col-lg-auto.d-lg-block.d-none
          figure
            img(src='@/assets/curso/temas/33.png', alt='')
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1	 Arquitectura de un sistema automatizado
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/34.png', alt='')
      .col-lg-7
        p.mb-4 La implementación de sistemas automatizados de adquisición de datos en la agricultura requiere de una infraestructura robusta que integre hardware, software y redes de comunicación. Esta arquitectura permite la recopilación y procesamiento de datos en tiempo real, facilitando la toma de decisiones rápidas y precisas. Los componentes clave de estos sistemas incluyen sensores IoT, controladores, actuadores y software de monitoreo. Cada uno de ellos desempeña un papel específico en el flujo de datos, desde la captura de información en campo hasta la ejecución automática de acciones.
        .tarjeta.p-4.py-3.color-acento-contenido--borde.bg-white.border-2
          p.mb-0 La correcta configuración e integración de estos elementos es importante para garantizar la eficiencia y la fiabilidad del sistema. Este apartado aborda los principales componentes y el flujo de datos dentro de un sistema automatizado, proporcionando una visión integral de su funcionamiento.
    .bg-slyder.p-4.mn
      .tarjeta.bg-white.p-5
        CarouselRED(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Componentes clave de un sistema automatizado
              p.mb-0 Un sistema automatizado de adquisición de datos consta de varios componentes que trabajan en conjunto para recopilar, procesar y analizar información en tiempo real. Los principales elementos son:
              ul.lista-ul--color
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Sensores IoT:] dispositivos que miden variables ambientales y del suelo.
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Controladores:] procesan los datos recopilados y ejecutan acciones basadas en criterios predefinidos.
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b #[em Software] de monitoreo:] herramientas como QGIS y plataformas de gestión en la nube que visualizan y analizan los datos.
                li.d-flex.mb-1
                  i.fas.fa-check-circle
                  p.mb-0 #[b Actuadores:] dispositivos que realizan acciones en el campo, como activar sistemas de riego.
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/35.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Flujo de datos en un sistema automatizado
              p.mb-0 El flujo de datos comienza con la recopilación a través de sensores IoT. Estos datos se transmiten a los controladores, donde son procesados y enviados al software de monitoreo para su análisis. Finalmente, los actuadores responden automáticamente a las condiciones detectadas, optimizando las operaciones agrícolas en tiempo real.
              
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/36.png', alt='Texto que describa la imagen')
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2	Integración de SIG y GPS en sistemas de monitoreo
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 La integración de Sistemas de Información Geográfica (SIG) y el Sistema de Posicionamiento Global (GPS) es fundamental en los sistemas de monitoreo automatizado. Los SIG permiten analizar y visualizar datos espaciales, mientras que el GPS asegura la precisión geográfica de los mismos. Juntos, estos sistemas proporcionan una plataforma poderosa para gestionar y optimizar las labores agrícolas.
          br
          br
          | El uso combinado de SIG y GPS permite a los agricultores georreferenciar variables críticas como la humedad del suelo o los niveles de nutrientes, facilitando el análisis espacial y la toma de decisiones en tiempo real. Este apartado examina cómo estas tecnologías trabajan en conjunto para mejorar la eficiencia y la sostenibilidad de las operaciones agrícolas.
        AccordionRED.mb-5( clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Rol de los SIG en la automatización")
            p.mb-0 Los Sistemas de Información Geográfica (SIG) son fundamentales para integrar y visualizar los datos espaciales recopilados por los sensores. Los SIG permiten analizar patrones y generar mapas temáticos que facilitan la toma de decisiones. Por ejemplo, un sistema automatizado puede combinar datos de sensores de humedad con mapas topográficos para ajustar el riego de manera específica.
          div(titulo="Precisión geoespacial con GPS")
            p.mb-0 El Sistema de Posicionamiento Global (GPS) proporciona la ubicación exacta de los sensores y actuadores en el campo. Esto permite una integración precisa con SIG, lo que es indispensable para la georreferenciación de datos y la implementación de prácticas agrícolas de precisión. La combinación de SIG y GPS asegura que las decisiones basadas en datos se alineen con la realidad geoespacial del terreno.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/37.png', alt='')
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3	Riego automatizado
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.png', alt='')
      .col-lg-8
        p.mb-4 El riego automatizado es una aplicación clave de los sistemas automatizados en la agricultura. Utilizando sensores IoT para medir la humedad del suelo y datos climáticos, estos sistemas ajustan automáticamente la cantidad y frecuencia de riego. Esto garantiza que las plantas reciban la cantidad exacta de agua necesaria, reduciendo el desperdicio y optimizando el uso de este recurso vital.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #CBF0F5 ")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/temas/39.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Así mismo, el riego automatizado contribuye a mejorar la sostenibilidad al minimizar el impacto ambiental, reduciendo el uso de energía y el escurrimiento de agua. Este apartado profundiza en los fundamentos, beneficios y pasos para diseñar e implementar un sistema de riego automatizado.
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Fundamentos y beneficios del riego automatizado" style="background-color: #F3F0EA ")
        .row.justify-content-center
          .col-lg-4.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/40.png', alt='')
          .col-lg-6
            h4 Fundamentos y beneficios del riego automatizado
            p El riego automatizado es una de las aplicaciones más efectivas de los sistemas automatizados en la agricultura. Utiliza sensores de humedad del suelo y datos climáticos para determinar la cantidad y el momento óptimo de riego. Esto no solo mejora la eficiencia del agua, sino que también reduce los costos operativos y aumenta el rendimiento del cultivo.
      .py-4.py-md-5(titulo="Diseño e implementación de sistemas de riego automatizado" style="background-color: #F3F0EA ")
        .row.justify-content-center
          .col-lg-3.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/42.png', alt='')
          .col-lg-6
            h4 Diseño e implementación de sistemas de riego automatizado
            p El proceso de diseño e implementación de un sistema de riego automatizado requiere un enfoque sistemático que garantice la máxima eficiencia y eficacia. Este tipo de sistema debe ser capaz de recopilar y analizar datos en tiempo real para tomar decisiones autónomas sobre cuándo y cuánto regar.
              br
              br
              |El diseño inicial incluye la identificación de las áreas críticas dentro de la unidad productiva, la instalación de sensores estratégicamente ubicados y la configuración de los controladores y actuadores. Una vez en funcionamiento, el sistema opera de manera continua, ajustando el riego en función de las condiciones actuales del suelo y el clima. Este apartado detalla cada una de estas fases, ofreciendo una guía para la implementación exitosa de un sistema de riego automatizado.
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Fase de configuración: identificación de las zonas de riego y configuración de sensores.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Fase de operación: monitoreo continuo y ajustes automáticos basados en datos en tiempo real.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Fase de optimización: análisis de datos históricos para mejorar la eficiencia del sistema.
      .py-4.py-md-5(titulo="Casos prácticos" style="background-color: #F3F0EA ")
        .row.justify-content-center
          .col-lg-3.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/43.png', alt='')
          .col-lg-6
            h4 Casos prácticos
            p Los casos prácticos se requieren para comprender cómo la tecnología de riego automatizado puede ser implementada en diferentes contextos agrícolas. Estas experiencias reales demuestran la adaptabilidad y eficacia de los sistemas automatizados en diversos cultivos y condiciones climáticas, proporcionando evidencia concreta de sus beneficios.
              br
              br
              |El riego automatizado, al integrar sensores IoT, SIG y GPS, permite una aplicación precisa y eficiente del agua, ajustándose a las necesidades específicas del cultivo en tiempo real. Esta tecnología no solo optimiza el uso del agua, un recurso vital y limitado, sino que también mejora la productividad y calidad de los cultivos. Además, contribuye a la sostenibilidad al reducir el impacto ambiental y minimizar el desperdicio de insumos.
    p.mb-4 A continuación, se presentarán varios casos prácticos que ilustran cómo los sistemas de riego automatizado han sido implementados exitosamente, destacando los resultados obtenidos en términos de ahorro de recursos, aumento del rendimiento y mejora de la sostenibilidad agrícola.
</template>

<script>
export default {
  name: 'Tema4',
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
