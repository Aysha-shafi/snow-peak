import { marqueeItems } from '../content.js';

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
