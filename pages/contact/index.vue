<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-card rounded class="pa-2">
                        <v-card-title>
                            <h2>Contact Me</h2>
                        </v-card-title>
                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                <v-text-field v-model="phone" :rules="phoneRules" label="Phone" required></v-text-field>
                                <v-textarea v-model="message" :rules="messageRules" label="Message" required></v-textarea>
                                <v-btn @click="submit" :disabled="!valid" color="success">Submit</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card rounded class="pa-2">
                        <v-card-title>
                            <h2>Get in touch</h2>
                        </v-card-title>
                        <v-card-text>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>Address</v-list-item-title>
                                    <v-list-item-subtitle>{{ me.city }}</v-list-item-subtitle>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Phone</v-list-item-title>
                                    <v-list-item-subtitle>
                                        <a class="nuxtLink bold" :href="`tel:${me.phoneNumber}`"> {{ me.phoneNumber }} </a>
                                    </v-list-item-subtitle>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Email</v-list-item-title>
                                    <v-list-item-subtitle>
                                        <a class="nuxtLink bold" :href="`mailto:${me.email}`">{{ me.email }}</a>
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const valid = ref(true);
const nameRules = [(v) => !!v || 'Name is required', (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'];
const emailRules = [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'];
const phoneRules = [(v) => !!v || 'Phone is required', (v) => (v && v.length <= 10) || 'Phone must be less than 10 characters'];
const messageRules = [(v) => !!v || 'Message is required', (v) => (v && v.length <= 10) || 'Message must be less than 10 characters'];
function submit() {
    if (valid.value) {
        alert('Form submitted');
    }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
