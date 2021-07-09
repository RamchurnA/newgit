console.log("hello new website");

let scene, renderer;

function init(){

    scene = new THREE.scene();

    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);

    hlight = new THREE.AmbientLight(0X404040, 100);
    scene.add(hlight);

    renderer = new THREE.WebGL1Renderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

