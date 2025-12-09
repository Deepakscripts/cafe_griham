import React from 'react';

const ExploreCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'Hot Coffee',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
      alt: 'Hot coffee in a white cup',
    },
    {
      id: 2,
      title: 'Cold Brew',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&q=80',
      alt: 'Cold brew coffee with straw',
    },
    {
      id: 3,
      title: 'Espresso',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
      alt: 'Espresso being poured',
    },
    {
      id: 4,
      title: 'Frappes',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
      alt: 'Frappuccino with whipped cream',
    },
    {
      id: 5,
      title: 'Seasonal',
      image: 'https://images.unsplash.com/photo-1608613517869-07b097abbcf4?w=400&q=80',
      alt: 'Seasonal coffee with pumpkin',
    },
    {
      id: 6,
      title: 'Non-Coffee',
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=80',
      alt: 'Tea in a glass cup',
    },
  ];

  return (
    <div className="py-16 px-4 min-w-7xl md:px-8 lg:px-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Explore Our Categories
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-300"></div>

            {/* Category Title */}
            <div className="relative h-full flex items-center justify-center">
              <h3 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
