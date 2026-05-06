import { categories,swatches } from '../content.js';

const renderIcon = (name) => {
  switch (name) {
    case 'circlePlus':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5">
          <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
        </svg>
      );
    case 'box':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
        </svg>
      );
    case 'bottle':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        </svg>
      );
    default:
      return null;
  }
};


function Products() {
  return (
    <section id="products" className="products">
      <div className="section-header reveal">
        <div>
          <div className="section-label">Our Range</div>
          <div className="section-title">Product Lineup</div>
        </div>
        <p className="section-sub">
          Every coat engineered to perform — from bare metal to showroom perfection.
        </p>
      </div>

      <div className="products-grid">
        {categories.map((cat, index) => (
          <div key={index} className="product-card reveal">

            {/* ICON (optional) */}
            <div className="prod-icon">
              {renderIcon(cat.icon)}
            </div>

            {/* CATEGORY NAME */}
            <div className="prod-name">{cat.name}</div>

            {/* ITEMS (styled like description) */}
            <div className="prod-desc">
              {cat.items.map((item, i) => (
                <div key={i} className="prod-item">
                  {item}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
      {/* COLORS (MOVED HERE) */}
      <div className="palette-section">
        <div className="section-header reveal">
          <div>
            <div className="section-label ">Color Range</div>
            <div className="section-title">1000+ Shades of Perfect</div>
          </div>
          <p className="section-sub">
            Factory-matched OEM codes to bespoke custom tints — your vision, our formula.
          </p>
        </div>

        <div className="palette-strip reveal">
          {swatches.map((swatch) => (
            <div
              key={swatch.label}
              className="palette-swatch"
              style={{ background: swatch.color }}
            >
              <span className="swatch-label">{swatch.label}</span>
            </div>
          ))}
        </div>

        <p className="palette-note reveal">
          Hover any shade to see its name. Full chip catalogue available in-store and on request.
        </p>
      </div>

    </section>
  );
}

export default Products;
