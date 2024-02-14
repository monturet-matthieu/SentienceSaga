<template>
  <div>
    <div class="bg-human--bg-entretien bg-cover bg-center bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText1"/>
      
      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText2"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText3"/>

      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText4"/>

      <CardText :text="outcomeText5"/>

      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText6"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText7"/>

      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText8"/>

      <CardText :text="outcomeText9" />

      <NextButton class="mb-16" link="humanFin" text="Je me suis peut-être un peu emballé..." />
    </div>
  </div>
</template>
  
<script>
  import db from '@/firebase/init.js'
  import { where, query, collection, getDocs } from 'firebase/firestore'
  
  import CardText from '@/components/CardText.vue'
  import CardDialog from '@/components/CardDialog.vue'
  import NextButton from '@/components/NextButton.vue'
  
  export default {
    name: `HumanEntretien`,
    data() {
      return {
        images: [],
  
        choices1: [
          { outcomes: [
            `C’est une putain de blague ? Et elle disait qu’elle m’aimait, cette trainée !`,

            `Vous êtes pas sérieux ? Après 15 ans de vie commune, elle me fait ça à moi ? Quelle pouffiasse !`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Oh par contre vous allez vous calmer tout de suite !`,

            `Eh ! Vous allez descendre d'un ton et mieux parler d'elle !`
          ]}
        ],

        choices3: [
          { outcomes: [
            `Ta gueule toi, tu crois je t’ai pas vu me narguer en pleine face ? Va te faire foutre !`,

            `Ferme là ! Sérieusement, tu pensais que j'allais pas remarquer que tu te moques ouvertement de moi ? Va chier !`
          ]}
        ],

        choices4: [
          { outcomes: [
            `Sécurité !`
          ]}
        ],

        choices5: [
          { outcomes: [
            `Je me jette sur lui, le fait chuter et lui assène quelques coups au visage, mais les vigiles m’empêchent de m’en donner à cœur joie et me relèvent sans que je puisse agir`,

            `Je me précipite vers lui, le fais trébucher et lui donne quelques coups au visage, mais les agents de sécurité m'empêchent de continuer et me remettent debout en me maintenant en place`,
          ]}
        ],

        choices6: [
          { outcomes: [
            `Gardez-le ici, je vais appeler le commissariat`,
          ]}
        ],

        choices7: [
          { outcomes: [
            `Va crever enflure ! J’vais te refaire le visage tu pourras plus parler !`,

            `Tu peux rêver, crevard ! Tu vas voir si je vais pas te passer l'envie de te foutre de moi !`
          ]}
        ],

        choices8: [
          { outcomes: [
            `Éloignez ce cinglé de moi par pitié`
          ]}
        ],

        choices9: [
          { outcomes: [
            `Les vigiles me traînent dans la salle de garde de l’entreprise, où je suis maintenu le temps que la police débarque et me coffre en prison`,

            `Les agents de sécurité m'escortent vers la salle de surveillance de l'entreprise, où je suis retenu en attendant l'arrivée de la police pour m'arrêter et me conduire en détention`
          ]}
        ],

        outcomeText1: null,
        outcomeText2: null,
        outcomeText3: null,
        outcomeText4: null,
        outcomeText5: null,
        outcomeText6: null,
        outcomeText7: null,
        outcomeText8: null,
        outcomeText9: null
      }
    },
  
    components: { CardText, CardDialog, NextButton },
  
    created() {
      this.getImage('drh.jpg')
      this.getImage('milan.jpg')
      this.generateOutcomeText1()
      this.generateOutcomeText2()
      this.generateOutcomeText3()
      this.generateOutcomeText4()
      this.generateOutcomeText5()
      this.generateOutcomeText6()
      this.generateOutcomeText7()
      this.generateOutcomeText8()
      this.generateOutcomeText9()
    },
  
    methods: {
      async getImage(t) {
        const q = query(collection(db, 'images'), where('nom', '==', t))
        const querySnap = await getDocs(q)

        querySnap.forEach((doc) => {
            this.images.push(doc.data().nom)
        })
      },   
      generateOutcomeText1() {
        const randomIndex = Math.floor(Math.random() * this.choices1.length)
        const selectedChoice = this.choices1[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText1 = selectedChoice.outcomes[randomOutcomeIndex]
      },
      generateOutcomeText2() {
        const randomIndex = Math.floor(Math.random() * this.choices2.length)
        const selectedChoice = this.choices2[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText2 = selectedChoice.outcomes[randomOutcomeIndex]
      },
      generateOutcomeText3() {
        const randomIndex = Math.floor(Math.random() * this.choices3.length)
        const selectedChoice = this.choices3[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText3 = selectedChoice.outcomes[randomOutcomeIndex]
      },
      generateOutcomeText4() {
        const randomIndex = Math.floor(Math.random() * this.choices4.length)
        const selectedChoice = this.choices4[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText4 = selectedChoice.outcomes[randomOutcomeIndex]
      },
      generateOutcomeText5() {
        const randomIndex = Math.floor(Math.random() * this.choices5.length)
        const selectedChoice = this.choices5[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText5 = selectedChoice.outcomes[randomOutcomeIndex]
      },
      generateOutcomeText6() {
        const randomIndex = Math.floor(Math.random() * this.choices6.length)
        const selectedChoice = this.choices6[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText6 = selectedChoice.outcomes[randomOutcomeIndex]
      },
      generateOutcomeText7() {
        const randomIndex = Math.floor(Math.random() * this.choices7.length)
        const selectedChoice = this.choices7[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText7 = selectedChoice.outcomes[randomOutcomeIndex]
      },
      generateOutcomeText8() {
        const randomIndex = Math.floor(Math.random() * this.choices8.length)
        const selectedChoice = this.choices8[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText8 = selectedChoice.outcomes[randomOutcomeIndex]
      },
      generateOutcomeText9() {
        const randomIndex = Math.floor(Math.random() * this.choices9.length)
        const selectedChoice = this.choices9[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText9 = selectedChoice.outcomes[randomOutcomeIndex]
      },
    }
  }
  </script>
  