import React from 'react'
import { BlurFilter, Filter, BLEND_MODES} from 'pixi.js';
import { Stage, Sprite } from '@pixi/react';
import { useMemo} from 'react';
import { useIteration } from '../functions/useIteration';

  
const PixiSmoke = () => {

	const i = useIteration(0.02);

	const uniforms = {
		dimensions: [window.innerWidth, window.innerHeight],
		alpha: 0.5,
		shift:  1.6,
		time: 0,
		speed: [0.007, 0.004],
		};

	  const fragment = `
	  precision mediump float;
	  uniform vec2      dimensions;
	  uniform float     time;
	  uniform float     alpha;
	  uniform vec2      speed;
	  uniform float     shift;
		
	  float rand(vec2 n) {
	   return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
	  }
	  
	  float noise(vec2 n) {
		const vec2 d = vec2(0.0, 1.0);
		vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
		return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
	  }
	  
	  float fbm(vec2 n) {
		float total = 0.0, amplitude = 0.7;
		for (int i = 0; i < 4; i++) {
		  total += noise(n) * amplitude;
		  n += n;
		  amplitude *= 0.5;
		}
		return total;
	  }
	  
	  void main() {
		const vec3 c1 = vec3(205.0/255.0, 205.0/255.0, 205.0/255.0);
		const vec3 c2 = vec3(153.0/255.0, 153.0/255.0, 153.0/255.0);
		const vec3 c3 = vec3(0.2, 0.2, 0.2);
		const vec3 c4 = vec3(144.0/255.0, 144.0/255.0, 144.0/255.0);
		const vec3 c5 = vec3(0.1);
		const vec3 c6 = vec3(0.9);
	  
		vec2 p = gl_FragCoord.xy * 8.0 / dimensions.xx;
		float q = fbm(p - time * 0.1);
		vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));
		vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);
		float grad = gl_FragCoord.y / dimensions.y;
		gl_FragColor = vec4(c * cos(shift * gl_FragCoord.y / dimensions.y), 1.0);
		gl_FragColor.xyz *= 0.5-grad;
	  }
	  `;
	const blurFilter = useMemo(() => new BlurFilter(4), []);
	const smokeFilter = useMemo(() => new Filter('', fragment, uniforms), []);
	smokeFilter.uniforms.time = i;

	return(
		<Stage width={window.innerWidth} height={window.innerHeight} raf={false} renderOnComponentChange={true}>
			<Sprite image="../src/assets/david-marcu-1.jpg" width={window.innerWidth} height={window.innerHeight} x={0} y={0} filters={[smokeFilter]}/>
			<Sprite image="../src/assets/david-marcu-1.jpg" width={window.innerWidth} height={window.innerHeight} x={0} y={0} blendMode={BLEND_MODES.ADD} />
		</Stage>

	);
};

export default PixiSmoke