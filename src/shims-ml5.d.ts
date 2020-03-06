import { MediaElement } from 'p5'
export default interface ml5 {
  imageClassifier(
    model: 'MobileNet' | 'Darknet' | 'Darknet-tiny' | string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  imageClassifier(
    model: 'MobileNet' | 'Darknet' | 'Darknet-tiny' | string,
    options?: ImageClassifierOptions,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  imageClassifier(
    model: 'MobileNet' | 'Darknet' | 'Darknet-tiny' | string,
    video?: MediaElement | HTMLVideoElement,
    options?: ImageClassifierOptions,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  poseNet(
    video?: MediaElement | HTMLVideoElement,
    type?: 'single' | 'multiple',
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  poseNet(
    video?: MediaElement | HTMLVideoElement,
    options?: PoseNetOptions,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  poseNet(
    callback?: (error: any, result: any) => void,
    options?: PoseNetOptions
  ): undefined | Promise<any>

  bodyPix(
    video?: MediaElement | HTMLVideoElement,
    type?: 'single' | 'multiple',
    callback?: (error: any, result: any) => void,
    options?: any
  ): undefined | Promise<any>

  uNet(
    model: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  styleTransfer(
    model: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  styleTransfer(
    model: string,
    video?: MediaElement | HTMLVideoElement,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  pix2pix(
    model: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  CVAE(
    model: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  DCGAN(
    modelPath: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  SketchRNN(
    model: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  YOLO(
    video?: MediaElement | HTMLVideoElement,
    options?: YoloOptions,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  YOLO(
    options?: YoloOptions,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  soundClassifier(
    model: string,
    options?: { probabilityThreshold: number },
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  pitchDetection(
    model: 'CREPE',
    audioContext: AudioContext,
    stream: MediaStream,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  charRNN(
    model: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  sentiment(
    model: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  word2vec(
    model: string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>

  SketchRNN(
    model: SketchRnnModel | string,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>
}

type PoseNetOptions = {
  detectionType: 'single' | 'multiple'
  flipHorizontal: boolean
  imageScaleFactor: number
  maxPoseDetections: number
  minConfidence: number
  multiplier: number
  nmsRadius: number
  outputStride: number
  scoreThreshold: number
}

type ImageClassifierOptions = {
  alpha: number
  topk: number
  version: number
}

type YoloOptions = {
  classProbThreshold: number
  filterBoxesThreshold: number
  IOUThreshold: number
}

type SketchRnnModel =
  | 'alarm_clock'
  | 'ambulance'
  | 'angel'
  | 'ant'
  | 'antyoga'
  | 'backpack'
  | 'barn'
  | 'basket'
  | 'bear'
  | 'bee'
  | 'beeflower'
  | 'bicycle'
  | 'bird'
  | 'book'
  | 'brain'
  | 'bridge'
  | 'bulldozer'
  | 'bus'
  | 'butterfly'
  | 'cactus'
  | 'calendar'
  | 'castle'
  | 'cat'
  | 'catbus'
  | 'catpig'
  | 'chair'
  | 'couch'
  | 'crab'
  | 'crabchair'
  | 'crabrabbitfacepig'
  | 'cruise_ship'
  | 'diving_board'
  | 'dog'
  | 'dogbunny'
  | 'dolphin'
  | 'duck'
  | 'elephant'
  | 'elephantpig'
  | 'eye'
  | 'face'
  | 'fan'
  | 'fire_hydrant'
  | 'firetruck'
  | 'flamingo'
  | 'flower'
  | 'floweryoga'
  | 'frog'
  | 'frogsofa'
  | 'garden'
  | 'hand'
  | 'hedgeberry'
  | 'hedgehog'
  | 'helicopter'
  | 'kangaroo'
  | 'key'
  | 'lantern'
  | 'lighthouse'
  | 'lion'
  | 'lionsheep'
  | 'lobster'
  | 'map'
  | 'mermaid'
  | 'monapassport'
  | 'monkey'
  | 'mosquito'
  | 'octopus'
  | 'owl'
  | 'paintbrush'
  | 'palm_tree'
  | 'parrot'
  | 'passport'
  | 'peas'
  | 'penguin'
  | 'pig'
  | 'pigsheep'
  | 'pineapple'
  | 'pool'
  | 'postcard'
  | 'power_outlet'
  | 'rabbit'
  | 'rabbitturtle'
  | 'radio'
  | 'radioface'
  | 'rain'
  | 'rhinoceros'
  | 'rifle'
  | 'roller_coaster'
  | 'sandwich'
  | 'scorpion'
  | 'sea_turtle'
  | 'sheep'
  | 'skull'
  | 'snail'
  | 'snowflake'
  | 'speedboat'
  | 'spider'
  | 'squirrel'
  | 'steak'
  | 'stove'
  | 'strawberry'
  | 'swan'
  | 'swing_set'
  | 'the_mona_lisa'
  | 'tiger'
  | 'toothbrush'
  | 'toothpaste'
  | 'tractor'
  | 'trombone'
  | 'truck'
  | 'whale'
  | 'windmill'
  | 'yoga'
  | 'yogabicycle'
  | 'everything'
