<template>
  <div class="h-screen">

    <HeaderComponent/>
    <div 
      class="max-w-[90rem] m-0 mx-auto py-4 px-16 flex items-center flex-col"
    >
      <h1 
        class="w-[49rem] mt-10 text-white-600 text-center text-base "
      > {{info.idiomaInfo}} </h1>

      <div 
        class="w-[49rem] h-[10.8rem] m-[4.5rem] rounded-lg border-2 border-amber bg-dark-400"  
      >
        <ul
          class="w-[100%] h-[100%] px-8 flex flex-col items-start justify-start flex-wrap"
        >
          <li class="text-white-400 text-2xl font-semibold " v-for="(itens, index) in skiils" :key="index">{{itens}}</li>
        </ul>
      </div>
    </div>

    <ButtonComponents @button-clecked="handleButtonClick" :btnPt="info.btnPt" :btnEn="info.btnEn" :btnEs="info.btnEs"/>
    
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponents.vue";
import ButtonComponents from "./components/ButtonComponents.vue";

export default {
  name: 'App',
  components: { HeaderComponent, ButtonComponents },
  
  data(){
    return {
      info:[{
        buttonSelected: '',
        idiomaInfo: '',
        btnPt: '',
        btnEn: '',
        btnEs: '',
      }],
      
      idioma: [ {
        en: "Hello, my name is Luiz Gabriel Santos and I am a Front-End Developer, Technologies that I have experience:",
        pt: "Olá, meu nome é Luiz Gabriel Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
        es: "Hola, mi nombre es Luiz Gabriel Santos y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:"
      }],
      
      skiils: ["Javascript","React",'Vue js','Tailwind CSS','Styled Components','Saas',"Node",'TypeScript',"Angular","Java"]
    }
  },
  created(){
    this.info.idiomaInfo = this.idioma[0].pt
    this.info.btnPt = "Português"
    this.info.btnEn = "Inglês"
    this.info.btnEs = "Espanhol"
  },

  methods: {
    handleButtonClick(buttonSelected){
      this.info.buttonSelected = buttonSelected
     
      if(this.info.buttonSelected === "pt"){
        this.info.idiomaInfo = this.idioma[0].pt
        this.info.btnPt = "Português"
        this.info.btnEn = "Inglês"
        this.info.btnEs = "Espanhol"

      } else if(this.info.buttonSelected === "en"){
        this.info.idiomaInfo = this.idioma[0].en
        this.info.btnPt = "Portuguese"
        this.info.btnEn = "English"
        this.info.btnEs = "Spanish"
      } else if(this.info.buttonSelected === "es"){
        this.info.idiomaInfo = this.idioma[0].es
        this.info.btnPt = "Portugués"
        this.info.btnEn = "Inglés"
        this.info.btnEs = "Español"
      }
      console.log(this.info.btnPt)

    }
  }
};



</script>

<style>
</style>
