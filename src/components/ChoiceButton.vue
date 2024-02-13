<template>
    <div v-if="choices.length > 0" class="mt-8 flex justify-around">
        <ul 
        v-for="(choice, index) in choices"
        :key="index" 
        class="font-black-ops-one text-xl flex gap-12 justify-center mt-6">
          <RouterLink :to="{ path: `/${choice.outcome.result.toLowerCase()}` }">
            <li
            class="border-4 border-dark-blue text-center bg-light-blue text-black px-4 py-2 hover:-skew-x-12 hover:border-red transition-transform ease-in-out"
            >
              {{ choice.text }}
            </li>
          </RouterLink>
        </ul>
      </div>
</template>

<script>
export default {
    name: 'ChoiceButton',
    props: {
        choices: {
            type: Array,
            required: true
        }
    }
}
</script>