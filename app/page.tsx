// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";
import Image from "next/image";

const popularProducts = [
  {
    id: 1,
    name: "Dino Transformer Robot",
    price: 245000,
    rating: 4.8,
    sold: 8374,
    image: "https://picsum.photos/id/1015/600/600",
    category: "Action Figure"
  },
  {
    id: 2,
    name: "Giant Unicorn Plush Premium",
    price: 189000,
    rating: 4.9,
    sold: 12456,
    image: "https://picsum.photos/id/1027/600/600",
    category: "Plush Toy"
  },
  {
    id: 3,
    name: "LEGO Castle Building Set Deluxe",
    price: 325000,
    rating: 5.0,
    sold: 6721,
    image: "https://picsum.photos/id/106/600/600",
    category: "Educational"
  },
  {
    id: 4,
    name: "RC Racing Car Pro Edition",
    price: 275000,
    rating: 4.7,
    sold: 9834,
    image: "https://picsum.photos/id/1074/600/600",
    category: "Vehicle"
  },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Special Offers */}
      <div className="max-w-7xl mx-auto px-5 pt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Special Offers</h2>
          <span className="text-[#FF6200] font-medium">See All</span>
        </div>

        <div className="bg-gray-100 rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-8 md:p-10">
            <div className="text-7xl font-bold text-[#FF6200] mb-3">30%</div>
            <h3 className="text-3xl font-semibold mb-3">Today&apos;s Special!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get discount for every order, only valid for today
            </p>
            <Button className="btn-orange rounded-2xl px-10 py-6 text-base font-medium">
              Shop Now
            </Button>
          </div>
          <div className="flex-1 relative h-80 md:h-auto min-h-[320px]">
            <Image 
              src="https://picsum.photos/id/1027/800/800" 
              alt="Special Offer" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
          {["Action Figure", "Plush Toy", "Educational", "Vehicle", "Doll", "Board Game"].map((cat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center text-4xl transition-all group-hover:bg-[#FF6200] group-hover:text-white group-hover:scale-110">
                🧸
              </div>
              <p className="mt-3 text-sm font-medium text-center text-gray-700">{cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Most Popular */}
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Most Popular</h2>
          <span className="text-[#FF6200] font-medium">See All</span>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 pb-6 overflow-x-auto scrollbar-hide">
          <Button variant="default" className="bg-black text-white rounded-full px-6 py-1.5 text-sm whitespace-nowrap">All</Button>
          <Button variant="outline" className="rounded-full px-6 py-1.5 text-sm whitespace-nowrap">Action Figure</Button>
          <Button variant="outline" className="rounded-full px-6 py-1.5 text-sm whitespace-nowrap">Plush Toy</Button>
          <Button variant="outline" className="rounded-full px-6 py-1.5 text-sm whitespace-nowrap">Educational</Button>
          <Button variant="outline" className="rounded-full px-6 py-1.5 text-sm whitespace-nowrap">Vehicle</Button>
        </div>

        {/* Product Cards Grid - Kekinian & Mobile Friendly */}
        <div className="grid grid-cols-2 gap-5">
          {popularProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border border-gray-100 hover:border-[#FF6200]/30 transition-all group">
              {/* Image 1:1 */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-all">
                  <Heart size={18} className="text-gray-400 group-hover:text-red-500" />
                </button>
              </div>

              {/* Content */}
              <CardContent className="p-4 pb-5">
                <p className="text-xs text-gray-500 mb-1.5">{product.category}</p>
                
                <h3 className="font-medium text-[15px] leading-tight line-clamp-2 min-h-[42px] mb-4">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 text-xs mb-4 text-gray-500">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span>{product.sold.toLocaleString('id-ID')} sold</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-[#FF6200]">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <Button className="btn-orange rounded-2xl px-7 py-2 text-sm font-medium">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}