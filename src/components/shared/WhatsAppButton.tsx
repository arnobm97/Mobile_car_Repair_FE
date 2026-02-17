"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/971557767041"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
            {/* Using Lucide icon as fallback/primary if no brand asset, straightforward and clean */}
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="font-bold">WhatsApp Us</span>
        </a>
    );
};
