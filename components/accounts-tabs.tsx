"use client"

import { useState } from "react"
import { t } from "@/lib/translations"
import type { Language } from "@/lib/translations"
import AccountCard from "@/components/account-card"

interface Account {
  email: string
  password: string
  description: string
  updatedAt: string
  category: "capcut" | "chatgpt" | "hma" | "team"
}

interface AccountsTabsProps {
  language: Language
  accounts: Account[]
}

type TabType = "all" | "capcut" | "chatgpt" | "hma" | "team"

export default function AccountsTabs({ language, accounts }: AccountsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all")

  const tabs: Array<{ id: TabType; label: string; icon: string }> = [
    { id: "all", label: t("tab.all", language), icon: "🎬" },
    { id: "capcut", label: "CapCut", icon: "✂️" },
    { id: "chatgpt", label: "ChatGPT", icon: "🤖" },
    { id: "hma", label: "HMA", icon: "🔒" },
    { id: "team", label: t("tab.team", language), icon: "👥" },
  ]

  const filteredAccounts = activeTab === "all" ? accounts : accounts.filter((acc) => acc.category === activeTab)

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="mb-8 border-b border-white/10 overflow-x-auto">
        <div className="flex gap-2 sm:gap-4 min-w-max sm:min-w-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm sm:text-base font-semibold transition-all duration-300 relative flex items-center gap-2 ${
                activeTab === tab.id ? "text-cyan-400" : "text-white/50 hover:text-white/80"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Accounts Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAccounts.map((account, index) => (
          <AccountCard
            key={`${index}`}
            email={account.Link}
            description={account.description}
            updatedAt={account.updatedAt}
            language={language}
          />
        ))}
      </div>

      {filteredAccounts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/50 text-lg">{t("tab.noAccounts", language)}</p>
        </div>
      )}
    </div>
  )
}
