<template>
    <div class="bg-human--bg-intro bg-cover bg-black text-white font-rationale text-base px-56 h-screen overflow-y-scroll overflow-x-hidden">
      <div class="flex flex-col gap-8 pt-16">
        <CardText :text="outcomeText1" />

        <div class="px-32">
          <img class="border-2 border-gray rounded-2xl" :src="images[0]" alt="Inconnu">
        </div>

        <CardText :text="outcomeText2" />

        <CardText :text="outcomeText3" />
           
        <NextButton class="mb-16" link="humanHopital" text="Je perds peu à peu connaissance..." />
      </div>
    </div>
  </template>
  
  <script>
  import db from '@/firebase/init.js'
  import { where, query, collection, getDocs } from 'firebase/firestore'
  
  import CardText from '@/components/CardText.vue'
  import NextButton from '@/components/NextButton.vue'
  
  export default {
    name: `HumanBarOut`,
    data() {
      return {
        images:[],
  
        choices1: [
          { outcomes: [
            `Errant dans la rue sur le chemin du retour vers mon appartement, je croise quelques personnes, et une en particulier retient mon attention. Capuche sur la tête et mains dans les poches, cette personne est adossée à un mur. Je passe devant elle en gardant mes distances, et en me retournant discrètement pour vérifier qu’elle ne tente rien de suspect`,
          
            `En déambulant dans la rue en direction de chez moi, je rencontre quelques passants, mais l'un d'entre eux attire particulièrement mon regard. Avec la capuche sur la tête et les mains enfoncées dans les poches, cette personne est appuyée contre un mur. Je continue ma route en m'assurant de maintenir une certaine distance, tout en jetant furtivement un coup d'œil en arrière pour m'assurer qu'elle n'a aucune intention suspecte`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Mais je suis surpris par quelqu’un qui arrive d’en face et me rentre dedans à pleine vitesse. Sous le choc, je tombe et remarque que la personne tient quelque chose dans les mains. Elle se relève bien plus vite que moi et se met à courir sans que j’ai le temps de dire quoi que ce soit. Mais surtout, je remarque qu’il y a du sang sur le sol. Était-elle blessée ? Qu’est-ce qu’elle fuyait ?`,
  
            `Alors que je maintiens mon regard sur cette personne, je suis pris au dépourvu par une personne qui surgit de l'autre côté et me percute brutalement. À cause de l'impact, je chute et constate que cette personne tient quelque chose entre ses mains. Elle se relève nettement plus rapidement que moi et se met à courir sans que j'aie l'opportunité de m'exprimer. Plus important encore, je remarque la présence de sang sur le sol. Avait-elle subi une blessure ? Que cherchait-elle à fuir ?`
          ]}
        ],
  
        choices3: [
          { outcomes: [
            `Avant de penser plus en détail à ces questions, une douleur de plus en plus intense me prend la tête et je baisse les yeux vers mon ventre. Je comprends d’un coup que ce n’est pas son sang par terre, mais le mien.`,
  
            `Mais avant de pouvoir me pencher sur la question, une douleur croissante envahit ma tête, et je regarde vers mon abdomen. Soudain, je réalise que le sang sur le sol n'est pas le sien, mais le mien.`
          ]}
        ],
        outcomeText1: null,
        outcomeText2: null,
        outcomeText3: null
      }
    },
  
    components: { CardText, NextButton },
  
    created() {
      this.getImage('unknown.jpg')
      this.generateOutcomeText1()
      this.generateOutcomeText2()
      this.generateOutcomeText3()
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
    }
  }
  </script>
  