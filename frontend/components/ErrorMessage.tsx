"use client";

import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="max-w-3xl mx-auto mt-8 
                    flex items-start gap-4 
                    p-4 rounded-xl 
                    bg-red-500/10 
                    border border-red-500/30 
                    backdrop-blur-md 
                    animate-fadeIn">

      <AlertTriangle 
        size={22} 
        className="text-red-400 mt-1" 
      />

      <p className="text-red-400 text-sm leading-relaxed">
        {message}
      </p>
    </div>
  );
}