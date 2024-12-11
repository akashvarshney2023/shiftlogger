<template>
    <header class="sticky-top custom-navbar">
        <v-app-bar class="bg-white" density="default" :elevation="0"
            style="border-bottom:1px solid #e0e0e0;padding:0px 10% !important;">
            <v-app-bar-title>
                <v-img src="../assets/images/logo.png" style="width:350px;height:54px;"></v-img>
            </v-app-bar-title>
        </v-app-bar>
    </header>
    <v-main>
        <v-container fluid>
            <v-row class="d-flex justify-center align-center" style="height: 50vh;">
                <v-col cols="6">
                    <v-card>
                        <v-card-title class="text-center">Login</v-card-title>
                        <v-card-text>
                            <v-form @submit.prevent="login">
                                <v-text-field label="Username" type="text" v-model="username" prepend-icon="mdi-account"
                                    required></v-text-field>
                                <v-text-field label="Password" type="password" v-model="password" prepend-icon="mdi-lock"
                                    required></v-text-field>
                                <v-row class="d-flex justify-center">
                                    <v-col cols="auto">
                                        <v-btn color="primary" type="submit" block>Login</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    <v-footer class="bg-green-lighten-1" style="position: fixed; bottom: 0; width: 100%;" >
    <v-row justify="center" no-gutters>     
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Powered by Cultre-Mast</strong>
      </v-col>
    </v-row>
  </v-footer>
    <v-progress-circular :size="100" :width="7" color="green" indeterminate class="progress-overlay" v-if="showProgress"></v-progress-circular>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const showProgress = ref(false);
const errorMessage = ref('');

const login = () => {
    showProgress.value = true;

    setTimeout(() => {
        if (username.value === 'admin' && password.value === 'admin123') {
            // Save a token to indicate the user is logged in
            localStorage.setItem('token', 'dummy_token');
            router.push('/');
        } else {
            errorMessage.value = 'Invalid username or password';
        }

        showProgress.value = false;
    }, 1000); // Simulate a delay for login process
};

</script>

<style scoped>
.progress-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}
.error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
}
</style>
