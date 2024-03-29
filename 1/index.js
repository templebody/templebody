const main = document.querySelector('#main')
const mobile = document.querySelector('#mobile')

const isMobile = (() => {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
})()

if (isMobile) {
  main.classList.add('unmounted')
} else {
  mobile.classList.add('unmounted')
}

const playAudioOnEvent = (eventName) => (target, audioSrc, volume) => {
  const audios = audioSrc.map(src => new Audio(src))
  let idx = 0

  target.addEventListener(eventName, () => {
    const audio = audios[idx++ % audios.length]
    audio.volume = volume
    playAudio(audio)
  })
}

const playAudioOnClick = playAudioOnEvent('click')
const playAudioOnHover = playAudioOnEvent('mouseover')

const volume = {
  PLATE_BREAK: 1,
  COUNTRY_CHANGE: 0.7,
  SOUND_ON: 0.8,
  BOOK_OPEN: 0.6,
  BOOK_CLOSE: 0.5,
  TIGER: 0.9,
  NATIVE_TALKING: 0.8,
  BOOMERANG: 1,
  ULRURU: 0.5,
  ULRURU: 0.5,
  KANGAROO: 1,
  SEAGULL: 1,
  SEA: 1,
  SEAGULL: 1,
  SEAGULL_FOO: 1,
  CASTAWAY_TALKING: 1,
  SHARK: 0.6,
  STATUE_SING: 1.0,
  STAR: 0.5,
  EAGLE: 0.4,
  PERU_MOUNTAIN: 1,
  ALPHACA: 0.8,
  GIRAFFE: 0.6,
  FIREWORKS: 1,
  ZEBRA: 0.8,
  ELEPHANT: 0.9,
  WINDOW_OPEN: 1,
  WINDOW_CLOSE: 0.8,
  SWAN: 1,
}

const book = document.querySelector('#book')
const bookOpenedDimmer = document.querySelector('#book_opened_dimmer')

if (isMobile) {
  document.querySelector('#mobile #character img').src = './assets/mobile/character.png'
  document.querySelector('#mobile #hand img').src = './assets/mobile/hand.png'
} else {
  document.querySelector('#book_opened img').src = './assets/home/book-opened.png'
  document.querySelector('#hand img').src = './assets/0_common/hand.png'
  document.querySelector('#main #character img').src = './assets/0_common/character.png'
  document.querySelector('#right_arrow img').src = './assets/0_common/arrow2.png'
  document.querySelector('#monitor img').src = './assets/0_common/monitor.png'

  document.querySelector('#home #title img').src = './assets/home/title.png'
  document.querySelector('#home #book img').src = './assets/home/book.png'
  document.querySelector('#home #sound_on img').src = './assets/home/sound-on.png'
  document.querySelector('#home #sound_off img').src = './assets/home/sound-off.png'
  document.querySelector('#home #teacher1 img').src = './assets/home/teacher1.png'
  document.querySelector('#home #teacher2 img').src = './assets/home/teacher2.png'
  document.querySelector('#home #ground img').src = './assets/home/ground.png'

  playAudioOnClick(book, ['./assets/sounds/1_home/스타트_책_펼침.m4a'], volume.BOOK_OPEN)
  playAudioOnClick(bookOpenedDimmer, ['./assets/sounds/1_home/스타트_책_덮음.m4a'], volume.BOOK_CLOSE)

  document.querySelector('#korea #sun img').src = './assets/1_korea/1_korea_sun.png'
  document.querySelector('#korea #mountain1 img').src = './assets/1_korea/1_korea_mountain.png'
  document.querySelector('#korea #mountain2 img').src = './assets/1_korea/1_korea_mountain2.png'
  document.querySelector('#korea #tiger img').src = './assets/1_korea/1_korea_tiger.png'
  document.querySelector('#korea #tiger_cry img').src = './assets/1_korea/tiger_cry.png'
  document.querySelector('#korea #tower img').src = './assets/1_korea/1_korea_tower.png'
  document.querySelector('#korea #landmark img').src = './assets/1_korea/1_korea_landmark.png'
  document.querySelector('#korea #plant2 img').src = './assets/1_korea/1_korea_plant2.png'
  document.querySelector('#korea #ground img').src = './assets/1_korea/1_korea_ground.png'
  document.querySelector('#korea #plant1 img').src = './assets/1_korea/1_korea_plant1.png'

  document.querySelector('#korea_mascot img').src = './assets/1_korea/1_korea_mascot.png'
}

const GLOBE_IMAGE_URL = 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
const BUMP_IMAGE_URL = 'https://unpkg.com/three-globe/example/img/earth-topology.png'
const GLOBE_WIDTH = 470
const GLOBE_HEIGHT = 470
const GLOBE_ALTITUDE = 1.5
const GLOBE_INITAIL_TRANSITION = 2500
const GLOBE_MOVE_TRANSITION = 800
const GLOBE_LABEL_SIZE = 3.5
const GLOBEL_LABEL_DOT_RADIUS = 0.5
const GLOBE_BACKGROUND_COLOR = 'white'
const GLOBE_LABEL_COLOR = 'white'

const HOME_IDX = 0
const KOREA_IDX = 1
const AUSTRALIA_IDX = 2
const OCEAN_IDX = 3
const AMERICA_IDX = 4
const PERU_IDX = 5
const TANZANIA_IDX = 6
const DENMARK_IDX = 7

const UNMOUNTED = 'unmounted'
const MASCOT_SHOWING = 'mascot_showing'
const MASCOT_HIDING = 'mascot_hiding'
const ALPHACA_SHOWING = 'alphaca_showing'
const ALPHACA_HIDING = 'alphaca_hiding'

const FRAME_IN_DURATION = 700
const PLATE_BREAK_TIMEOUT = 125
const MASCOT_HIDING_DURATION = 400

let isMuted = false

const countries = [
  {
    id: 'home',
    /** used for Globe.gl iteration */
    name: '',
  },
  {
    id: 'korea',
    name: 'Korea',
    capital: 'Seoul',
    language: 'Korean',
    population: '51,844,834',
    area: '100,363km²',
    gdp: '$2.735 trillion',
    lat: 37.566536,
    lng: 126.977966,
  },
  {
    id: 'australia',
    name: 'Australia',
    capital: 'Canberra',
    language: 'English',
    population: '26,040,100',
    area: '7,692,0243km²',
    gdp: '$1.615 trillion',
    lat: -25.344427,
    lng: 131.036880,
  },
  {
    id: 'ocean',
    name: 'Pacific Ocean',
    capital: '-',
    language: '-',
    population: '-',
    area: '165,250,0003km²',
    gdp: '-',
    lat: -8.783195,
    lng: -124.508522,
  },
  {
    id: 'america',
    name: 'USA',
    capital: 'Washington, D.C.',
    language: 'English',
    population: '333,287,557',
    area: '9,833,5203km²',
    gdp: '$25.035 trillion',
    lat: 43.879105,
    lng: -103.459068,
  },
  {
    id: 'peru',
    name: 'Peru',
    capital: 'Lima',
    language: 'Spanish',
    population: '34,352,719',
    area: '1,285,2163km²',
    gdp: '$513.715 billion',
    lat: -13.867871,
    lng: -71.303055,
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    capital: 'Dodoma',
    language: 'Swahili',
    population: '61,741,120',
    area: '947,3033km²',
    gdp: '$207.5 billion',
    lat: -6.5247123,
    lng: 35.7878438,
  },
  {
    id: 'denmark',
    name: 'Denmark',
    capital: 'Copenhagen',
    language: 'Danish',
    population: '5,928,364',
    area: '42,9433km²',
    gdp: '$411.0 billion',
    lat: 55.6867243,
    lng: 12.5700724,
  },
]

const globeIframeDocument = document.querySelector('iframe#globe').contentDocument
const globeTargetElement = document.createElement('div')
let globe

const appendGlobeTarget = () => {
  globeIframeDocument.body.appendChild(globeTargetElement)
}

const appendIframeCSS = () => {
  const iframeCSS = document.createElement("link")
  iframeCSS.href = './iframe.css'
  iframeCSS.rel = 'stylesheet'
  iframeCSS.type = 'text/css'

  globeIframeDocument.head.appendChild(iframeCSS)
}

const addIframeClass = () => {
  globeIframeDocument.body.classList.add('blue_cursor')
}

const getGlobeLabelElement = () => {
  const img = document.createElement('img')
  img.src = "./assets/0_common/mark.png"
  img.style.width = '15px'

  return img
}

const initGlobe = () => {
  if (isMobile) { return }

  globe = window.Globe()(globeTargetElement)
    .globeImageUrl(GLOBE_IMAGE_URL)
    .bumpImageUrl(BUMP_IMAGE_URL)
    .width(GLOBE_WIDTH)
    .height(GLOBE_HEIGHT)
    .backgroundColor(GLOBE_BACKGROUND_COLOR)
    .labelsData(countries)
    .labelText(({ name }) => name)
    .labelLat(({ lat }) => lat)
    .labelLng(({ lng }) => lng)
    .labelSize(GLOBE_LABEL_SIZE)
    .labelDotRadius(GLOBEL_LABEL_DOT_RADIUS)
    .labelColor(() => GLOBE_LABEL_COLOR)
    .htmlElementsData(countries)
    .htmlElement(getGlobeLabelElement)
    .pointOfView({ 
      lat: countries[1].lat,
      lng: countries[1].lng,
      altitude: GLOBE_ALTITUDE
    }, GLOBE_INITAIL_TRANSITION)
}

appendGlobeTarget()
appendIframeCSS()
addIframeClass()
initGlobe()

let curCountryIdx = 0
let allImagesLoaded = false

const arrow = document.querySelector('#right_arrow')

const getNextCountryIdx = (curCountryIdx) => {
  if (curCountryIdx === DENMARK_IDX) {
    allImagesLoaded = true
    return KOREA_IDX
  }

  return curCountryIdx + 1
}

const handleLoadImage = () => {
  if (allImagesLoaded) { return }

  if (curCountryIdx === HOME_IDX) {
    document.querySelector('#australia #sun img').src = './assets/2_australia/sun.png'
    document.querySelector('#australia #native img').src = './assets/2_australia/native.png'
    document.querySelector('#australia #native_lips img').src = './assets/2_australia/native_lips.png'
    document.querySelector('#australia #native_hand img').src = './assets/2_australia/native_hand.png'
    document.querySelector('#australia #landmark img').src = './assets/2_australia/landmark.png'
    document.querySelector('#australia #kangaroo img').src = './assets/2_australia/kangaroo.png'
    document.querySelector('#australia #ground img').src = './assets/2_australia/ground.png'
    document.querySelector('#australia #plant img').src = './assets/2_australia/plant.png'

    document.querySelector('#australia_mascot img').src = './assets/2_australia/2_australia_mascot.png'
  }

  if (curCountryIdx === KOREA_IDX) {
    document.querySelector('#ocean #sun img').src = './assets/3_ocean/3_ocean_sun.png'
    document.querySelector('#ocean #wave1 img').src = './assets/3_ocean/3_ocean_wave.png'
    document.querySelector('#ocean #boat img').src = './assets/3_ocean/3_ocean_boat.png'
    document.querySelector('#ocean #shark img').src = './assets/3_ocean/3_ocean_shark.png'
    document.querySelector('#ocean #bird img').src = './assets/3_ocean/3_ocean_bird.png'
    document.querySelector('#ocean #wave2 img').src = './assets/3_ocean/3_ocean_wave.png'

    document.querySelector('#ocean_mascot img').src = './assets/3_ocean/3_ocean_mascot.png'
  }

  if (curCountryIdx === AUSTRALIA_IDX) {
    document.querySelector('#america #sky img').src = './assets/4_america/3_america_sky.png'
    document.querySelector('#america #landmark_base img').src = './assets/4_america/3_america_landmark_base.png'
    document.querySelector('#america #face3 img').src = './assets/4_america/3_america_face_3.png'
    document.querySelector('#america #lower_lip_3 img').src = './assets/4_america/3_america_lower_lip_3.png'
    document.querySelector('#america #face2 img').src = './assets/4_america/3_america_face_2.png'
    document.querySelector('#america #mouse2 img').src = './assets/4_america/3_america_mouse_2.png'
    document.querySelector('#america #lower_lip_2 img').src = './assets/4_america/3_america_lower_lip_2.png'
    document.querySelector('#america #face1 img').src = './assets/4_america/3_america_face_1.png'
    document.querySelector('#america #mouse1 img').src = './assets/4_america/3_america_mouse_1.png'
    document.querySelector('#america #lower_lip_1 img').src = './assets/4_america/3_america_lower_lip_1.png'
    document.querySelector('#america #face4 img').src = './assets/4_america/3_america_face_4.png'
    document.querySelector('#america #mouse4 img').src = './assets/4_america/3_america_mouse_4.png'
    document.querySelector('#america #lower_lip_4 img').src = './assets/4_america/3_america_lower_lip_4.png'
    document.querySelector('#america #star1 img').src = './assets/4_america/3_america_star.png'
    document.querySelector('#america #star2 img').src = './assets/4_america/3_america_star.png'
    document.querySelector('#america #star3 img').src = './assets/4_america/3_america_star.png'
    document.querySelector('#america #star4 img').src = './assets/4_america/3_america_star.png'
    document.querySelector('#america #star5 img').src = './assets/4_america/3_america_star.png'
    document.querySelector('#america #ground img').src = './assets/4_america/3_america_ground.png'
    document.querySelector('#america #plant img').src = './assets/4_america/3_america_plant.png'

    document.querySelector('#america_mascot img').src = './assets/4_america/america_mascot.png'
  }

  if (curCountryIdx === OCEAN_IDX) {
    document.querySelector('#peru #moon img').src = './assets/5_peru/moon.png'
    document.querySelector('#peru #mountain_3_01 img').src = './assets/5_peru/mountain_3_01.png'
    document.querySelector('#peru #mountain_3_02 img').src = './assets/5_peru/mountain_3_02.png'
    document.querySelector('#peru #mountain_3_03 img').src = './assets/5_peru/mountain_3_03.png'
    document.querySelector('#peru #mountain_3_04 img').src = './assets/5_peru/mountain_3_04.png'
    document.querySelector('#peru #mountain_3_05 img').src = './assets/5_peru/mountain_3_05.png'
    document.querySelector('#peru #mountain_3_06 img').src = './assets/5_peru/mountain_3_06.png'
    document.querySelector('#peru #mountain_3_07 img').src = './assets/5_peru/mountain_3_07.png'
    document.querySelector('#peru #mountain_3_08 img').src = './assets/5_peru/mountain_3_08.png'
    document.querySelector('#peru #mountain_3_09 img').src = './assets/5_peru/mountain_3_09.png'
    document.querySelector('#peru #mountain_3_10 img').src = './assets/5_peru/mountain_3_10.png'
    document.querySelector('#peru #mountain_3_11 img').src = './assets/5_peru/mountain_3_11.png'
    document.querySelector('#peru #mountain_3_12 img').src = './assets/5_peru/mountain_3_12.png'
    document.querySelector('#peru #mountain_3_13 img').src = './assets/5_peru/mountain_3_13.png'
    document.querySelector('#peru #mountain_3_14 img').src = './assets/5_peru/mountain_3_14.png'
    document.querySelector('#peru #mountain_3_15 img').src = './assets/5_peru/mountain_3_15.png'
    document.querySelector('#peru #mountain_3_16 img').src = './assets/5_peru/mountain_3_16.png'
    document.querySelector('#peru #mountain_3_17 img').src = './assets/5_peru/mountain_3_17.png'
    document.querySelector('#peru #mountain_1_01 img').src = './assets/5_peru/mountain_1_01.png'
    document.querySelector('#peru #mountain_1_02 img').src = './assets/5_peru/mountain_1_02.png'
    document.querySelector('#peru #mountain_1_03 img').src = './assets/5_peru/mountain_1_03.png'
    document.querySelector('#peru #mountain_1_04 img').src = './assets/5_peru/mountain_1_04.png'
    document.querySelector('#peru #mountain_1_05 img').src = './assets/5_peru/mountain_1_05.png'
    document.querySelector('#peru #mountain_1_06 img').src = './assets/5_peru/mountain_1_06.png'
    document.querySelector('#peru #mountain_1_07 img').src = './assets/5_peru/mountain_1_07.png'
    document.querySelector('#peru #mountain_1_08 img').src = './assets/5_peru/mountain_1_08.png'
    document.querySelector('#peru #mountain_1_09 img').src = './assets/5_peru/mountain_1_09.png'
    document.querySelector('#peru #mountain_1_10 img').src = './assets/5_peru/mountain_1_10.png'
    document.querySelector('#peru #mountain_1_11 img').src = './assets/5_peru/mountain_1_11.png'
    document.querySelector('#peru #mountain_1_12 img').src = './assets/5_peru/mountain_1_12.png'
    document.querySelector('#peru #mountain_1_13 img').src = './assets/5_peru/mountain_1_13.png'
    document.querySelector('#peru #mountain_1_14 img').src = './assets/5_peru/mountain_1_14.png'
    document.querySelector('#peru #mountain_1_15 img').src = './assets/5_peru/mountain_1_15.png'
    document.querySelector('#peru #mountain_1_16 img').src = './assets/5_peru/mountain_1_16.png'
    document.querySelector('#peru #ground img').src = './assets/5_peru/ground.png'
    document.querySelector('#peru #mountain_2_12 img').src = './assets/5_peru/mountain_2_12.png'
    document.querySelector('#peru #mountain_2_13 img').src = './assets/5_peru/mountain_2_13.png'
    document.querySelector('#peru #mountain_2_14 img').src = './assets/5_peru/mountain_2_14.png'
    document.querySelector('#peru #mountain_2_15 img').src = './assets/5_peru/mountain_2_15.png'
    document.querySelector('#peru #mountain_2_16 img').src = './assets/5_peru/mountain_2_16.png'
    document.querySelector('#peru #mountain_2_17 img').src = './assets/5_peru/mountain_2_17.png'
    document.querySelector('#peru #mountain_2_18 img').src = './assets/5_peru/mountain_2_18.png'
    document.querySelector('#peru #mountain_2_19 img').src = './assets/5_peru/mountain_2_19.png'
    document.querySelector('#peru #mountain_2_20 img').src = './assets/5_peru/mountain_2_20.png'
    document.querySelector('#peru #mountain_2_21 img').src = './assets/5_peru/mountain_2_21.png'
    document.querySelector('#peru #mountain_2_22 img').src = './assets/5_peru/mountain_2_22.png'
    document.querySelector('#peru #mountain_2_23 img').src = './assets/5_peru/mountain_2_23.png'
    document.querySelector('#peru #mountain_2_24 img').src = './assets/5_peru/mountain_2_24.png'
    document.querySelector('#peru #alpaca img').src = './assets/5_peru/alpaca.png'

    document.querySelector('#peru_mascot_body img').src = './assets/5_peru/peru_mascot_body.png'
    document.querySelector('#peru_mascot_face img').src = './assets/5_peru/peru_mascot_face.png'
  }

  if (curCountryIdx === AMERICA_IDX) {
    document.querySelector('#tanzania #sun img').src = './assets/6_tanzania/해.png'
    document.querySelector('#tanzania #mountain img').src = './assets/6_tanzania/산.png'
    document.querySelector('#tanzania #leopard_body img').src = './assets/6_tanzania/표범 민무늬.png'
    document.querySelector('#tanzania #leopard_pattern img').src = './assets/6_tanzania/표범 점.png'
    document.querySelector('#tanzania #leopard_head img').src = './assets/6_tanzania/표범 얼굴.png'
    document.querySelector('#tanzania #zebra img').src = './assets/6_tanzania/얼룩말 기본.png'
    document.querySelector('#tanzania #elephant_body img').src = './assets/6_tanzania/코끼리 몸통.png'
    document.querySelector('#tanzania #elephant_head img').src = './assets/6_tanzania/코끼리 얼굴.png'
    document.querySelector('#tanzania #grass img').src = './assets/6_tanzania/풀.png'
    document.querySelector('#tanzania #ground img').src = './assets/6_tanzania/땅.png'
    document.querySelector('#tanzania #giraffe img').src = './assets/6_tanzania/기린.png'
    document.querySelector('#tanzania #giraffe_head img').src = './assets/6_tanzania/기린 머리.png'
    document.querySelector('#tanzania #ash_1 img').src = './assets/6_tanzania/화산송이 1.png'
    document.querySelector('#tanzania #ash_2 img').src = './assets/6_tanzania/화산송이 2.png'
    document.querySelector('#tanzania #ash_3 img').src = './assets/6_tanzania/화산송이 3.png'
    document.querySelector('#tanzania #ash_4 img').src = './assets/6_tanzania/화산송이 4.png'
    document.querySelector('#tanzania #ash_5 img').src = './assets/6_tanzania/화산송이 5.png'
    document.querySelector('#tanzania #ash_6 img').src = './assets/6_tanzania/화산송이 6.png'
    document.querySelector('#tanzania #ash_7 img').src = './assets/6_tanzania/화산송이 7.png'
    document.querySelector('#tanzania #ash_8 img').src = './assets/6_tanzania/화산송이 8.png'
    document.querySelector('#tanzania #ash_9 img').src = './assets/6_tanzania/화산송이 9.png'
    document.querySelector('#tanzania #ash_10 img').src = './assets/6_tanzania/화산송이 10.png'
    document.querySelector('#tanzania #ash_11 img').src = './assets/6_tanzania/화산송이 11.png'
    document.querySelector('#tanzania #ash_12 img').src = './assets/6_tanzania/화산송이 12.png'
    document.querySelector('#tanzania #ash_13 img').src = './assets/6_tanzania/화산송이 13.png'
    document.querySelector('#tanzania #ash_14 img').src = './assets/6_tanzania/화산송이 14.png'
    document.querySelector('#tanzania #ash_15 img').src = './assets/6_tanzania/화산송이 15.png'

    document.querySelector('#tanzania_mascot img').src = './assets/6_tanzania/tanzania_mascot.png'
  }

  if (curCountryIdx === PERU_IDX) {
    document.querySelector('#denmark #sun img').src = './assets/7_denmark/해.png'
    document.querySelector('#denmark #building_1 img').src = './assets/7_denmark/건물1_창문달기전.png'
    document.querySelector('#denmark #closed_window_1_1 img').src = './assets/7_denmark/건물1_닫힌창문.png'
    document.querySelector('#denmark #closed_window_1_2 img').src = './assets/7_denmark/건물1_닫힌창문.png'
    document.querySelector('#denmark #open_window_1_2 img').src = './assets/7_denmark/열린창문_강아지.png'
    document.querySelector('#denmark #closed_window_1_3 img').src = './assets/7_denmark/건물1_닫힌창문.png'
    document.querySelector('#denmark #closed_window_1_4 img').src = './assets/7_denmark/건물1_닫힌창문.png'
    document.querySelector('#denmark #closed_window_1_5 img').src = './assets/7_denmark/건물1_닫힌창문.png'
    document.querySelector('#denmark #closed_window_1_6 img').src = './assets/7_denmark/건물1_닫힌창문.png'
    document.querySelector('#denmark #closed_door_1 img').src = './assets/7_denmark/건물1_문.png'
    document.querySelector('#denmark #building_2 img').src = './assets/7_denmark/건물2_창문달기전.png'
    document.querySelector('#denmark #closed_window_2_1 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #closed_window_2_2 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #closed_window_2_3 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #closed_window_2_4 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #closed_window_2_5 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #closed_window_2_6 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #closed_window_2_7 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #closed_window_2_8 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #open_window_2_8 img').src = './assets/7_denmark/열린창문_사람.png'
    document.querySelector('#denmark #closed_window_2_9 img').src = './assets/7_denmark/건물2_닫힌창문.png'
    document.querySelector('#denmark #building_4 img').src = './assets/7_denmark/건물4_창문달기전.png'
    document.querySelector('#denmark #closed_window_4_1 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_2 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_3 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_4 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_5 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_6 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_7 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #open_window_4_7 img').src = './assets/7_denmark/열린창문_인사.png'
    document.querySelector('#denmark #closed_window_4_8 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_9 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_10 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_11 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_12 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_13 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_14 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_15 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #closed_window_4_16 img').src = './assets/7_denmark/건물4_닫힌창문.png'
    document.querySelector('#denmark #building_3 img').src = './assets/7_denmark/건물3_창문달기전.png'
    document.querySelector('#denmark #closed_window_3_1 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_2 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_3 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #open_window_3_3 img').src = './assets/7_denmark/열린창문_꽃.png'
    document.querySelector('#denmark #closed_window_3_4 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_5 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_6 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_7 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_8 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_9 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_10 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_11 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_12 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_13 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_14 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_15 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #closed_window_3_16 img').src = './assets/7_denmark/건물3_닫힌창문.png'
    document.querySelector('#denmark #water img').src = './assets/7_denmark/물.png'
    document.querySelector('#denmark #ground img').src = './assets/7_denmark/땅.png'
    document.querySelector('#denmark #boat img').src = './assets/7_denmark/배.png'

    document.querySelector('#denmark_mascot img').src = './assets/7_denmark/denmark_mascot.png'
  }
}

const native = document.querySelector('#australia #native')
const boomerang = document.querySelector('#australia #boomerang')
const landmark = document.querySelector('#australia #landmark')
const ulruru = document.querySelector('#australia #ulruru')

const oceanBoat = document.querySelector('#ocean #boat') 

const zebra = document.querySelector('#zebra')
const leopardPattern = document.querySelector('#leopard_pattern')

const handleAddSoundEventListeners = () => {
  if (allImagesLoaded) { return }

  if (curCountryIdx === HOME_IDX) {
    playAudioOnClick(native, ['./assets/sounds/3_australia/호주_원주민1.m4a', './assets/sounds/3_australia/호주_원주민2.m4a', './assets/sounds/3_australia/호주_원주민3.m4a', './assets/sounds/3_australia/호주_원주민_나와.m4a', './assets/sounds/3_australia/호주_원주민_여기에.m4a'], volume.NATIVE_TALKING)
    playAudioOnClick(boomerang, ['./assets/sounds/3_australia/호주_부메랑.m4a'], volume.BOOMERANG)
    playAudioOnClick(landmark, ['./assets/sounds/3_australia/호주_울루루.m4a'], volume.ULRURU)
    playAudioOnClick(ulruru, ['./assets/sounds/3_australia/호주_울루루.m4a'], volume.ULRURU)
  }

  if (curCountryIdx === KOREA_IDX) {
    playAudioOnClick(oceanBoat, ['./assets/sounds/4_ocean/태평양_인물1.m4a', './assets/sounds/4_ocean/태평양_인물2.m4a', './assets/sounds/4_ocean/태평양_인물3.m4a', './assets/sounds/4_ocean/태평양_인물4.m4a'], volume.CASTAWAY_TALKING)
  }

  if (curCountryIdx === AMERICA_IDX) {
    playAudioOnClick(leopardPattern, ['./assets/sounds/7_tanzania/탄자니아_표범_풀버전.m4a'], volume.FIREWORKS)
    playAudioOnClick(zebra, ['./assets/sounds/7_tanzania/탄자니아_얼룩말1.m4a', './assets/sounds/7_tanzania/탄자니아_얼룩말2.m4a', './assets/sounds/7_tanzania/탄자니아_얼룩말3.m4a'], volume.ZEBRA)
  }
}

const handleHideArrow = () => {
  arrow.classList.add('hidden')
}

const handleShowArrow = () => {
  setTimeout(() => {
    arrow.classList.remove('hidden')
  }, FRAME_IN_DURATION)
}

const switchCountryOrder = () => {
  const content = document.querySelector('#content')
  const korea = document.querySelector('#korea')
  const character = document.querySelector('#character')

  content.insertBefore(korea, character)
}

const handleRevertCountryOrder = () => {
  const content = document.querySelector('#content')
  const korea = document.querySelector('#korea')
  const australia = document.querySelector('#australia')

  content.insertBefore(korea, australia)
}

/** adjust order due to the frame in & out animation */
const handleAdjustCountryOrder = () => {
  if (curCountryIdx === KOREA_IDX) {
    handleRevertCountryOrder()
  }
  if (curCountryIdx === DENMARK_IDX) {
    switchCountryOrder()
  }
}

const handleCountryMovement = () => {
  const { id: curCountryId } = countries[curCountryIdx]
  const curCountryElement = document.querySelector(`#${curCountryId}`)
  
  const nextCountryIdx = getNextCountryIdx(curCountryIdx)
  const { id: nextCountryId } = countries[nextCountryIdx]
  const nextCountry = document.querySelector(`#${nextCountryId}`)
  
  curCountryElement.classList.add('frame_out')
  nextCountry.classList.remove(UNMOUNTED)
  nextCountry.classList.add('frame_in')

  setTimeout(function cleanUp() {
    curCountryElement.classList.remove('frame_out')
    curCountryElement.classList.add(UNMOUNTED)
    nextCountry.classList.remove('frame_in')
  }, FRAME_IN_DURATION);
}

function handleGlobeMovement() {
  if (curCountryIdx === HOME_IDX) { return }

  const nextCountryIdx = getNextCountryIdx(curCountryIdx)
  const { lat, lng } = countries[nextCountryIdx]

  globe.pointOfView({
    lat,
    lng,
    altitude: GLOBE_ALTITUDE
  }, GLOBE_MOVE_TRANSITION)
}

const handleChangeMetaValues = () => {
  const nextCountryIdx = getNextCountryIdx(curCountryIdx)
  const metaValues = document.querySelectorAll('#meta_value')

  const {
    name,
    capital,
    language,
    population,
    area,
    gdp,
  } = countries[nextCountryIdx]

  metaValues[0].textContent = name
  metaValues[1].textContent = capital
  metaValues[2].textContent = language
  metaValues[3].textContent = population
  metaValues[4].textContent = area
  metaValues[5].textContent = gdp
}

const playAudio = (audio) => !isMuted && audio.play()

const handlePlateBreak = () => {
  const teacherWithPlate = document.querySelector('#teacher1')
  const teacherWithBrokenPlate = document.querySelector('#teacher2')

  setTimeout(() => {
    teacherWithPlate.classList.add(UNMOUNTED)
    teacherWithBrokenPlate.classList.remove(UNMOUNTED)
  }, PLATE_BREAK_TIMEOUT);
}

const isPeruMascot = mascot => mascot.id.includes('peru')

const handleHideMascot = (mascot, showingClass, hidingClass, hidingAudio) => {
  mascot.classList.remove(showingClass)
  mascot.classList.add(hidingClass)

  playAudio(hidingAudio)

  setTimeout(() => {
    mascot.classList.add(UNMOUNTED)
    mascot.classList.remove(hidingClass)
  }, MASCOT_HIDING_DURATION);
}

const addMascotClickEvent = (target, mascot, showingAudioSrc, hidingAudioSrc, volume) => {
  const SHOWING = isPeruMascot(mascot) ? ALPHACA_SHOWING : MASCOT_SHOWING
  const HIDING = isPeruMascot(mascot) ? ALPHACA_HIDING : MASCOT_HIDING

  const showingAudio = new Audio(showingAudioSrc)
  const hidingAudio = new Audio(hidingAudioSrc)

  showingAudio.volume = volume
  hidingAudio.volume = volume

  const handleShowMascot = () => {
    mascot.classList.remove(UNMOUNTED)
    mascot.classList.add(SHOWING)

    playAudio(showingAudio)
  }

  target.addEventListener('click', () => {
    if (mascot.classList.contains(UNMOUNTED)) {
      handleShowMascot()
    } else {
      handleHideMascot(mascot, SHOWING, HIDING, hidingAudio)
    }
  })

  mascot.addEventListener('click', () => {
    handleHideMascot(mascot, SHOWING, HIDING, hidingAudio)
  })
}

const handleCleanUpMascot = () => {
  const { id: curCountryId } = countries[curCountryIdx]
  const mascot = document.querySelector(`#${curCountryId}_mascot`)

  if (!mascot) { return }

  const SHOWING = isPeruMascot(mascot) ? ALPHACA_SHOWING : MASCOT_SHOWING
  const HIDING = isPeruMascot(mascot) ? ALPHACA_HIDING : MASCOT_HIDING

  const isMascotShowing = mascot.classList.contains(SHOWING)

  if (isMascotShowing) {
    handleHideMascot(mascot, SHOWING, HIDING)
  }
}

const giraffe = document.querySelector('#giraffe')
const giraffeHead = document.querySelector('#giraffe_head')

const cleanClass = () => {
  giraffe.classList.remove('giraffe-stretch')
  giraffe.classList.remove('giraffe-stretch-back')
  giraffeHead.classList.remove('giraffe-head-up')
  giraffeHead.classList.remove('giraffe-head-down')
}

arrow.addEventListener('click', () => {
  handleLoadImage()
  handleAddSoundEventListeners()
  handleHideArrow()
  handleAdjustCountryOrder()
  handleCountryMovement()
  handleGlobeMovement()
  handleChangeMetaValues()
  handleShowArrow()
  handleCleanUpMascot()
  cleanClass()

  if (curCountryIdx === HOME_IDX) {
    handlePlateBreak()
  }

  curCountryIdx = getNextCountryIdx(curCountryIdx)
})

/**
 * @summary Common
 */

const interactionable = document.getElementsByClassName('red_cursor')
const withoutNudge = ['book_opened_dimmer']

const handleClickArrowAtFirst = () => {
  const audio = new Audio('./assets/sounds/1_home/스타트_격파.m4a')
  audio.volume = volume.PLATE_BREAK
  playAudio(audio)
  
  playAudioOnClick(arrow, ['./assets/sounds/0_common/공통_화면전환.m4a'], volume.COUNTRY_CHANGE)
  arrow.removeEventListener('click', handleClickArrowAtFirst)
}

arrow.addEventListener('click', handleClickArrowAtFirst)

/**
 * @summary Home
 */
const bookOpened = document.querySelector('#book_opened')
const soundOn = document.querySelector('#sound_on')
const soundOff = document.querySelector('#sound_off')

book.addEventListener('click', () => {
  bookOpened.classList.remove(UNMOUNTED)
  bookOpenedDimmer.classList.remove(UNMOUNTED)

  bookOpenedDimmer.addEventListener('click', () => {
    if (bookOpened.classList.contains(UNMOUNTED)) { return }
    bookOpened.classList.add(UNMOUNTED)
    bookOpenedDimmer.classList.add(UNMOUNTED)
  })
})

soundOn.addEventListener('click', () => {
  isMuted = true
  soundOn.classList.add(UNMOUNTED)
  soundOff.classList.remove(UNMOUNTED)
})

soundOff.addEventListener('click', () => {
  isMuted = false
  soundOn.classList.remove(UNMOUNTED)
  soundOff.classList.add(UNMOUNTED)

  const audio = new Audio('./assets/sounds/1_home/스타트_효과음온.m4a')
  audio.volume = volume.SOUND_ON
  playAudio(audio)
})

/**
 * @summary Korea
 */

const tiger = document.querySelector('#korea #tiger')
const cryingTiger = document.querySelector('#korea #tiger_cry')
const koreaMascot = document.querySelector('#korea_mascot')

const tigerCryingOnClick = () => {
  tiger.addEventListener('click', () => {
    tiger.classList.add(UNMOUNTED)
    cryingTiger.classList.remove(UNMOUNTED)
  
    setTimeout(() => {
      tiger.classList.remove(UNMOUNTED)
      cryingTiger.classList.add(UNMOUNTED)
    }, 1000);
  })
}

tigerCryingOnClick()
addMascotClickEvent(tiger, koreaMascot, './assets/sounds/2_korea/한국_호랑이1.m4a', './assets/sounds/2_korea/한국_호랑이3.m4a', volume.TIGER)

/**
 * @summary Australia
 */

const nativeLips = document.querySelector('#australia #native_lips')
const nativeHand = document.querySelector('#australia #native_hand')
const kangaroo = document.querySelector('#australia #kangaroo')
const australiaMascot = document.querySelector('#australia_mascot')

const pointedObjectsByNative = [boomerang, landmark, ulruru, kangaroo, australiaMascot]

const nativeTalkingOnClick = () => {
  pointedObjectsByNative.forEach(el => {
    el.addEventListener('click', () => {
      nativeLips.classList.add('native_talking')
    
      setTimeout(() => {
        nativeLips.classList.remove('native_talking')
      }, 1000)
    })
  })
}

const nativeHandUpOnClick = () => {
  native.addEventListener('click', () => {
    native.classList.add('unclickable')
    nativeLips.classList.add('native_talking')
    nativeHand.classList.add('native_hand_up')
  
    setTimeout(() => {
      nativeHand.classList.remove('native_hand_up')
      nativeHand.classList.add('native_hand_down')
      
      setTimeout(() => {
        native.classList.remove('unclickable')
        nativeLips.classList.remove('native_talking')
        nativeHand.classList.remove('native_hand_down')
      }, 300);
    }, 1000)
  })
}

nativeTalkingOnClick()
nativeHandUpOnClick()
addMascotClickEvent(kangaroo, australiaMascot, './assets/sounds/3_australia/호주_캥거루.m4a', './assets/sounds/3_australia/호주_캥거루.m4a', volume.KANGAROO)

/**
 * @summary Ocean
 */

const bird = document.querySelector('#ocean #bird')
const shark = document.querySelector('#ocean #front_shark')
const oceanMascot = document.querySelector('#ocean_mascot')

const poopFallingOnClick = () => {
  bird.addEventListener('click', (e) => {
    const monitorFrame = document.querySelector('#content')
    const ocean = document.querySelector('#ocean')
    const poop = document.createElement('div')
    poop.id = 'poop'
  
    const left = e.clientX - monitorFrame.getBoundingClientRect().left
    /** frame is scaled by 0.5 */
    poop.style.left = `${left * 2}px`
  
    const poopImg = document.createElement('img')
    poopImg.src = './assets/3_ocean/poop.png'
  
    poop.appendChild(poopImg)
    ocean.appendChild(poop)
    poop.classList.add('poop_falling')

    const audio = new Audio('./assets/sounds/4_ocean/태평양_갈매기_뿌직.m4a')
    audio.volume = volume.SEAGULL_FOO
    playAudio(audio)
  
    setTimeout(() => {
      poop.remove()
    }, 1000);
  })
}

const playOceanBackgroundAudioInteval = () => {
  const audios = [
    { 
      src: './assets/sounds/4_ocean/태평양_갈매기(배경).m4a',
      volume: volume.SEAGULL,
    }, 
    { 
      src: './assets/sounds/4_ocean/태평양_철썩(배경).m4a',
      volume: volume.SEA,
    }, 
    { 
      src: './assets/sounds/4_ocean/태평양_갈매기(배경2).m4a',
      volume: volume.SEAGULL,
    },
  ]
  let idx = 0

  setInterval(() => {
    if (curCountryIdx !== OCEAN_IDX) { return }

    const audioObj = audios[idx++ % audios.length]
    const audio = new Audio(audioObj.src)
    audio.volume = audioObj.volume
    playAudio(audio)
  }, 4000)
}

poopFallingOnClick()
playOceanBackgroundAudioInteval()
addMascotClickEvent(shark, oceanMascot, './assets/sounds/4_ocean/태평양_상어_등장.m4a', './assets/sounds/4_ocean/태평양_상어_퇴장.m4a', volume.SHARK)

/**
 * @summary America
 */

const sky = document.querySelector('#america #sky')
const americaMascot = document.querySelector('#america_mascot')

const faceLips = [
  { 
    face: document.querySelector('#face1'),
    lip: document.querySelector('#lower_lip_1'),
    sound: './assets/sounds/5_america/미국_석상1.m4a'
  },
  { 
    face: document.querySelector('#face2'),
    lip: document.querySelector('#lower_lip_2'),
    sound: './assets/sounds/5_america/미국_석상2.m4a'
  },
  { 
    face: document.querySelector('#face3'),
    lip: document.querySelector('#lower_lip_3'),
    sound: './assets/sounds/5_america/미국_석상3.m4a'
  },
  { 
    face: document.querySelector('#face4'),
    lip: document.querySelector('#lower_lip_4'),
    sound: './assets/sounds/5_america/미국_석상4.m4a'
  },
]

const stars = [
  {
    star: document.querySelector('#star1'),
    sound: './assets/sounds/5_america/미국_별1.m4a'
  },
  {
    star: document.querySelector('#star2'),
    sound: './assets/sounds/5_america/미국_별2.m4a'
  },
  {
    star: document.querySelector('#star3'),
    sound: './assets/sounds/5_america/미국_별3.m4a'
  },
  {
    star: document.querySelector('#star4'),
    sound: './assets/sounds/5_america/미국_별4.m4a'
  },
  {
    star: document.querySelector('#star5'),
    sound: './assets/sounds/5_america/미국_별5.m4a'
  },
]

const singOnClick = () => {
  faceLips.forEach(({ face, lip, sound }) => {
    face.addEventListener('click', () => {
      lip.classList.add('sing')
  
      setTimeout(() => {
        lip.classList.remove('sing')
      }, 1000)
    })

    playAudioOnClick(face, [sound], volume.STATUE_SING)
  })
}

const playAudioOnStarBlink = () => {
  stars.forEach(({ star, sound }) => {
    playAudioOnHover(star, [sound], volume.STAR)
  })
}

singOnClick()
playAudioOnStarBlink()
addMascotClickEvent(sky, americaMascot, './assets/sounds/5_america/미국_독수리_등장.m4a', './assets/sounds/5_america/미국_독수리_퇴장.m4a', volume.EAGLE)

/**
 * @summary Peru
 */

const moon = document.querySelector('#peru #moon')
const ground = document.querySelector('#peru #ground')
const alpaca = document.querySelector('#peru #alpaca')
const peruMascot = document.querySelector('#peru_mascot')
const peruMascotBody = document.querySelector('#peru_mascot_body')

const freshness = {
  mountain_1_01: true,
  mountain_1_02: true,
  mountain_1_03: true,
  mountain_1_04: true,
  mountain_1_05: true,
  mountain_1_06: true,
  mountain_1_07: true,
  mountain_1_08: true,
  mountain_1_09: true,
  mountain_1_10: true,
  mountain_1_11: true,
  mountain_1_12: true,
  mountain_1_13: true,
  mountain_1_14: true,
  mountain_1_15: true,
  mountain_1_16: true,
  mountain_3_01: true,
  mountain_3_02: true,
  mountain_3_03: true,
  mountain_3_04: true,
  mountain_3_05: true,
  mountain_3_06: true,
  mountain_3_07: true,
  mountain_3_08: true,
  mountain_3_09: true,
  mountain_3_10: true,
  mountain_3_11: true,
  mountain_3_12: true,
  mountain_3_13: true,
  mountain_3_14: true,
  mountain_3_15: true,
  mountain_3_16: true,
  mountain_3_17: true,
  mountain_2_12: true,
  mountain_2_13: true,
  mountain_2_14: true,
  mountain_2_15: true,
  mountain_2_16: true,
  mountain_2_17: true,
  mountain_2_18: true,
  mountain_2_19: true,
  mountain_2_20: true,
  mountain_2_21: true,
  mountain_2_22: true,
  mountain_2_23: true,
  mountain_2_24: true,
}

const colorMap = {
  mountain_1_01: 'color_green1',
  mountain_1_02: 'color_black1',
  mountain_1_03: 'color_grey1',
  mountain_1_04: 'color_grey2',
  mountain_1_05: 'color_blue1',
  mountain_1_06: 'color_green2',
  mountain_1_07: 'color_pink1',
  mountain_1_08: 'color_grey1',
  mountain_1_09: 'color_grey2',
  mountain_1_10: 'color_green2',
  mountain_1_11: 'color_green3',
  mountain_1_12: 'color_black1',
  mountain_1_13: 'color_blue1',
  mountain_1_14: 'color_pink2',
  mountain_1_15: 'color_green2',
  mountain_1_16: 'color_black1',
  mountain_3_01: 'color_blue1',
  mountain_3_02: 'color_green4',
  mountain_3_03: 'color_pink2',
  mountain_3_04: 'color_blue1',
  mountain_3_05: 'color_grey1',
  mountain_3_06: 'color_green4',
  mountain_3_07: 'color_blue1',
  mountain_3_08: 'color_brown1',
  mountain_3_09: 'color_grey2',
  mountain_3_10: 'color_green4',
  mountain_3_11: 'color_green5',
  mountain_3_12: 'color_grey2',
  mountain_3_13: 'color_blue1',
  mountain_3_14: 'color_grey2',
  mountain_3_15: 'color_pink2',
  mountain_3_16: 'color_green4',
  mountain_3_17: 'color_green5',
  mountain_2_12: 'color_green2',
  mountain_2_13: 'color_pink1',
  mountain_2_14: 'color_grey1',
  mountain_2_15: 'color_grey2',
  mountain_2_16: 'color_green2',
  mountain_2_17: 'color_grey1',
  mountain_2_18: 'color_grey2',
  mountain_2_19: 'color_blue2',
  mountain_2_20: 'color_green5',
  mountain_2_21: 'color_green2',
  mountain_2_22: 'color_grey2',
  mountain_2_23: 'color_grey1',
  mountain_2_24: 'color_green3',
}

const colors = ['color_black1', 'color_grey1', 'color_grey2', 'color_brown1', 'color_blue1', 'color_blue2', 'color_blue3', 'color_blue4', 'color_green1', 'color_green2', 'color_green3', 'color_green4', 'color_green5', 'color_red1', 'color_pink1', 'color_pink2', 'color_pink3', 'color_yellow1']
const ridgeSounds = ['./assets/sounds/6_peru/페루_능선1.m4a', './assets/sounds/6_peru/페루_능선2.m4a', './assets/sounds/6_peru/페루_능선3.m4a', './assets/sounds/6_peru/페루_능선4.m4a', './assets/sounds/6_peru/페루_능선5.m4a', './assets/sounds/6_peru/페루_능선6.m4a', './assets/sounds/6_peru/페루_능선7.m4a', './assets/sounds/6_peru/페루_능선8.m4a', './assets/sounds/6_peru/페루_능선9.m4a', './assets/sounds/6_peru/페루_능선10.m4a', './assets/sounds/6_peru/페루_능선11.m4a']

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const getRandomSound = () => {
  return ridgeSounds[Math.floor(Math.random() * ridgeSounds.length)]
}

document.addEventListener('mouseover', (e) => {
  const coloredMountain = e.target.closest('[id^=mountain_]')

  if (!coloredMountain) { return }

  const isFresh = freshness[coloredMountain.id]

  if (isFresh) {
    freshness[coloredMountain.id] = false

    const color = colorMap[coloredMountain.id]
    coloredMountain.classList.remove('fresh_filter')
    coloredMountain.classList.add(color)
    return
  }

  const randomColor = getRandomColor()
  const randomSound = getRandomSound()

  coloredMountain.classList.forEach((item) => {
    if (item.includes('color_')) {
      coloredMountain.classList.remove(item)
    }
  })

  coloredMountain.classList.add(randomColor)

  const audio = new Audio(randomSound)
  audio.volume = volume.PERU_MOUNTAIN
  playAudio(audio)
})

const addColoringEventListener = (element, linkedElement) => {
  element.addEventListener('mouseover', () => {
    const randomColor = getRandomColor()

    element.classList.forEach((item) => {
      if (item.includes('color_')) {
        element.classList.remove(item)
      }
    })

    element.classList.add(randomColor)

    if (linkedElement) {
      linkedElement.classList.forEach((item) => {
        if (item.includes('color_')) {
          linkedElement.classList.remove(item)
        }
      })

      linkedElement.classList.add(randomColor)
    }
  })
}

addColoringEventListener(moon)
addColoringEventListener(ground)
addColoringEventListener(peruMascotBody, alpaca)
addColoringEventListener(alpaca, peruMascotBody)

addMascotClickEvent(alpaca, peruMascot, './assets/sounds/6_peru/페루_알파카_등장.m4a', './assets/sounds/6_peru/페루_알파카_퇴장.m4a', volume.ALPHACA)

/**
 * @summary tanzania
 */

const elephantHead = document.querySelector('#tanzania #front_elephant_head')
const tanzaniaMascot = document.querySelector('#tanzania_mascot')

const zebraImgSrc = [
  './assets/6_tanzania/얼룩말 기본.png',
  './assets/6_tanzania/얼룩말 2.png',
  './assets/6_tanzania/얼룩말 3.png',
  './assets/6_tanzania/얼룩말 4.png',
  './assets/6_tanzania/얼룩말 5.png',
  './assets/6_tanzania/얼룩말 6.png',
  './assets/6_tanzania/얼룩말 7.png',
]

let currentZebraIdx = 0

const handleZebraClick = () => {
  currentZebraIdx = (currentZebraIdx + 1) % zebraImgSrc.length
  zebra.querySelector('img').src = zebraImgSrc[currentZebraIdx]
}

const handleLeopardClick = () => {
  leopardPattern.classList.add('leopard-animation')
  
  setTimeout(() => {
    Array
      .from({ length: 15 }, (_, i) => i + 1)
      .map((num) => {
        const ash = document.querySelector(`#ash_${num}`)
        ash.classList.remove('hidden')
        ash.classList.add(`ash-${num}-falling`)
      })
  }, 2000)
}

const handleGiraffeClick = () => {
  if (giraffe.classList.contains('giraffe-stretch')) {
    giraffe.classList.add('unclickable')
    giraffe.classList.remove('giraffe-stretch')
    giraffeHead.classList.remove('giraffe-head-down')
  
    giraffeHead.classList.add('giraffe-head-up')
    giraffe.classList.add('giraffe-stretch-back')

    setTimeout(() => {
      giraffe.classList.remove('unclickable')
    }, 1300);

    return
  }

  giraffe.classList.add('unclickable')
  
  giraffeHead.classList.remove('giraffe-head-up')
  giraffe.classList.remove('giraffe-stretch-back')

  giraffe.classList.add('giraffe-stretch')
  giraffeHead.classList.remove('hidden')
  giraffeHead.classList.add('giraffe-head-down')

  const audio = new Audio('./assets/sounds/7_tanzania/탄자니아_기린.m4a')
  audio.volume = volume.GIRAFFE
  playAudio(audio)

  setTimeout(() => {
    giraffe.classList.remove('unclickable')
  }, 4000);
}

leopardPattern.addEventListener('click', handleLeopardClick)
giraffe.addEventListener('click', handleGiraffeClick)
zebra.addEventListener('click', handleZebraClick)

addMascotClickEvent(elephantHead, tanzaniaMascot, './assets/sounds/7_tanzania/탄자니아_코끼리.m4a', './assets/sounds/7_tanzania/탄자니아_코끼리.m4a', volume.ELEPHANT)

/**
 * @summary Denmark
 */

const windowsToOpen = ['window_1_2', 'window_2_8', 'window_3_3', 'window_4_7']

windowsToOpen.forEach((windowId) => {
  const closedWindow = document.querySelector(`#closed_${windowId}`)
  const openedWindow = document.querySelector(`#open_${windowId}`)

  closedWindow.addEventListener('click', () => {
    openedWindow.classList.remove(UNMOUNTED)

    openedWindow.addEventListener('click', () => {
      openedWindow.classList.add(UNMOUNTED)
    })
  })

  playAudioOnClick(closedWindow, ['./assets/sounds/8_denmark/덴마크_창문_열음.m4a'], volume.WINDOW_OPEN)
  playAudioOnClick(openedWindow, ['./assets/sounds/8_denmark/덴마크_창문_닫음.m4a'], volume.WINDOW_CLOSE)
})

const denmarkBoat = document.querySelector('#denmark #boat')
const denmarkMascot = document.querySelector('#denmark_mascot')

addMascotClickEvent(denmarkBoat, denmarkMascot, './assets/sounds/8_denmark/덴마크_백조.m4a', './assets/sounds/8_denmark/덴마크_백조.m4a', volume.SWAN)

/** mobile */
let handUp = true

window.addEventListener('click', () => {
  if (!isMobile) return

  const hand = document.querySelector('#mobile #hand')

  if (handUp) {
    handUp = false
    hand.classList.remove('hand-up')
    hand.classList.add('hand-down')
  } else {
    handUp = true
    hand.classList.remove('hand-down')
    hand.classList.add('hand-up')
  }
})
