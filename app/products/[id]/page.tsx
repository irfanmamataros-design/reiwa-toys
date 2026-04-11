// app/products/[id]/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart, Minus, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: 1,
    name: "Dino Transformer Robot",
    price: 245000,
    rating: 4.8,
    sold: 8374,
    description: "Mainan robot transformer dinosaurus dengan 12 titik artikulasi, suara realistis, dan efek cahaya LED. Sangat cocok untuk anak usia 5+ tahun.",
    category: "Action Figure",
    stock: 47,
    images: [
      "https://picsum.photos/id/1015/800/800",
      "https://picsum.photos/id/1016/800/800",
      "https://picsum.photos/id/1018/800/800",
      "https://picsum.photos/id/102/800/800",
    ]
  };

  const handleAddToCart = () => {
    alert(`✅ ${quantity} ${product.name} ditambahkan ke keranjang!`);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Back Button */}
      <div className="sticky top-0 bg-white border-b z-50 px-5 py-4">
        <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-[#FF6200]">
          <ArrowLeft size={24} />
          <span className="font-medium">Kembali</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-8">
          
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-100 mb-4">
              <Image 
                src={product.images[selectedImage]} 
                alt={product.name} 
                fill 
                className="object-cover"
              />
            </div>

            {/* Thumbnail */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === i ? 'border-[#FF6200]' : 'border-transparent'}`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">{product.category}</p>
              <h1 className="text-3xl font-semibold leading-tight mt-2">{product.name}</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-yellow-400" size={26} />
                <span className="text-2xl font-semibold">{product.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{product.sold.toLocaleString('id-ID')} terjual</span>
            </div>

            <div className="text-4xl font-bold text-[#FF6200]">
              Rp {product.price.toLocaleString('id-ID')}
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-sm">
              {product.description}
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Jumlah</p>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center border rounded-2xl hover:bg-gray-100 transition"
                >
                  <Minus size={20} />
                </button>
                <span className="text-2xl font-semibold w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center border rounded-2xl hover:bg-gray-100 transition"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                variant="outline"
                className="flex-1 h-14 rounded-2xl border-2"
              >
                <Heart className={`mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                Wishlist
              </Button>

              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-14 btn-orange rounded-2xl text-lg font-semibold flex items-center justify-center gap-3"
              >
                <ShoppingCart size={24} />
                Tambah ke Keranjang
              </Button>
            </div>

            <p className="text-center text-sm text-gray-500">
              Stok tersisa: <span className="font-medium text-green-600">{product.stock} unit</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}