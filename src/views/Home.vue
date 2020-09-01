<template>
  <v-layout>

    <v-row>
      <v-col>
        <h1 class="text-center" >Valor del Dólar en Chile</h1>
 <v-card color="error" dark>
        <v-date-picker
          v-model="fecha"
          full-width
          :min="minimo"
          :max="maximo"
          @change="getDolar(fecha)"
        ></v-date-picker>
      </v-card>
      <v-card color="error" dark>
        <v-card-text class="display-1 text-center" v-if="valor !== 'sin resultados'">1$ = {{valor}} pesos</v-card-text>
        <v-card-text class="display-1 text-center" v-else>{{valor}}</v-card-text>
      </v-card>
      </v-col>
     
    </v-row>
  </v-layout>
</template>

<script>
import axios from "axios";
import { mapMutations} from 'vuex';
export default {
  name: "Home",
  data() {
    return {
      fecha: new Date().toISOString().substring(0, 10),
      minimo: "1984",
      maximo: new Date().toISOString().substring(0, 10),
      valor: null,
    };
  },
  created() {
    this.getDolar(this.fecha);
  },
  methods: {
      ...mapMutations(['mostrarLoading', 'ocultarLoading']),
    async getDolar(dia) {
      let arrayFecha = dia.split("-");
      let ddmmyyyy = arrayFecha[2] + "-" + arrayFecha[1] + "-" + arrayFecha[0];

      try {
        this.mostrarLoading({titulo:'Accediendo a la Información', color: 'secondary'});
        let datos = await axios.get(    `https://mindicador.cl/api/dolar/${ddmmyyyy}`      );
        if (datos.data.serie.length > 0) {
          this.valor = await datos.data.serie[0].valor;
        } else {
          this.valor = "sin resultados";
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.ocultarLoading();
      }
    },
  },
};
</script>
