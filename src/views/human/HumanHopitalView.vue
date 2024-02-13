<template>
  <div>
    <div class="bg-human--bg-hopital bg-cover bg-center bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-scroll">
      <CardText :text="outcomeText1" />

      <CardDialog :img="images[0]" alt="Infirmière" :dialog="outcomeText2" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText3" />

      <CardDialog :img="images[0]" alt="Infirmière" :dialog="outcomeText4" />

      <CardText :text="outcomeText5"/>

      <CardDialog :img="images[2]" alt="Docteur" :dialog="outcomeText6" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText7" />

      <CardDialog :img="images[2]" alt="Docteur" :dialog="outcomeText8" />

      <CardDialog :img="images[2]" alt="Docteur" :dialog="outcomeText9" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText10" />

      <CardDialog :img="images[2]" alt="Docteur" :dialog="outcomeText11" />
      
      <ul v-if="!showContent1 && !showContent2 && !showContent3" class="font-black-ops-one text-xl flex justify-around gap-8 mt-6 mb-16">
          <li @click="toggleContent1"
          class="border-4 border-dark-blue text-center bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
            Refuser et rester
          </li>
          <li @click="toggleContent2"
          class="border-4 border-dark-blue text-center bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
            Refuser et rentrer à l'appartement
          </li>
          <li @click="toggleContent3"
          class="border-4 border-dark-blue text-center bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
            Accepter de prendre l'androïde
          </li>
      </ul>

      <div v-if="showContent1" class="flex flex-col gap-8 mb-16">
          <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText12" />

          <CardDialog :img="images[2]" alt="Docteur" :dialog="outcomeText13" />

          <CardText :text="outcomeText14" />

          <CardText :text="outcomeText15" />
          
          <CardText :text="outcomeText16" />

          <NextButton link="humanFin" text="Pardonne-moi..." />
      </div>

      <div v-if="showContent2" class="flex flex-col gap-8 mb-16">
        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText17" />

        <CardDialog :img="images[2]" alt="Passeur" :dialog="outcomeText18" />

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText19" class="font-bold text-xl text-red" />

        <CardText :text="outcomeText20" />

        <CardText :text="outcomeText21" />

        <CardText :text="outcomeText22" />

        <NextButton link="humanFin" text="Si seulement j'avais réagi autrement..." /> 
      </div>

      <div v-if="showContent3" class="flex flex-col gap-8 mb-16">
        <CardText :text="outcomeText23" />
        
        <CardText :text="outcomeText24" />

        <CardText :text="outcomeText25" />

        <NextButton link="humanHopitalAndroid1" text="Continuer" /> 
      </div>
    </div>
  </div>
</template>
    
<script>
  import db from '@/firebase/init.js'
  import { where, query, collection, getDocs } from 'firebase/firestore'

  import CardDialog from '@/components/CardDialog.vue'
  import CardText from '@/components/CardText.vue'
  import NextButton from '@/components/NextButton.vue'
  
  export default {
    name: `HumanHopital`,
    data() {
      return {   
        images: [],

        showContent1: false,
        showContent2: false,
        showContent3: false,

        choices1: [
          { outcomes: [
            `Je me réveille enfin, et tout de suite la douleur me saisit. J’émerge de mon sommeil et j’entraperçois une infirmière en train de trafiquer une machine. Lorsqu’elle se retourne vers moi, elle a l’air choqué`,

            `Je reprends conscience, et immédiatement une sensation douloureuse m'envahit. Je sors lentement de mon sommeil et je distingue une infirmière en train de manipuler un appareil. Lorsqu'elle se tourne vers moi, son expression laisse transparaître une certaine surprise`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Monsieur, vous êtes réveillé ? Vous êtes à l’hôpital ne vous inquiétez pas ! Vous avez été dans le coma pendant 3 jours, vous étiez grièvement blessé quand on vous a trouvé. Qu’est-ce qui s’est passé ?`,

            `Monsieur, avez-vous repris connaissance ? Vous êtes actuellement en milieu hospitalier, ne vous alarmez pas. Vous avez été dans un état comateux pendant une période de trois jours, et votre état était sérieusement compromis au moment où nous vous avons récupéré. Pourriez-vous nous éclairer sur les circonstances de cet incident ?`,
          ]}
        ],

        choices3: [
          { outcomes: [
            `Je... me suis fait agresser... par un type masqué...`,

            `J'ai été... attaqué par... quelqu'un portant un masque...`,
          ]}
        ],

        choices4: [
          { outcomes: [
            `Ne forcez pas monsieur, reposez-vous le temps que j’appelle le médecin en charge de votre opération`,

            `Ne vous faites pas mal à nouveau monsieur. Accordez-vous un moment de repos pendant que je contacte le chirurgien en charge de votre intervention`
          ]}
        ],

        choices5: [
          { outcomes: [
            `J’arrive à me redresser et à m’asseoir sur le lit d’hôpital, puis quelques minutes passent et un cortège d’infirmiers défilent dans la chambre, alors qu’un d’eux s’avance vers moi avec un dossier à la main`,

            `Je parviens à me redresser et à m'installer sur le lit de l'hôpital. Quelques instants plus tard, un groupe d'infirmiers entre dans la chambre, et l'un d'eux se dirige vers moi en tenant un dossier`
          ]}
        ],

        choices6: [
          { outcomes: [
            `Bonjour monsieur Vaylene, comment vous sentez-vous ? Ne faites pas attention à eux, ce sont les internes de l’hôpital qui me suivent dans mes consultations`,

            `Monsieur Vaylene, comment vous portez-vous ? Ignorez-les, ce sont les stagiaires médicaux qui m'accompagnent lors de mes consultations à l'hôpital`
          ]}
        ],
        
        choices7: [
          { outcomes: [
            `Ça pourrait aller mieux...`,

            `Je dirais pas que je pète la forme...`
          ]}
        ],

        choices8: [
          { outcomes: [
            `Je suis le docteur Cox, c’est moi qui vous ai opéré lorsque vous êtes arrivé ici. On a pu vous sortir du danger immédiat, mais comme l’ambulance a mis du temps à vous ramener ici votre corps est encore très endommagé`,

            `Je suis celui qui a réalisé l'intervention chirurgicale à votre arrivée, Dr Cox. Nous avons réussi à vous stabiliser dans l'urgence, cependant, en raison du délai pris par l'ambulance pour vous ramener ici, votre organisme présente toujours d'importants dommages`
          ]}
        ],

        choices9: [
          { outcomes: [
            `Nous allons vous prescrire un traitement à suivre durant une semaine complète, mais ne vous en faites pas nous allons affecter un de nos androïdes médicaux pour vous prodiguer les soins depuis chez vous`,

            `Je vais vous établir un protocole de soins à suivre pendant une semaine entière, mais soyez tranquille, nous allons assigner un androïde médical à vos soins à domicile`
          ]}
        ],

        choices10: [
          { outcomes: [
            `Ah non c’est hors de question, je veux pas de ça chez moi !`,

            `Un androïde chez moi ? Même pas en rêve !`
          ]}
        ],

        choices11: [
          { outcomes: [
            `Je suis désolé monsieur, mais vous n’avez pas vraiment le choix. À moins que vous ne souhaitiez rester ici le temps du traitement. Qu’en pensez-vous ?`,

            `Monsieur, il s'agit d'un androïde médical. C'est pour assurer votre rétablissement dans les plus brefs délais. Si vous le souhaitez vraiment, nous pouvons vous traiter directement ici, si ça vous arrange.`
          ]}
        ],

        choices12: [
          { outcomes: [
            `Ouais on va faire ça plutôt, l’androïde c’est mort`,

            `On va partir sur cette solution oui, je préfère`
          ]}
        ],

        choices13: [
          { outcomes: [
            `Très bien, je vais aller chercher votre traitement`,

            `Parfait, je vais m'occuper de votre premier traitement dès maintenant, laissez-moi aller m'équiper`
          ]}
        ],

        choices14: [
          { outcomes: [
            `Une semaine plus tard, je ressors de l’hôpital en étant bien plus frais qu’en arrivant. J’appelle un taxi, et je prends la direction de l’appartement`,

            `Comme prévu, je quitte l'établissement hospitalier une semaine après mon arrivée, en me sentant nettement mieux. Je fais appel à un service de taxi et me dirige vers le domicile`
          ]}
        ],

        choices15: [
          { outcomes: [
            `Oui, mais j’avais oublié un détail lorsque j’ai pris ma décision. J’ai oublié Rookie`,

            `Seulement, j'avais omis un élément crucial quand j'ai choisi de rester à l'hôpital : Rookie`
          ]}
        ],

        choices16: [
          { outcomes: [
            `Personne n’a pu le nourrir ou lui donner à boire durant ce laps de temps. L’angoisse monte durant le trajet qui me paraît durer une éternité désormais. En arrivant chez moi, je le retrouve, certes, mais il n’a malheureusement pas survécu à ma longue absence. Je m’effondre en pleurs devant lui`,

            `Pendant cette période, personne n'a été en mesure de veiller à ses besoins. L'anxiété s'intensifie au cours du trajet, semblant s'étirer indéfiniment. Une fois de retour à la maison, je le retrouve, mais malheureusement, il n'a pas survécu à mon absence prolongée. Écrasé par le chagrin, je m'effondre en larmes devant son corps`
          ]}
        ],

        choices17: [
          { outcomes: [
            `Non mais vous vous prenez pour qui ? J’ai encore le droit de décider si je veux d’un androïde ou pas ! Et je dois rentrer chez moi, j’ai un chien dont je dois m’occuper !`,

            `Vous pensez être qui pour m'interdire de rentrer chez moi ? Je fais ce que je veux, et surtout je veux pas entendre parler d'androïde ! Je rentre chez moi, mon chien m'attend`
          ]}
        ],

        choices18: [
          { outcomes: [
            `Monsieur, vous ne pouvez pas partir sans que nous ayons une assurance que vous prendrez bien votre traitement, sinon nous pourrions être tenu responsables si vous faites une rechute`,

            `Excusez-moi monsieur, mais il est essentiel que nous ayons une valeur sûre permettant le suivi de votre traitement avant que vous ne quittiez les lieux. Cela garantirait notre responsabilité en cas de nouvelle défaillance de votre santé`
          ]}
        ],

        choices19: [
          { outcomes: [
            `Je m’en fous, et s'il le faut je rentrerai chez moi TOUT SEUL`,

            `Si je dois forcer le passage, JE LE FERAIS`
          ]}
        ],

        choices20: [
          { outcomes: [
            `En joignant le geste à la parole, je me lève de mon lit (non sans mal), et déambule lentement vers la sortie. Le médecin médusé commence à demander à ses internes de me retenir, mais j'en ai rien à faire. Je me débats pour continuer d’avancer avec une seule idée en tête : sortir`,

            `En concrétisant mes paroles par des actions, je sors de mon lit (non sans difficulté) et me dirige lentement vers la sortie. Le médecin, surpris, commence à ordonner aux stagiaires de m'arrêter, mais cela m'importe peu. Je me débats pour persévérer dans ma progression, avec une seule pensée en tête : quitter les lieux`
          ]}
        ],

        choices21: [
          { outcomes: [
            `Mais à force de me débattre, je finis par ressentir une douleur insoutenable là où je me suis fait poignarder, et m'effondre au sol. Je commence lentement à me vider de mon sang, semant la panique dans les rangs de mes détracteurs`,

            `Cependant, en luttant ardemment, la douleur à l'endroit de ma blessure ressort d'un seul coup, et je m'écroule par terre. Graduellement, je commence à perdre mon sang, provoquant la panique parmi ceux qui s'opposent à moi`
          ]}
        ],

        choices22: [
          { outcomes: [
            `Les soins intensifs ne suffisent pas, et je m’éteins lentement après m’en être voulu à tout jamais d’avoir agi de la sorte`,

            `Les gestes de secours sont insuffisants, et je pars progressivement tout en ressentant un profond regret pour avoir agi de cette manière`
          ]}
        ],

        choices23: [
          { outcomes: [
            `Coincé par le choix cornélien que le médecin m’impose, je cherche à trouver une autre solution, en vain. Résigné, je finis par accepter mon sort, et l’androïde avec. Le médecin me liste alors l’ensemble de ce que je dois prendre et qui me sera fourni par l’androïde en question`,

            `Confronté à la décision difficile imposée par le médecin, je me trouve dans l'impasse en essayant en vain de trouver une alternative. Abandonnant tout espoir, je me résigne finalement à accepter ma situation, en même temps que l'androïde. Le médecin énumère ensuite la liste complète des médicaments que je devrai prendre, lesquels seront dispensés par ledit androïde`
          ]}
        ],

        choices24: [
          { outcomes: [
            `À chaque mention de la machine, je fronce les sourcils de dégoût, en espérant que le médecin le remarque et revienne sur sa décision. Malheureusement, même s’il l’avait remarqué, il n’en paraît absolument pas affecté`,

            `Chaque fois que la machine est évoquée, je plisse les sourcils avec répugnance, dans l'espoir que le médecin le remarque et reconsidère sa décision. Malheureusement, même s'il a pris conscience de ma réaction, il ne semble pas du tout influencé par celle-ci`
          ]}
        ],

        choices25: [
          { outcomes: [
            `Je quitte donc l’hôpital en ambulance, accompagné par cet androïde qui ressemble trait pour trait à un humain, à l’exception de ses yeux légèrement vitreux. Une fois arrivé à destination, je commence par m’occuper de Rookie, qui a dû s’impatienter de mon retour et manquer de quoi manger et boire pendant mon absence`,

            `Je sors de l'établissement hospitalier à bord d'une ambulance, en compagnie de cet être artificiel qui présente une ressemblance frappante avec un être humain, à l'exception de ses yeux légèrement opaques. Une fois arrivé à bon port, ma première préoccupation est de prendre soin de Rookie, qui a probablement attendu longtemps et a dû faire face à une pénurie d'eau et de croquettes pendant mon absence`
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
        outcomeText11: null,
        outcomeText12: null,
        outcomeText13: null,
        outcomeText14: null,
        outcomeText15: null,
        outcomeText16: null,
        outcomeText17: null,
        outcomeText18: null,
        outcomeText19: null,
        outcomeText20: null,
        outcomeText21: null,
        outcomeText22: null,
        outcomeText23: null,
        outcomeText24: null,
        outcomeText25: null,
      }
    },
  
    components: { CardText, NextButton, CardDialog },
  
    created() {
        this.getImage('infirmiere.jpg')
        this.getImage('milan.jpg')
        this.getImage('docteur.jpg')
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
        this.generateOutcomeText11()
        this.generateOutcomeText12()
        this.generateOutcomeText13()
        this.generateOutcomeText14()
        this.generateOutcomeText15()
        this.generateOutcomeText16()
        this.generateOutcomeText17()
        this.generateOutcomeText18()
        this.generateOutcomeText19()
        this.generateOutcomeText20()
        this.generateOutcomeText21()
        this.generateOutcomeText22()
        this.generateOutcomeText23()
        this.generateOutcomeText24()
        this.generateOutcomeText25()
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
        generateOutcomeText11() {
          const randomIndex = Math.floor(Math.random() * this.choices11.length)
          const selectedChoice = this.choices11[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText11 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText12() {
          const randomIndex = Math.floor(Math.random() * this.choices12.length)
          const selectedChoice = this.choices12[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText12 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText13() {
          const randomIndex = Math.floor(Math.random() * this.choices13.length)
          const selectedChoice = this.choices13[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText13 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText14() {
          const randomIndex = Math.floor(Math.random() * this.choices14.length)
          const selectedChoice = this.choices14[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText14 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText15() {
          const randomIndex = Math.floor(Math.random() * this.choices15.length)
          const selectedChoice = this.choices15[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText15 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText16() {
          const randomIndex = Math.floor(Math.random() * this.choices16.length)
          const selectedChoice = this.choices16[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText16 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText17() {
          const randomIndex = Math.floor(Math.random() * this.choices17.length)
          const selectedChoice = this.choices17[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText17 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText18() {
          const randomIndex = Math.floor(Math.random() * this.choices18.length)
          const selectedChoice = this.choices18[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText18 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText19() {
          const randomIndex = Math.floor(Math.random() * this.choices19.length)
          const selectedChoice = this.choices19[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText19 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText20() {
          const randomIndex = Math.floor(Math.random() * this.choices20.length)
          const selectedChoice = this.choices20[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText20 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText21() {
          const randomIndex = Math.floor(Math.random() * this.choices21.length)
          const selectedChoice = this.choices21[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText21 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText22() {
          const randomIndex = Math.floor(Math.random() * this.choices22.length)
          const selectedChoice = this.choices22[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText22 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText23() {
          const randomIndex = Math.floor(Math.random() * this.choices23.length)
          const selectedChoice = this.choices23[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText23 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText24() {
          const randomIndex = Math.floor(Math.random() * this.choices24.length)
          const selectedChoice = this.choices24[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText24 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText25() {
          const randomIndex = Math.floor(Math.random() * this.choices25.length)
          const selectedChoice = this.choices25[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText25 = selectedChoice.outcomes[randomOutcomeIndex]
        },
    }
  }
</script>