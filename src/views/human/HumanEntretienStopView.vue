<template>
  <div>
    <div class="bg-human--bg-entretien bg-cover bg-center bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardText :text="outcomeText1" />

      <CardText :text="outcomeText2" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText3"/>
      
      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText4"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText5"/>

      <CardText :text="outcomeText6" />

      <ul v-if="!showContent1" class="mb-16">
        <li @click="toggleContent1"
        class="font-black-ops-one text-center bg-dark-blue border-2 border-blue hover:border-white hover:scale-y-110 transition ease-in rounded-full py-1"
        >
        Quelques semaines plus tard...
        </li>
      </ul>

      <div v-if="showContent1" class="flex flex-col gap-8 mb-16">
        <CardText :text="outcomeText7" />

        <CardText :text="outcomeText8" />
        
        <NextButton text="J'aurais dû rester à cet entretien..." />
      </div>
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
    name: `HumanEntretienStop`,
    data() {
      return {
        images: [],

        showContent1: false,
  
        choices1: [
          { outcomes: [
            `Je suis moi-même surpris, car ma colère se dissipe pour laisser place au dégoût. Elle m’a quitté pour ce mec ? Elle s’est fiancée à nouveau, si vite ? Ça fait beaucoup d’informations à avaler, la pilule a du mal à passer là`,

            `Je ressens une surprise inattendue, car ma colère s'estompant, cède la place à un profond dégoût. Elle a décidé de partir avec ce type ? Elle a déjà retrouvé un fiancé ? Toutes ces nouvelles d'un coup, ça passe difficilement`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Le recruteur me regarde droit dans les yeux, et je sens que la moutarde me monte au nez. Il est vraiment sans-gêne, à mêler le privé au professionnel dès mon arrivée. Il est hors de question que je bosse avec quelqu’un comme ça`,

            `Le recruteur me fixe intensément, et je ressens une montée d'irritation. Il se montre vraiment impoli en mêlant des sujets personnels au contexte professionnel dès le début de la conversation. Travailler avec une personne aussi incapable est totalement hors de propos.`
          ]}
        ],

        choices3: [
          { outcomes: [
            `Non mais c’est quoi ce manque de professionnalisme ? À peine arrivé vous franchissez déjà la limite du privé. Je crois que je n’ai rien à faire ici`,

            `Qu'est-ce que c'est que ce manquement professionnel ? Vous perdez pas de temps pour dépaser les limites de la vie privée dès mon arrivée. Je ne pense pas que travailler avec vous me soit bénéfique`
          ]}
        ],

        choices4: [
          { outcomes: [
            `Pardon ? Mais c’est simplement la coïncidence qui m’a surpris ! Si vous le souhaitez, nous pouvons débuter l’entretien dès maintenant, pardonnez-moi pour cet écart…`,

            `Comment ça ? J'étais juste surpris par cette coïncidence ! Si vous êtes prêt, nous pouvons commencer l'entretien immédiatement. Excusez-moi pour cette conduite...`
          ]}
        ],

        choices5: [
          { outcomes: [
            `Non, je ne pense pas. Nous n’avons visiblement pas les mêmes valeurs du travail`,

            `Je ne suis pas convaincu. Il semble évident que nos perspectives sur l'éthique professionnelle diffèrent`
          ]}
        ],

        choices6: [
          { outcomes: [
            `Je me lève et quitte le bureau sans écouter les lamentables excuses de ce clown. Je retourne chez moi de ce pas, et je vais continuer à chercher un nouveau poste à pourvoir`,

            `Je me lève et m'en vais immédiatement sans prêter attention aux excuses pitoyables de cet incompétent. Dès mon retour à l'appartement, je continue à postuler aux nombreuses offres d'emploi disponibles dans l'espoir de trouver mieux`
          ]}
        ],

        choices7: [
          { outcomes: [
            `Je n’ai toujours pas réussi à trouver de travail depuis cet entretien désastreux. Pas une seule réponse positive à mes candidatures, même avec mes 13 années d’expérience…`,

            `Je n'ai pas encore réussi à décrocher un emploi depuis cet entretien . Aucune réponse favorable à mes candidatures, même en mettant en avant mes 13 années d'expérience...`
          ]}
        ],

        choices8: [
          { outcomes: [
            `Je tiens uniquement grâce à mes économies faites au fil des années, mais elles étaient bien maigres alors je ne sais pas encore combien de temps Rookie et moi allons pouvoir survivre seulement grâce à ça…`,

            `Ma seule source de soutien repose sur les économies que j'ai accumulées au fil des années, mais elles étaient assez modestes. Je ne suis pas encore certain de la durée pendant laquelle Rookie et moi pourrons subsister uniquement grâce à cela`
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
    },
  
    methods: {
      toggleContent1() {
        this.showContent1 = !this.showContent1;
      },

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
    }
  }
  </script>
  