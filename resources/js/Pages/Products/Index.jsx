import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

const AnimatedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative text-center py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="rotate-45 transform scale-150">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-lg transition-all duration-1000"
                style={{
                  backgroundColor: i % 2 === 0 ? '#B25A42' : '#533633',
                  transform: `rotate(${i * 45}deg)`,
                  opacity: isVisible ? 1 : 0,
                  transition: `all 1s ease-out ${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="relative">
      <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />

        <h1
          className="text-5xl font-bold mb-2 transition-all duration-1000 transform"
          style={{
            color: '#533633',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            fontFamily: 'Itim', 
          }}
        >
          บ่แม่นคนสตูลแต่นี้ Store
        </h1>

        {/* Animated Underline */}
        <div
          className="h-1 mx-auto transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? '180px' : '0px',
            backgroundColor: '#B25A42',
            transformOrigin: 'center',
            transition: 'width 1s ease-out 0.5s',
            marginTop: '8px',
          }}
        />

        {/* Decorative Elements */}
        <div
          className="flex justify-center gap-4 mt-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 0.7s',
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Index({ products }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFCD76' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Replace the old title with the new animated header */}
        <AnimatedHeader />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(83, 54, 51, 0.1)' }}
            >
              <div className="relative">
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs"
                      style={{ backgroundColor: '#EFCD76', color: '#533633' }}>
                  {product.category}
                </span>
              </div>
              
              <div className="p-3">
                <h2 className="text-base font-semibold mb-1 truncate" style={{ color: '#533633' }}>
                  {product.name}
                </h2>
                <p className="text-sm mb-2 line-clamp-2" style={{ color: '#B25A42' }}>
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold" style={{ color: '#533633' }}>
                      ฿{product.price.toLocaleString()}
                    </p>
                    <p className="text-xs" style={{ color: '#B25A42' }}>
                      สินค้าคงเหลือ: {product.stock}
                    </p>
                  </div>
                  
                  <Link
                    href={`/products/${product.id}`}
                    className="px-3 py-1.5 rounded text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ 
                      backgroundColor: '#B25A42',
                      boxShadow: '0 2px 4px rgba(178, 90, 66, 0.2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#533633';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(83, 54, 51, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#B25A42';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(178, 90, 66, 0.2)';
                    }}
                  >
                    ดูรายละเอียด
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}