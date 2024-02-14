<template>
  <div>
    <div class="bg-human--bg-appart bg-cover bg-bottom bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardText :text="outcomeText1" />
      
      <CardText :text="outcomeText2"/>
      
      <ul v-if="!showContent1 && !showContent2 && !showContent3" class="font-black-ops-one text-xl flex justify-between mt-6">
          <li @click="toggleContent1"
          class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
            Aller au bar
          </li>
          <li @click="toggleContent2"
          class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
            Se coucher
          </li>
          <li @click="toggleContent3"
          class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
            Regarder la télé
          </li>
      </ul>

      <div v-if="showContent1">
          <CardText :text="bar"/>

          <NextButton class="flex justify-center mt-8" link="humanBarBlacklist" text="En route pour le bar" />
      </div>

      <div v-if="showContent2" class="flex flex-col gap-8">
          <CardText :text="sleep1"/>

          <CardText :text="sleep2"/>

          <NextButton class="mb-16" link="humanSleepBlacklist" text="Aller dormir" />
      </div>

      <div v-if="showContent3" class="flex flex-col gap-8 mb-16">
          <CardText :text="outcomeText3"/>
  
          <CardText :text="outcomeText4"/>
  
          <CardText :text="outcomeText5"/>
  
          <CardText :text="outcomeText6"/>

          <NextButton link="humanPasseur" text="Se rendre sur place" />
      </div>
    </div>
  </div>
</template>
  
<script>
  import CardText from '@/components/CardText.vue'
  import NextButton from '@/components/NextButton.vue'
  
  export default {
    name: `HumanHomeBlacklist`,
    data() {
      return {   
        showContent1: false,
        showContent2: false,
        showContent3: false,

        choices1: [
          { outcomes: [
            `En rentrant chez moi, une ambiance morne imprègne l'atmosphère. Je m'occupe de Rookie en lui remplissant sa gamelle d’eau. Il semble percevoir ma déception, et couine gentiment comme pour me réconforter. Après l’avoir servi et caressé rapidement, je vais m’asseoir dans mon canapé. J’ai encore du mal à enregistrer ce qui s’est passé, je suis un peu perdu là`,

            `En arrivant à l'appart', une atmosphère terne se répand dans l'air. Je prends soin de Rookie en lui donnant de l'eau dans sa gamelle. Il semble détecter ma déception et émet un léger gémissement comme s'il voulait me réconforter. Après l'avoir nourri et caressé brièvement, je m'installe sur mon canapé. J'ai encore du mal à assimiler ce qui s'est déroulé, je me sens un peu désorienté`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Qu’est-ce que je peux bien faire de ma soirée, maintenant que j’ai plus à aller bosser ?`,

            `Au lieu de broyer du noir, qu'est-ce qui pourrait me changer les idées ?`,
          ]}
        ],

        bar: `Comme dit l’adage, il faut boire pour oublier alors allons faire un tour au bar. Ça fait un moment que j’y suis pas allé, ça me donnera une occasion de discuter avec Phil et ça me fera penser à autre chose que toute cette situation de merde`,

        sleep1: `À contrecœur, je me résigne à me coucher tôt. Alors que je m'endors, un rêve me ramène à une époque révolue, mettant en lumière les cicatrices de ma relation passée avec mon ex-femme`,

        sleep2: `Jessica...`,


        choices3: [
          { outcomes: [
            `Attendez, vous voulez dire que nous sommes tous licenciés ?`,

            `Cela signifie que nous ne faisons plus partie de l'entreprise ?`,
          ]}
        ],

        choices4: [
          { outcomes: [
            `Je relève la tête, et me dit que regarder la télé me permettra sûrement de m’occuper l’esprit autrement qu’en ruminant. Je zappe de chaîne en chaîne, jusqu’à aller sur une chaîne d’infos. Au programme de ce soir, des révélations choquantes sur les attaques terroristes perpétrées par un groupe qui prétend "se libérer des androïdes". Au début, je n’y prête pas attention, mais petit à petit les paroles de la présentatrice se mettent à tourner dans ma tête`,

            `Je redresse la tête, en me disant que regarder la télévision pourrait probablement me distraire l'esprit plutôt que de rester préoccupé. Je change de chaîne à plusieurs reprises, finissant par atterrir sur une chaîne d'actualités. La programmation de ce soir présente des révélations choquantes sur les attaques terroristes perpétrées par un groupe affirmant vouloir "s'émanciper des androïdes". Au début, je ne fais pas vraiment attention, mais progressivement, les paroles de la présentatrice commencent à tourbillonner dans ma tête`
          ]}
        ],

        choices5: [
          { outcomes: [
            `Incapable de me défaire de ce sujet, j’allume mon ordi et me lance dans des recherches. Je tombe sur plusieurs articles qui retracent “l’accident”, d’autres qui présentent le groupe présumé responsable de tout ça. Parfois en bien, parfois en mal. En même temps, le sujet divise tout le monde depuis que les androïdes sont omniprésents, donc ça ne m’étonne même plus de lire tout et son contraire`,

            `Prisonnier de mes pensées, je démarre mon ordinateur et débute mes investigations. Je découvre divers articles relatant les détails de "l'incident" et d'autres décrivant le groupe présumé comme responsable de cette situation, parfois en termes élogieux, parfois critiques. Étant donné que le sujet suscite des opinions divergentes depuis que les androïdes sont omniprésents, il ne me surprend même plus de rencontrer des points de vue contradictoires`
          ]}
        ],

        choices6: [
          { outcomes: [
            `Au bout d’un moment, je trouve un forum de sympathisants du mouvement et plus j’avance, plus les discussions sont engagées. Au milieu de ça, je repère un message qui donne une adresse en ajoutant “Vous y trouverez vos propres réponses”. Puisque je n’ai rien de mieux à faire je décide d’y aller dès maintenant, même si la nuit ne va pas tarder à tomber, qu’est-ce qui peut bien m’arriver ?`,

            `Après un certain temps, je découvre un forum composé de partisans du mouvement, et à mesure que je progresse, les échanges deviennent de plus en plus approfondis. Au milieu de cette dynamique, je repère un message qui indique une adresse avec la mention "Vous trouverez vos réponses là-bas". N'ayant rien de plus urgent à faire, je choisis de m'y rendre immédiatement, même si la nuit commence à tomber. Après tout, qu'est-ce que je risque ?`
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
  
    components: { CardText, NextButton },
  
    created() {
      this.generateOutcomeText1()
      this.generateOutcomeText2()
      this.generateOutcomeText3()
      this.generateOutcomeText4()
      this.generateOutcomeText5()
      this.generateOutcomeText6()
    },
  
    methods: {
      toggleContent1() {
          this.showContent1 = !this.showContent1;
      },
      toggleContent2() {
          this.showContent2 = !this.showContent2;
      },
      toggleContent3() {
          this.showContent3 = !this.showContent3;
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