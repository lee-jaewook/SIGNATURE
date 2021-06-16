<template>
  <v-layout row wrap>
    <v-flex xs4>
    </v-flex>
    <v-flex xs4 class="text-xs-center">
    <v-select v-show="btn" v-bind:items="items" v-model="selected" label="Select a language"></v-select>
      <v-btn v-show="btn"  @click.native="startRecording" block round color="primary" dark>
        <v-icon left>mic</v-icon> Recording</v-btn>
      <v-btn v-show="btnStop" @click.native="stopRecording" block round color="error" dark>
        <v-icon left>stop</v-icon> Stop</v-btn>
      </br>
    </v-flex>
    <v-flex xs4>
    </v-flex>
    <v-flex xs12>
      <transition name="slide">
        <div v-show="result">
  
          <v-layout row wrap>
            <v-flex xs3>
            </v-flex>
            <v-flex xs6>
              <v-card class="blue-grey darken-2 white--text">
                    <v-card-title primary-title>
                <div class="headline"></div>
                <div>{{textResult}}</div>
              </v-card-title>

                <h6></h6> 
              </v-card>
            </v-flex>
            <v-flex xs3>
            </v-flex>
          </v-layout>
            </div>
      </transition>
      <transition name="slide">
        <div v-show="resultError" class="text-xs-center">
  
          <v-layout row wrap>
            <v-flex xs3>
            </v-flex>
            <v-flex xs6>
              <v-card class="red darken-3 white--text">
                <v-card-title primary-title>
                  <div class="headline">Reached transcription time limit</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn @click.native="redirectError" flat dark>Try Again</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs3>
            </v-flex>
          </v-layout>
        </div>
      </transition>
  
    </v-flex>
  </v-layout>
</template>

<script>
  var audioContext = new(window.AudioContext || window.webkitAudioContext)();
  var socket = io.connect('http://localhost:3555');
  var ssStream = ss.createStream();
  var scriptNode;
  
  export default {
    data() {
      return {
        btn: true,
        btnStop: false,
        result: false,
        resultError: false,
        textResult: "",
        selected: 'en-US',
        items: [
          {
            text: '한국어 (대한민국)',
            value: 'ko-KR'
          }
        ]
      }
    },
    methods: {
      successCallback(stream) {
        const vm = this;
        console.log('successCallback:....IN');
        var input = audioContext.createMediaStreamSource(stream);
        var bufferSize = 2048;
        scriptNode = audioContext.createScriptProcessor(bufferSize, 1, 1);
        scriptNode.onaudioprocess = scriptNodeProcess;
        input.connect(scriptNode);
  
        // console.log('ScriptNode BufferSize:', scriptNode.bufferSize);
        function scriptNodeProcess(audioProcessingEvent) {
        var inputBuffer = audioProcessingEvent.inputBuffer;
        var outputBuffer = audioProcessingEvent.outputBuffer;
        var inputData = inputBuffer.getChannelData(0);
        var outputData = outputBuffer.getChannelData(0);
  
  
        // Loop through the 4096 samples
        for (var sample = 0; sample < inputBuffer.length; sample++) {
          outputData[sample] = inputData[sample];
        }
        ssStream.write(new ss.Buffer(vm.downsampleBuffer(inputData, 44100, 16000)));
      }
      },
      downsampleBuffer(buffer, sampleRate, outSampleRate) {
        if (outSampleRate == sampleRate) {
          return buffer;
        }
        if (outSampleRate > sampleRate) {
          throw "downsampling rate show be smaller than original sample rate";
        }
        var sampleRateRatio = sampleRate / outSampleRate;
        var newLength = Math.round(buffer.length / sampleRateRatio);
        var result = new Int16Array(newLength);
        var offsetResult = 0;
        var offsetBuffer = 0;
        while (offsetResult < result.length) {
          var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
          var accum = 0,
            count = 0;
          for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
            accum += buffer[i];
            count++;
          }
  
          result[offsetResult] = Math.min(1, accum / count) * 0x7FFF;
          offsetResult++;
          offsetBuffer = nextOffsetBuffer;
        }
        return result.buffer;
      },
      startRecording() {
        const languageSelected = this.selected;
        socket.emit('LANGUAGE_SPEECH', languageSelected);
        this.result = true;
        this.btn = false;
        this.btnStop = true;
        scriptNode.connect(audioContext.destination);
        ss(socket).emit('START_SPEECH', ssStream);
        setInterval(function() {
          this.stopRecording();
        }.bind(this), 55000);
      },
      stopRecording() {
        this.btnStop = false;
        this.btn = true;
        scriptNode.disconnect(audioContext.destination);
        // ssStream.end();
        socket.emit('STOP_SPEECH', {});
      },
      errorCallback(error) {
        console.log('errorCallback:', error);
      },
      redirectError(){
          window.location.href = "http://localhost:8080/"
      }
    },
    created() {
      const that = this;
      socket.on('SPEECH_RESULTS', function(text) {
        if('Reached_transcription_time_limit' == text){
            that.resultError = true;
        }else{
              that.textResult += text;
        }
      })
        if (navigator.mediaDevices.getUserMedia) {
          console.log('getUserMedia supported...');
          navigator.webkitGetUserMedia({ audio: true }, function(stream) {
            that.successCallback(stream)
          }, function(error) {
            that.errorCallback(error)
          });
        } else {
          console.log('getUserMedia not supported on your browser!');
        }
      }
    }
</script>


<style>
  .slide-enter {
    opacity: 0;
  }
  
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  
  .slide-move {
    transition: transform 1s;
  }
  
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
