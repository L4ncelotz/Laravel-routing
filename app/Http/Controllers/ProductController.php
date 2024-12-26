<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
    {
        /**
         * Display a listing of the resource.
         */
        public function index()
        {
            return Inertia::render('Products/Index', ['products' => $this->products]);
        }

        /**
         * Show the form for creating a new resource.
         */
        public function create()
        {
            //
        }

        /**
         * Store a newly created resource in storage.
         */
        public function store(Request $request)
        {
            //
        }

        /**
         * Display the specified resource.
         */
        public function show(string $id)
        {
            $product = collect($this->products)->firstWhere('id', (int)$id);

            if(!$product) { 
                abort(404, 'Product not found');
            }

            return Inertia::render('Products/Show', ['product' => $product]);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(string $id)
        {
            //
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(Request $request, string $id)
        {
            //
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(string $id)
        {
            //
        }
        private $products = [
                [
                    'id' => 1,
                    'name' => 'MacBook Pro M3',
                    'description' => 'The latest MacBook Pro featuring the powerful M3 chip, 14-inch Liquid Retina XDR display, and up to 18 hours of battery life.',
                    'price' => 49900,
                    'category' => 'Laptop',
                    'src' => '/images/mac.jpg',
                    'stock' => 10
                ],
                [
                    'id' => 2,
                    'name' => 'iPhone 15 Pro',
                    'description' => 'Latest iPhone featuring A17 Pro chip, 48MP camera system, and titanium design with all-day battery life.',
                    'price' => 32900,
                    'category' => 'Smartphone',
                    'src' => 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437139.jpg?t=st=1735190353~exp=1735193953~hmac=a518aa307baf44193ef4533d2b9495e6f0598813417708abd7198ec96fa0a147&w=996',
                    'stock' => 15
                ],
                [
                    'id' => 3,
                    'name' => 'Razer DeathAdder V3',
                    'description' => 'Professional gaming mouse with 30K DPI optical sensor, 90-million click lifecycle, and ergonomic design.',
                    'price' => 2290,
                    'category' => 'Gaming',
                    'src' => 'https://i.pinimg.com/736x/94/3e/b9/943eb97ca29626e43345772ad1cd6cc4.jpg',
                    'stock' => 30
                ],
                [
                    'id' => 4,
                    'name' => 'AirPods Pro 2',
                    'description' => 'Premium wireless earbuds with Active Noise Cancellation, Adaptive Audio, and up to 6 hours of listening time.',
                    'price' => 8990,
                    'category' => 'Audio',
                    'src' => 'https://i.pinimg.com/736x/b0/34/81/b034811f0d60aa22eb0cecd8f1d5101d.jpg',
                    'stock' => 25
                ],
                [
                    'id' => 5,
                    'name' => 'iPad Air',
                    'description' => 'Versatile tablet with M1 chip, 10.9-inch Liquid Retina display, and Apple Pencil support.',
                    'price' => 21990,
                    'category' => 'Tablet',
                    'src' => 'https://i.pinimg.com/736x/41/2c/e8/412ce8f5bff2b0e96d95f21ebb8fd731.jpg',
                    'stock' => 20
                ],
                [
                    'id' => 6,
                    'name' => 'Sony WH-1000XM5',
                    'description' => 'Premium wireless headphones with industry-leading noise cancellation and 30-hour battery life.',
                    'price' => 14990,
                    'category' => 'Audio',
                    'src' => 'https://i.pinimg.com/736x/52/9a/87/529a87de4ac2b2d8a5c627bd70faf422.jpg',
                    'stock' => 18
                ],
                [
                    'id' => 7,
                    'name' => 'Samsung Galaxy Watch 6',
                    'description' => 'Advanced smartwatch with health tracking, sleep monitoring, and seamless connectivity.',
                    'price' => 10000,
                    'category' => 'Accessories',
                    'src' => 'https://i.pinimg.com/736x/42/00/88/420088a2f0f67a2ea9f2916eb9ab06b4.jpg',
                    'stock' => 22
                ],
                [
                    'id' => 8,
                    'name' => 'Logitech PRO X 60',
                    'description' => 'Premium wireless keyboard with perfect stroke keys and smart illumination.',
                    'price' => 4890
                    ,
                    'category' => 'Accessories',
                    'src' => 'https://i.pinimg.com/736x/5d/b9/af/5db9afb6809a32d710babbd413bbf6ce.jpg',
                    'stock' => 35
                ],
                [
                    'id' => 9,
                    'name' => 'Dell XPS 15',
                    'description' => 'Premium laptop with 4K OLED display, Intel Core i9, and NVIDIA RTX graphics.',
                    'price' => 47999,
                    'category' => 'Laptop',
                    'src' => 'https://i.pinimg.com/736x/af/d4/9c/afd49cb183dd7bda1de2dfbfb6571e07.jpg',
                    'stock' => 12
                ],
                [
                    'id' => 10,
                    'name' => 'GoPro Hero 11',
                    'description' => 'Advanced action camera with 5.3K video, HyperSmooth 5.0, and waterproof design.',
                    'price' => 9990,
                    'category' => 'Camera',
                    'src' => 'https://i.pinimg.com/736x/19/f9/ac/19f9ac96ce16df572d80806cb9c8d85c.jpg',
                    'stock' => 28
                ]
                ];
    }
