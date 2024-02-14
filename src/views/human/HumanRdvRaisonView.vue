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

            <CardText :text="conclu" />

            <NextButton class="mb-16" link="humanHome" text="Continuer" />
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
    name: `HumanRdvRaison`,
    data() {
      return {
        images: [],

        dialog1: `Monsieur, vous pouvez encore revenir sur votre décision. Les humains apportent des compétences uniques au travail. Notre capacité à établir des connexions humaines, notre adaptabilité, notre intelligence émotionnelle...`,

        dialog2: `Milan, vous ne comprenez pas. Les machines peuvent faire le travail plus efficacement, sans jamais se fatiguer. C'est une décision difficile, mais nécessaire pour rester compétitifs`,

        dialog3: `Mais patron, nous avons des besoins humains. Nous avons besoin d'argent pour vivre, pour manger, pour nous chauffer. Les machines n'ont pas ces besoins, elles ne respirent même pas !`,

        dialog4: `Milan, nous avons réfléchi à tout ça. Même si je voulais vous garder, ce n'est pas possible. La décision a été prise`,

        dialog5: `C'est inhumain! Vous vous verriez dans notre position ? Vous aimeriez perdre votre boulot à cause de machines ?`,

        dialog6: `Ce n'est pas facile pour nous non plus. Nous ne pouvons pas nous permettre de ralentir le rythme dans ce marché en évolution rapide. C'est la réalité des affaires`,

        dialog7: `Très bien. J'espère que vous savez que cette décision immorale aura des conséquences...`,

        conclu: `Comme réponse, le "patron" me tend la main, sûrement parce qu'il attend une poignée de main. Je la jette sur son bureau en le fusillant du regard, puis je me lève et sors du bureau. Encore sonné par la nouvelle et le discours sans âme du directeur, je sors lentement du bâtiment pour rentrer chez moi`,
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