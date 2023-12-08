import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import skyVertexShader from './shaders/sky/vertex.glsl'
import skyFragmentShader from './shaders/sky/fragment.glsl'
import floorVertexShader from './shaders/floor/vertex.glsl'
import floorFragmentShader from './shaders/floor/fragment.glsl'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import TWEEN from '@tweenjs/tween.js'


/**
 * Base
 */
// Debug
const gui = new dat.GUI()
const gltfLoader = new GLTFLoader()


const welcome = document.querySelector('#welcome')
welcome.style.width = window.innerWidth + 'px'
welcome.style.height = window.innerHeight + 'px'
welcome.style.display = 'flex'
let infos = document.querySelector('#infos')
let instr1 = document.querySelector("#instr1")
let instr2 = document.querySelector("#instr2")
let badge1 = document.querySelector("#badge1")
let hub = document.querySelector("#hub")
let back = document.querySelector("#back")

badge1.addEventListener('click', () => {
    console.log("tst")
    hub.style.top = '100vh'
    raycaster.layers.enable(0)
})

back.addEventListener('click', () => {
    hub.style.top = '0vh'
    raycaster.layers.disableAll()
})


var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });


/**
 * Mouse cursor
 */
const mouse = new THREE.Vector2()
window.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
    
    if(powerPlant)
    {
        const modelIntersects = raycaster.intersectObject(powerPlant)
    
        if(modelIntersects.length)
        {
            new TWEEN.Tween(powerPlant.scale)
            .to(
                {
                    x: 1.1,
                    y: 1.1,
                    z: 1.1
                },
                150
            ).easing( TWEEN.Easing.Bounce.EaseOut)
            .start()
        }
        else
        {
            new TWEEN.Tween(powerPlant.scale)
            .to(
                {
                    x: 1.,
                    y: 1.,
                    z: 1.
                },
                150
            ).easing( TWEEN.Easing.Bounce.EaseOut)
            .start()
        }
    }
    if(eol1)
    {
        const modelIntersects = raycaster.intersectObject(eol1)
        console.log("okay")
    
        if(modelIntersects.length)
        {
            new TWEEN.Tween(eol1.scale)
            .to(
                {
                    x: 0.0007,
                    y: 0.0007,
                    z: 0.0007,
                },
                150
            ).easing( TWEEN.Easing.Bounce.EaseOut)
            .start()
            new TWEEN.Tween(eol2.scale)
            .to(
                {
                    x: 0.0004,
                    y: 0.0004,
                    z: 0.0004,
                },
                150
            ).easing( TWEEN.Easing.Bounce.EaseOut)
            .start()
            new TWEEN.Tween(eol3.scale)
            .to(
                {
                    x: 0.0004,
                    y: 0.0004,
                    z: 0.0004,
                },
                150
            ).easing( TWEEN.Easing.Bounce.EaseOut)
            .start()
            }
        else
        {
            new TWEEN.Tween(eol1.scale)
            .to(
                {
                    x: 0.0006,
                    y: 0.0006,
                    z: 0.0006,
                },
                150
            ).easing( TWEEN.Easing.Bounce.EaseOut)
            .start()
            new TWEEN.Tween(eol2.scale)
            .to(
                {
                    x: 0.0003,
                    y: 0.0003,
                    z: 0.0003,
                },
                150
            ).easing( TWEEN.Easing.Bounce.EaseOut)
            .start()
            new TWEEN.Tween(eol3.scale)
            .to(
                {
                    x: 0.0003,
                    y: 0.0003,
                    z: 0.0003,
                },
                150
            ).easing( TWEEN.Easing.Bounce.EaseOut)
            .start()
        }
    }
})

window.addEventListener('click', () => {
    welcome.style.top = '-100vh'
    infos.style.top = '-100vh'

    if(instr1.style.top != "100vh"){
        setTimeout(()=>{
            instr1.style.top = "-9vh"
            instr2.style.top = "9vh"
        }, 1000)
    }
    if(powerPlant)
    {
        const modelIntersects = raycaster.intersectObject(powerPlant)
    
        if(modelIntersects.length)
        {
            infos.innerHTML = `
            <h4>"Le nucléaire est une énergie polluante”</h4><br/>

            Le nucléaire n’émet pas de CO2 lors de sa création, cependant il pollue avec les déchets radioactif qu’il crée ainsi que lors de l’extraction de la matiere premiere
            Dotée de 56 réacteurs nucléaires, un record en Europe, la France produit 70% de son énergie grâce au nucléaire.
            Part de l'énergie nucléaire dans la production totale d'électricité en France en 2021
            69%
            Nombre de réacteurs nucléaires opérationnels en France en 2022
            56`
            infos.style.setProperty('top', 'calc(50vh - 9em)')
            infos.style.setProperty('left', 'calc(50vw - 18.5em)')

        }
    }
    if(eol1)
    {
        const modelIntersects = raycaster.intersectObject(eol1)
    
        if(modelIntersects.length)
        {
            infos.innerHTML = `
            <h4>"Les énergies renouvelables ne peuvent pas remplacer les énergies fossiles de manière réaliste."</h4><br/>
            
            Les technologies d'énergie renouvelable, telles que l'énergie solaire et éolienne, deviennent de plus en plus compétitives et sont capables de répondre à une part importante des besoins énergétiques mondiaux. Les progrès technologiques rendent ces solutions de plus en plus viables.
            Transition vers des énergies renouvelables : L'adoption massive de sources d'énergie renouvelable, telles que l'énergie solaire et éolienne, peut fournir une part importante des besoins mondiaux en électricité.`
            infos.style.setProperty('top', 'calc(50vh - 9em)')
            infos.style.setProperty('left', 'calc(50vw + 5.5em)')

        }
    }
    
})

setTimeout(() => {
    welcome.style.top = '-100vh'
    if(instr1.style.top != "100vh"){
        setTimeout(()=>{
            instr1.style.top = "-9vh"
            instr2.style.top = "9vh"
        }, 1000)
    }
}, 3000);


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

/**
 * Test mesh
 */
// Geometry
const geometry = new THREE.PlaneGeometry(250, 50, 32, 32)

const floor = new THREE.CircleGeometry(20, 32)

gltfLoader.load(
    '/models/untitled.glb',
    (gltf) =>
    {
        gltf.scene.position.set(2, 0, -6)
        gltf.scene.scale.set(2.,2.,2.)
        gltf.scene.rotateY(Math.PI)
        scene.add(gltf.scene)

    }
)

let mixer = null
let mixer2 = null
let mixer3 = null
let mixer4 = null
let powerPlant = null
let eol1 = null
let eol2 = null
let eol3 = null
gltfLoader.load(
    '/models/power_plant.glb',
    (gltf) =>
    {
        gltf.scene.position.set(-3, 0, -3)
        gltf.scene.rotateY(-1.)
        gltf.scene.scale.set(1.2,1.2,1.2)
        gltf.scene.rotateY(Math.PI)

        mixer = new THREE.AnimationMixer(gltf.scene)
        const action = mixer.clipAction(gltf.animations[0])
        action.play()

        powerPlant = gltf.scene
        scene.add(powerPlant)

    }
)
gltfLoader.load(
    '/models/animated_wind_turbine.glb',
    (gltf) =>
    {
        gltf.scene.position.set(6, 0, -4)
        gltf.scene.rotateY(1.)
        gltf.scene.scale.set(0.0006,0.0006,0.0006)
        gltf.scene.rotateY(Math.PI)

        mixer2 = new THREE.AnimationMixer(gltf.scene)
        const action = mixer2.clipAction(gltf.animations[0])
        action.play()

        eol1 = gltf.scene
        scene.add(eol1)

    }
)
gltfLoader.load(
    '/models/animated_wind_turbine.glb',
    (gltf) =>
    {
        gltf.scene.position.set(5, 0, -6)
        gltf.scene.rotateY(0.9)
        gltf.scene.scale.set(0.0003,0.0003,0.0003)
        gltf.scene.rotateY(Math.PI)

        mixer3 = new THREE.AnimationMixer(gltf.scene)
        const action = mixer3.clipAction(gltf.animations[0])
        action.play()

        eol2 = gltf.scene
        scene.add(eol2)

    }
)
gltfLoader.load(
    '/models/animated_wind_turbine.glb',
    (gltf) =>
    {
        gltf.scene.position.set(5, 0, -3)
        gltf.scene.rotateY(0.9)
        gltf.scene.scale.set(0.0003,0.0003,0.0003)
        gltf.scene.rotateY(Math.PI)

        mixer4 = new THREE.AnimationMixer(gltf.scene)
        const action = mixer4.clipAction(gltf.animations[0])
        action.play()

        eol3 = gltf.scene
        scene.add(eol3)

    }
)

// Material
const material = new THREE.ShaderMaterial({
    vertexShader: skyVertexShader,
    fragmentShader: skyFragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
        color1: { value: new THREE.Color('#ffffff') },
        color2: { value: new THREE.Color('#5de3ff') },
    }
})

const floorMaterial = new THREE.ShaderMaterial({
    vertexShader: floorVertexShader,
    fragmentShader: floorFragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
        color1: { value: new THREE.Color('#53a97e') },
        color2: { value: new THREE.Color('#a4e5c5') },
    }
})


// Mesh
const mesh = new THREE.Mesh(geometry, material)
mesh.position.z = 20
scene.add(mesh)

const floorMesh = new THREE.Mesh(floor, floorMaterial)
floorMesh.rotation.x = - Math.PI * 0.5
scene.add(floorMesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
light.intensity = 0.5
scene.add( light );

const pointLight = new THREE.PointLight( 0xffffff, 0.5, 100 );
pointLight.position.set( 3, 5, -8 );

const pointLight2 = new THREE.PointLight( 0xffffff, 0.5, 100 );
pointLight2.position.set( -3, 5, -8 );
scene.add( pointLight,pointLight2 );


window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    welcome.style.width = window.innerWidth + 'px'
    welcome.style.height = window.innerHeight + 'px'

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 800)
camera.position.set(0, 3, -10)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

let currentIntersect = null

const raycaster = new THREE.Raycaster()
raycaster.layers.disableAll()



const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    raycaster.setFromCamera(mouse,camera)


    // Update controls
    controls.update()

    if(mixer && mixer2 && mixer3 && mixer4)
    {
        mixer.update(deltaTime)
        mixer2.update(deltaTime)
        mixer3.update(deltaTime)
        mixer4.update(deltaTime)
    }

    TWEEN.update()
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()