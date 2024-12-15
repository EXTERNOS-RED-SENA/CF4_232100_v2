<template lang="pug">
.curso-main-container.complementario
  BannerInterno(icono="far fa-folder-open" titulo="Material complementario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .table-responsive
      table
        thead
          tr
            th(colspan='3' scope="col") Tema
            th(colspan='5' scope="col") Referencia APA del material
            th(colspan='2' scope="col") Tipo 
            th(colspan='2' scope="col") Enlace
        tbody
          tr(v-for="(item, index) in computedData" :key="'complementario-'+index")
            td.text-start(colspan='3' scope="row" v-html="item.tema")
            td.text-start(colspan='5' scope="row" v-html="item.referencia")
            td(colspan='2' v-html="item.tipo")
            td(colspan='2')
              .complementario__enlaces
                a.complementario__btn(v-for="link of item.link" :href="link" target="_blank")
                  i.fas.fa-external-link-alt

</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Introducción a los sistemas de información',
          referencia:
            'ERP School. (2021, March 14). What is an ERP System and How Can it Transform Industry Operations? ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=kDPW2Lle2gQ',
        },
        {
          tema: 'Introducción a los sistemas de información',
          referencia:
            'Engineering Library. (2018). Introduction to SCADA and Industrial Automation.',
          tipo: 'Documento',
          link: 'https://www.engineeringlibrary.org/scada_automation.pdf',
        },
        {
          tema: 'Gestión de la variabilidad espacial y temporal',
          referencia:
            'QGIS Development Team. (2021). QGIS Geographic Information System. Open Source Geospatial Foundation Project.',
          tipo: 'Software (GIS)',
          link: 'https://qgis.org',
        },
        {
          tema: 'Gestión de la variabilidad espacial y temporal',
          referencia: 'Google Earth Engine. (2021). Earth Engine Data Catalog.',
          tipo: 'Plataforma en la nube',
          link: 'https://earthengine.google.com/',
        },
        {
          tema: 'Automatismos eléctricos',
          referencia:
            'Automation Direct. (2019, November 15). Introduction to PLCs and Industrial Automation [Video]. YouTube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Yrj1aWS0Tt4',
        },
        {
          tema: 'Automatismos eléctricos',
          referencia:
            'Festo Didactic. (2009). Manual Básico de Automatismos Eléctricos. Festo Didactic GmbH.',
          tipo: 'Documento PDF',
          link: 'https://www.festo.com/manuales/automatismos_basicos.pdf',
        },
        {
          tema: 'Introducción a la agricultura de precisión',
          referencia:
            'Universidad Nacional Agraria - Nicaragua. (2017). ¿Qué es Agricultura de Precisión? [Video]. YouTube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=3CHz9Ul6RFQ',
        },
        {
          tema: 'Aplicaciones prácticas de la agricultura de precisión ',
          referencia:
            'Universidad EARTH. (2020). Agricultura de precisión y su aplicación práctica [Video]. YouTube',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=V0XpvRE7M1s',
        },
        {
          tema: 'Software de uso libre para agricultura de precisión',
          referencia:
            'Universidad Nacional de Córdoba. (2024). FastMapping: software de uso libre para la agricultura de precisión.',
          tipo: 'Documento',
          link:
            'https://uncinnova.unc.edu.ar/2024/05/31/fastmapping-software-de-uso-libre-para-la-agricultura-de-precision/',
        },
        {
          tema: 'Definiciones de agricultura de precisión',
          referencia:
            'Grup de Recerca en AgròTICa i Agricultura de Precisió. (s.f.). Definiciones de Agricultura de Precisión.',
          tipo: 'Documento',
          link:
            'https://hemav.com/blog/agricultura-de-precision-guia-completa/',
        },
        {
          tema: 'Plataforma para agricultura de precisión',
          referencia:
            'Agricolus. (s.f.). Agricolus - La plataforma para la agricultura de precisión.',
          tipo: 'Documento',
          link: 'https://www.agricolus.com/es/',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
