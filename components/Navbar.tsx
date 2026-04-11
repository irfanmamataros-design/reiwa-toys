// components/Navbar.tsx
"use client";

import Link from "next/link";
import { ShoppingCart, Heart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              🧸
            </div>
            <div>
              <span className="font-bold text-2xl text-[#FF6200]">Reiwa</span>
              <span className="font-bold text-2xl text-black">Toys</span>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Cari mainan kesayanganmu..." 
                className="pl-10 bg-gray-50 border-gray-200"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="p-2 hover:bg-gray-100 rounded-full transition">
              <Heart size={22} />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-[#FF6200] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User size={22} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}