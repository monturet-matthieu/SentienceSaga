<template>
    <div class="bg-human--bg-appart bg-cover bg-bottom bg-black text-white font-rationale text-base px-56 h-screen overflow-scroll">
      <div class="flex flex-col gap-8 pt-16">
        <CardText :text="outcomeText1"/>
  
        <div class="px-32">
          <img class="border-2 border-gray rounded-2xl" :src="images[0]" alt="Ordinateur">
        </div>
  
        <CardText :text="outcomeText2" />
  
        <CardText :text="outcomeText3" />
           
        <NextButton class="mb-16" link="humanEntretien" text="Allons-y !" />
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
            `Après un “rêve” pareil, le réveil est difficile, d’autant plus que j’ai plus aucune contrainte d’horaires. Enfin, pour l’instant, car je compte bien retrouver un travail le plus vite possible. Il faut bien payer le loyer, et de quoi nous nourrir Rookie et moi. Après une douche revigorante, je me mets à chercher un nouvel emploi`,
          
            `Après une nuit avec un rêve aussi intense, sortir du lit est un défi, surtout maintenant que je n'ai plus de contraintes liées aux heures de travail. Enfin, du moins pour le moment, car j'ai l'intention de trouver un emploi rapidement. Le loyer et les dépenses pour nourrir Rookie ne vont pas se payer tout seuls. Après avoir pris une douche revigorante, je me lance dans la recherche d'un nouveau travail`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `J’écume les sites d’offres d’emploi et parmi les centaines d’annonces, une retient particulièrement mon attention. C’est pas très loin d’ici, plutôt bien payé à priori avec des horaires convenables…`,
  
            `Je parcours activement diverses plateformes d'emploi, et parmi les nombreuses annonces disponibles, j'en trouve une qui attire mon regard. Elle se situe à proximité, semble offrir une rémunération intéressante, et les horaires semblent acceptables...`
          ]}
        ],

        choices3: [
          { outcomes: [
            `Je décide de postuler à cette annonce, et seulement quelques heures après la société me recontacte. L’entretien est fixé dans l’après-midi, alors je me prépare en vitesse pour être au moins présentable`,
  
            `J'ai choisi de soumettre ma candidature à cette offre, et quelques heures plus tard, l'entreprise me rappelle. Le rendez-vous est programmé pour l'après-midi, alors je m'active rapidement pour m'assurer d'être au moins bien présenté`
          ]}
        ],

        outcomeText1: null,
        outcomeText2: null,
        outcomeText3: null,
      }
    },
  
    components: { CardText, NextButton },
  
    created() {
      this.getImage('ordi.jpg')
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