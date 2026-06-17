VaultX/
├── pages/                  # Page Object classes (one per app screen)
│   ├── LoginPage.js
│   ├── TwoFAPage.js
│   ├── DashboardPage.js
│   ├── HistoryPage.js
│   ├── SendPage.js
│   ├── ReceivePage.js
│   └── NavPage.js
├── tests/                  # Spec files (one per feature/module)
│   ├── helpers/
│   │   └── login.js         # Shared login + 2FA helper used across all specs
│   ├── auth-login.spec.js
│   ├── auth-2fa.spec.js
│   ├── dashboard.spec.js
│   ├── transfer-send.spec.js
│   ├── transfer-recieve.spec.js
│   ├── history.spec.js
│   └── navigation.spec.js
├── playwright.config.js    # Test runner config (baseURL, timeouts, workers)
├── .env.example             # Template for required environment variables
└── README.md
