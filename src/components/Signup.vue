<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sing Up</h1>
      </v-flex>
       <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent = "userSignUp">
          <v-layout column>
            <v-flex>
              <v-alert type="error" dismissible v-model="alert">
                {{ error }}
              </v-alert>
            </v-flex>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                v-model="email"
                required>
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="password"
                id="password"
                type="password"
                v-model="password"
                required>
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
              name="confirmPassword"
              label="confirmPassword"
              id="confirmPassword"
              type="password"
              required
              v-model="confirmPassword"
              :rules = "[comparePasswords]">
              </v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit" :disabled = "loading">Sign Up</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
          
<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      alert: false
    }
  },
  computed: {
    comparePasswords () {
      return this.password === this.confirmPassword ? true : 'Las contraseñas no coinciden'
    },
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    /* Firebase */
    userSignUp () {
      if (this.comparePasswords !== true) {
        return
      }
      this.$store.dispatch('userSingUp', {email: this.email, password: this.password})
    }
  },
  watch: {
    error (value) {
      if (value) {
        this.alert = true
      }
    },
    alert (value) {
      if (!value) {
        this.$store.commit('setError', null)
      }
    }
  }
}
</script>
