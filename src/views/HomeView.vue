<template>
  <div class="grid grid-cols-2 h-screen text-white bg-black font-rationale text-base">
    <div class="grid grid-cols-2 justify-center bg-hero-bg bg-cover">
        <img
          class="h-screen w-fit mix-blend-lighten"
          :src="images[0]"
          alt="hero image android"
        />
        <img
          class="h-screen w-fit mix-blend-hard-light"
          :src="images[1]"
          alt="hero image human"
        />
    </div>

    <div class="bg-hero-bg2 bg-cover py-24 px-12 overflow-y-scroll overflow-x-hidden">
      <div class="flex flex-col justify-center">
        <h1 class="text-4xl text-center font-black-ops-one my-8">{{ title }}</h1>
        <div class="flex flex-col gap-6">
          <p>{{ description }}</p>
          <p>{{ description2 }}</p>
        </div>
      </div>

      <p class="text-center text-2xl font-bold mt-8">Choisissez l'histoire à découvrir</p>
      <ChoiceButton class="flex gap-8" :choices="choices" />
    </div>
  </div>
</template>

<script>
import db from '../firebase/init.js'
import { where, query, collection, getDocs } from 'firebase/firestore'

import ChoiceButton from '@/components/ChoiceButton.vue'

export default {
  name: 'SentienceSaga',
  created() {
    this.getImage('android.png')
    this.getImage('human.png')
  },

  data() {
    return {
      images: [],
      title: 'Sentience Saga',
      description: `Vous n'allez pas simplement visiter un site. Vous allez vivre une expérience riche et intense dont VOUS serez le héros`,
      description2: `Ces histoires mettent en scène 2 personnages diamétralement opposés. C'est à votre tour de choisir quels destins attendent nos héros`,
      choices: [
        { text: `Incarner l'humain`, outcome: { result: 'humanIntro' } },
        { text: `Incarner l'androïde (WIP)`, outcome: { result: '' } }
      ]
    }
  },
  components: { ChoiceButton },

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
