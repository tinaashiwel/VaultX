# VaultX QA Automation

[![Playwright Tests](https://github.com/tinaashiwel/VaultX/actions/workflows/playwright.yml/badge.svg)](https://github.com/tinaashiwel/VaultX/actions/workflows/playwright.yml)

A professional end-to-end QA automation framework for **VaultX**, a fintech training application that simulates a crypto wallet product. The project demonstrates UI automation, Page Object Model design, reusable test utilities, negative testing, regression coverage, defect tracking, and CI execution with GitHub Actions.

> **Portfolio project:** Built to demonstrate practical QA engineering skills with JavaScript and Playwright. The target application is a controlled training/staging environment.

## 🎯 QA Objectives

- Validate critical user journeys across authentication, dashboard, wallet, transfers, transaction history, and navigation.
- Automate positive, negative, boundary, and validation scenarios.
- Maintain reusable Page Object Model components.
- Produce actionable HTML test reports with screenshots, traces, and videos for failures.
- Run the regression suite automatically through GitHub Actions.
- Document known defects and their impact on automated coverage.

## 🧰 Tech Stack

| Area | Technology |
|---|---|
| Language | JavaScript (Node.js) |
| Automation | Playwright Test |
| Design Pattern | Page Object Model (POM) |
| Test Reporting | Playwright HTML Reporter |
| CI/CD | GitHub Actions |
| Version Control | Git / GitHub |
| Application Type | Fintech / Crypto Wallet |
| Environment | Staging |

## 📁 Project Structure

```text
VaultX/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI pipeline
├── pages/                       # Page Object classes
│   ├── LoginPage.js
│   ├── TwoFAPage.js
│   ├── DashboardPage.js
│   ├── HistoryPage.js
│   ├── SendPage.js
│   ├── ReceivePage.js
│   └── NavPage.js
├── tests/                       # Automated feature suites
│   ├── helpers/
│   │   └── login.js
│   ├── auth-login.spec.js
│   ├── auth-2fa.spec.js
│   ├── dashboard.spec.js
│   ├── wallet.spec.js
│   ├── transfer-send.spec.js
│   ├── transfer-recieve.spec.js
│   ├── history.spec.js
│   └── navigation.spec.js
├── .env.example                 # Environment variable template
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## 🧪 Test Coverage

| Module | Coverage | Test IDs |
|---|---|---|
| Authentication - Login | Valid/invalid credentials, validation, loading state | TC_AUTH_001–008 |
| Authentication - 2FA | OTP validation, paste behavior, successful verification | TC_2FA_001–004 |
| Dashboard | Core dashboard elements and navigation | TC_DASH_001–006 |
| Wallet | Wallet display and interactions | TC_WAL_001–005 |
| Transfer - Send | Form validation, balance checks, transfer flow | TC_SEND_001–010 |
| Transfer - Receive | Receive address and receive flow | TC_REC_001–007 |
| Transaction History | Sorting, count, filters and transaction data | TC_HIST_001–013 |
| Navigation & Session | Navigation and session behavior | TC_NAV_001–009 |

**Current documented scope: 64 automated scenarios.**

## 🏗️ Automation Architecture

The framework follows a maintainable **Page Object Model** architecture:

```text
Test Specifications
        ↓
Reusable Test Helpers
        ↓
Page Object Models
        ↓
Playwright Locators / Actions
        ↓
VaultX Staging Application
```

### Framework Practices

- `data-testid` selectors are used as the primary locator strategy.
- Shared authentication logic is centralized in reusable helpers.
- Page-specific interactions are isolated in Page Objects.
- Test execution is configured for controlled parallelism against staging.
- Screenshots, traces, and videos are retained for failed tests.
- Environment-specific values can be supplied through `.env`.

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/tinaashiwel/VaultX.git
cd VaultX
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Install Playwright browsers

```bash
npx playwright install --with-deps
```

### 4. Configure environment variables

```bash
cp .env.example .env
```

Populate `.env` with the values required for your local execution. **Never commit real credentials or secrets.**

### 5. Run the full suite

```bash
npm test
```

### 6. Run headed

```bash
npm run test:headed
```

### 7. Run authentication tests

```bash
npm run test:auth
```

### 8. Open the HTML report

```bash
npm run test:report
```

## 🔄 CI/CD

GitHub Actions runs the Playwright suite on pushes and pull requests targeting the main branch. The workflow installs dependencies, installs Playwright browsers, executes the tests, and uploads the generated HTML report as a build artifact.

This gives the project a repeatable quality gate rather than relying only on local execution.

## 🐞 Known Defects

### VX-BUG-001 — Authenticated session not preserved after direct navigation/reload

**Priority:** P1  
**Impact:** Direct navigation to `/login` or a full page reload does not consistently recognize the authenticated session.  
**Automation impact:** Related scenarios are explicitly skipped rather than silently reported as passing.

The defect is documented in the existing test suite and referenced against the relevant acceptance criteria.

## 🔐 Test Data & Security

The repository contains only test-oriented data for the controlled VaultX playground. Real production credentials, access tokens, API keys, and private secrets must never be committed.

Use `.env.example` as the configuration template and keep `.env` local.

## 📊 What This Project Demonstrates

- End-to-end web application testing
- Page Object Model architecture
- JavaScript automation with Playwright
- Positive and negative test design
- Authentication and 2FA testing
- Form and validation testing
- Wallet and transaction workflow testing
- Regression test organization
- Defect-aware automation
- CI/CD test execution
- Test reporting and failure diagnostics
- Secure test-data handling

## 🚀 Future Improvements

- Add API automation and contract validation.
- Introduce data-driven test fixtures.
- Add role-based test coverage.
- Add accessibility checks.
- Add API/UI data consistency validation.
- Publish CI test reports for easier portfolio review.
- Expand security-focused automated checks.

## 👩🏽‍💻 Author

**Tina Ashiwel**  
QA Engineer | Test Automation | API Testing | JavaScript

[GitHub](https://github.com/tinaashiwel)
