<template>
  <v-container>
    <v-row no-gutters>
      <template v-for="n in 4">
        <v-col :key="n">
          <v-card class="pa-2" outlined tile>Column</v-card>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>

    <v-row class="mb-6" no-gutters>
      <v-col v-for="n in 4" :key="n">
        <v-card class="pa-2" tile outlined>col</v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 2" :key="n" :cols="n === 1 ? 8 : 4">
        <v-card class="pa-2" tile outlined>col-{{ n === 1 ? 8 : 4 }}</v-card>
      </v-col>
    </v-row>

<v-row no-gutters>
      <v-col order="last">
        <v-card color="primary"
          class="pa-2"
          outlined
          tile
        >
          First, but last
        </v-card>
      </v-col>
      <v-col>
        <v-card  color="error"
          class="pa-2"
          outlined
          tile
        >
          Second, but unordered
        </v-card>
      </v-col>
      <v-col order="first">
        <v-card color="secondary" dark
          class="pa-2"
          outlined
          tile
        >
          Third, but first
        </v-card>
      </v-col>
    </v-row>



    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="primary lighten-3"
          style="height: 200px;"
        >
          <v-card
            v-for="n in 6"
            :key="n"
            class="ma-3 pa-6"
            tile
          >
            Flexbox
          </v-card>
        </v-row>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
export default {
  name: "Grid"
};
</script>
