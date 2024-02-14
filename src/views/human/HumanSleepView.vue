<template>
    <div class="bg-black text-white font-rationale text-base px-56 h-screen overflow-y-scroll overflow-x-hidden">
      <div class="flex flex-col gap-8 pt-16">
        <CardText :text="outcomeText1"/>
  
        <div class="px-32">
          <img class="border-2 border-gray rounded-2xl" :src="images[0]" alt="Villa">
        </div>
  
        <CardText :text="outcomeText2" />
  
        <CardText :text="outcomeText3" />
  
        <CardText :text="outcomeText4" />
  
        <CardText :text="outcomeText5" />
           
        <NextButton class="mb-16" link="humanReveil" text="Putain de machine..." />
      </div>
    </div>
</template>
  
<script>
  import db from '@/firebase/init.js'
  import { where, query, collection, getDocs } from 'firebase/firestore'
  
  import CardText from '@/components/CardText.vue'
  import NextButton from '@/components/NextButton.vue'
  
  export default {
    name: `HumanSleep`,
    data() {
      return {
        images:[],
  
        choices1: [
          { outcomes: [
            `Je me souviens de lorsque nous sommes partis en vacances. Le cadre était parfait, en même temps c’est les Bahamas. Et puis, au prix où j’ai payé, j’espérais au moins ça ! Bref, un vrai havre de paix. À un détail près : en arrivant sur place, c’est un robot qui nous a accueilli. Bon, pourquoi pas, au moins on aura pas grand chose à faire dans la maison de location, on sera juste moins tranquille…`,
          
            `Je me rappelle du moment où nous avons pris des vacances. L'environnement était idyllique, mais bon, c'était les Bahamas après tout. Et vu le montant que j'ai déboursé, je m'attendais au moins à ça ! Un véritable refuge. Cependant, il y avait un hic : à notre arrivée, c'est un androïde qui nous a accueillis. Eh bien, pourquoi pas ? Au moins, on n'aura pas beaucoup d'entretien à faire dans la maison de location, même si cela risque de diminuer un peu notre tranquillité...`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Les jours passent et nous allons d’activité en activité, tantôt sur la mer des Caraïbes, tantôt dans des restaurants locaux. En revenant à la location, l’androïde est toujours là pour nous accueillir et faire les tâches ménagères à notre place. Je dois avouer que c’est pas désagréable, même s’il manque un peu de tchatche`,
  
            `Les journées défilent, et nous enchaînons différentes activités, que ce soit en naviguant sur la mer des Caraïbes ou en explorant les restaurants locaux. À notre retour à la résidence, l'androïde est toujours présent, prêt à nous accueillir et à s'occuper des corvées ménagères à notre place. Je dois admettre que c'est plutôt agréable, même si on pourrait lui reprocher son manque de conversation`
          ]}
        ],

        choices3: [
          { outcomes: [
            `Si seulement cette nuit-là c’était passée normalement…`,
  
            `Si cette soirée-là s'était déroulée de manière ordinaire, tout aurait été différent...`
          ]}
        ],

        choices4: [
          { outcomes: [
            `Si seulement cet androïde n’avait pas mis le feu à la baraque…`,
  
            `Si ce robot n'avait pas déclenché d'incendie dans la maison...`
          ]}
        ],

        choices5: [
          { outcomes: [
            `Tout se serait si bien passé, et Jessica ne serait pas partie…`,
  
            `Les vacances seraient restées des vacances, et Jessica aussi serait restée...`
          ]}
        ],
        outcomeText1: null,
        outcomeText2: null,
        outcomeText3: null,
        outcomeText4: null,
        outcomeText5: null,
      }
    },
  
    components: { CardText, NextButton },
  
    created() {
      this.getImage('bahamas.jpg')
      this.generateOutcomeText1()
      this.generateOutcomeText2()
      this.generateOutcomeText3()
      this.generateOutcomeText4()
      this.generateOutcomeText5()
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
    }
  }
</script>  