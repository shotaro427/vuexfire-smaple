<template>
  <div>
    <h1>Users</h1>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
    >
    </v-data-table>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="inpputData.name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="inpputData.email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="submit">作成</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created: function () {
    this.$store.dispatch('bindUsers')
  },
  computed: {
    ...mapGetters({ users: 'getUsers' }),
    headers() {
      return [
        {
          text: '名前',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Eメール',
          align: 'start',
          sortable: true,
          value: 'email'
        }
      ]
    }
  },
  data: function () {
    return {
      inpputData: {},
    }
  },
  methods: {
    submit: function () {
      const user = Object.assign({}, this.inpputData)
      this.$store.dispatch('addUser', user)
      this.name = ''
      this.email = ''
    }
  },
}
</script>

<style>
</style>