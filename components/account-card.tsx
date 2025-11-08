"use client"

import { useState } from "react"
import { t } from "@/lib/translations"
import type { Language } from "@/lib/translations"

interface AccountCardProps {
  email: string
  password: string
  description: string
  updatedAt: string
  language: Language
}

export default function AccountCard({ email, password, description, updatedAt, language }: AccountCardProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleCopyBoth = () => {
    const combined = `Email: ${email}\nPassword: ${password}`
    navigator.clipboard.writeText(combined)
    setCopiedField("both")
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-2xl w-full"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="relative">
        <div className="mb-4 sm:mb-6">
          <p className="text-base sm:text-lg font-semibold text-white/90">{description}</p>
        </div>

        {/* Email Field */}
        <div className="mb-4 sm:mb-6">
          <label className="mb-2 block text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60">
            {t("account.email", language)}
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <input
              type="text"
              value={email}
              readOnly
              className="flex-1 rounded-lg sm:rounded-2xl bg-white/10 px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs sm:text-base text-white placeholder-white/40 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 overflow-hidden text-ellipsis"
            />
            <button
              onClick={() => handleCopy(email, "email")}
              className="rounded-lg sm:rounded-2xl bg-white/20 hover:bg-white/30 p-3 sm:p-4 transition-all duration-200 backdrop-blur-sm border border-white/20 flex-shrink-0"
              title="Copy email"
            >
              {copiedField === "email" ? (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6 sm:mb-8">
          <label className="mb-2 block text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60">
            {t("account.password", language)}
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              readOnly
              className="flex-1 rounded-lg sm:rounded-2xl bg-white/10 px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs sm:text-base text-white placeholder-white/40 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 overflow-hidden text-ellipsis"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="rounded-lg sm:rounded-2xl bg-white/20 hover:bg-white/30 p-3 sm:p-4 transition-all duration-200 backdrop-blur-sm border border-white/20 flex-shrink-0"
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => handleCopy(password, "password")}
              className="rounded-lg sm:rounded-2xl bg-white/20 hover:bg-white/30 p-3 sm:p-4 transition-all duration-200 backdrop-blur-sm border border-white/20 flex-shrink-0"
              title="Copy password"
            >
              {copiedField === "password" ? (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          onClick={handleCopyBoth}
          className="w-full mb-6 sm:mb-8 rounded-lg sm:rounded-2xl bg-blue-500/30 hover:bg-blue-500/40 px-4 sm:px-6 py-3 sm:py-3 transition-all duration-200 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-blue-300"
        >
          {copiedField === "both" ? (
            <>
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t("account.copied", language)}</span>
            </>
          ) : (
            <>
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>{t("account.copyBoth", language)}</span>
            </>
          )}
        </button>

        <div className="border-t border-white/10 pt-4 sm:pt-6">
          <div>
            <p className="text-xs text-white/50">{t("account.lastUpdated", language)}</p>
            <p className="font-mono text-sm sm:text-base font-semibold text-white/80 mt-1">{updatedAt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
