<template>
    <div class="bg-black bg-opacity-90 border-2 border-dark-blue rounded-2xl p-4 grid grid-cols-8 items-center">
        <img class="col-span-1 w-20 h-20 rounded-lg border-2 border-gray" :src="img" :alt="alt">
        <p class="col-span-7">{{ dialog }}</p>
    </div>
</template>

<script>
export default {
    name: 'CardDialog',
    props: {
        dialog: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        alt: String
    },
}
</script>