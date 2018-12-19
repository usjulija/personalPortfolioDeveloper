//based on tutorial https://www.clicktorelease.com/blog/how-to-make-clouds-with-css-3d/
const world = document.getElementById( 'world' );
const viewport = document.getElementById( 'viewport' );
const d = 0;
const  p = 400;

let worldYAngle = 0
let worldXAngle = 0;
let objects = [];
let layers = [];

viewport.style.webkitPerspective = p;
viewport.style.MozPerspective = p;
viewport.style.oPerspective = p;
viewport.style.perspective = p;

window.addEventListener( 'mousemove', onMouseMove );
window.addEventListener( 'touchmove', onMouseMove );

function onMouseMove (e) {
  e.preventDefault();
  let x = e.clientX || e.touches[ 0 ].clientX;
  let y = e.clientY || e.touches[ 0 ].clientY;
  worldYAngle = -( 0.5 - ( x / window.innerWidth ) ) * 180;
  worldXAngle = ( 0.5 - ( y / window.innerHeight ) ) * 180;
  updateView();
}

function updateView() {
  let t = `translateZ(${d}px ) rotateX(${worldXAngle}deg) rotateY(${worldYAngle}deg)`;
  world.style.transform = t;
  world.style.webkitTransform = t;
  world.style.MozTransform = t;
  world.style.oTransform = t;
}

function generate() {
  //removes previous clouds
  objects = [];
  layers = [];

  if ( world.hasChildNodes() ) {
    while ( world.childNodes.length >= 1 ) {
      world.removeChild( world.firstChild );
    }
  }

  //adds new clouds
  for( let j = 0; j < 5; j++ ) {
    objects.push( createCloud() );
  }
}

function randomizer(range) {
  let randomX = Math.floor(Math.random()*range) + 1;
  randomX *= Math.floor(Math.random()*2) == 1 ? 1 : -1; //50% chance negative result
  return randomX;
}

function createCloud() {
  const random_x = randomizer(256);
  const random_y = randomizer(256);
  const random_z = randomizer(256);

  const div = document.createElement('div');
  div.className = 'cloudBase';
  let transform = `translateX(${random_x}px) translateY(${random_y}px) translateZ(${random_z}px)`;
  div.style.transform = transform;
  div.style.webkitTransform = transform;
  div.style.MozTransform = transform;
  div.style.oTransform = transform;
  world.appendChild( div );

  for( let j = 0; j < 5 + Math.round(Math.random() * 10); j++ ) {
    const cloud = document.createElement( 'img' );
    cloud.style.opacity = 0.8;
    let x = Math.floor((Math.random() * 3) + 1);

    if (x === 1) {
      cloud.setAttribute('src', './images/cloud.png');
    } else if (x === 2) {
      cloud.setAttribute('src', './images/cloud2.png');
    } else {
      cloud.setAttribute('src', './images/cloud3.png');
    }
    cloud.className = 'cloudLayer';

    cloud.data = {
      x: randomizer(random_x),
      y: randomizer(random_y),
      z: randomizer(100),
      a: Math.round( Math.random() * 360 ),
      s: 0.25 + Math.random(),
      speed: 0.1 * Math.random()
    };

    let cloudT = `translateX( ${cloud.data.x}px ) translateY(${cloud.data.y}px ) translateZ(${cloud.data.z}px ) rotateZ(${cloud.data.a}deg ) scale(${cloud.data.s} )`;
    cloud.style.transform = cloudT;
    cloud.style.webkitTransform = cloudT;
    cloud.style.MozTransform = cloudT;
    cloud.style.oTransform = cloudT;

    div.appendChild( cloud );
    layers.push( cloud );
  }
  return div;
}

function update (){
  layers.forEach(layer => {
    layer.data.a += layer.data.speed;
    let t = `translateX(${layer.data.x}px) translateY(${layer.data.y}px) translateZ(${layer.data.z}px) rotateY( ${( - worldYAngle )}deg) rotateX(${( - worldXAngle )}deg) rotateZ( ${layer.data.a}deg) scale(${layer.data.s})`;
    layer.style.webkitTransform = t;
    layer.style.MozTransform = t;
    layer.style.oTransform = t;
  });
  requestAnimationFrame( update );
}
generate();
update();
