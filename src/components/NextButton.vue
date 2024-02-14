<template>
    <RouterLink 
      class="font-black-ops-one text-center bg-dark-blue border-2 border-blue hover:border-white hover:scale-y-110 transition ease-in rounded-full py-1" 
      :to="link">
      {{ text }}
    </RouterLink>
</template>

<script>
export default {
    name: 'NextButton',
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
}
</script>