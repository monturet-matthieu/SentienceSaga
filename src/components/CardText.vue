<template>
    <div class="bg-black/90 border-2 border-dark-blue rounded-2xl p-4">
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'CardText',
    props: {
        text: {
            type: String,
            required: true
        }
    },
}
</script>