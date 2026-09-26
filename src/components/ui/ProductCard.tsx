interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  brands: string[];
  badge?: string;
}

export default function ProductCard({ image, title, description, brands, badge }: ProductCardProps) {
  return (
    <div className="bg-ice-bg border border-border-subtle rounded-[16px] overflow-hidden card-hover">
      <div className="h-[220px] bg-gradient-to-br from-primary-blue/[0.08] to-pharma-green/[0.06] border-b border-border-subtle relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        {badge && (
          <span className="inline-block bg-pharma-green text-white font-mono text-[11px] px-2.5 py-1 rounded mb-3">
            {badge}
          </span>
        )}
        <h3 className="font-body font-semibold text-xl text-dark-text">{title}</h3>
        <p className="font-body text-[15px] text-muted-text leading-relaxed mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {brands.map((brand, i) => (
            <span
              key={i}
              className="bg-white border border-border-subtle font-medium text-xs px-2.5 py-1 rounded"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
