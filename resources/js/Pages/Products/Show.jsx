import React from 'react';
import { Link } from '@inertiajs/react';

export default function Show({ product }) {
  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: '#EFCD76' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden" 
             style={{ 
               backgroundColor: 'white',
               boxShadow: '0 4px 6px rgba(83, 54, 51, 0.1)'
             }}>
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                src={product.src}
                alt={product.name}
                className="h-full w-full object-cover md:w-96"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold mb-2" style={{ color: '#533633' }}>
                    {product.name}
                  </h1>
                  <span className="px-3 py-1 rounded-full text-sm inline-block"
                        style={{ 
                          backgroundColor: '#533633',
                          color: '#EFCD76'
                        }}>
                    {product.category}
                  </span>
                </div>
                <p className="text-3xl font-bold" style={{ color: '#533633' }}>
                  ฿{product.price.toLocaleString()}
                </p>
              </div>
              
              <div className="mt-6">
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#B25A42' }}>
                  {product.description}
                </p>
                <div className="pt-4" style={{ borderTop: '1px solid #EFCD76' }}>
                  <p style={{ color: '#B25A42' }}>
                    สินค้าคงเหลือ: {product.stock} ชิ้น
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Link
                  href="/products"
                  className="px-6 py-2 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                  กลับ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}