<template>
    <div 
        class="mt-20 py-4 px-20 flex items-center justify-center  "
    >
        <button 
            class="h-[3.1rem] bg-dark-400 rounded-lg border-none p-6 ml-12 flex items-center gap-2 cursor-pointer hover:brightness-90"
            @click="buttonSelecetd('pt')"
        >
            <img 
                class="w-6 h-6 rounded-[50%]"
                src='../assets/images/Brazil.svg' alt="Português" 
            />
            <p 
                class="size-[1.2rem] text-white-400"
            >{{this.btnPt}}</p>
        </button>

        <button 
            class="h-[3.1rem] bg-dark-400 rounded-lg border-none p-6 ml-12 flex items-center gap-2 cursor-pointer hover:brightness-90"
            @click="buttonSelecetd('en')"
        >
            <img 
                class="w-6 h-6 rounded-[50%]"
                src= '../assets/images/USA.svg' alt="English" 
            />
            <p 
                class="size-[1.2rem] text-white-400"
            >{{this.btnEn}}</p>
        </button>

        <button 
            class="h-[3.1rem] bg-dark-400 rounded-lg border-none p-6 ml-12 flex items-center gap-2 cursor-pointer hover:brightness-90"
            @click="buttonSelecetd('es')"
        >
            <img 
                class="w-6 h-6 rounded-[50%]"
                src= '../assets/images/Spain.svg' alt="Español" 
            />
            <p 
                class="size-[1.2rem] text-white-400"
            >{{this.btnEs}}</p>
        </button>
    </div>
</template>

<script>
    export default{
        props: {
            btnPt: String,
            btnEn: String,
            btnEs: String
        },
        methods: {
            buttonSelecetd(btnSelecetd){
                this.$emit('button-clecked', btnSelecetd);
                console.log(btnSelecetd)
                

            }
            
        }
    }
</script>
