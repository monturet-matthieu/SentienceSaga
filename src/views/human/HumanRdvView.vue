<template>
  <div>
    <div class="bg-human--bg-bureau bg-cover bg-center bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardText :text="outcomeText1" />
      
      <CardDialog :img="images[0]" alt="Patron" :dialog="outcomeText2"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText3"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="outcomeText4"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText5"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="outcomeText6"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText7"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="outcomeText8"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText9"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="outcomeText10"/>

      <ChoiceButton class="mb-16" :choices="choices" />
    </div>
  </div>
  </template>
  
  <script>
  import db from '@/firebase/init.js'
  import { where, query, collection, getDocs } from 'firebase/firestore'
  
  import ChoiceButton from '@/components/ChoiceButton.vue'
  import CardText from '@/components/CardText.vue'
  import CardDialog from '@/components/CardDialog.vue'
  
  export default {
    name: `HumanRdv`,
    data() {
      return {
        images: [],
  
        choices1: [
          { outcomes: [
            `J’arrive aux bureaux de l’entreprise, et je ne patiente pas longtemps avant de rentrer dans le bureau étiquetté “PDG”. Dès que je pénètre dans la salle, je croise le regard sérieux de mon patron qui ne laisse place à aucun doute quant à la gravité de la situation`,
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Bonjour Milan. Asseyez-vous`,

            `Ah Milan, merci d'être venu. Asseyez-vous`,

            `Bonjour Milan, merci d'être venu rapidement. Je vous en prie, asseyez-vous`
          ]}
        ],

        choices3: [
          { outcomes: [
            `Merci. Qu'est-ce qui se passe ?`,

            `Bonjour, Monsieur le Directeur`,
          ]}
        ],

        choices4: [
          { outcomes: [
            `Même si vos performances ne laissent pas à désirer, l'automatisation a atteint un niveau tel que les humains ne sont plus nécessaires. Les androïdes, récemment acquis par l'entreprise, sont plus performants, fiables, et ne posent apparemment aucun problème`,

            `Je vais être direct : La situation de l'entreprise est assez instable, même si cela ne vient pas de la qualité de votre travail qui est toujours exemplaire rassurez-vous. Cependant, nous devons faire des coupes budgétaires`,

            `Laissez-moi vous expliquer la situation. Tout d'abord, laissez-moi dire que je suis très satisfait de votre travail ici. Vous avez été un élément crucial dans notre entreprise. Cela étant, nous devons nous résigner à nous mettre aux normes du secteur en utilisant des androïdes pour les tâches simples`,
          ]}
        ],

        choices5: [
          { outcomes: [
            `Attendez, vous voulez dire que nous sommes tous licenciés ?`,

            `Cela signifie que nous ne faisons plus partie de l'entreprise ?`,
          ]}
        ],

        choices6: [
          { outcomes: [
            `Oui, exactement. Ma décision de licencier tous les travailleurs humains va prendre effet dès aujourd’hui, et je suis désolé, mais vous êtes le premier sur la liste`,

            `En effet, l'automatisation des camions avait pour but final de se défaire de la main-d'œuvre humaine, pour les remplacer par des androïdes plus fiables et performants, avec moins de problèmes à la clé`,

            `Voyez-vous, j'ai réalisé que les androïdes sont beaucoup plus fiables que les humains dans certaines tâches. Ils sont connectés directement aux camions, ce qui évite bien des problèmes. Votre cas est particulier, bien sûr, mais dans l'ensemble...`,
          ]}
        ],

        choices7: [
          { outcomes: [
            `Mais... mais pourquoi ? C'est si soudain...`,

            `Attendez, vous voulez dire qu'on va tous être remplacés par des robots ?`,

            `Vous allez nous licencier au profit des androïdes ?`,
          ]}
        ],

        choices8: [
          { outcomes: [
            `Les androïdes sont plus efficaces, économiques, et la décision a été prise pour assurer la compétitivité de l'entreprise`,

            `Avec le comité exécutif, nous avons pris la décision de se séparer de vous car il faut faire des économies`,

            `C'est un peu plus compliqué que ça, mais oui. Nous devons nous adapter pour rester compétitifs sur le marché. Entre les coûts d'achat des androïdes et les dépenses liées aux problèmes humains, notre entreprise est menacée`,
          ]}
        ],

        choices9: [
          { outcomes: [
            `C'est injuste ! Nous avons dévoué des années de nos vies à cette entreprise. Ces engins n'ont pas de vies eux !`,

            `C'est dégueulasse ! On ne m'a même pas donné la chance de prouver ma valeur, alors que j'ai bossé ici pendant des années !`,

            `Donc, c'est officiel, je suis licencié dès aujourd'hui. Je vois...`,
          ]}
        ],

        choices10: [
          { outcomes: [
            `Les affaires évoluent, et nous devons nous adapter. C'est la dure loi de la réalité`,

            `C'est une mesure difficile, mais nécessaire pour assurer la survie de l'entreprise. Je suis désolé, mais il va falloir trouver du travail ailleurs`,

            `Je suis désolé. Voici les papiers à signer. Croyez-moi, c'est avec beaucoup de regret que je dois prendre cette décision`,
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
        outcomeText9: null,
        outcomeText10: null,

        choices: [
          { text: `Raisonner le patron`, outcome: { result: 'humanRdvRaison' } },
          { text: `S'énerver`, outcome: { result: 'humanRdvNRV' } },
          { text: `Rester calme`, outcome: { result: 'humanRdvCalme' } },
        ],
      }
    },
  
    components: { CardText, CardDialog, ChoiceButton },
  
    created() {
      this.getImage('patron.jpg')
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
      this.generateOutcomeText10()
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
      generateOutcomeText10() {
        const randomIndex = Math.floor(Math.random() * this.choices10.length)
        const selectedChoice = this.choices10[randomIndex]
        const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
        this.outcomeText10 = selectedChoice.outcomes[randomOutcomeIndex]
      },
    }
  }
  </script>
  