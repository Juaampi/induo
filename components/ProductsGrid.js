import ProductCard from './ProductCard';
import { products } from '../lib/data';

export default function ProductsGrid() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Productos destacados</h2>
          <p className="section-subtitle">Nuestras prendas más solicitadas</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-accent mb-4">¿Necesitás ver más opciones?</p>
          <a href="#contact" className="btn-secondary">
            Ver catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}
