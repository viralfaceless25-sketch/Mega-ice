precision mediump float;

uniform float uTime;
uniform vec2 uMouse;

varying vec3 vPos;
varying vec3 vNormal;

void main() {
  vNormal = normal;
  vPos = position;

  vec3 pos = position;

  // subtle “cold aura” breathing + surface drift
  float t = uTime * 0.7;
  float ripple =
    sin(pos.y * 2.2 + t) * 0.05 +
    cos(pos.x * 2.0 + t * 0.8) * 0.04;

  // tiny response to mouse so it feels alive (not a moon)
  float mx = (uMouse.x - 0.5);
  float my = (uMouse.y - 0.5);
  ripple += sin(pos.z * 1.6 + t) * 0.03;
  pos += normal * ripple;
  pos.x += mx * 0.12;
  pos.y += my * 0.10;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}