<template>
  <div>
    <vue-speech />
  </div>
</template>

<script>
export default {
  methods: {
    onEnd ({ lastSentence, transcription }) {
      // `lastSentence` is the last sentence before the pause
      // `transcription` is the full array of sentences
    }
  }
}
</script>