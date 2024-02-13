<template>
  <div class="bg-human--bg-appart bg-cover bg-bottom bg-black text-white font-rationale text-base px-56 h-screen overflow-scroll">
    <div class="flex flex-col gap-8 pt-16">

      <CardText :text="outcomeText1" />

      <div class="px-32">
        <img class="border-2 border-gray rounded-2xl" :src="images[0]" alt="Ambulance">
      </div>

      <CardText :text="outcomeText2" />
         
      <NextButton class="mb-16" link="humanFin" text="Et tout est bien qui finit bien" />
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init.js'
import { where, query, collection, getDocs } from 'firebase/firestore'

import CardText from '@/components/CardText.vue'
import NextButton from '@/components/NextButton.vue'

export default {
  name: `HumanHopitalAndroid2`,
  data() {
    return {
      images:[],

      choices1: [
        { outcomes: [
          `Arrive la fin de la semaine, et de mon traitement avec. Je me sens beaucoup mieux, le traitement a été plus efficace que ce que je pensais. J’entends une ambulance arriver devant mon bâtiment, et je me doute qu’ils sont là pour reprendre leur androïde. Je descends avec lui, et après avoir fait un rapide point avec l’ambulancier, il repart en compagnie de l’androïde`,
        
          `La semaine touche à sa fin, marquant également la conclusion de mon traitement. Mon état s'est considérablement amélioré, surpassant mes attentes initiales. Alors que je remarque une ambulance qui se positionne devant le bâtiment, je comprends qu'elle est là pour récupérer leur androïde. Descendant rapidement, je m'entretiens brièvement avec l'ambulancier pour faire un check-up rapide de mon état avant de voir l'androïde partir avec lui`
        ] }
      ],

      choices2: [
        { outcomes: [
          `Les heures et les jours passent, et même si je m’occupe de Rookie, j’ai l’impression qu’il manque quelque chose. Une présence, un changement dans mes habitudes… Je comprends alors que ce qui me manque, c’est l’androïde. Je pensais jamais dire ça un jour, mais je crois que je vais aller m’en prendre un…`,

          `Le temps reprend son cours, et bien que je prenne soin de Rookie, je ressens un vide. Il semblerait qu'il y a quelque chose qui manque, une présence, une anomalie dans ma routine... C'est à ce moment-là que je réalise que ce qui me manque, c'est l'androïde. Je n'aurais jamais pensé prononcer ces mots un jour, mais je pense sérieusement à en acheter un...`
        ]}
      ],

      outcomeText1: null,
      outcomeText2: null,
    }
  },

  components: { CardText, NextButton },

  created() {
    this.getImage('ambulance.jpg')
    this.generateOutcomeText1()
    this.generateOutcomeText2()
    this.generateOutcomeText3()
    this.generateOutcomeText4()
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
  }
}
</script>