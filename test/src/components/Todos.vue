<template>
  <div>
    <div class="columns mt-5">
      <button v-on:click="getPokemons"
              class="column is-1 is-offset-5 button is-inverted is-rounded is-warning is-light">getPokemons
      </button>
    </div>
    <div class="columns mt-5">
      <span class="column is-2 is-offset-3">which pokemon are you looking for ? : {{ benaddi }}</span>
      <label>
        <input v-model="benaddi">
      </label>
      <button v-on:click="getPokemon"
              class="column is-1 ml-5 button is-inverted is-rounded is-warning is-light">getOnePokemon
      </button>
    </div>
    <div class="columns mt-5">
      <h1 class="column is-full title is-3">All the Pokemons</h1>
    </div>
    <div class="columns mt-5">
      <div class="column is-full" v-bind:key="pokemon.id" v-for="pokemon in pokemons">
        <h3>{{ pokemon }}</h3>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Todos",
  methods: {
    getPokemons() {
      axios.get("http://localhost:3000/api/pokemon").then(response => this.$data.pokemons.push(response.data))
    },
    getPokemon() {
      axios.get("http://localhost:3000/api/pokemon/" + this.benaddi).then(response => this.$data.pokemons.push(response.data))
    },
  },
  data() {
    return {
      pokemons: [], benaddi: ""
    }
  },
}
</script>
