precision mediump float;

uniform float uTime;
uniform vec2 uMouse;

varying vec3 vPos;
varying vec3 vNormal;

float fresnel(vec3 n, vec3 v) {
  return pow(1.0 - max(dot(n, v), 0.0), 3.0);
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vec3(0.0, 0.0, 1.0));

  float f = fresnel(N, V);

  vec3 deep = vec3(0.02, 0.05, 0.10);
  vec3 iceA = vec3(0.50, 0.86, 1.00);
  vec3 iceB = vec3(0.74, 0.62, 1.00);

  float wave = 0.5 + 0.5 * sin(uTime * 0.6 + vPos.y * 2.4);
  vec3 tint = mix(iceA, iceB, wave);

  vec3 col = mix(deep, tint, 0.55);
  col += tint * f * 1.2;

  float alpha = 0.22 + f * 0.55;

  gl_FragColor = vec4(col, alpha);
}