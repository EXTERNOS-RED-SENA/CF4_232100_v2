<template lang="pug">
.curso-main-container.glosario
  BannerInterno(icono="fas fa-atlas" titulo="Glosario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .glosario__letra-item.mb-2(v-for="letra in orderedData" :key="'letra-'+letra.letra")
      .glosario__letra-item__letra.me-4
        .glosario__letra-item__letra__icono
          span {{letra.letra}}
      .glosario__letra-item__texto
        p.mb-3(v-for="termino in letra.terminos")
          strong
            i.lista-ul__vineta
          strong(v-html="termino.terminoHtml || termino.termino") 
          strong : 
          span(v-html="termino.significado")
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Agricultura de precisión',
          significado:
            'Sistema de gestión agrícola que utiliza tecnologías como SIG, GPS y sensores IoT para recopilar, procesar y analizar datos en tiempo real, optimizando recursos.',
        },
        {
          termino: 'Agricultura sostenible',
          significado:
            'Prácticas agrícolas que buscan optimizar el uso de recursos naturales y reducir el impacto ambiental, garantizando la productividad a largo plazo.',
        },
        {
          termino: 'Geoestadística',
          significado:
            'Rama de la estadística que analiza y modela la distribución de variables en el espacio, utilizada para estudiar la variabilidad espacial en la agricultura.',
        },
        {
          termino: 'Interpolación IDW',
          significado:
            'Método de estimación que asigna valores a puntos desconocidos basándose en la distancia a puntos conocidos, suponiendo que los puntos más cercanos son más similares.',
        },
        {
          termino: 'Kriging',
          significado:
            'Técnica de interpolación geoestadística que no solo estima valores desconocidos, sino que también mide la incertidumbre de dichas estimaciones.',
        },
        {
          termino: 'Mapas temáticos',
          significado:
            'Representaciones gráficas generadas en SIG que muestran la distribución espacial de una o más variables específicas, como la fertilidad del suelo o el rendimiento.',
        },
        {
          termino: 'Riego automatizado',
          significado:
            'Sistema que ajusta automáticamente la cantidad y frecuencia de riego en función de datos en tiempo real recopilados por sensores de humedad y clima.',
        },
        {
          termino: 'Sensores IoT',
          significado:
            'Dispositivos conectados a internet que recopilan y transmiten datos en tiempo real sobre variables ambientales y del suelo.',
        },
        {
          termino: 'Sistema de Información Geográfica (SIG)',
          significado:
            'Herramienta que permite recopilar, analizar y visualizar datos geoespaciales, facilitando la toma de decisiones en función de la variabilidad espacial.',
        },
        {
          termino: 'Sistema de Posicionamiento Global (GPS)',
          significado:
            'Tecnología que utiliza una red de satélites para determinar con precisión la ubicación geográfica de un objeto en la superficie terrestre.',
        },
        {
          termino: 'Variabilidad espacial',
          significado:
            'Diferencias en las propiedades del suelo, clima o cultivo dentro de una misma unidad productiva.',
        },
        {
          termino: 'Variabilidad temporal',
          significado:
            'Cambios en las condiciones ambientales y del cultivo que ocurren a lo largo del tiempo, como variaciones estacionales o climáticas.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
