<template>
  <div>
    <div class="bg-human--bg-bureau bg-cover bg-center bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-y-scroll overflow-x-hidden">
      <CardDialog :img="images[1]" alt="Milan" :dialog="dialog1"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="dialog2"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="dialog3"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="dialog4"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="dialog5"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="dialog6"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="dialog7"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="dialog8"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="dialog9"/>

      <CardDialog :img="images[0]" alt="Patron" :dialog="dialog10"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="dialog11"/>

      <CardDialog :img="images[2]" alt="Guardes" :dialog="dialog12"/>

      <CardDialog :img="images[1]" alt="Milan" :dialog="dialog13" class="font-bold text-xl text-red"/>

      <CardText :text="conclu1" />

      <CardText :text="conclu2" />

      <NextButton class="mb-16" link="humanHomeBlacklist" text="Continuer" />
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
    name: `HumanRdvMenace`,
    data() {
      return {
        images: [],

        dialog1: `Monsieur, vous avez encore la possibilité de changer votre décision avant qu'il ne soit trop tard`,

        dialog2: `Que voulez-vous dire ?`,

        dialog3: `Ce que vous envisagez est totalement immoral. Si cela se sait, l'entreprise risque de voir sa réputation ternie, surtout avec la concurrence féroce dans ce domaine`,

        dialog4: `Vous voulez dire que...`,

        dialog5: `Imaginez les conséquences. Les clients vont perdre confiance, les concurrents vont en profiter. Ce n'est pas bon pour personne`,

        dialog6: `Vous exagérez peut-être...`,

        dialog7: `Non monsieur, je ne plaisante pas. Et si vous ne changez pas d'avis, je n'hésiterai pas à prendre mon camion, faire le tour des rues et répandre la rumeur que l'entreprise remplace ses employés par des robots`,

        dialog8: `Vous ne feriez pas ça`,

        dialog9: `Oh, croyez-moi, je le ferai. Vous ne pouvez pas sacrifier la dignité des employés pour vos propres intérêts`,

        dialog10: `C'est trop loin, Milan. Vous ne pouvez pas me menacer ainsi. Sécurité !`,

        dialog11: `Licencié ou non, je mettrai mon plan à exécution`,

        dialog12: `Ça suffit, tu viens avec nous maintenant !`,

        dialog13: `Ce n'est pas fini ! Vous pouvez être sûr que vous me reverrez ! Je ne lâcherai pas si facilement ! Vous le regretterez !`,

        conclu1: `Les gardes me saississent par les bras et me lèvent de ma chaise, et je suis bien obligé de les suivre jusqu'à la porte. `,

        conclu2: `Quelques minutes après avoir été “escorté” vers la sortie, j’apprends que je suis licencié, et en bonus je suis également blacklisté des entreprises locales, et toutes les poursuites judiciaires que je risque si je venais à mettre mes menaces à exécution. Intérieurement, je bouillonne et me tâte à faire demi-tour pour lui ravaler la façade, mais au fond je sais que ce ne sera que plus d’ennuis alors j’efface le message et rentre à l’appartement`,
      }
    },
  
    components: { CardText, CardDialog, NextButton },
  
    created() {
      this.getImage('patron.jpg')
      this.getImage('milan.jpg')
      this.getImage('avatar.svg')
    },
  
    methods: {
      async getImage(t) {
        const q = query(collection(db, 'images'), where('nom', '==', t))
        const querySnap = await getDocs(q)

        querySnap.forEach((doc) => {
            this.images.push(doc.data().nom)
        })
      },   
    }
  }
</script>