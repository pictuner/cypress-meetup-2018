<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel data-cy="panel-title" title="Register">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            data-cy="email"
            name="email"
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            data-cy="password"
            name="password"
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div data-cy="alert" class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          data-cy="register-button"
          class="cyan"
          name="registerBtn"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
