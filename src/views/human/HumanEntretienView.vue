<template>
  <div>
    <div class="bg-human--bg-entretien bg-cover bg-center bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardText :text="outcomeText1" />
      
      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText2"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText3"/>

      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText4"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText5"/>

      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText6"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText7"/>

      <CardDialog :img="images[0]" alt="DRH" :dialog="outcomeText8"/>

      <CardText :text="outcomeText9" />

      <ChoiceButton class="mb-16 gap-8" :choices="choices" />
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
    name: `HumanEntretien`,
    data() {
      return {
        images: [],
  
        choices1: [
          { outcomes: [
            `J’arrive sur le lieu indiqué par l’annonce, et j’entre à l’intérieur sans plus attendre. Je vais à la réception, qui m’indique la salle d’attente. Je patiente une dizaine de minutes avant d’être reçu par le directeur des ressources humaines`,

            `Je me rends au lieu mentionné dans l'annonce et pénètre immédiatement à l'intérieur. Je me dirige vers la réception, où on me guide vers la salle d'attente. J'attends une dizaine de minutes avant d'être appelé pour rencontrer le responsable des ressources humaines`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Bonjour Monsieur, allez-y asseyez-vous`,

            `Installez-vous je vous en prie`
          ]}
        ],

        choices3: [
          { outcomes: [
            `Merci, M. ?`,
          ]}
        ],

        choices4: [
          { outcomes: [
            `Je suis M. Rojas, responsable des ressources humaines de l’entreprise. Et vous êtes ?`,

            `Je me présente : Miguel Rojas, directeur des ressources humaines de l’entreprise. Et à qui ai-je l'honneur ?`
          ]}
        ],

        choices5: [
          { outcomes: [
            `M. Vaylene, j’ai postulé à votre offre d’emploi ce matin`,

            `Je suis M. Vaylene, j'ai soumis ma candidature pour le poste vacant ce matin`,
          ]}
        ],

        choices6: [
          { outcomes: [
            `Attendez, Vaylene comme Jessica Vaylene ?`,
          ]}
        ],

        choices7: [
          { outcomes: [
            `Oui, enfin plus maintenant mais vous la connaissez ?`,

            `Jessica est mon ex-femme, nous sommes divorcés à présent donc elle ne doit plus s'appeler comme ça maintenant`
          ]}
        ],

        choices8: [
          { outcomes: [
            `Ah mais vous êtes son ex-mari ! C’est pour ça, je me disais que je vous avais déjà vu ! Je suis le fiancé de Jessica, ravi de vous rencontrer ! Je l'ai connu quand elle portait encore votre nom, c'est pour ça`,

            `Oh, vous êtes son ancien époux en fait ! Il me semblait bien que votre visage me disait quelque chose ! Je suis le fiancé de Jessica, enchanté de faire votre connaissance ! J'ai fait la rencontre de Jessica à l'époque où elle était encore mariée avec vous, d'où ma question par rapport à votre nom`
          ]}
        ],

        choices9: [
          { outcomes: [
            `Sous le choc face à cette nouvelle inattendue, je ne sais quoi répondre à ça. Bien sûr, je suis en colère, parce que ça ne fait pas si longtemps que ça que nous avons divorcé et qu’elle s’est déjà retrouvé un fiancé, mais je n’ai rien en particulier contre lui et il ne semble pas non plus être hostile à mon égard`,

            `Déconcerté par cette nouvelle surprenante, je suis un peu désemparé. Naturellement, je ressens de la frustration, étant donné que notre divorce est récent et qu'elle a déjà trouvé un fiancé. Cependant, je n'ai aucune animosité particulière envers lui, et il semble également ne pas nourrir d'hostilité envers moi`
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

        choices: [
          { text: `Lui faire comprendre qui je suis`, outcome: { result: 'humanEntretienAg' } },
          { text: `Couper court à la conversation`, outcome: { result: 'humanEntretienPro' } },
        ],
      }
    },
  
    components: { CardText, CardDialog, ChoiceButton },
  
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
  