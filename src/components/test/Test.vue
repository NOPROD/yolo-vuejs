<template>
  <div class="test_component">
    <div class="wrap_classifier">
      <div class="model_alert" v-if="modelReady">Model is ready</div>
      <div class="col">
        <div class="layout_classifier_picture">
          <img
            class="classifier_first_picture"
            id="classifier_first_picture"
            v-if="imgs.firstPicture.picture"
            :src="imgs.firstPicture.picture"
          />
        </div>
        <div class="layout_classifier_input">
          <md-field>
            <label>Only images</label>
            <md-file
              @md-change="fileChange"
              v-model="imgs.firstPicture.file"
              accept="image/*"
            />
          </md-field>
        </div>
        <div class="layout_classifier_content"></div>
        <div class="col" v-if="classifierResult">
          <div class="layout_classifier_picture">
            <img v-if="imgs.secondPicture" :src="imgs.secondPicture" />
          </div>
          <div class="layout_classifier_input"></div>
          <div class="layout_classifier_content"></div>
        </div>
      </div>
      <div class="layout_classifier_actions">
        <md-button @click="reload">Reload data</md-button>
        <md-button @click="classify">Class</md-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Test from '@/components/test/Test.vue'
import Vue from 'vue'
import Component from 'vue-class-component'
import { ml5S } from '@/services'
@Component({})
export default class TestComponent extends Vue {
  public classifierResult: boolean = false
  private classifier: any = null
  public modelReady: boolean = false
  public imgs: {
    firstPicture: { file: any; picture: any }
    secondPicture: any
  } = {
    firstPicture: { file: null, picture: null },
    secondPicture: { file: null, picture: null }
  }
  public showFirstPict: boolean = false
  public image: FileList = null
  private fileReader: FileReader = null
  mounted() {
    this.initClassifier('MobileNet')
    this.fileReader = new FileReader()
  }

  public initClassifier(model: string) {
    ml5S.initImageClassifier(model, this.modalReady).subscribe(this.modalReady)
  }

  public modalReady(classifier) {
    this.setClassifier(classifier)
  }

  public setClassifier(classifier) {
    console.log(classifier)
    this.classifier = classifier
  }

  public classify() {
    this.classifier.classify(
      document.getElementById('classifier_first_picture'),
      (err, results) => {
        if (results) console.log(results)
        if (err) console.log(err)
      }
    )
  }

  public fileChange(file: any) {
    this.image = file
    this.createLocalUrl()
  }

  public reload() {
    this.imgs = {
      firstPicture: { file: null, picture: null },
      secondPicture: { file: null, picture: null }
    }
  }

  private createLocalUrl() {
    this.fileReader.onload = this.showFirstPicts
    this.fileReader.readAsDataURL(this.image[0])
    console.log(this.imgs)
  }

  private showFirstPicts(e) {
    this.imgs.firstPicture.picture = e.target.result
  }
}
</script>

<style scoped lang="scss">
.home {
  flex-grow: 1;
}
.classifier_first_picture {
  width: 400px;
}
</style>
