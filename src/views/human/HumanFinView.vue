<template>
    <div class="grid grid-cols-2 h-screen bg-human--bg-fin bg-cover bg-bottom text-white font-rationale text-base  overflow-scroll">
      <div class="flex flex-col gap-8 justify-center ml-8">
        <CardText :text="title" class="font-black-ops-one text-3xl text-center" />
        <CardText :text="description" />
        <CardText :text="description2" />
        <CardText :text="description3" />
        <NextButton link="/" text="Retour au choix des personnages" />
      </div>
  
      <div class="flex items-center my-12 mx-10">
            <form action="https://formspree.io/f/myyrwgnr" method="POST" class="flex flex-col items-center border-blue bg-black/70 border-2 rounded-3xl px-2 py-4">
                <h3 class="font-black-ops-one text-lg text-center mb-2 text-2xl">Créez un nouveau chemin / personnage !</h3>
                <p class="text-lg text-center mb-8 text-base text-red">!! Un formulaire par chemin/personnage !!</p>
                <div class="font-karla space-y-8 text-white">
                    <div class="flex flex-col space-y-8 w-[450px]">
                        <input class="outline-none border-2 border-blue focus:border-4 focus:border-yellow px-5 rounded-2xl placeholder:text-gray placeholder:italic pl-4 py-3 placeholder:text-base" type="text" name="name" placeholder="Nom/Pseudo" required />
                        <input class="outline-none border-2 border-blue focus:border-4 focus:border-yellow px-5 rounded-2xl placeholder:text-gray placeholder:italic pl-4 py-3 placeholder:text-base" type="email" name="email" placeholder="Adresse mail" required />
                        <div class="flex flex-col gap-2">
                          <label class="text-base text-center" for="emplacement">Renseignez ici l'endroit à partir duquel votre chemin dévie de l'histoire actuelle</label>
                          <input class="outline-none border-2 border-blue focus:border-4 focus:border-yellow px-5 rounded-2xl placeholder:text-gray placeholder:italic pl-4 py-3 placeholder:text-base" type="text" name="emplacement" placeholder="Ex: Accueil (nouveau perso), à l'appartement, au bar..." required />
                        </div>
                    </div>
                    <div class="flex flex-col space-y-8 items-center">
                        <textarea rows=4 class="outline-none border-2 border-blue focus:border-4 focus:border-yellow px-8 py-3 rounded-2xl placeholder:text-gray placeholder:italic resize-none w-[100%] pl-4 placeholder:text-base placeholder:text-center" name="description" placeholder="Décrivez votre suggestion" required></textarea>
                        <button class="font-black-ops-one bg-blue text-lg text-center border-2 border-dark-blue hover:border-white hover:scale-y-110 transition ease-in rounded-2xl text-xl py-2 px-12" type="submit">Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
  import db from '@/firebase/init.js'
  import { where, query, collection, getDocs } from 'firebase/firestore'
  import CardText from '@/components/CardText.vue'
import NextButton from '@/components/NextButton.vue'
  
  export default {
    name: 'HumanFin',
  
    data() {
      return {
        title: `Vous avez atteint l'une des fins !`,
        description: `Vous avez suivi un des chemins qui conduit à une des différentes fins (bonnes ou mauvaises) de l'histoire de Milan. Ce site étant encore en développement, certains chemins sont plus développés que d'autres donc ne vous étonnez pas si votre histoire a pu paraître courte, c'est normal !`,
        description2: `Si vous avez apprécié cette expérience et que vous en voulez plus, vous pouvez renseigner le formulaire afin de soumettre une requête d'un chemin complètement différent peu importe le moment, ou même créer un nouveau personnage !`,
        description3: `Enfin, si vous souhaitez redécouvrir l'histoire mais en prenant d'autres décisions, vous pouvez revenir à la page d'accueil en cliquant sur ce bouton`,
      }
    },
    components: { CardText, NextButton },
  
    methods: {
      async getImage(t) {
        const q = query(collection(db, 'images'), where('nom', '==', t))
        const querySnap = await getDocs(q)
  
        querySnap.forEach((doc) => {
          this.images.push(doc.data().nom)
        })
      }
    },
  }
  </script>
  