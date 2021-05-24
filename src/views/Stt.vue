<template>
  <div>
    <vue-speech />
  </div>
</template>

<script>

  export default {
   name: 'speech_to_text',
   data() {
     return {
       runtimeTranscription_: "",
       transcription_: [],
       lang_: "ko"
     };
   },
   methods: {
    startSpeechToTxt() {
    // initialisation of voicereco
    
    window.SpeechRecognition =
    window.SpeechRecognition || 
    window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    recognition.lang = this.lang_;
    recognition.interimResults = true;

    // event current voice reco word
    recognition.addEventListener("result", event => {      
      var text = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
      this.runtimeTranscription_ = text;
    });
    // end of transcription
    recognition.addEventListener("end", () => {
      this.transcription_.push(this.runtimeTranscription_);
      this.runtimeTranscription_ = "";
      recognition.stop();
    });
     recognition.start();
   },

   }
  }
  </script>