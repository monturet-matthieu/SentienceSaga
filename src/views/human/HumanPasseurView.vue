<template>
  <div>
    <div class="bg-human--bg-passeur bg-cover bg-bottom bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardText :text="outcomeText1" />
      
      <CardText :text="outcomeText2"/>

      <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText3" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText4" />

      <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText5" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText6" />

      <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText7" />
      
      <CardText :text="outcomeText8"/>

      <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText9" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText10" />

      <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText11" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText12" />

      <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText13" />

      <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText14" />

      <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText15" />
      
      <ul v-if="!showContent1 && !showContent2" class="font-black-ops-one text-xl flex justify-around mt-6 mb-16">
          <li @click="toggleContent1"
          class="border-4 border-dark-blue text-center bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
            Menacer le passeur
          </li>
          <li @click="toggleContent2"
          class="border-4 border-dark-blue text-center bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
            Le laisser faire
          </li>
      </ul>

      <div v-if="showContent1" class="flex flex-col gap-8">
          <CardText :text="outcomeText16" />

          <CardText :text="outcomeText17" />

          <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText18" />

          <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText19" />

          <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText20" />
          
          <CardText :text="outcomeText21" />
          
          <CardText :text="outcomeText22" />
          
          <CardText :text="outcomeText23" />

          <NextButton class="mb-16" link="humanHopital" text="J'aurais pas dû l'attaquer..." />
      </div>

      <div v-if="showContent2" class="flex flex-col gap-8">
        <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText24"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText25"/>

        <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText26"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText27"/>

        <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText28"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText29"/>

        <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText30"/>

        <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText31"/>

        <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText32"/>

        <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText33"/>

        <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText34"/>

        <ul v-if="showContent2 && !showContent3 && !showContent4" class="font-black-ops-one text-xl flex justify-around mt-6 mb-16">
          <li @click="toggleContent3"
          class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
          Rejoindre le groupe
          </li>
          <li @click="toggleContent4"
          class="border-4 border-dark-blue text-center  bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
          >
          Décliner l'offre
          </li>
        </ul>

        <div v-if="showContent3" class="flex flex-col gap-8 mb-16">
          <CardText :text="outcomeText35"/>

          <NextButton link="humanFin" text="À suivre..." /> 
        </div>

        <div v-if="showContent4" class="flex flex-col gap-8 mb-16">
          <CardDialog :img="images[1]" alt="Milan" :dialog="outcomeText36"/>
          
          <CardDialog :img="images[0]" alt="Passeur" :dialog="outcomeText37"/>

          <CardText :text="outcomeText38"/>

          <CardText :text="outcomeText39"/>

          <NextButton link="humanHopital" text="J'aurais pas dû m'embarquer là-dedans..." />
        </div>
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
    name: `HumanPasseur`,
    data() {
      return {   
        images: [],

        showContent1: false,
        showContent2: false,
        showContent3: false,
        showContent4: false,

        choices1: [
          { outcomes: [
            `Après avoir failli me paumer 4 fois, perdre un œil à deux reprises et faire une chute de cinq étages, j’arrive enfin au lieu indiqué par le message. Je remarque le mot “AntiMaton” inscrit sur la porte, mais je ne perds pas plus de temps et entre dans la maison`,

            `Après m'être presque égaré à quatre reprises, avoir failli perdre un œil à deux occasions et subi une chute depuis cinq étages, j'atteins enfin la destination mentionnée dans le message. Le terme "AntiMaton" clairement affiché sur la porte me saute aux yeux, mais je ne m'y attarde pas trop et pénètre dans le bâtiment`
          ] }
        ],
  
        choices2: [
          { outcomes: [
            `Dès que j’ai franchi le palier, je me fais surprendre par un type masqué qui me met instantanément un couteau juste derrière le dos afin de m’empêcher de reculer et prendre la fuite`,

            `Au moment où j'ai atteint le pallier, j'ai été pris au dépourvu par un individu portant un masque. Il a rapidement placé un couteau juste derrière moi pour éviter que je recule et puisse m'échapper`,
          ]}
        ],

        choices3: [
          { outcomes: [
            `Qu’est-ce que tu viens faire ici ? J’ai jamais vu ta gueule par chez moi`,

            `Pourquoi t'es là toi ? Je t'ai jamais croisé dans le coin`,
          ]}
        ],

        choices4: [
          { outcomes: [
            `Je suis venu pour obtenir mes propres réponses`
          ]}
        ],

        choices5: [
          { outcomes: [
            `Qu’est-ce qui me dit que t’es vraiment là pour ça ?`,

            `Comment je peux être sûr que tu m'entubes pas ?`
          ]}
        ],

        choices6: [
          { outcomes: [
            `Je suis ni armé, ni équipé pour me battre ou quoi que ce soit du genre, je veux juste des réponses`,

            `Je porte pas d'arme, je suis pas préparé à affronter quelqu'un ou autre. Tout ce que je recherche, ce sont simplement des explications`
          ]}
        ],
        
        choices7: [
          { outcomes: [
            `Ça c’est moi qui vais en décider`,

            `Je serais celui qui prendra la décision à ce propos`
          ]}
        ],

        choices8: [
          { outcomes: [
            `Il commence à me fouiller d’une main, prenant mon téléphone au passage. Après s’être aperçu que je disais vrai, il me fait avancer au centre de la pièce`,

            `Tout en gardant le couteau dirigé vers moi, il me fouille méticuleusement, saisissant mon téléphone en passant. Une fois convaincu de la véracité de mes paroles, il me dirige vers le milieu de la pièce`
          ]}
        ],

        choices9: [
          { outcomes: [
            `Alors comme ça on vient chercher des réponses hein ? Pourquoi donc ?`,

            `Donc tu veux des explications. Et pourquoi je t'en donnerais ?`
          ]}
        ],

        choices10: [
          { outcomes: [
            `Je peux plus vivre avec ces sacs de vis, c’est plus possible. Ils m’ont même volé mon taff ! Ils ont ruiné ma vie par deux fois, alors c’est à mon tour de le faire. Mais je veux savoir comment`,

            `C'est devenu impossible de vivre avec ces boites de ferraille, je vais exploser. Même mon boulot, je l'ai plus à cause d'eux ! Ils ont complètement détruit ma vie à deux reprises, alors c'est l'heure de la vengeance. Je cherche juste à savoir comment m'y prendre`
          ]}
        ],

        choices11: [
          { outcomes: [
            `Et qu’est-ce qui me dit que t’es pas un espion ?`,

            `Qui me dit qu'on t'a pas envoyé ici pour t'infiltrer ?`
          ]}
        ],

        choices12: [
          { outcomes: [
            `Je veux juste en finir avec ces saloperies. Regarde-moi, j’ai l’air d’un espion ? Je veux simplement en finir avec eux`,

            `Je veux juste mettre un terme à mes problèmes. Est-ce que j'ai la carrure d'un agent secret ? Tout ce que je veux, c'est en finir avec eux`
          ]}
        ],

        choices13: [
          { outcomes: [
            `Hmm... Et pourquoi je devrais t’aider ?`,

            `Oui et ? Qu'est-ce qui m'oblige à t'aider ?`
          ]}
        ],

        choices14: [
          { outcomes: [
            `Est-ce que tu peux m’aider surtout ? Parce que pour l’instant tu fais le mystérieux mais je sais toujours pas ce que c’est “AntiMaton”`,

            `Est-ce que t'en as les capacités déjà ? Tu sembles être un peu trop énigmatique pour le moment, et j'ai toujours rien appris, même pas ce que veut dire "AutoMaton"`
          ]}
        ],

        choices15: [
          { outcomes: [
            `J’te répondrais quand je serais sûr que tu seras clean`,
          ]}
        ],

        choices16: [
          { outcomes: [
            `En regardant autour de moi pendant qu’il parlait, j’ai pu apercevoir un bout de verre par terre, assez gros pour être un moyen d’obtenir les réponses que je suis venu chercher`,

            `En observant mon environnement pendant qu'il s'exprimait, j'ai repéré un morceau de verre au sol, suffisamment imposant pour être utilisé comme menace afin d'obtenir les informations que je suis venu rechercher`
          ]}
        ],

        choices17: [
          { outcomes: [
            `D’un coup, je me jette vers le bout de verre, l’empoigne et pointe mon arme de substitution sur le type encapuchonné`,

            `Soudain, je me précipite vers le morceau de verre, le saisis fermement, puis dirige mon substitut d'arme en direction du passeur`
          ]}
        ],

        choices18: [
          { outcomes: [
            `Tu vas me donner les réponses que je suis venu chercher maintenant !`,

            `Ça suffit maintenant, tu vas répondre gentiment à mes questions !`
          ]}
        ],

        choices19: [
          { outcomes: [
            `Ah finalement j’avais raison, t’es bien une pourriture de taupe !`,

            `T'es bien une saloperie d'agent double, mon intuition était bonne !`
          ]}
        ],

        choices20: [
          { outcomes: [
            `Non, je veux juste savoir si y a un moyen d’en finir avec eux !`,

            `Je suis juste venu pour mettre un terme à tout ça ! Je veux juste une solution !`
          ]}
        ],

        choices21: [
          { outcomes: [
            `Le type s’avance rapidement, couteau à la main. Je me jette sur lui en balançant mon arme de gauche à droite, mais il est plus agile que prévu. Il esquive sur le côté et m’enfonce sa lame dans le flanc gauche. La douleur me fait tressauter et je me libère brièvement, avant qu’il ne me saute dessus et me plante le couteau en plein dans le torse. Il retire son couteau après quelques secondes, me laissant pour mort et courant hors de la maison`,

            `L'individu avance rapidement, tenant un couteau. Je tente de le neutraliser en brandissant mon arme, mais il fait preuve d'une agilité supérieure à mes attentes. Il esquive habilement sur le côté et enfonce sa lame à ma gauche. La douleur me fait sursauter, réussissant à me libérer momentanément, mais il se jette sur moi, plantant le couteau profondément dans ma poitrine. Après quelques instants, il retire sa lame, me laissant pour mort, et s'échappe rapidement de la maison`
          ]}
        ],

        choices22: [
          { outcomes: [
            `L’air devient vite très froid, et la douleur est insoutenable. Je sais que c’est bientôt fini, mais je ne peux pas m’empêcher de trouver un moyen de me sortir de là`,

            `La température chute rapidement, et la souffrance devient intolérable. Je suis conscient que la fin approche, cependant, je m'efforce de trouver un moyen de m'échapper de cette situation`
          ]}
        ],

        choices23: [
          { outcomes: [
            `Je remarque que pendant notre combat, mon téléphone est tombé de la poche du type. Je me traîne jusqu’à lui et compose le numéro des urgences. Quelques secondes plus tard, quelqu’un décroche, et j’arrive à articuler quelques mots, dont l’adresse du bâtiment où je perds peu à peu connaissance`,

            `Pendant le combat, j'ai aperçu que mon téléphone est tombé de la poche du gars. Péniblement, je rampe jusqu'à l'appareil et appelle le numéro d'urgence. Après quelques secondes, une personne répond, et malgré la douleur je parviens à prononcer quelques mots, incluant l'adresse du lieu où je commence à perdre connaissance`
          ]}
        ],

        choices24: [
          { outcomes: [
            `On va pas y aller par 4 chemins, ça gagnera du temps : tu vas t’asseoir sur la chaise et tu vas écouter attentivement ce que je vais dire parce que je vais pas le répéter. Qui t’a donné le mot de passe ?`,

            `Je vais être direct, ça serait plus efficace : assied-toi et prête bien attention ce que je vais dire, car j'ai pas l'intention de me répéter. Qui t'a transmis le mot de passe ?`
          ]}
        ],

        choices25: [
          { outcomes: [
            `Le mot de passe ?`,
          ]}
        ],

        choices26: [
          { outcomes: [
            `Fais pas semblant, tu l’as dit en arrivant. Tu veux tes propres réponses non ?`,

            `Arrête ton char, tu l'as mentionné dès ton arrivée. Tu cherches des réponses il paraît`
          ]}
        ],

        choices27: [
          { outcomes: [
            `Ah, ça ? Je l’ai trouvé sur un forum où les gens discutaient de leur haine envers les androïdes. Y avait l’adresse, avec la mention “Vous y trouverez vos propres réponses”, donc j’ai juste répété ça...`,

            `Tu veux dire la phrase ? Je l'ai découvert sur un forum où les membres partageaient leur ressentiment à l'égard des androïdes. L'adresse était accompagnée de la phrase "Vous y trouverez vos propres réponses", alors j'ai simplement dit la même chose...`
          ]}
        ],

        choices28: [
          { outcomes: [
            `OK, t’es peut-être juste un paumé en fait. Bien, j’vais répondre à tes questions. Tiens, ton téléphone`,

            `D'accord d'accord, en fait t'es juste un random. Bon, j'vais y répondre à tes questions. Prends ton téléphone`
          ]}
        ],

        choices29: [
          { outcomes: [
            `Alors déjà, t’es qui ?`,
          ]}
        ],

        choices30: [
          { outcomes: [
            `Qui je suis importe peu. C’est ce que je représente qui importe`,
          ]}
        ],

        choices31: [
          { outcomes: [
            `OK, alors qu’est-ce que tu représentes ?`,
          ]}
        ],

        choices32: [
          { outcomes: [
            `Un groupe. Notre groupe. Le nom, c’est ce que t’as vu sur la porte. On veut faire payer le système qui nous oblige à vivre en communauté avec ces machines, sous prétexte que la majorité sont des fainéants assistés à qui ça plaît bien d’avoir encore moins à faire`,

            `Un collectif. Notre collectif. L'appellation, c'est ce que t'as remarqué sur la porte. Notre but, c'est de contester le système qui nous contraint à vivre avec ces tas de ferraille, juste parce que la plupart sont des branleurs, et qu'ils trouvent ça pratique de se décharger de plus en plus de responsabilités`
          ]}
        ],

        choices33: [
          { outcomes: [
            `Mais c’est là que ça cloche. C’est juste une technique de plus pour baisser notre vigilance, et le jour où ils frapperont on ne sera pas de taille à les affronter. Alors on veut faire passer le message, aussi fort qu’on peut`,

            `Et c'est là que y a un problème. C'est simplement une stratégie qui veut qu'on abaisse notre garde, et quand l'attaque se produira on sera pas en mesure de faire face à l'impact. C'est pourquoi on cherche à transmettre le message le plus fort possible`
          ]}
        ],

        choices34: [
          { outcomes: [
            `D’ailleurs tu tombes bien, on va avoir besoin de main d’œuvre pour la nouvelle opération qu’on va bientôt lancer. Si tu veux agir pour la cause, suis-moi`,

            `En fait, t'arrives à point nommé. On va bientôt démarrer une nouvelle opération et on va besoin de personnes pour nous aider. Si t'es prêt à t'impliquer, viens avec moi`
          ]}
        ],

        choices35: [
          { outcomes: [
            `Sans hésitation, je décide de le suivre. J’ai pris ma décision au moment où je suis venu ici. Je vais pas repartir tant que j’aurais pas l’esprit tranquille. Je veux en finir avec ces bouts de ferrailles`,

            `Sans la moindre hésitation, j'opte pour le suivre. Ma résolution a été prise dès mon arrivée ici, et j'ai pas l'intention de partir tant que je n'aurai pas apaisé mon esprit. Je suis déterminé à mettre un terme à cet enfer`
          ]}
        ],

        choices36: [
          { outcomes: [
            `Tu t’emballes vite pour quelqu’un qui me traitait d’espion y a deux minutes. Ça me semble un peu louche ton histoire. Même si j’ai envie d’y croire, je vais pas suivre un mec qui me menaçait au couteau. Ce sera sans moi, je me casse`,

            `T'es très rapidement réjoui à l'idée que je vous rejoigne malgré le fait que tu me qualifiais d'espion y a 30 secondes. Ton monologue était super hein, mais ça me paraît un peu suspect. J'ai envie de croire ce que tu racontes, mais je vais pas suivre quelqu'un qui me menaçait avec un couteau. Je vais passer mon tour, j'me tire`
          ]}
        ],

        choices37: [
          { outcomes: [
            `Non mais ce que t’as pas compris, c’est que t’avais pas le choix. Maintenant que t’es au courant, tu viens. Sinon je vais devoir m’occuper de toi`,

            `T'as pas l'air d'avoir bien saisi la situation. T'as aucune alternative. Maintenant que t'es dans le coup, tu te joins à nous. Sinon, je vais devoir m'assurer que tu le répètes à personne`
          ]}
        ],

        choices38: [
          { outcomes: [
            `À peine a-t-il fini sa phrase qu’il commence à s’approcher de moi d’un air menaçant, couteau au poing. Je commence à courir pour sortir de la maison, mais il est plus rapide que moi et me rattrape avant que je puisse m’abriter quelque part. Il me poignarde dans le dos, et je m'effondre au sol`,

            `Il termine à peine ses menaces qu'il avance rapidement vers moi avec une expression menaçante, brandissant son couteau. Je démarre au quart de tour pour quitter la maison, mais il me surpasse en vitesse et me rattrape avant que je puisse atteindre un lieu sûr. Il me porte un coup de couteau dans le dos, et je m'écroule par terre`
          ]}
        ],

        choices39: [
          { outcomes: [
            `Pendant qu’il part en courant en me laissant pour mort, j’essaie de me retourner et de récupérer le téléphone dans ma poche. Bouger est un enfer, mais je parviens à l’atteindre et compose le numéro des urgences. Quelques secondes plus tard, quelqu’un décroche, et j’arrive à articuler quelques mots, dont l’adresse du bâtiment où je perds peu à peu connaissance`,

            `Alors qu'il s'enfuit en courant, me laissant presque pour mort, je fais de mon mieux pour me retourner et saisir le téléphone dans ma poche. Chaque mouvement est une torture, mais je réussis à l'atteindre et compose le numéro d'urgence. Quelques instants après, quelqu'un répond, et je parviens à prononcer quelques mots, incluant l'adresse du lieu où je perds progressivement conscience`
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
        outcomeText26: null,
        outcomeText27: null,
        outcomeText28: null,
        outcomeText29: null,
        outcomeText30: null,
        outcomeText31: null,
        outcomeText32: null,
        outcomeText33: null,
        outcomeText34: null,
        outcomeText35: null,
        outcomeText36: null,
        outcomeText37: null,
        outcomeText38: null,
        outcomeText39: null,
      }
    },
  
    components: { CardText, NextButton, CardDialog },
  
    created() {
        this.getImage('passeur.jpg')
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
        this.generateOutcomeText26()
        this.generateOutcomeText27()
        this.generateOutcomeText28()
        this.generateOutcomeText29()
        this.generateOutcomeText30()
        this.generateOutcomeText31()
        this.generateOutcomeText32()
        this.generateOutcomeText33()
        this.generateOutcomeText34()
        this.generateOutcomeText35()
        this.generateOutcomeText36()
        this.generateOutcomeText37()
        this.generateOutcomeText38()
        this.generateOutcomeText39()
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
      toggleContent4() {
          this.showContent4 = !this.showContent4;
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
        generateOutcomeText26() {
          const randomIndex = Math.floor(Math.random() * this.choices26.length)
          const selectedChoice = this.choices26[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText26 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText27() {
          const randomIndex = Math.floor(Math.random() * this.choices27.length)
          const selectedChoice = this.choices27[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText27 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText28() {
          const randomIndex = Math.floor(Math.random() * this.choices28.length)
          const selectedChoice = this.choices28[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText28 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText29() {
          const randomIndex = Math.floor(Math.random() * this.choices29.length)
          const selectedChoice = this.choices29[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText29 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText30() {
          const randomIndex = Math.floor(Math.random() * this.choices30.length)
          const selectedChoice = this.choices30[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText30 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText31() {
          const randomIndex = Math.floor(Math.random() * this.choices31.length)
          const selectedChoice = this.choices31[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText31 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText32() {
          const randomIndex = Math.floor(Math.random() * this.choices32.length)
          const selectedChoice = this.choices32[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText32 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText33() {
          const randomIndex = Math.floor(Math.random() * this.choices33.length)
          const selectedChoice = this.choices33[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText33 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText34() {
          const randomIndex = Math.floor(Math.random() * this.choices34.length)
          const selectedChoice = this.choices34[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText34 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText35() {
          const randomIndex = Math.floor(Math.random() * this.choices35.length)
          const selectedChoice = this.choices35[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText35 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText36() {
          const randomIndex = Math.floor(Math.random() * this.choices36.length)
          const selectedChoice = this.choices36[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText36 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText37() {
          const randomIndex = Math.floor(Math.random() * this.choices37.length)
          const selectedChoice = this.choices37[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText37 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText38() {
          const randomIndex = Math.floor(Math.random() * this.choices38.length)
          const selectedChoice = this.choices38[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText38 = selectedChoice.outcomes[randomOutcomeIndex]
        },
        generateOutcomeText39() {
          const randomIndex = Math.floor(Math.random() * this.choices39.length)
          const selectedChoice = this.choices39[randomIndex]
          const randomOutcomeIndex = Math.floor(Math.random() * selectedChoice.outcomes.length)
          this.outcomeText39 = selectedChoice.outcomes[randomOutcomeIndex]
        },
    }
  }
</script>