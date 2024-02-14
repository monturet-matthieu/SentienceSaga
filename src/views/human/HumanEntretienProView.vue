<template>
  <div>
    <div class="bg-human--bg-entretien bg-cover bg-center bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText1"/>

      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText2"/>

      <CardText :text="outcomeText3" />
      
      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText4"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText5"/>

      <CardText :text="outcomeText6" />

      <NextButton class="mb-16" link="humanFin" text="Et tout est bien qui finit bien" />
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
    name: `HumanEntretienPro`,
    data() {
      return {
        images: [],
  
        choices1: [
          { outcomes: [
            `Ravi également. Mais je ne suis pas là pour parler du passé, et vous non plus je pense. Allons à l’essentiel`,

            `Enchanté également. Cependant, je ne suis pas ici pour discuter du passé, et je suppose que vous non plus. Passons directement au vif du sujet`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Vous avez parfaitement raison, nous devrions commencer l’entretien sans perdre plus de temps`,

            `Absolument d'accord, il serait judicieux d'entamer cet entretien sans tarder plus`
          ]}
        ],

        choices3: [
          { outcomes: [
            `L’entretien se déroule sans accroc supplémentaire. Même si les informations que j’ai eu au début de l’entretien parasitent mon esprit, je m’efforce de les repousser pour le bien de mon avenir professionnel`,

            `La discussion se déroule sans encombre supplémentaire. Bien que les propos partagés en début de séance perturbent mes pensées, je fais un effort pour les mettre de côté dans l'intérêt de ma carrière`
          ]}
        ],

        choices4: [
          { outcomes: [
            `Bon eh bien je crois qu’on a fait le tour monsieur Vaylene. Pour moi, vous pouvez débuter dès demain si cela vous convient. Nous aurons le temps d’échanger plus longuement sur les détails de votre contrat durant vos heures de travail`,

            `Eh bien, je pense que nous avons couvert tous les points, monsieur Vaylene. Si ça vous va, vous pouvez commencer dès demain. Nous aurons l'occasion de discuter plus en détail des termes de votre contrat pendant vos heures de service`
          ]}
        ],

        choices5: [
          { outcomes: [
            `Avec grand plaisir monsieur Rojas, merci beaucoup pour cette opportunité !`,

            `Assurément, je vous remercie pour cette proposition monsieur Rojas !`
          ]}
        ],

        choices6: [
          { outcomes: [
            `Après avoir échangé une poignée de main avec lui, je quitte les locaux de mon nouveau lieu de travail, heureux d’avoir pu stabiliser ma situation et m’assurer d’un avenir proche un peu plus pérenne`,

            `Après avoir serré la main de mon nouveau supérieur, je quitte les locaux de l'entreprise, avec la satisfaction d'avoir consolidé ma situation et assuré un avenir professionnel plus stable au moins à court terme`
          ]}
        ],

        outcomeText1: null,
        outcomeText2: null,
        outcomeText3: null,
        outcomeText4: null,
        outcomeText5: null,
        outcomeText6: null,
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
    }
  }
  </script>
  