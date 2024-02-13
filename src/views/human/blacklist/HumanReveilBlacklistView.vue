<template>
    <div class="bg-human--bg-appart bg-cover bg-bottom bg-black text-white font-rationale text-base px-56 h-screen overflow-scroll">
      <div class="flex flex-col gap-8 pt-16">
        <CardText :text="outcomeText1"/>
  
        <div class="px-32">
          <img class="border-2 border-gray rounded-2xl" :src="images[0]" alt="Ordinateur">
        </div>
  
        <CardText :text="outcomeText2" />
  
        <CardText :text="outcomeText3" />

        <div>
          <img class="border-2 border-gray rounded-2xl" :src="images[1]" alt="Centre">
        </div>
  
        <CardDialog :img="images[2]" :dialog="outcomeText4" />
  
        <CardDialog :img="images[3]" :dialog="outcomeText5" />
  
        <CardDialog :img="images[2]" :dialog="outcomeText6" />
  
        <CardDialog :img="images[3]" :dialog="outcomeText7" />
  
        <CardDialog :img="images[2]" :dialog="outcomeText8" />
  
        <CardDialog :img="images[3]" :dialog="outcomeText9" />
  
        <CardDialog :img="images[2]" :dialog="outcomeText10" />
  
        <CardDialog :img="images[3]" :dialog="outcomeText11" />
  
        <CardText :text="outcomeText12" />
  
        <CardDialog :img="images[2]" :dialog="outcomeText13" />
  
        <CardDialog :img="images[3]" :dialog="outcomeText14" />
  
        <CardDialog :img="images[2]" :dialog="outcomeText15" />
  
        <CardDialog :img="images[4]" :dialog="outcomeText16" />

        <CardText :text="outcomeText17" />
           
        <NextButton class="mb-16" link="humanFin" text="C'est impossible..." />
      </div>
    </div>
</template>
  
<script>
  import db from '@/firebase/init.js'
  import { where, query, collection, getDocs } from 'firebase/firestore'
  
  import CardText from '@/components/CardText.vue'
  import NextButton from '@/components/NextButton.vue'
  import CardDialog from '@/components/CardDialog.vue'
  
  export default {
    name: `HumanReveilBlacklist`,
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
            `Au fur et à mesure que je postule, je me rends compte que personne ne me répond. Les jours passent, toujours aucune nouvelle d’aucun des centres de recrutement. Ça me paraît louche cette histoire, je vais aller voir sur place directement`,
  
            `À mesure que je soumets ma candidature à différentes entreprises, je constate l'absence de réponses de la part des recruteurs. Les jours s'écoulent sans que j'aie de nouvelles d'un seul centre de recrutement. Cette situation me semble suspecte, je vais me rendre sur place pour obtenir directement des informations`
          ]}
        ],

        choices3: [
          { outcomes: [
            `Je me rends au centre le plus proche et vais directement voir la secrétaire à l’accueil`,
  
            `Je me dirige vers le centre le plus proche et je me rends immédiatement au bureau de la secrétaire à la réception`
          ]}
        ],

        choices4: [
          { outcomes: [
            `Bonjour Madame, j’aimerai avoir quelques renseignements`,

            `Bonjour Madame, je souhaiterais obtenir quelques informations, s'il vous plaît`
          ]}
        ],

        choices5: [
          { outcomes: [
            `Oui Monsieur, que puis-je faire pour vous ?`,

            `Bien sûr, monsieur. En quoi puis-je vous assister ?`,
          ]}
        ],

        choices6: [
          { outcomes: [
            `C’est au sujet de vos annonces de recrutement… Vous recrutez bien en ce moment n’est-ce pas ?`,

            `Je voulais discuter des offres d'emploi que vous avez publiées récemment. Il me semble que vous êtes en phase de recrutement, n'est-ce pas ?`
          ]}
        ],

        choices7: [
          { outcomes: [
            `Oui tout à fait, vous souhaitez postuler ?`,

            `Bien sûr, vous êtes intéressé par le poste ? Il suffit de candidater`
          ]}
        ],

        choices8: [
          { outcomes: [
            `À vrai dire, je l’ai déjà fait depuis votre site, et c’était il y a plusieurs jours déjà`,

            `En réalité, j'ai déjà accompli cette tâche à partir de votre site, et cela remonte à plusieurs jours maintenant`
          ]}
        ],

        choices9: [
          { outcomes: [
            `C’est étrange, nous n’avons pas reçu tant de demandes que ça cette semaine, vous auriez déjà dû recevoir une réponse… Pouvez-vous me donner votre nom ?`,

            `C'est curieux, le nombre de demandes reçues cette semaine est plutôt bas. Normalement, une réponse aurait déjà dû être envoyée à ce stade. Pourriez-vous me fournir votre nom, s'il vous plaît ?`
          ]}
        ],

        choices10: [
          { outcomes: [
            `Bien sûr, je suis Milan Vaylene`,

            `Évidemment, j'ai candidaté au nom de Milan Vaylene`
          ]}
        ],

        choices11: [
          { outcomes: [
            `Ah… Un instant s’il vous plaît…`,

            `...Laissez-moi un moment s'il vous plaît...`
          ]}
        ],

        choices12: [
          { outcomes: [
            `Je remarque qu’elle commence à me regarder étrangement, comme si j’avais dit quelque chose de travers. Quelques secondes plus tard, j’aperçois les deux vigiles de l’entrée qui viennent à moi`,

            `Je constate qu'elle me lance des regards inhabituels, comme si mes propos avaient été mal interprétés. Quelques instants après, je repère les deux agents de sécurité de l'entrée qui s'approchent de moi`
          ]}
        ],

        choices13: [
          { outcomes: [
            `Madame, pourquoi avez-vous appelé les vigiles ? Il me semble avoir été courtois pourtant`,

            `Excusez-moi madame, pourquoi avez-vous fait appel aux agents de sécurité ? Je n'ai pas été désagréable à ma connaissance`
          ]}
        ],

        choices14: [
          { outcomes: [
            `Monsieur Vaylene, vous avez été mis sur liste noire après avoir tenté d’agresser votre ex-patron. Aucune entreprise du secteur n’acceptera votre candidature. Veuillez quitter les locaux immédiatement`,

            `Monsieur Vaylene, en raison de votre tentative d'agression envers votre ancien employeur, votre nom a été inscrit sur une liste d'individus indésirables. Aucune entreprise du secteur ne sera disposée à considérer votre candidature. Nous vous prions de bien vouloir quitter les lieux sans délai.`
          ]}
        ],

        choices15: [
          { outcomes: [
            `Alors c’était pour ça… Très bien, en tout cas je ne vous remercie pas Madame la moutonne ! Vous aurez la mort d’une bonne personne sur la conscience si je ne trouve pas de travail !`,

            `Donc, c'est la raison... D'accord, en tout cas, je ne vous exprime pas ma gratitude, connasse ! Vous porterez le poids de ma mort sur vos épaules si je ne parviens pas à décrocher un emploi à cause de vous !`
          ]}
        ],

        choices16: [
          { outcomes: [
            `Dehors on t’a dit !`,

            `Vous allez nous suivre dehors tout de suite`
          ]}
        ],

        choices17: [
          { outcomes: [
            `À nouveau “escorté” vers la sortie, je me libère et lance un regard mauvais en direction des vigiles avant de quitter les lieux d’un seul mouvement. Une fois rentré chez moi, je me demande comment je vais pouvoir faire pour ne pas finir à la rue…`,

            `Avec comme une impression de déjà-vu, les vigiles m'emmènent à la sortie. Je me soutire à leur étreinte, leur jette un regard noir et m’en vais directement à l'appartement. Une fois arrivé, je me pose lourdement sur le canapé en me demandant comment sortir de ce pétrin sans devenir SDF…`
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
      }
    },
  
    components: { CardText, NextButton, CardDialog },
  
    created() {
      this.getImage('ordi.jpg')
      this.getImage('centre.jpg')
      this.getImage('milan.jpg')
      this.getImage('secretaire.jpg')
      this.getImage('avatar.svg')
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
    }
  }
</script>