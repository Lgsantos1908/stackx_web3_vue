<template>
    <header
        class="bg-dark-400 flex items-center justify-center m-0 py-4 px-20"
    >
        <img 
            src="../assets/images/stackX.svg" 
            class="flex items-center cursor-pointer"
            @click="sendLink"
            
        >
    </header>
</template>

<script>
    export default{

        methods:{
            sendLink(){
                return window.open ('https://www.stackx.com.br/','_blank')
            }
        }
        
    }
</script>