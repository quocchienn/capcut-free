export type Language = "en" | "vi"

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "app.title": "CapCut Share",
    "app.subtitle": "Premium Accounts",

    // Stats Section
    "stats.title": "Real-Time Statistics",
    "stats.totalVisits": "Total Visits",
    "stats.todayVisitors": "Today's Visitors",
    "stats.lastUpdate": "Last Update",

    // Accounts Section
    "accounts.title": "Available Accounts",
    "account.premium": "CapCut Account",
    "account.pro": "CapCut Account",
    "account.hma": "HMA Account",
    "account.chatgptgo": "ChatGPT Business Account",
    "account.teamcanva": "Team CanVa Account",
    "account.email": "Email",
    "account.password": "Password",
    "account.lastUpdated": "Last Updated",
    "account.copied": "Copied!",
    "account.copyBoth": "Copy Both",
    "account.accessCount": "Access Count",

    // How to Use Section
    "instructions.title": "How to Use",
    "instructions.step1": "Copy email and password from the cards above",
    "instructions.step2": "Login to CapCut using the shared credentials",
    "instructions.step3": "Access counter updates in real-time on every visit",
    "instructions.step4": "Live clock updates continuously with Vietnam timezone",
    "instructions.step5": "Please do not change account passwords",

    // Footer
    "footer.description": "Free CapCut Account Sharing Platform",
    "footer.powered": "Real-time updates powered by Redis",

    // Language
    "language.english": "English",
    "language.vietnamese": "Tiếng Việt",

    "tab.all": "All Accounts",
    "tab.team": "Team",
    "tab.noAccounts": "No accounts available in this category",
  },
  vi: {
    // Header
    "app.title": "Chia Sẻ CapCut",
    "app.subtitle": "Tài Khoản Premium",

    // Stats Section
    "stats.title": "Thống Kê Thời Gian Thực",
    "stats.totalVisits": "Tổng Lượt Truy Cập",
    "stats.todayVisitors": "Khách Hôm Nay",
    "stats.lastUpdate": "Cập Nhật Lần Cuối",

    // Accounts Section
    "accounts.title": "Tài Khoản Có Sẵn",
    "account.premium": "Tài Khoản CapCut",
    "account.pro": "Tài Khoản CapCut",
    "account.hma": "Tài Khoản HMA",
    "account.chatgptgo": "Tài Khoản Business Go",
    "account.teamcanva": "Tài Khoản Team CanVa",
    "account.email": "Email",
    "account.password": "Mật Khẩu",
    "account.lastUpdated": "Cập Nhật Lần Cuối",
    "account.copied": "Đã sao chép!",
    "account.copyBoth": "Sao Chép Cả Hai",
    "account.accessCount": "Số Lần Truy Cập",

    // How to Use Section
    "instructions.title": "Cách Sử Dụng",
    "instructions.step1": "Sao chép email và mật khẩu từ các thẻ ở trên",
    "instructions.step2": "Đăng nhập vào CapCut bằng thông tin được chia sẻ",
    "instructions.step3": "Bộ đếm truy cập cập nhật theo thời gian thực khi ghé thăm",
    "instructions.step4": "Đồng hồ trực tiếp cập nhật liên tục với múi giờ Việt Nam",
    "instructions.step5": "Vui lòng không thay đổi mật khẩu tài khoản",

    // Footer
    "footer.description": "Nền Tảng Chia Sẻ Tài Khoản CapCut Miễn Phí",
    "footer.powered": "Cập nhật thời gian thực được hỗ trợ bởi Redis",

    // Language
    "language.english": "English",
    "language.vietnamese": "Tiếng Việt",

    "tab.all": "Tất Cả Tài Khoản",
    "tab.team": "Team",
    "tab.noAccounts": "Không có tài khoản nào trong danh mục này",
  },
}

export function t(key: string, language: Language): string {
  return translations[language][key] || key
}
