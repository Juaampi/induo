import CategoryCard from './CategoryCard';
import { categories } from '../lib/data';

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Por deporte y categoría</h2>
          <p className="section-subtitle">Encuentra lo que necesitás para tu actividad</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
