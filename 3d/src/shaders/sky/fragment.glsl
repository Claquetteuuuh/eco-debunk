varying vec2 vUv;
varying float vElevation;

uniform vec3 color1;
uniform vec3 color2;


void main()
{ 

    vec4 color = vec4(mix(color1, color2, vUv.y), 1.0);
    gl_FragColor = color;
} 