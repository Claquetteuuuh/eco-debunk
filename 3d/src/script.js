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
let biome = 0
welcome.style.width = window.innerWidth + 'px'
welcome.style.height = window.innerHeight + 'px'
welcome.style.display = 'flex'
let infos = document.querySelector('#infos')
let instr1 = document.querySelector("#instr1")
let instr2 = document.querySelector("#instr2")
let badge1 = document.querySelector("#badge1")
let badge2 = document.querySelector("#badge2")
let badge3 = document.querySelector("#badge3")
let hub = document.querySelector("#hub")
let back = document.querySelector("#back")

let mixer = null
let mixer2 = null
let mixer3 = null
let mixer4 = null
let powerPlant = null
let eol1 = null
let eol2 = null
let eol3 = null
let forest = null
let city = null
let medkit = null
let skyscraper = null
let water = null
let house = null
let iceberg = null

badge1.addEventListener('click', () => {
    console.log("tst")
    hub.style.top = '100vh'
    biome = 1
    raycaster.layers.enable(0)
    floorMesh.material.uniforms.color1.value = new THREE.Color('#53a97e')
    floorMesh.material.uniforms.color2.value = new THREE.Color('#a4e5c5')

    gltfLoader.load(
        '/models/untitled.glb',
        (gltf) => {
            gltf.scene.position.set(2, 0, -6)
            gltf.scene.scale.set(2., 2., 2.)
            gltf.scene.rotateY(Math.PI)
            forest = gltf.scene
            scene.add(forest)

        }
    )


    gltfLoader.load(
        '/models/power_plant.glb',
        (gltf) => {
            gltf.scene.position.set(-3, 0, -3)
            gltf.scene.rotateY(-1.)
            gltf.scene.scale.set(1.2, 1.2, 1.2)
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
        (gltf) => {
            gltf.scene.position.set(6, 0, -4)
            gltf.scene.rotateY(1.)
            gltf.scene.scale.set(0.0006, 0.0006, 0.0006)
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
        (gltf) => {
            gltf.scene.position.set(5, 0, -6)
            gltf.scene.rotateY(0.9)
            gltf.scene.scale.set(0.0003, 0.0003, 0.0003)
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
        (gltf) => {
            gltf.scene.position.set(5, 0, -3)
            gltf.scene.rotateY(0.9)
            gltf.scene.scale.set(0.0003, 0.0003, 0.0003)
            gltf.scene.rotateY(Math.PI)

            mixer4 = new THREE.AnimationMixer(gltf.scene)
            const action = mixer4.clipAction(gltf.animations[0])
            action.play()

            eol3 = gltf.scene
            scene.add(eol3)

        }
    )
})

badge2.addEventListener('click', () => {
    console.log("tst")
    hub.style.top = '100vh'
    biome = 1
    raycaster.layers.enable(0)
    floorMesh.material.uniforms.color1.value = new THREE.Color('#979797')
    floorMesh.material.uniforms.color2.value = new THREE.Color('#979797')

    gltfLoader.load(
        '/models/city.glb',
        (gltf) => {
            gltf.scene.position.set(2, 0, -6)
            gltf.scene.scale.set(2., 2., 2.)
            gltf.scene.rotateY(Math.PI)
            city = gltf.scene
            scene.add(city)

        }
    )


    gltfLoader.load(
        '/models/medkit.glb',
        (gltf) => {
            gltf.scene.position.set(-3, 2, -3)
            gltf.scene.scale.set(0.1, 0.1, 0.1)
            gltf.scene.rotateY(Math.PI * 0.8)

            medkit = gltf.scene
            scene.add(medkit)

        }
    )
    gltfLoader.load(
        '/models/skyscraper.glb',
        (gltf) => {
            gltf.scene.position.set(6, 0, -4)
            gltf.scene.rotateY(1.)
            gltf.scene.scale.set(0.03, 0.03, 0.03)
            gltf.scene.rotateY(Math.PI)

            skyscraper = gltf.scene
            scene.add(skyscraper)

        }
    )
})

badge3.addEventListener('click', () => {
    console.log("badge3")
    hub.style.top = '100vh'
    biome = 1
    raycaster.layers.enable(0)
    floorMesh.material.uniforms.color1.value = new THREE.Color('#519cfb')
    floorMesh.material.uniforms.color2.value = new THREE.Color('#58e4fd')

    gltfLoader.load(
        '/models/water.glb',
        (gltf) => {
            gltf.scene.position.set(2, 0, -6)
            gltf.scene.scale.set(2., 2., 2.)
            gltf.scene.rotateY(Math.PI)
            city = gltf.scene
            scene.add(city)

        }
    )


    gltfLoader.load(
        '/models/house.glb',
        (gltf) => {
            gltf.scene.position.set(-5, -0.5, -3)
            gltf.scene.scale.set(0.02, 0.02, 0.02)
            gltf.scene.rotateY(Math.PI * 0.3)

            house = gltf.scene
            scene.add(house)

        }
    )
    gltfLoader.load(
        '/models/iceberg.glb',
        (gltf) => {
            gltf.scene.position.set(6, 0, -4)
            gltf.scene.rotateY(1.)
            gltf.scene.scale.set(0.009, 0.009, 0.009)
            gltf.scene.rotateY(Math.PI)

            iceberg = gltf.scene
            scene.add(iceberg)

        }
    )
})

back.addEventListener('click', () => {
    hub.style.top = '0vh'
    raycaster.layers.disableAll()
    if (forest || city || water) {
        scene.remove(powerPlant, eol1, eol2, eol3, forest, city, medkit, skyscraper, water, house, iceberg)
        powerPlant = null
        mixer = null
        mixer2 = null
        mixer3 = null
        mixer4 = null
        powerPlant = null
        eol1 = null
        eol2 = null
        eol3 = null
        forest = null
        city = null
        medkit = null
        skyscraper = null
        house = null
        iceberg = null
    }
})


var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
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
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1

    if (powerPlant) {
        const modelIntersects = raycaster.intersectObject(powerPlant)

        if (modelIntersects.length) {
            new TWEEN.Tween(powerPlant.scale)
                .to(
                    {
                        x: 1.1,
                        y: 1.1,
                        z: 1.1
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
        else {
            new TWEEN.Tween(powerPlant.scale)
                .to(
                    {
                        x: 1.,
                        y: 1.,
                        z: 1.
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
    }
    if (eol1) {
        const modelIntersects = raycaster.intersectObject(eol1)
        console.log("okay")

        if (modelIntersects.length) {
            new TWEEN.Tween(eol1.scale)
                .to(
                    {
                        x: 0.0007,
                        y: 0.0007,
                        z: 0.0007,
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
            if (eol2) {
                new TWEEN.Tween(eol2.scale)
                    .to(
                        {
                            x: 0.0004,
                            y: 0.0004,
                            z: 0.0004,
                        },
                        150
                    ).easing(TWEEN.Easing.Bounce.EaseOut)
                    .start()
            }
            if (eol3) {
                new TWEEN.Tween(eol3.scale)
                    .to(
                        {
                            x: 0.0004,
                            y: 0.0004,
                            z: 0.0004,
                        },
                        150
                    ).easing(TWEEN.Easing.Bounce.EaseOut)
                    .start()
            }
        }
        else {
            new TWEEN.Tween(eol1.scale)
                .to(
                    {
                        x: 0.0006,
                        y: 0.0006,
                        z: 0.0006,
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
            if (eol2) {
                new TWEEN.Tween(eol2.scale)
                    .to(
                        {
                            x: 0.0003,
                            y: 0.0003,
                            z: 0.0003,
                        },
                        150
                    ).easing(TWEEN.Easing.Bounce.EaseOut)
                    .start()
            }
            if (eol3) {
                new TWEEN.Tween(eol3.scale)
                    .to(
                        {
                            x: 0.0003,
                            y: 0.0003,
                            z: 0.0003,
                        },
                        150
                    ).easing(TWEEN.Easing.Bounce.EaseOut)
                    .start()
            }
        }
    }
    if (medkit) {
        const modelIntersects = raycaster.intersectObject(medkit)

        if (modelIntersects.length) {
            new TWEEN.Tween(medkit.scale)
                .to(
                    {
                        x: 0.11,
                        y: 0.11,
                        z: 0.11
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
        else {
            new TWEEN.Tween(medkit.scale)
                .to(
                    {
                        x: 0.1,
                        y: 0.1,
                        z: 0.1
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
    }
    if (skyscraper) {
        const modelIntersects = raycaster.intersectObject(skyscraper)

        if (modelIntersects.length) {
            new TWEEN.Tween(skyscraper.scale)
                .to(
                    {
                        x: 0.04,
                        y: 0.04,
                        z: 0.04
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
        else {
            new TWEEN.Tween(skyscraper.scale)
                .to(
                    {
                        x: 0.03,
                        y: 0.03,
                        z: 0.03
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
    }
    if (house) {
        const modelIntersects = raycaster.intersectObject(house)

        if (modelIntersects.length) {
            new TWEEN.Tween(house.scale)
                .to(
                    {
                        x: 0.023,
                        y: 0.023,
                        z: 0.023
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
        else {
            new TWEEN.Tween(house.scale)
                .to(
                    {
                        x: 0.02,
                        y: 0.02,
                        z: 0.02
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
    }
    if (iceberg) {
        const modelIntersects = raycaster.intersectObject(iceberg)

        if (modelIntersects.length) {
            new TWEEN.Tween(iceberg.scale)
                .to(
                    {
                        x: 0.01,
                        y: 0.01,
                        z: 0.01
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
        else {
            new TWEEN.Tween(iceberg.scale)
                .to(
                    {
                        x: 0.009,
                        y: 0.009,
                        z: 0.009
                    },
                    150
                ).easing(TWEEN.Easing.Bounce.EaseOut)
                .start()
        }
    }
})

window.addEventListener('click', () => {
    welcome.style.top = '-100vh'
    infos.style.top = '-100vh'

    if (instr1.style.top != "100vh") {
        setTimeout(() => {
            instr1.style.top = "-9vh"
            instr2.style.top = "9vh"
        }, 1000)
    }
    if (powerPlant) {
        const modelIntersects = raycaster.intersectObject(powerPlant)

        if (modelIntersects.length) {
            infos.innerHTML = `
            <h4>"Le nucléaire est une énergie polluante”</h4><br/>

            Le nucléaire n’émet <b>pas</b> de CO2 lors de sa création, cependant il pollue avec les déchets radioactif qu’il crée ainsi que lors de l’extraction de la matiere premiere.<br/><br/>
            Dotée de 56 réacteurs nucléaires, un record en Europe, <u>la France produit 70% de son énergie grâce au nucléaire</u>.
            La part de l'énergie nucléaire dans la production totale d'électricité en France en 2021 est de 69% et le nombre de réacteurs nucléaires opérationnels en France en 2022 est de 56.
            </div>`
            infos.style.setProperty('top', 'calc(50vh - 9em)')
            infos.style.setProperty('left', 'calc(50vw - 18.5em)')
            infos.style.setProperty('height', 'fit-content')
            infos.style.setProperty('padding-top', '10px')
            infos.style.setProperty('padding-bottom', '10px')
            infos.style.setProperty('border-radius', '5px')
            infos.style.setProperty('background-color', 'rgba(115,201,104)')
            infos.style.setProperty('border', 'solid 1px black')

        }
    }
    if (eol1) {
        const modelIntersects = raycaster.intersectObject(eol1)

        if (modelIntersects.length) {
            infos.innerHTML = `
            <h4>"Les énergies renouvelables ne peuvent pas remplacer les énergies fossiles de manière réaliste."</h4><br/>
            
            Les technologies d'énergie renouvelable, telles que l'énergie solaire et éolienne, deviennent de plus en plus compétitives et sont capables de répondre à une part importante des besoins énergétiques mondiaux. Les progrès technologiques rendent ces solutions de plus en plus viables.
            <br/><br/>
            Transition vers des énergies renouvelables : L'adoption massive de sources d'énergie renouvelable, telles que l'énergie solaire et éolienne, peut fournir une part importante des besoins mondiaux en électricité. D'apres les calculs du SDES, la France produit <b>111 TWh d'électricité renouvelable</b>, elle est produite partout en france même si <u>la moitié provient d'une seule et même région, l'Auvergne Rhones Alpes</u>.
            `
            infos.style.setProperty('top', 'calc(50vh - 9em)')
            infos.style.setProperty('left', 'calc(50vw + 5.5em)')
            infos.style.setProperty('height', 'fit-content')
            infos.style.setProperty('padding-top', '10px')
            infos.style.setProperty('padding-bottom', '10px')
            infos.style.setProperty('border-radius', '5px')
            infos.style.setProperty('background-color', 'rgba(115,201,104)')
            infos.style.setProperty('border', 'solid 1px black')

        }
    }
    if (medkit) {
        const modelIntersects = raycaster.intersectObject(medkit)

        if (modelIntersects.length) {
            infos.innerHTML = `
            <h4>"Le dereglement n’a pas d’effet sur la santé”</h4><br/>

            Le dérèglement climatique a des impacts directs et indirects sur la santé humaine,
            contredisant l'idée que cela n'affecte pas la santé. Ces impacts incluent des vagues
            de chaleur plus fréquentes, la propagation de maladies vectorielles, des problèmes
            respiratoires accrus, des événements météorologiques extrêmes, des risques accrus
            d'insécurité alimentaire et des implications pour la résistance aux antibiotiques.
            Il est essentiel de reconnaître ces liens pour orienter des politiques efficaces visant
            à protéger la santé des populations.
            Les températures élevées augmentent également la concentration d'ozone, ce qui peut
            endommager le tissu pulmonaire et causer des complications chez les asthmatiques et les
            personnes souffrant de maladies respiratoires.
            . Ce sont les régions qui ont le moins contribué au réchauffement climatique qui sont
            les plus vulnérables aux maladies causées par la hausse des températures et qui risquent
            de voir le nombre de décès augmenter. Les côtes qui bordent l'Océan Pacifique, l'océan
            Indien et l'Afrique subsaharienne sont les plus menacées par les effets du réchauffement
            climatique.`
            infos.style.setProperty('top', 'calc(50vh - 9em)')
            infos.style.setProperty('left', 'calc(50vw - 18.5em)')
            infos.style.setProperty('height', 'fit-content')
            infos.style.setProperty('padding-top', '10px')
            infos.style.setProperty('padding-bottom', '10px')
            infos.style.setProperty('border-radius', '5px')
            infos.style.setProperty('background-color', 'rgba(118, 140, 176)')
            infos.style.setProperty('border', 'solid 1px black')

        }
    }
    if (skyscraper) {
        const modelIntersects = raycaster.intersectObject(skyscraper)

        if (modelIntersects.length) {
            infos.innerHTML = `
            <h4>"SANCTIONNER LES MULTINATIONALES Sanctionner les multinationales.”</h4><br/>

            Les multinationales ont à contribuer à l’effort collectif. Il n’est plus acceptable
            aujourd’hui qu’elles puissent continuer à polluer l'atmosphère sans être jamais appelées
            à rendre compte de leurs actes et des catastrophes humanitaires, passées et à venir, dont
            elles sont directement ou indirectement responsables. Il est donc temps d’instaurer une
            justice climatique.
            La Commission des droits de l’Homme des Philippines a ainsi commencé à enquêter sur ces
            actes et à poursuivre de grandes multinationales, dont Lafarge et Total, pour leur
            contribution criminelle au réchauffement climatique.`
            infos.style.setProperty('top', 'calc(50vh - 9em)')
            infos.style.setProperty('left', 'calc(50vw + 5.5em)')
            infos.style.setProperty('height', 'fit-content')
            infos.style.setProperty('padding-top', '10px')
            infos.style.setProperty('padding-bottom', '10px')
            infos.style.setProperty('border-radius', '5px')
            infos.style.setProperty('background-color', 'rgba(118, 140, 176)')
            infos.style.setProperty('border', 'solid 1px black')

        }
    }
    if (house) {
        const modelIntersects = raycaster.intersectObject(house)

        if (modelIntersects.length) {
            infos.innerHTML = `
            <h4>Le déréglement climatique va engendrer une importante migration</h4><br/>

            Les populations vont etre forcé a migrer a cause de la montée des eaux, de la désertification et de la perte de terres agricoles. Ces migrations vont engendrer des conflits et des guerres pour l’accès aux ressources. Il est donc important de prendre des mesures pour éviter ces migrations.
            Le développement de capacités d'adaptation dans les villes côtières vulnérables, telles que la gestion de l'érosion et la conception de bâtiments résistants aux inondations, nécessite une mise en œuvre à grande échelle.
            Les petits gestes individuels, tels que la réduction de la consommation d'énergie, la limitation des déchets et la promotion du covoiturage, peuvent contribuer collectivement à la réduction des émissions de gaz à effet de serre et encourager des changements systémiques.`
            infos.style.setProperty('top', 'calc(50vh - 9em)')
            infos.style.setProperty('left', 'calc(50vw - 18.5em)')
            infos.style.setProperty('height', 'fit-content')
            infos.style.setProperty('padding-top', '10px')
            infos.style.setProperty('padding-bottom', '10px')
            infos.style.setProperty('border-radius', '5px')
            infos.style.setProperty('background-color', 'rgba(104, 158, 247)')
            infos.style.setProperty('border', 'solid 1px black')

        }
    }
    if (iceberg) {
        const modelIntersects = raycaster.intersectObject(iceberg)

        if (modelIntersects.length) {
            infos.innerHTML = `
            <h4>La fonte des banquises et la montée des eaux</h4><br/>

            L'effet le plus connu est en effet la montée des eaux à cause de la fonte des banquises, la montée des eaux n'est pas le seul problème puisqu'un écosystème entier est en train de disparaître. Les ours polaires sont en voie d'extinction, les phoques et les pingouins sont en danger.`
            infos.style.setProperty('top', 'calc(50vh - 9em)')
            infos.style.setProperty('left', 'calc(50vw + 5.5em)')
            infos.style.setProperty('height', 'fit-content')
            infos.style.setProperty('padding-top', '10px')
            infos.style.setProperty('padding-bottom', '10px')
            infos.style.setProperty('border-radius', '5px')
            infos.style.setProperty('background-color', 'rgba(104, 158, 247)')
            infos.style.setProperty('border', 'solid 1px black')
        }
    }

})

setTimeout(() => {
    welcome.style.top = '-100vh'
    if (instr1.style.top != "100vh") {
        setTimeout(() => {
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

const light = new THREE.AmbientLight(0xffffff); // soft white light
light.intensity = 0.5
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
pointLight.position.set(3, 5, -8);

const pointLight2 = new THREE.PointLight(0xffffff, 0.5, 100);
pointLight2.position.set(-3, 5, -8);
scene.add(pointLight, pointLight2);


window.addEventListener('resize', () => {
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



const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    raycaster.setFromCamera(mouse, camera)


    // Update controls
    controls.update()

    if (mixer && mixer2 && mixer3 && mixer4) {
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