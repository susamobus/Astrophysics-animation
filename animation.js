import * as THREE from 'three';

function Test5() {
    document.getElementById("test5").innerHTML = "success"
}

const camera = new THREE.PerspectiveCamera(70, (window.innerWidth * 0.6) / (window.innerHeight * 0.5), 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("Display")});
renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.5)

function RemoveScene() {
    while(scene.children.length > 0){
        scene.remove(scene.children[0]);
    }
}

const geometry2 = new THREE.BoxGeometry(1,1,1)
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mesh2 = new THREE.Mesh(geometry2, material2)
scene.add(mesh2)

const meshes = []

function SetScene() {
    RemoveScene()
    for (i = 1; i <= n; i++) {
    const geometry = new THREE.SphereGeometry(1,1,1);
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry,material);
    mesh.position.set(r[i-1][0],r[i-1][1],r[i-1][2])
    meshes.push(mesh)
    scene.add(mesh);
}
}

function animate() {
    requestAnimationFrame(animate);
    /*
    Calculate()
    for (i = 1; i <= n; i++) {
        mesh[i-1].position.set(r[i-1][0],r[i-1][1],r[i-1][2])
    }
    */
    renderer.render(scene,camera);
}

