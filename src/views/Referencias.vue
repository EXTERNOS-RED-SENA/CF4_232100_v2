<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" titulo="Referencias bibliográficas")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item(v-for="ref in orderedData" :key="ref.link")
      span(v-html="ref.referencia")
      a.ms-1(v-if="ref.link" :href="ref.link" target="_blank")
        span(v-html="ref.link")
        i.ms-1.fas.fa-external-link-alt
      hr.my-3
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Agricolus. (s.f.). Agricolus: La plataforma para la agricultura de precisión. ',
        link: 'https://www.agricolus.com/es/',
      },
      {
        referencia:
          'Agrotendencia TV. (2020). Agricultura de precisión: Nuevas tecnologías para el agricultor [Video]. ',
        link: 'https://www.youtube.com/watch?v=1DZQybHCEPg',
      },
      {
        referencia:
          'Álvarez Herrera, J. G., Ruiz Berrío, H. D., & Acosta Tova, D. F. (2021). Evaluación geoestadística de atributos hidrofísicos del suelo en la granja Tunguavita, Paipa, Colombia. Ciencia e Ingeniería Neogranadina',
        link: 'https://doi.org/10.18359/rcin.5396',
      },
      {
        referencia:
          'Delgado, O., & Martínez, J. (2015). Elaboración del mapa de ruido del área urbana de la Ciudad de Cuenca – Ecuador, empleando la técnica de interpolación geoestadística Kriging ordinario. Ciencias Espaciales, 8(1), 411–440.',
        link: 'https://doi.org/10.5377/ce.v8i1.2059',
      },
      {
        referencia:
          'Farm21. (s.f.). Guía definitiva de la agricultura de precisión. ',
        link:
          'https://www.farm21.com/es/guias/la-ultima-guia-de-precision-agricola/',
      },
      {
        referencia:
          'FlyPix AI. (2024). Agricultura de precisión: herramientas, software e inteligencia artificial en la agricultura.',
        link:
          'https://flypix.ai/es/blog/precision-agriculture-software-tools-ai/',
      },
      {
        referencia:
          'Grup de Recerca en AgròTICa i Agricultura de Precisió. (s.f.). Definiciones de Agricultura de Precisión. ',
        link:
          'https://www.grap.udl.cat/es/presentacio/que-fem/definicions-agricultura-de-precisio/',
      },
      {
        referencia: 'HEMAV. (2024). Agricultura de Precisión: Guía Completa. ',
        link: 'https://hemav.com/blog/agricultura-de-precision-guia-completa',
      },
      {
        referencia:
          'Universidad EARTH. (2020). Agricultura de precisión y su aplicación práctica [Video]. YouTube. ',
        link: 'https://www.youtube.com/watch?v=V0XpvRE7M1s',
      },
      {
        referencia:
          'Universidad Nacional Agraria - Nicaragua. (2017). ¿Qué es Agricultura de Precisión? [Video]. YouTube.',
        link: 'https://www.youtube.com/watch?v=3CHz9Ul6RFQ',
      },
      {
        referencia:
          'Universidad Nacional de Córdoba. (2024). FastMapping: Software de uso libre para la agricultura de precisión. ',
        link:
          'https://uncinnova.unc.edu.ar/2024/05/31/fastmapping-software-de-uso-libre-para-la-agricultura-de-precision/',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
