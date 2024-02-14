<template>
  <div class="bg-human--bg-appart bg-cover bg-bottom bg-black text-white font-rationale text-base px-56 h-screen overflow-y-scroll overflow-x-hidden">
    <div class="flex flex-col gap-8 pt-16">

      <CardText :text="outcomeText1" />

      <div class="px-32">
        <img class="border-2 border-gray rounded-2xl" :src="images[0]" alt="TV">
      </div>

      <CardText :text="outcomeText2" />

      <CardText :text="outcomeText3" />

      <CardText :text="outcomeText4" />
         
      <NextButton class="mb-16" link="humanHopitalAndroid2" text="Continuer" />
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init.js'
import { where, query, collection, getDocs } from 'firebase/firestore'

import CardText from '@/components/CardText.vue'
import NextButton from '@/components/NextButton.vue'

export default {
  name: `HumanHopitalAndroid1`,
  data() {
    return {
      images:[],

      choices1: [
        { outcomes: [
          `L’androïde reste planté là, à me regarder faire. Ça doit pas être dans ses fonctions, l’empathie envers les vivants. Après avoir fait le tour de l’appartement, je m’enfonce dans le canapé et allume la télé pour me détendre`,
        
          `L'androïde demeure immobile, observant mes actions. Il semble que l'empathie envers les êtres vivants ne fasse pas partie de ses programmes. Une fois que j'ai vérifié que tout allait bien dans l'appartement, je m'installe confortablement dans le canapé et allume la télévision pour me relaxer`
        ] }
      ],

      choices2: [
        { outcomes: [
          `Quelques heures passent, et l’androïde ne bouge toujours pas. Au moins il me fait pas chier, c’est déjà ça. Rien que sa présence m’insupporte, alors j’espère qu’il en vaut la peine. Une trentaine de minutes passe, et je sens une présence à mes côtés. L’androïde s’est avancé, et commence à sortir ses instruments de torture. De quoi faire mon traitement je suppose`,

          `Les minutes passent, puis les heures et l'androïde ne semble pas vouloir s'agiter. Au moins, il me dérange pas trop, c'est déjà ça. Sa simple existence me déplaît, alors j'espère que sa présence vaut le coup. Une demi-heure passe, et je perçois une présence à mes côtés. L'androïde s'approche et commence à préparer ses outils médicaux. Apparemment, il est temps pour ma séance de traitement`
        ]}
      ],

      choices3: [
        { outcomes: [
          `Étrangement, il ne me dérange pas tant que ça, même quand il doit me faire une piqûre de je-ne-sais-quoi. J’irai pas jusqu’à dire que j’ai confiance, mais il a plutôt été bien conçu je dois admettre`,

          `Curieusement, ça ne me dérange pas autant que je l'aurais pensé, même lorsqu'il doit m'administrer une injection de quelque chose dont je ne connais pas le contenu. Je n'irais pas jusqu'à affirmer que j'ai une confiance totale, mais je dois reconnaître qu'il a été plutôt habilement conçu`
        ]}
      ],

      choices4: [
        { outcomes: [
          `Le reste de la semaine se passe exactement de la même manière. À chaque fois que l’androïde doit s’occuper de mon traitement, il n’intervient jamais dans ce que je suis en train de faire et attend le meilleur moment pour me déranger le moins possible. J’aurais presque fini par sympathiser avec lui, s’il était un peu plus loquace`,

          `Les jours suivants suivent la même routine. Chaque fois que le robot prend en charge ma thérapie, il ne perturbe jamais mes activités en cours et choisit le moment le plus opportun pour minimiser les interruptions. J'aurais presque développé une certaine affinité à son égard, si seulement il était un peu plus bavard`
        ]}
      ],
      outcomeText1: null,
      outcomeText2: null,
      outcomeText3: null,
      outcomeText4: null
    }
  },

  components: { CardText, NextButton },

  created() {
    this.getImage('tv.jpg')
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
  }
}
</script>