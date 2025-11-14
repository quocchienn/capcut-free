"use client"
import type { Language } from "@/lib/translations"

interface AccountCardProps {
  link: string
  description: string
  updatedAt: string
  language: Language
}

export default function AccountCard({ link, description, updatedAt, language }: AccountCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-2xl w-full"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="relative">
        <div className="mb-3 sm:mb-6">
          <p className="text-sm sm:text-lg font-semibold text-white/90 break-words">{description}</p>
        </div>

        <div className="mb-4 sm:mb-8">
          <a
            href={link.startsWith("http") ? link : `mailto:${link}`}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block rounded-lg sm:rounded-2xl bg-white/10 px-3 sm:px-6 py-2 sm:py-4 font-mono text-xs sm:text-base text-cyan-400 hover:text-cyan-300 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-colors break-all"
          >
            {link}
          </a>
        </div>

        <div className="border-t border-white/10 pt-3 sm:pt-6">
          <div>
            <p className="text-xs text-white/50">Last Updated</p>
            <p className="font-mono text-xs sm:text-base font-semibold text-white/80 mt-1">{updatedAt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
