<template>
    <vue-web-speech
        v-model="record"
        @results="onResults"
    />
    <vue-web-speech-synth
        v-model="play"
    />
</template>

<script>
export default {

}
</script>