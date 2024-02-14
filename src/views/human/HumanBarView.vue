<template>
  <div>
    <div class="bg-human--bg-bar bg-cover bg-bottom bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardText :text="intro" />

      <CardDialog :img="images[0]" alt="Phil" :dialog="outcomeText1"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText2"/>

      <CardText :text="rebond" />

      <ul v-if="!showContent1 && !showContent2 && !showContent3" class="font-black-ops-one text-xl flex justify-around gap-8 mt-6 mb-16">
        <li @click="toggleContent1"
        class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
        >
        S'énerver contre Phil
        </li>
        <li @click="toggleContent2"
        class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
        >
        Lui poser des questions
        </li>
        <li @click="toggleContent3"
        class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
        >
        Ne rien faire...
        </li>
      </ul>

      <div v-if="showContent3 && !showContent1 && !showContent2" class="flex flex-col gap-8 mb-16">
        
        <CardText :text="wait1" />

        <CardText :text="wait2" />

        <ul v-if="showContent3" class="font-black-ops-one text-xl flex justify-around mt-6">
          <li @click="toggleContent1"
          class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
          S'énerver contre Phil
          </li>
          <li @click="toggleContent2"
          class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
          Lui poser des questions
          </li>
        </ul>
      </div>
      
      <div v-if="showContent1" class="flex flex-col gap-8 mb-16">
        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText3"/>

        <CardDialog :img="images[0]" alt="Phil" :dialog="outcomeText4"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText5"/>

        <CardDialog :img="images[0]" alt="Phil" :dialog="outcomeText6"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText7"/>

        <CardText :text="nrv" />

        <CardDialog :img="images[0]" alt="Phil" :dialog="outcomeText8"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText9"/>

        <CardDialog :img="images[0]" alt="Phil" :dialog="outcomeText10"/>
        
        <CardText :text="nrv2" />

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText11"/>

        <CardDialog :img="images[0]" alt="Phil" :dialog="outcomeText12"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText13"/>

        <CardDialog :img="images[0]" alt="Phil" :dialog="outcomeText14"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText15"/>

        <CardText :text="nrv3" />

        <NextButton link="humanBarOut" text="Tu reviendras quand tu seras calmé..." />
      </div>
      
      <div v-if="showContent2" class="flex flex-col gap-8 mb-16">
        <CardDialog :img="images[1]" alt="Milan" :dialog="discuss1"/>

        <CardDialog :img="images[0]" alt="Phil" :dialog="discuss2"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="discuss3"/>

        <CardDialog :img="images[0]" alt="Phil" :dialog="discuss4"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="discuss5"/>

        <CardText :text="discuss6" />

        <NextButton link="humanSleep" text="Qu'est-ce que j'aime retrouver mon lit..." />
      </div>
    </div>
  </div>
</template>
    
<script>
    import db from '@/firebase/init.js'
    import { where, query, collection, getDocs } from 'firebase/firestore'
    
    import NextButton from '@/components/NextButton.vue'
    import CardText from '@/components/CardText.vue'
    import CardDialog from '@/components/CardDialog.vue'
    
    export default {
      name: `HumanBar`,
      data() {
        return {
          images: [],
          
          showContent1: false,
          showContent2: false,
          showContent3: false,
    
          intro: `J'arrive en face du bar et je remarque qu'il y a beaucoup de bruits et de lumière qui en sort. Phil a dû faire quelques nouveaux aménagements pour attirer les clients, et ça a l'air de bien fonctionner. Je pousse la porte et Phil lève la tête pour me saluer`,

          choices1: [
            { outcomes: [
              `Mais t'es de retour Milan ? Ça fait un bail, viens t'asseoir on va discuter ! Tout roule ?`,
  
              `Ah Milan ! Ça fait longtemps dis ! Tu deviens quoi ?`,
  
              `Un revenant ! Ça faisait si longtemps qu'on t'avait pas vu, j'ai cru que t'étais mort ! Alors quoi de neuf ?`
            ]}
          ],
  
          choices2: [
            { outcomes: [
              `Salut Phil. Pas trop le moral je t'avoue, c'est pour ça que je viens faut que je me change les idées...`,
  
              `Ça fait longtemps comme tu dis. C'est pas trop ça en ce moment, les malheurs s'enchaînent...`,
            ]}
          ],

          rebond: `En m'installant au comptoir, je remarque qu'il y a quelqu'un qui s'agite vers une table du fond et que ça n'a pas l'air d'être Vanessa, la serveuse habituelle. À la place, encore un de ces androïdes qui sert les clients assis à cette table-là`,

          choices3: [
            { outcomes: [
              `Phil, t'as vraiment choisi un androïde au lieu de sauver une vie humaine ? T'es qu'un traître à l'humanité, un monstre`,
  
              `Mais c'est pas vrai ! Phil, t'as vraiment cru qu'un androïde c'était un bon moyen de remplacer un humain ? C'est criminel de faire ça !`,
            ]}
          ],
  
          choices4: [
            { outcomes: [
              `Attends, de quoi tu parles ? Pourquoi tu m'accuses comme ça ?`,
  
              `Calme-toi, explique-moi d'où vient ta colère d'abord s'il te plaît`
            ]}
          ],
  
          choices5: [
            { outcomes: [
              `T'as entendu ce que j'ai dit, Phil. T'as préféré un foutu robot à une personne réelle. C'est inhumain !`,
  
              `T'as très bien compris fais pas l'innocent. T'as remplacé un humain par un putain de robot !`,
            ]}
          ],
  
          choices6: [
            { outcomes: [
              `Milan, tu te trompes. Je ne sais même pas pourquoi tu t'énerves. Pourquoi tu réagis comme ça ?`,
  
              `Non pas du tout, arrête d'agir comme un enfant`
            ]}
          ],
  
          choices7: [
            { outcomes: [
              `Regarde ça, Phil. T'as choisi ça à la place d'une vie humaine. C'est dégueulasse`,
  
              `Me dis pas ce que je dois faire, surtout quand tu préfères les robots aux humains`
            ]}
          ],

          nrv: `Pendant que les clients autour observent la scène partagés entre la curiosité et la peur, je fonce vers l'androïde, l'empoigne et le plaque contre le mur`,
  
          choices8: [
            { outcomes: [
              `Milan, calme-toi. Tu comprends pas la situation. C'est pas aussi simple que ça`,
  
              `T'as pas le contexte Milan. Laisse-moi t'expliquer...`
            ]}
          ],
  
          choices9: [
            { outcomes: [
              `Rien ne justifie ça. T'as perdu toute humanité`,
  
              `J'ai pas à écouter tes justifications. C'est trop tard, le mal est fait`
            ]}
          ],
  
          choices10: [
            { outcomes: [
              `Écoute-moi, Milan. Y a des circonstances que tu ignores. Cet androïde, c'est pas ce que tu crois`,
  
              `Milan, tu me connais. J'aurais pas fait ça sans de bonnes raisons`
            ]}
          ],
                    
          nrv2: `Mes insultes se font de plus en plus virulentes. D’abord envers l’androïde, qui ne réagit pas et ça m’énerve encore plus. Cette foutue machine est un ancien modèle, il n’est que programmé pour faire ce qu’on lui dit de faire. Je change alors de cible et retourne au comptoir pour confronter Phil, qui commence à venir vers moi`,
  
          choices11: [
            { outcomes: [
              `T'as vraiment le culot de me demander de me calmer, Phil ? C'est de ta faute si les gens sont à la rue, tu le sais très bien`,
  
              `T'es en train de me demander ça alors que tu commets l'irréparable ? Tu es dans le coup toi aussi c'est ça ? Je te connais depuis si longtemps et tu me fais ça...`
            ]}
          ],

          choices12: [
            { outcomes: [
              `Milan, ça va trop loin. On peut discuter sans en arriver là`,
  
              `Qu'est-ce que tu racontes encore. T'as bu, t'as passé une mauvaise journée, ça arrive à tout le monde. Allez assied-toi et ressaisis-toi`
            ]}
          ],

          choices13: [
            { outcomes: [
              `T'es qu'un salaud, Phil. T'as une part de responsabilité dans tout ça`,
  
              `T'es comme tous les autres, tu les protèges alors que c'est eux la source du problème`
            ]}
          ],

          choices14: [
            { outcomes: [
              `Quoi ? De quoi tu parles ?`,
  
              `Ça veut dire quoi ça ?`
            ]}
          ],

          choices15: [
            { outcomes: [
              `Et vous autres, vous avez pas honte de vivre avec EUX ? Ces enfoirés qui volent nos taff et nous foutent dans la merde. C'est LEUR FAUTE, alors pourquoi vous les défendez, bande de-`,
  
              `De toute façon tout le monde ici pense comme toi, j'ai pas raison ? Hein ? Vous me regardez tous mais regardez ces machines de merde d'abord ! C'est elles le problème, pas les gens comme moi qui-`
            ]}
          ],

          nrv3: `Je n’ai pas le temps de finir que Phil me prend le bras que je tendais vers les clients et me repousse vers la sortie. J’essaie vainement de le repousser mais il a plus de force. J’ai à peine le temps de me retourner que je suis jeté dehors. “Tu n’es plus le bienvenu jusqu’à nouvel ordre” ajoute Phil avant de claquer la porte du bar. Je lui hurle d’aller se faire voir, mais pas de réponse`,

          discuss1: `Dis c’est quoi ce truc ? Elle est où Vanessa ? Me dis pas que tu l’as remplacée par ÇA ?`,

          discuss2: `Du tout, c’est juste qu’elle est partie en congé y a quelques jours donc j’ai dû trouver un remplaçant, et les serveurs c’est pas ce qui court les rues en ce moment…`,

          discuss3: `Quand même t’abuses, tu sais très bien qu’ils nous volent le travail et toi t’en prends un pour le bar. Et tu sais que je peux pas les voir ces machins !`,

          discuss4: `Oui oui bon, c’est que temporaire hein le temps que je trouve un autre remplaçant ou que Vanessa revienne`,

          discuss5: `Encore heureux…`,

          discuss6: `Je reporte mon attention sur mon verre et je continue à échanger des nouvelles avec Phil, tout en veillant à ce que l’androïde ne m’approche pas de trop près. Après quelques heures, je finis mon verre et salue mes partenaires de boisson du soir avant de me diriger vers la porte du bar et de rentrer à l’appartement`,

          wait1: `Opter pour ne pas faire de commentaire et continuer à boire et discuter semble être la voie la plus simple. Même si le malaise me ronge, je fais en sorte de ne rien laisser paraître`,

          wait2: `Même si j’essaie de faire abstraction, plus le temps passe et plus je centre mon attention sur ce que fait l’androïde. Ça me trotte trop dans la tête, il faut que je fasse quelque chose`,

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
          outcomeText15: null
        }
      },
    
      components: { CardText, CardDialog, NextButton },
    
      created() {
        this.getImage('phil.jpg')
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
        this.generateOutcomeText11()
        this.generateOutcomeText12()
        this.generateOutcomeText13()
        this.generateOutcomeText14()
        this.generateOutcomeText15()
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
      }
    }
</script>  