<template>
    <div>
        <div class="bg-human--bg-bureau bg-cover bg-center bg-black text-white font-rationale text-base px-56 h-screen flex flex-col gap-8 pt-6 overflow-scroll">
            <CardText :text="intro" />

            <CardText :text="intro2" />

            <CardDialog :img="images[0]" alt="Patron" :dialog="dialog1"/>

            <CardDialog :img="images[1]" alt="Milan" :dialog="dialog2"/>

            <CardDialog :img="images[0]" alt="Patron" :dialog="dialog3"/>

            <CardDialog :img="images[1]" alt="Milan" :dialog="dialog4"/>

            <CardDialog :img="images[0]" alt="Patron" :dialog="dialog5"/>

            <CardDialog :img="images[1]" alt="Milan" :dialog="dialog6"/>

            <CardText :text="conclu" />

            <NextButton class="mb-16" link="humanHome" text="Continuer"/>
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
    name: `HumanRdvCalme`,
    data() {
      return {
        images: [],

        intro: `Une tonne de pensées me passent par la tête. Pourquoi ? Comment ? Qu’est-ce que j’ai fait pour mériter ça ? Est-ce que je peux le faire changer d’avis ? Je dois le faire, par n’importe quel moyen. Mais et si ça se retournait contre moi ?...`,

        intro2: `Quelques instants plus tard, je reprends mes esprits et la réalité me frappe d'un coup. Mon sang ne fait qu'un tour, et je distingue la fin du discours si engagé de mon "patron"`,

        dialog1: `Milan, j'espère que vous comprenez la nécessité de ces changements. Bien qu'ils me déplaisent à moi aussi, nous en sommes réduit à cette extrémité`,

        dialog2: `Vous débitez des absurdités`,

        dialog3: `Qu'est-ce qui vous prend ?`,

        dialog4: `Vos justifications ne changent rien. C'est une décision absurde qui mènera l'entreprise à sa perte.`,

        dialog5: `Calmez-vous Milan, je sais que ce n'est pas facile à digérer mais ne réagissez pas comme ça voyons !`,

        dialog6: ` Ça se voit que c'est pas vous qui perdez votre boulot`,

        dialog7: `Attendez, nous allons trouver une solution ensemble...`,

        dialog8: `Il est trop tard. Vos choix ont scellé le destin de l'entreprise, et je n'ai aucune envie de couler avec le navire`,

        conclu: `Sans lui laisser le temps de répondre, je claque la porte et m'en vais vers la sortie d'un pas rapide. Cet abruti m'a sapé toute mon énergie, autant rentrer chez moi directement pour me changer les idées`,
      }
    },
  
    components: { CardText, CardDialog, NextButton },
  
    created() {
      this.getImage('patron.jpg')
      this.getImage('milan.jpg')
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