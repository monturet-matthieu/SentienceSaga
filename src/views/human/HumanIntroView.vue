<template>
  <div class="bg-human--bg-intro bg-cover bg-black text-white font-rationale text-base px-56 h-screen overflow-scroll">
    <div class="flex flex-col gap-8 pt-16">
      <CardText :text="description"/>

      <div class="px-32">
        <img class="border-2 border-gray rounded-2xl" :src="images[0]" alt="Rookie">
      </div>

      <CardText :text="outcomeText1" />

      <CardText :text="outcomeText2" />
         
      <NextButton class="mb-16" link="humanRdv" text="Continuer" />
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init.js'
import { where, query, collection, getDocs } from 'firebase/firestore'

import CardText from '@/components/CardText.vue'
import NextButton from '@/components/NextButton.vue'

export default {
  name: `HumanIntro`,
  data() {
    return {
      images:[],

      description: `La sonnerie de mon réveil annonce le début d'une nouvelle journée sur la route. J’enfile ma veste floquée “Milan, 37 ans, routier agréé” et je vais donner son os à Rookie. Dehors, c’est plutôt calme dans la banlieue de Cybernopolis, mais j’ai quand même hâte de retrouver mon camion. Faut avouer qu’il est bien confortable depuis que presque tout est automatique, on gagne de la place et je peux plus m’occuper de Rookie et ça c’est ce qui compte le plus. Pourquoi c’est automatique ? Ça date de l’époque où les androïdes ont fait leur apparition dans la vie courante grâce à AutoMaton, la société qui les produit`,

      choices1: [
        { outcomes: [
          `Au départ, les androïdes c’était rien de plus que des robots programmés pour faire des tâches simples comme le ménage, faire à manger, enfin tout ce qui fait un bon homme-à-tout-faire. Mais maintenant ? Ils leur ont donné des fonctions plus complexes, et il y a tellement de modèles différents qu’ils ont développé des personnalités uniques. C’est vraiment flippant, de ne pas savoir si celui à qui je parle est humain ou machine, je sais pas comment réagir`,
        
          `Eux, je ne peux pas les supporter. C’est une menace qui prend petit à petit nos emplois et rend la ville de moins en moins vivante, humaine. Pour moi comme pour beaucoup d’autres qui ont rejoint les manifs anti-AutoMaton, ils représentent une menace silencieuse, une ombre grandissante sur la vie que l’on connaît. Ils ne servent à rien, et par-dessus tout ils compromettent notre gagne-pain, en particulier le mien`
        ] }
      ],

      choices2: [
        { outcomes: [
          `Aujourd'hui, je me prépare pour un rendez-vous avec mon patron. Je compte bien lui dire ce que je pense à propos des conditions de travail depuis qu'on a. Je suis prêt à défendre les droits des travailleurs humains face à cette automatisation menaçante. Je me prépare à partir, en étant déterminé à montrer que je me laisserais pas faire`,

          `D’ailleurs, mon patron m’a convoqué aujourd’hui pour parler de l’automatisation des camions, qui va encore être encore plus poussée apparemment. Ils disent même que des androïdes vont être spécialement conçus pour fonctionner en symbiose avec les camions. Ça me plaît pas du tout cette histoire, je vais en profiter pour lui glisser deux mots sur ce que je pense`
        ]}
      ],
      outcomeText1: null,
      outcomeText2: null
    }
  },

  components: { CardText, NextButton },

  created() {
    this.getImage('rookie.jpg')
    this.generateOutcomeText1()
    this.generateOutcomeText2()
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
