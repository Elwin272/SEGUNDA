<template>
    <div class=" w-full xl:w-1/2 p-5 flex flex-col gap-y-5 overflow-y-scroll h-[900px] bg-blue-400">

        <div v-for="Co, i in coments" :key="Co.id" class="w-full border-2 rounded border-black p-3 flex flex-col bg-white gap-y-3">
            
            <h2 class="font-bold text-2xl"> Asunto: <span class="font-normal underline text-xl">{{ Co.title }}</span></h2>
            <h2 class="text-lg"> ID del usuario que realizó el comentario: {{ Co.userId }}
            </h2>
            <div class="flex flex-col gap-y-0.5">
                <h2 class="font-bold text-2xl">texto:</h2>
                <h2 class="text-xl">{{ Co.body }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {

    data() {
        return {
            coments: null,
            clients: null

        }

    },
    mounted() {
        this.getcoments();
        this.getclients();
    },
    methods: {
        getcoments() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(
                response => {
                    this.coments = response.data
                }
            );
        },
        getclients() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(
                response => {
                    this.clients = response.data
                }
            );
        }
    }

}
</script>
