import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 1,
        duration: 40,
      });
  }, []);

  return (
    <div className="globe-container" ref={bgRef}>
      <svg
        className="globe-logo"
        width="6719.37pt"
        height="6717.71pt"
        version="1.0"
        viewBox="0 0 6719.37 6717.71"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-globe-container"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M1765.34 5586.48c-25.49,100.09 21.5,129.7 18.61,310.14 -122.35,-32.87 -123.26,-114.83 -169.36,-178.13 -25.66,-35.22 -6.13,-94.34 -21.13,-151.91 -20.37,-77.99 -13.26,-66.86 -70.36,-102.01 -14.61,-105.09 -9.17,-202.32 -24.14,-301.51 -52.94,-350.55 80.8,-537.04 -153.67,-676.35 -49.66,-29.51 -80.17,-3.58 -86.74,-79.04 -12.16,-139.51 -95.71,-106.66 -141.29,-183.87 -28.31,-47.92 -20.49,-62.06 -61.03,-105.25 -48.46,-51.62 2.72,-67.3 -17.04,-135.39 -44.48,-153.23 100.29,-187.61 124.31,-351.12 11.42,-77.67 -24.46,-82 -25.74,-122.2 10.22,-8.06 0,-1.81 16.4,-7.53 61.32,-21.37 21.64,-2.59 73.09,-49.61 1,-0.95 2.6,-2.38 3.63,-3.26l12.13 -8.7c19.68,20.83 13.5,18.82 36.1,34.73 28.36,19.37 120.95,59.88 126.59,-8.06 1.12,-13.77 -1.69,-18.5 -1.77,-22.79 -0.05,-1.89 -0.42,-3.8 -0.34,-5.64 0.08,-1.79 0.1,-3.8 0.29,-5.52 2.06,-18.21 -3.99,-2.84 4.86,-15.76 15.68,-2.04 45.76,26.4 77.5,35.69 38.04,11.1 80.24,5.59 120.29,11.91 68.23,10.78 153.57,134.41 329.79,180.98 50.66,13.38 49.85,11.62 75.91,48.87 17.04,24.36 42.3,57.15 49.9,84.43 -25.17,21.18 -41.81,20.44 -71.54,47.03 -6.93,67.57 34.34,90.29 96.29,77.55 17.25,25.02 25.83,55.61 68.19,52.5 57.3,-4.21 66.05,-81.27 112.35,-4.71 41.32,68.31 101.66,8.48 155.09,23.48l192.77 77.6c3.68,92.37 7.11,95.9 -30.37,169.24 -53.99,105.61 -81.74,65.49 -96.35,117.79 -18.06,64.63 0.17,222.42 -26.1,284.14 -10.84,25.44 -27.3,49.29 -36.86,75.17 -93.21,5.84 -214.82,104.82 -239.19,141.37 -31.45,47.13 -12.6,55.85 -22.74,106.98 -4.48,22.58 -26.4,61.79 -34.51,92.45 -15.69,59.27 -15.49,46.15 -49.73,80.76 -14.71,14.83 -53.99,51.35 -69.63,54.04 -46.84,8.08 -53.38,-28.5 -112.64,-6.96 -35.39,71.42 5.17,94.24 22.64,147.18 -48.35,37.45 -87.52,64.16 -117.08,103.11 -65.68,86.61 4.73,119.5 -37.38,168.18zm1752.6 -2777.49c34.68,-31.37 33.01,-56.86 73.4,-91.35 41,-35 38.5,-42.08 56.81,-101.89 9.07,-29.65 7.97,-36.59 26.45,-56.69 50.05,-54.48 75.22,-68.87 127.7,-112.99 94.55,52.79 177.35,4.83 243.15,-8.16 41.35,-8.17 93.23,0.27 134.26,-9.71 33.73,-8.21 74.07,-23.7 107.97,-32.99 2.64,56 34.97,100 69.73,123.35 80.71,54.22 50.78,72.32 98.94,87.84 20.41,6.57 140.9,29.9 160.14,29.19 89.38,-3.38 89.41,-49.54 105.78,-80.02 54.71,15.1 129.66,69.14 192.74,60.76 51.47,-6.82 35.42,-12.8 100.34,-1.72 35.39,6.05 75.91,9.24 103.84,23.68 32.7,103.7 48.16,186.07 104.58,266.19l144.02 229.68c81.67,137.27 66.88,149.31 110.17,263.45 49.04,129.28 131.91,49.56 184.53,47.4 27.87,-1.12 61.76,0.27 89.9,1.15 -4.43,25.68 -10.54,56.52 -12.32,84.9 -8.82,139.16 -191.32,179.43 -218.01,225.75l-49.87 115.71c-21.25,48.33 -130.14,198.4 -134.68,233.22 -5.34,40.96 46.69,88.46 62.23,123.87 12.74,29.09 9.58,134.07 5.24,171.69 -27.23,14.58 -53.09,29.58 -83.4,46.66 -34.8,19.61 -42.13,25.86 -69.48,55.05 -66.35,70.81 -57.08,57.77 -77.82,178.09 -15.34,88.96 -41.99,110.32 -77.94,178.2 -29.41,55.54 -60.37,115.44 -89.8,167.13 -89.09,159.63 -29.97,127.05 -243.03,132.47 -46.91,1.18 -78.65,17.69 -93.01,-26.2 -33.63,-102.74 14.02,-52.94 -69.34,-180.46 -64.41,-98.58 -41.69,-51.03 -58.75,-197.13 -12.3,-105.12 -156.22,-166.66 -70.56,-382.22 49.24,-123.92 35.49,-71.47 7.57,-198.18 -11.59,-52.59 -34.19,-157.18 -69.24,-180.73 -13.77,-41.54 -75.36,-107.65 -67.64,-150.51 7.82,-43.28 78.16,-95.37 46.13,-151.35 -21.05,-36.79 -36.71,-10.8 -55.31,-49.11 -16.52,-33.97 -13.33,-47.72 -60.61,-49.24 -133.4,-4.24 -63.03,-34.27 -161,-62.08 -57.33,-10.12 -138.13,12.94 -188.42,29.88 -65.34,22.01 -125.88,15.88 -191.2,37.18 -82.5,26.93 -110.36,-22.25 -154.6,-57.7 -67.96,-54.46 -11.79,-106.91 -78.33,-149.99 -20,-12.97 -57.82,-29.63 -69.55,-41.37 -22.74,-22.79 -20.27,-35.09 -31.82,-64.53 -48.3,-123.23 45.44,-49.54 22.75,-167.94 -15.39,-80.27 -48.46,-83.94 -2.21,-178.15 33.43,-68.14 41.52,-91.94 99.61,-130.1zm1370.3 -476.55c40.41,25.83 64.99,62.84 123.33,92.55 85.98,43.75 109.53,-25.39 174.14,-15.07 10.66,28.7 17.53,72.62 4.9,94.58 -55.83,97.13 -157.37,-1.57 -273.52,17.35 -159.23,25.94 -118.99,-135.31 -241.56,-41.05 -24.85,19.12 -38.4,26.3 -42.25,68.99 -44.7,1.72 -80.96,-11.25 -122.03,-18.94 -31.71,-5.93 -24.88,-4.09 -41.84,-27.21 -42.58,-58.01 -94.04,-45.22 -93.87,-114.31 0.12,-53.77 -2.11,-69.95 -52.4,-85.32 -40.9,-12.48 -142.08,45.66 -223.43,46.86 -135.36,1.99 -74.34,22.92 -172.71,31.27 -23.18,1.96 -48.23,4.88 -65.2,-6.69 24,-12.92 150.05,-18.89 188.97,-131.14 4.63,-22.79 36.1,-48.39 68.77,-95.59 47.28,-3.56 64.09,19.88 93.5,8.43 29.09,-11.3 21.56,-37.38 38.87,-62.23 48.78,-3.19 32.99,19.31 65.22,49.34 27.53,25.64 38.7,28.58 54.68,61.76 28.7,18.68 30.81,52.42 61.62,70.31 32.74,19 64.51,21.03 105.58,18.46 27.45,-19.53 78.09,-11.28 68.48,-67.52 -6.67,-38.94 -41.79,-61.18 -59.27,-88.24 75.25,5.05 78.53,100.83 87.23,122.28 8.67,21.33 15.24,15.27 32.79,29.78 32.26,26.66 6.37,57.47 61.1,69.02 144.85,30.56 73.75,-83.92 94.58,-124.33 38.41,1.59 27.97,9.34 40.59,46.57 6.37,18.82 16.17,31.86 23.73,50.1zm-510.26 -715.23c34.8,12.62 76.79,2.89 107.42,-11.15 38.99,-17.89 37.89,-35.93 59.58,-71.91 16.98,-28.21 24.9,-53.85 37.57,-93.23l34.49 -91.79 10.71 21.18c16.4,36.42 22.3,52.86 63.31,73.87 8.63,4.44 10.66,4.8 18.92,9.63 14.09,8.21 6.77,3.61 14.09,9.71 -56.17,19.58 -62.33,55.47 -78.35,81.62 -10.88,17.76 -22.09,21.54 -41.76,40.88 -96,94.36 13.73,4.49 -141.69,51.57 -28.73,8.68 -84.95,22.87 -84.29,-20.37zm-2720.33 -132.47c-13.45,23.8 -47.77,58.43 -68.75,88.35 -17.99,25.69 -53.02,68.72 -61.79,93.01 -1.05,-1.79 -1.86,-4.27 -2.47,-5.71l-15.71 -35.54c-7.25,-9.97 -17.2,-15.39 -28.85,-18.73 -39.85,-11.39 -42.6,3.88 -85.76,-18.33l-133.62 -65.75c-5.47,-61.23 16.42,-56.62 59.16,-86.49 28.65,-20.02 54.14,-45.95 94.38,-54.51 99.7,-20.71 49.87,3.19 138.53,-44.83 46.03,-24.92 34.98,-26.61 51.32,-38.6 36.37,-26.66 179.65,-23.48 218.2,-51.27 27.33,-19.68 20.61,-28.14 38.16,-51.81 18.65,-25.17 24.54,-13.45 39.27,-49.36 74.65,0.17 107.54,15.41 149.48,52.47 -62.33,21.15 -154.92,49.06 -111.71,157.07 -92.48,-2.52 -79.31,-31.44 -173.85,20.02 -69.43,37.82 -57.82,77.97 -106,110zm457.05 142.15c15.27,46.84 34.07,46.81 66.27,72.52 -40.56,28.75 -65.51,37.21 -125.9,42.33 -48.97,10.86 -88.06,5.66 -139.53,26.57 -21.91,8.89 -33.09,19.07 -56.34,26.86 -50.98,17.13 -123.97,32.05 -155.56,79.31 -38.31,57.3 11,74.21 43.14,90.66 -33.23,14.73 -59.41,41.4 -85.29,61.2 -139.6,106.84 -90.49,21.33 -170.78,119.48 -97.05,118.67 -100.34,50.54 -171.56,112.03 -39.43,34.07 -12.65,63.95 -28.04,110.22 -13.26,39.8 -141.62,110.19 -166.66,116.22 -46.05,52.77 -67.45,38.53 -81.47,133.28 -19.83,-16.33 -32.94,-45.67 -63.31,-47.65 -55.76,-3.63 18.38,19.31 -80.51,-9.66 -75.95,-22.28 -106.34,24.68 -130.75,66.91 -45.32,-14.21 -29.31,-45.81 -97.86,-45.83 -130.17,23.68 -112.82,64.75 -178.87,121.62 -23.46,20.2 -56.91,43.48 -77.8,74.43 -28.23,41.89 -11.88,75.49 -5.27,125.17 -10.44,82.18 16.05,185.17 88.57,218.52 59.98,27.6 105.76,52.59 179.68,9.07 43.09,-25.39 21.94,-37.3 31.35,-25.61 5.05,6.25 -15.8,19.51 -11.37,58.67 9.81,86.27 135.66,57.35 169.82,88.36l-2.67 127.1c-49.9,-32.03 -46.91,-90.12 -96.25,-106.12 -78.95,-25.59 -80.07,3.55 -142.54,-50.95 -133.8,-116.74 -117.11,-27.77 -279.23,-108.26 -167.52,-83.16 -161.64,-113.99 -144.53,-222.89 54.46,-346.76 138.67,-576.43 279.26,-889.95 35,-78.03 227.44,-423.27 292.74,-480.42 35.09,-62.16 137.47,-192.42 179.08,-228.62 70.2,25.83 291.34,-8.87 369.65,-33.31 122.1,-38.09 181.07,-54.46 225.29,-205.83l106.03 142.76c-37.89,6.25 -103.23,6.03 -124.22,27.92 -20.44,21.32 -5.12,53.18 -85.29,64.9 -83.16,12.16 -252.07,96.37 -267.15,190.83 -6.17,38.78 6.4,96.69 26.37,120.63 15.17,18.18 25.34,18.01 53.55,21.1 32.03,3.51 30.3,5.71 56.99,20.17 32.62,17.67 63.55,29.41 95.12,50.02 4.46,41.1 -15.42,96.22 14.61,124.31 24.14,22.57 73.47,7.08 97.4,-5.83 30.05,-16.23 38.94,-37.99 57.89,-73.26 45.71,-85.12 144.58,-183.74 171.64,-222.57 44.04,-63.21 53.82,-98.8 163.6,-72.5 28.72,50.12 -10.52,101.66 187.52,70.12 0.42,53.9 0.59,67.94 13.21,115.95zm2906.5 -288.59c141.79,58.16 121.07,-34.98 189.65,-58.33 37.91,-12.92 36.99,-16.93 57.06,-40.19 36.25,0.76 41.42,14.71 80.15,4.53 27.53,-7.23 38.8,-20.71 60.1,-30.49 25.46,-11.69 45.19,1.49 74.92,-0.52 40.02,-2.69 164.07,-49.68 189.65,-30.96l83.28 90.05c100.14,117.1 201.74,245.16 296.68,395.19 39.43,62.33 97.79,149.55 131.37,221.71 91.4,196.49 259.16,528.46 283.33,753.65 21.01,36.77 43.87,191.88 48.97,247.67 -31.37,-13.13 -66.88,-55.63 -91.49,-80.34 -45.61,-45.74 -52.08,-32.87 -131.69,-33.68 -94.12,4.7 -103.11,-4.34 -180.6,-27.7 -45.59,-13.75 -115.27,-28.04 -155.73,-44.7 -78.16,-32.21 -178.13,-116.47 -280.43,-122.4 -79.24,-4.58 -58.94,74.8 -53.58,132.35 4,42.89 63.11,90.12 86.15,113.26 20.98,21.05 34.61,24.92 50.27,53.77 14.41,26.54 21.54,38.11 61.23,33.04 55.05,-7.06 99.77,-41.47 167.59,-36.64 34.49,37.47 37.57,54.24 82.08,87.48 -28.62,32.03 -124.78,93.45 -179.43,137.49 -34.68,65.56 -124.39,87.69 -182.35,136.27 -51.44,-2.35 -81.83,-10.32 -94.26,-53.99 -13.7,-48.18 -15.61,-56.69 -39.41,-98.89 -20.61,-36.54 -40.21,-58.8 -60.95,-84.04 -39.29,-47.84 -19.36,-99.75 -106.81,-176.49 -27.37,-24.05 -64.63,-27.03 -82,-56.35 -13.53,-22.79 -75.44,-169.53 -81.79,-192.98 0.56,-12.4 10.47,-10.71 26.29,-33.53 29.02,-41.86 9.02,-128.35 0,-148.67 -6.69,-50.56 -7.35,-65.66 -62.47,-69.53 -48.09,-3.38 -68.72,-3.16 -105.24,16.03 -41.37,21.79 -52.31,13.84 -84.73,-10.59 -23.26,-17.52 -48.06,-33.62 -62.45,-58.06 11.81,-12.01 56.96,-51.13 67.57,-74.16 23.63,-51.2 -11.93,-64.19 -54.9,-63.85l-58.23 8.26c-11.81,1.25 -104.21,15.07 -111.69,18.06 -30.51,12.16 -54.95,36.4 -66.3,64.19l-35.49 -63.95c-108.58,-149.16 -74.02,-75.9 -157.28,-112.17 -36.61,-15.98 -39.7,-63.6 -99.68,-79.68 -81.05,-21.69 -72.57,12.87 -103.82,59.51l-66.47 -19.07c-74.95,-0.34 -82.82,30.81 -99.36,53.36 -53.74,3.77 -76.19,-4.71 -110.88,29.29 -35.73,35.02 -16.32,47.13 -61.03,72.2 -28.33,47.54 -36.29,84.51 -89.07,109.61 -28.99,13.8 -144.46,23.4 -181.32,18.94 -11.86,-65.1 -21.59,-120.1 34.56,-153.63 50.68,-20.81 194.18,25.54 226.51,-34.12 0.42,-0.73 21.35,-109.21 21.32,-109.87 -0.56,-34.75 -23.13,-38.92 -48.77,-61.39l-7.45 -7.48c92.89,-22.62 138.33,-50 176.49,-122.37 56.66,-107.4 50.54,5.91 171.24,-113.8 0.88,-0.86 3.38,-1.37 4.02,-3.87 0.66,-2.55 2.69,
            -2.65 4.09,-3.95 35.95,86.2 186.78,28.77 274.67,25.51 93.68,-3.45 50.98,-37.45 95.41,-74.19 13.87,-11.45 36.84,-23.7 48.39,-41.1 19.78,-29.81 -1.6,-35.51 29.75,-50.15 25.71,25.69 9.43,71.72 55.41,73.7 40.25,1.77 101.86,-92.57 102.82,-159.82 0.81,-57.5 -0.86,-67.3 -30.39,-95.32 -57.38,0.15 -118.67,45.39 -169.56,-1.74 12.97,-34.33 32.58,-39.73 44.59,-80.29 14.65,-49.44 3.67,-64.41 -24.42,-85.44 -49.63,-21.42 -93.16,15.54 -120.68,37.42 -16.4,13.04 -29.61,21.64 -42.5,40.1 -15.81,22.65 -16.91,29.88 -36.32,48.45 -13.16,25.64 -15.51,19.76 -23.97,58.16 -5.07,23.11 -11.84,42.08 -19.36,63.72 -8.16,23.46 -19.44,35.1 -28.85,53.87 -15.88,31.64 -3.7,28.31 -38.8,39.34 -18.63,-25.51 -34.19,-71.62 -70.56,-76.64 -48.14,-6.62 -16.13,25.81 -128.6,10.73l-3.43 -47.18c30.93,-19.85 59.34,-18.18 90,-37.1 26.64,-16.45 43.04,-39.93 62.94,-57.94 25.71,-41.25 35.71,-40.27 76.81,-71.37 41.84,-31.66 27.52,-46.96 75.63,-70.15 66.49,-32.01 152.5,-56.91 239.38,-54.36 35.44,-3.04 51.86,-3.19 84.38,9.65 27.11,10.71 47.13,16 71.3,25.34 -37.89,84.8 60.95,120.49 98.52,173.3zm-2196.52 -82.52c-58.07,49.04 -20.25,59.04 -54.19,94.83 -20.44,21.59 -53.99,45.46 -95.66,49.78 -19.41,-14.31 -41.59,-33.9 -47.28,-63.65 -5.39,-28.16 -8.7,-73.31 5.83,-95.56 3.51,-5.37 22.26,-22.72 26.96,-28.18 72.94,-84.31 102.03,-124.63 31.42,-251.66 -29.29,-52.7 -72.06,-57.89 -113.09,-93.01 58.58,-17.5 79.11,-13.92 131.22,-41.76 41.66,-22.25 85.88,-23.08 126.54,-41.03 104.17,-16.03 328.72,62.89 406.9,7.01 38.9,-27.79 24.22,-19.02 83.43,-25.66 219.48,-24.63 86.34,-39.22 273.79,-1.3 -19.76,18.29 -25.76,10.47 -32.92,40.79 -5.64,23.84 0.03,37.03 -12.45,63.16 -11.59,24.31 -16.96,18.5 -44.58,31.64 -18.31,8.72 -30.46,17.3 -48.7,27.45 -58.99,32.82 -50.54,-7.3 -100.69,51.71 -32.72,38.5 -54.95,2.52 -42.49,103.65 -141.44,37.79 -117.62,22.42 -248.53,78.72 -118.35,50.88 22.01,47.01 -245.53,93.09zm2417.6 -118.65c-23.8,24.83 -23.45,44.36 -49.65,58.33 -19.63,-31.96 -3.24,-36.34 -46.76,-53.18 -82.11,-31.82 -168.55,-47.03 -238.01,-73.09 -114.6,-42.99 -236.49,-25.29 -351.26,10.69 -37.96,12.64 -81.24,32.79 -107.05,54.63 -16.28,13.77 -25.71,25.41 -37.65,38.23 -16.4,17.65 -22.28,18.38 -41.71,34.21 -56.98,46.4 -71.88,93.73 -117.67,111.08 -17.25,6.54 -37.79,8.24 -49.04,20.15 -55.74,14.76 -69.44,24.66 -68.65,91.54 14.76,97.57 1.72,131.86 106.84,123.6l-8.63 37.94 -12.97 66.1c-20.78,5.76 -50.22,9.21 -74.58,17.13 -28.04,9.14 -37.13,21.08 -59.58,28.48 -97.26,-56.15 -50.03,-91.15 -107.06,-118.4 20.83,-127.89 -140.9,-152.3 -159.97,-0.98l-15.15 2.72c-188.18,5.44 -127.84,91.22 -145.88,160.46 -40.3,154.65 180.95,24.6 182.54,23.24 -3.61,37.16 -26.27,39.75 8.65,79.78 -21.79,19.09 -71.2,55.63 -29.68,100.34 4.49,4.83 76.76,46.55 93.18,58.83l-3.85 37.18c-46.59,6.76 -139.11,-1.94 -171.73,8.04 -98.72,30.17 -113.23,152.27 -95.95,247.07 12.43,68.16 32.69,68.87 96.98,78.01 -11.37,24.29 -16.86,24.7 -40.17,43.85 -15.71,12.92 -25.46,21.77 -40.34,35.78 -28.33,26.72 -55.19,45.96 -71.56,80.59 -16.74,35.37 -21.22,83.28 -44.98,107.08 -39.49,39.58 -33.94,33.36 -68.23,84.11 -21.15,31.27 -51.84,38.53 -77.57,74.48 -18.92,26.47 -38.5,66.93 -53.53,98.7 -42.94,90.8 -35.37,156.39 1.42,241.86 -87.96,50.61 -31.76,161.71 6.69,235.21 35.74,68.33 48.41,36.76 92.38,74.23 36.79,31.35 -27.53,74.61 133.33,198.62 31.66,24.44 68.87,43.43 122.96,41.1 39.31,-1.69 85.54,-24.31 132.87,-31.88 27.74,-4.46 33.53,0.49 63.77,-4.63 28.68,-4.88 39.04,-13.68 68.11,-17.2 30.2,-20.27 118.11,-42.28 150.54,-14.12 71.1,61.74 70.07,29.88 141.44,59.78 25.07,37.91 12.94,20.81 44.71,51.3 -31.47,74.85 -73.19,111.78 -18.31,199.08 139.04,221.24 75.41,128.43 123.79,290.63 31.13,104.41 -8.45,53.02 -43.85,207.52 -12.43,54.27 5.47,86.05 4.88,127.89 24.39,28.06 26.47,90.98 49.31,124.8 67.69,100.32 28.29,29.31 55.39,199.11 4.73,29.63 14.12,38.21 28.23,64.09 21.84,40.03 50.98,65.68 66.96,105.12 21.25,52.35 0.73,99.9 27.92,131.07 16.3,18.68 70.41,71.59 99.36,69.9 20.49,-1.2 35.32,-11.08 69.95,-12.48 276.73,-11.05 194.8,48.31 420.23,-361.29 111.54,-202.64 45.03,-70.83 89.41,-257.07 16.28,-68.24 131.03,-123.35 185.63,-158.82 50.61,-32.84 28.13,-78.45 33.11,-140.63 -1.89,-42.69 6.76,-92.94 -12.92,-128.18 -59.63,-106.78 -79.97,-50.17 50.29,-255.53 56.91,-89.73 26.45,-136.32 111,-160.98 100.63,-84.14 151.81,-85.12 185.97,-248.96 5.37,-85.02 4.68,-64.44 30.02,-100.17 67.64,-95.41 -131.91,-72.18 -172.52,-72.43 -124.26,-0.73 -68.84,5.29 -118.26,25.39 -94.01,-243.79 -42.37,-164.63 -187.27,-394.18 -26.13,-41.42 -57.31,-90.44 -75.86,-127.5 115.68,41.54 75.86,93.53 130.7,170.04 56.59,79 68.82,75.83 105.44,191.81 15.66,49.63 19.95,55.54 69.88,75.32 36.42,14.44 81.93,30.25 126.59,16.98 44.9,-13.36 132.74,-91.49 176.54,-106.05 48.67,-39.51 9.02,-34.49 96.08,-91.35 36.84,-24.07 75.02,-60.81 108.92,-77.79 23.6,-11.84 41.35,-13.73 50.59,-40.61 24.56,-71.56 -69.48,-116.05 -103.73,-176 62.03,15.15 73.11,36.22 146.03,36.4 54.24,0.15 130.88,-14.63 166.51,16.54l89.26 90.49c21.08,12.96 50.32,8.33 77.11,13.95 59.63,12.5 38.73,-8.89 72.28,-4.14 14.85,179.46 24.46,350.73 16.44,536.75 -7.23,168.08 -31.15,258.67 -39.04,373.98 -2.2,32.08 -12.82,69.34 -19.78,106.27 -54.98,291.76 -165.09,594.03 -282.66,823.99 -142.96,279.67 -250.51,431.75 -441.21,665.62 -46.45,56.96 -219.92,238.84 -271.51,281.76 -45.98,38.23 -259.82,230.88 -306.95,246.24 -57.33,51.59 -281.73,189.09 -359.45,228.55 -440.55,223.6 -859.33,360.77 -1384.66,385.82 -717.21,34.17 -1381.53,-167.94 -1883.57,-481.92l-258.28 -177.33c-28.38,-21.52 -57.57,-43.48 -85.05,-66.98 -26.72,-22.89 -53.28,-41.23 -79.53,-65.88l-150.41 -140.02c-35.95,-30.32 -46.64,-49.27 -75.12,-77.21 -80.78,-79.28 -209.78,-232.44 -269.5,-318.3 -21.89,-31.47 -40.69,-54.78 -61.47,-83.67 -51.3,-71.4 -126.49,-200.93 -171.66,-277.94 -228.66,-389.72 -367.64,-905.81 -400.09,-1369.05 -14.26,-203.79 -0.39,-381.17 13.04,-581.13 21.4,40.32 15.57,48.8 47.38,90.1 27.01,35.12 51.03,42.23 74.29,68.55 71.83,21.42 130.95,85.19 222,88.96 138.87,5.74 108.18,79.53 213.45,101.05 16.1,3.29 51.76,6.03 64.5,11.62l105.78 128.82c30.12,32.23 106.05,77.84 155.68,74.78 36.84,-2.28 31.98,-15.12 60.2,-19.41 93.01,85.83 -40.49,221.74 -66.99,266 -65.73,109.75 -18.36,192.42 -25.29,237.2 -5.2,33.48 -6.28,66.86 6.08,93.45 25.44,54.8 18.82,1.57 74.26,119.41 50.34,106.93 127.4,79.43 138.77,158.38 22.01,153.11 66.88,108.55 142.94,161.79 111.91,78.33 88.48,143.03 83.28,309.08 -4.51,144.33 13.28,239.08 25.09,370.25 5.78,64 -6,195.63 21.4,256.37 16.33,36.2 35.74,22.69 53.46,49.9 35.49,54.39 -6.54,128.6 13.7,172.76 8.4,18.41 29.38,33.92 43.04,54.24 15.44,22.94 24.68,49.19 33.02,73.55 28.4,34.78 20.54,43.28 60.76,67.52 28.75,17.33 59.39,30.27 88.18,50.05 66.32,45.54 39.93,104.09 180.48,94.97 23.46,-24.09 45.76,-28.4 32.55,-78.35 -33.68,-127.23 -79.95,-106.59 -86.37,-149.92 -3.31,-22.35 2.33,-39.63 1.28,-62.28 -1.15,-25.29 -6.91,-31.76 -9.24,-55.93 -12.7,-38.82 -22.01,-72.79 -6.25,-109.8 48.23,-113.14 -56.15,-81.64 70.98,-192.57 29.46,-25.74 51.94,-34.93 81.76,-55.05 22.18,-48.16 12.67,-66.96 -11.59,-101.81 75.07,-7.43 68.65,-11.84 150.04,-86.05 20.22,-18.41 45.66,-35.1 56.64,-61.28 11.3,-26.91 7.82,-69.55 28.6,-91.37 44.46,-117.62 1.15,-107.55 49.75,-155.27 167.72,-164.7 154.9,-10.64 231.59,-155.51 28.6,-54.02 43.73,-85.49 47.37,-158.16 24.9,-344.75 -0.73,-75.66 117.52,-320.36 27.82,-57.54 40.1,-146.51 22.08,-214.5 -8.92,-33.68 -31.15,-47.01 -68.28,-55.98l-178.67 -70.29c-58.8,-26.1 -44.83,-12.35 -99.51,0.69 -86.27,-71.12 -86.45,-75.91 -159.09,-56.08 -16.81,-12.15 -19.24,-17.99 -41.98,-31.91 -2.5,-61.27 -13.82,-81.86 -42.06,-123.58 -89.65,-132.5 -64.46,-86.27 -197.22,-134.92 -34.56,-12.64 -72.38,-40.95 -111.91,-60.86 -88.35,-44.46 -73.5,-103.87 -229.5,-109.04 -75.63,-2.5 -76.74,-12.89 -119.02,-47.42 -53.85,-43.99 -71.1,-5.13 -103.45,23.24 -34.33,-27.38 -41.15,-36.08 -94.36,-23.66 -37.18,24.29 -52.96,6.65 -97.47,81.54 -69.76,4.53 -83.43,-34.22 -142.79,-17.55 -15.17,4.27 -32.62,15.56 -46.47,6 -82.16,-56.59 109.29,-237.54 -175.02,-253.52l10.32 -48.75c6.52,-39.61 25.96,-51.89 20.25,-92.5 -4.39,-31.08 -22.77,-60.76 -50.49,-67.64 -134.09,-33.29 -85.52,164.9 -198.14,122.01 -32.13,-12.26 -53.67,-18.75 -64.11,-51.96 -10.29,-32.7 -14.02,-60.56 -13.73,-96.84l-3.53 -29.7c-0.22,-1 -0.71,-2.94 -0.93,-3.92 -0.22,-0.98 -0.66,-2.89 -0.88,-3.9 -12.87,-60.9 -11.79,-48.4 30.98,-81.61l112.84 -111.98 43.85 -12.82c25.69,20.02 32.28,41.13 50,64.8 87.84,13.95 87.82,-62.5 143.67,-91.69 38.53,11.98 30.83,35.22 62.01,60 38.85,30.85 36.81,-1.25 51.62,59.29 7.57,30.96 11.88,66 34.48,82.76 80.59,59.76 166.13,-59.8 123.23,-157.89 -28.45,-65.1 -5.98,-124.9 60.19,-135.9 12.23,-13.14 55.27,-42.03 71.84,-48.6 33.53,-27.87 88.08,-38.85 103.3,-124.85 19.66,-110.9 -12.69,-34.43 71.86,-79.09 18.23,-9.63 29.44,-18.38 44.33,-31.54 31.77,-28.06 44.36,-41.79 74.02,-78.19 21.91,-26.89 139.31,-59.97 179.4,-123.87 18.36,16.88 13.68,43.11 47.06,52.72 46.79,13.48 111.1,-16.49 142.45,-44.29 31.42,-27.87 30.76,-13.11 70.22,-26.93 21.74,-42.4 2.09,-71.96 -29.24,-98.04 -50.63,-42.21 -13.28,12.43 -49.85,-60.81 -9.39,-18.77 -2.5,0.86 -12.55,-21.56 34.75,-14.95 46.52,-26.03 92.25,-31.55 16.08,-1.91 101.08,-7.77 106.5,-6.64 -5.1,3.19 -101.47,36.99 -69.24,101.32 21.42,42.82 187.4,45.56 212.39,28.7 85.49,-57.64 44.54,-83.92 25.59,-121 -12.6,-24.68 -5.88,-24 -7.15,-56.08l-24.86 -16.56 29.63 -24.95c9.29,-16.15 17.33,-27.33 16.86,-52.62 -17.65,-43.36 -53.11,-36.15 -86.25,-74.78 -55.95,-35.07 8.43,-148.92 -34.09,-194.63 -42.84,-46.08 -70.98,18.16 -137.69,20.37 -38.34,1.28 -29.36,4.27 -36.45,-21.79l29.88 -6.81c22.94,-0.61 42.28,8.58 76.44,-7.06 81.79,-37.45 3.26,-56.57 95.09,-78.01 43.04,-10.02 87.3,-20.61 124.22,-41.74 28.5,-47.42 43.38,-104.68 -31.03,-109.33 -26.15,-3.14 -9.83,1.76 -19.48,-6.05 7.06,-78.26 39.16,-114.85 -52.84,-136.54 -31.91,-7.53 -111.17,-29.81 -139.14,-47.7 -9.02,-5.76 -6.2,-3.53 -12.23,-10.22 41.52,-25.98 30.17,-3.23 78.73,-18.38 71.39,-22.26 135.17,-89.58 191.83,-95.22 28.73,37.99 37.4,38.82 78.85,64.09 71.71,2.18 85.36,6.86 135.09,36.96 58.28,35.27 55.27,24.83 82.5,90.68 21.76,52.63 -21.94,84.44 -46.35,110.39 -32.82,34.93 -52.55,44.12 -53.06,116.39 -0.4,59.22
            0.93,99.83 33.31,143.06 22.57,30.12 52.18,68.45 108.55,67.23 80.8,-1.76 178.57,-87.37 189.5,-152.15 105.12,-28.85 32.79,-7.11 99.65,-17.43 81.59,-12.58 152.44,-124.07 261.66,-115.59 33.04,-23.33 127.86,-37.35 167.49,-44.36 37.89,-6.74 20.15,-10.2 42.03,-26.54 33.18,-24.78 80.07,4.19 97.79,-40.39 17.57,-44.19 -25.71,-57.79 -46.08,-76.47 17.45,-19.17 44.7,-30.96 71.15,-43.97 42.99,-21.2 37.57,-28.99 67.79,-50.29 12.55,-119.02 65.76,-105.22 144.36,-109.63 39.04,-2.18 81.56,-4.63 77.96,-50.93 -3.04,-38.97 -38.58,-42.6 -73.95,-50.78 -49.73,-7.23 -103.62,-15.76 -154.02,-23.87 -55.76,-8.97 -92.44,-28.57 -149.63,-23.43 -50.02,4.48 -109.24,20.68 -145.95,22.62 -72.2,3.77 -86.71,4.19 -135.17,35.34 -42.03,27.03 -247.93,-13.85 -309.87,-19.24 -76.88,-6.69 -215.04,46.89 -261.53,70.78 42.97,-13.73 101.3,-54.48 47.03,-113.97 -57.03,-9.17 -34.49,-11.84 -94.33,-3.43 -35.86,5.05 -73.5,0.59 -109.8,1.99 -38.92,8.65 -79.56,27.35 -112.38,33.43 -32.94,6.1 -96.37,0.52 -137.89,4.07l-82.84 30.3c-61.76,34.97 9.9,43.3 -141.74,79.31 -47.72,11.35 -38.33,19.31 -58.28,49.7 -81.98,-34.9 -125.98,29.14 -146.86,46.69l-6.72 56.76c-23.7,1.37 -87.35,-17.18 -116.88,-24.44 -209.58,-38.28 -138.23,-33.16 -208.23,123.3 -31.59,98.85 -84.53,104.65 -191.32,133.31 -44.83,12.03 -251.12,41.37 -276.14,21.05 -28.46,-7.67 -40.76,-24.51 -69.56,-7.33 -52.35,31.3 -221.17,279.65 -267.4,341.63 -72.23,96.83 -139.77,222.37 -197.32,328.22 -12.16,22.35 -48.21,99.73 -65.15,115.07 15.83,-56 62.01,-139.23 88.09,-188.53 79.39,-149.99 220.06,-357.12 322.17,-480.28 248.89,-300.29 385.24,-420.75 689.1,-645.87 53.72,-39.82 104.65,-70.68 162.59,-107.37 200.78,-127.13 508.98,-268.62 732.87,-332.56 120.29,-34.36 301.07,-89.73 422.34,-101.27 377.83,-45.95 584.27,-69.83 976.98,-18.26l281.71 45.39c60.83,-0.19 -21.61,-10.54 41.39,12.16 11.69,4.22 31.79,7.94 45.17,11.42l267.32 78.26c113.04,39.66 221.37,82.5 325.36,130.76 104.51,48.48 206.12,102.81 302.42,161.42 153.67,93.55 394.25,263.42 526.18,393.52l114.65 113.67c36.05,39.68 71.44,77.35 109.17,119.02 84.11,92.89 333.91,406.53 383.78,526.65 -143.45,-210.34 -146.12,-232.99 -320.19,-444.84 -61.86,-75.29 -80.24,-89.8 -139.01,-151.74 -32.28,-34.04 -103.8,-23.04 -145.73,-2.69 -96.47,46.79 -158.79,-14 -224.38,44.87 -26.96,-12.08 -6.91,-16.05 -47.45,-20.51 -23.46,-2.6 -44.19,-1.77 -61.4,8.82zm-3646.48 -642.16c-45.88,27.08 -97.65,66 -143.5,97.67l-337.71 264.21c-70.93,72.08 -99.7,85.29 -185.51,180.78 -36.01,40.07 -76.49,88.55 -114.73,127.57 -55.37,56.49 -166.27,207.76 -214.28,276.88 -694.68,1000.14 -802.13,2336.86 -238.74,3433.74 97.88,190.61 168.08,290.63 278.91,453.98 45.71,67.35 108.06,138.21 157.57,202.4 99.51,128.99 376.53,388.11 498.71,476.51 236.27,171 258.4,189.94 522.39,335.33 103.53,57.01 225.44,107.35 339.8,151.12 511.33,195.81 1104.21,276.17 1700.73,185.21 587.21,-89.53 1082.42,-308.74 1540.52,-652.97 50.39,-37.87 87.67,-71.32 134.34,-107.69l253.57 -237.28 223.25 -261.27c34.26,-45.51 69.07,-89.97 102.4,-139.6 34.07,-50.71 65.66,-99.48 100.81,-146.42 19.51,-39.19 43.09,-77.3 64.73,-116.86 21.79,-39.85 42.79,-74.9 66.42,-120.29 135.7,-260.8 226.54,-516.5 294.99,-811.84 5.46,-23.63 12.08,-51.11 15.17,-75l36.47 -225.48c42.08,-326.53 37.26,-713.04 -26.79,-1028.11 -88.13,-400.97 -161.91,-646.26 -353.79,-1002.96 -82.42,-153.2 -173.52,-289.48 -267.54,-417.46l-197.77 -237.66c-15.85,-15.27 -26.86,-25.86 -40.34,-42.82 -40.83,-51.44 -25.29,-29.7 -61.18,-63.4 -6.74,-6.3 -10.69,-12.82 -19.83,-21.33 -70.96,-82.84 -281.71,-252.64 -376.58,-322.17 -290.68,-213.03 -586.89,-363.52 -929.9,-481.16 -141.91,-48.65 -400.84,-107.33 -558.24,-132.84 -301.61,-48.9 -813.6,-53.21 -1122.61,22.18 -34.26,8.36 -98.28,16.35 -139.92,26.79 -198.42,49.83 -356.21,101.62 -533.17,172.33 -82.11,32.79 -162.79,76.54 -240.63,112.49 -83.08,38.36 -148.97,87.16 -228.01,125.42z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
