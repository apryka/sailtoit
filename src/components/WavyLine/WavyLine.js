const WavyLine = ({ stroke = '#fff' }) => {
  return (
    <svg id="patternId" width="100%" height="20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="a" patternUnits="userSpaceOnUse" width="40" height="20">
          <rect x="0" y="0" width="100%" height="100%" fill="none" />
          <path
            d="M-4.798 13.573C-3.149 12.533-1.446 11.306 0 10c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176"
            strokeWidth="2"
            stroke={stroke}
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="20" fill="url(#a)" />
    </svg>
  );
};

export default WavyLine;
