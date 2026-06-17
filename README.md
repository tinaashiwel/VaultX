# VaultX Playwright Test Suite

Automated end-to-end test framework for **VaultX**, a fintech QA training playground simulating a crypto wallet product. Built with Playwright (JavaScript) using the Page Object Model.

## Tech Stack

- **Test runner:** Playwright Test
- **Language:** JavaScript (Node.js)
- **Pattern:** Page Object Model (POM)
- **Target environment:** Staging (`https://vault-ui-zeta.vercel.app`)

## Project Structure

```
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
│   ├── wallet.spec.js
│   ├── transfer-send.spec.js
│   ├── transfer-recieve.spec.js
│   ├── history.spec.js
│   └── navigation.spec.js
├── playwright.config.js    # Test runner config (baseURL, timeouts, workers)
├── .env.example             # Template for required environment variables
└── README.md
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

This project uses a `.env` file for local configuration. **The real `.env` file is never committed to this repo** since it may contain sensitive values.

To set yours up:

```bash
cp .env.example .env
```

Then open `.env` and fill in any required values (e.g. `BASE_URL` if you want to point at a different environment than staging).

> If you were sent a `.env` file directly (outside of GitHub), place it in the project root. Never commit it.

### 3. Run the tests

Run the full suite (headless):

```bash
npx playwright test
```

Run with the browser visible (useful for debugging):

```bash
npx playwright test --headed
```

Run a single spec file:

```bash
npx playwright test tests/history.spec.js
```

Run a single test by name:

```bash
npx playwright test -g "TC_AUTH_001"
```

### 4. View the report

```bash
npx playwright show-report
```

Opens an interactive HTML report with pass/fail status, screenshots, and traces for any failures.

## Test Credentials (Staging Seed Data)

| User | Email | Password | 2FA Code |
|---|---|---|---|
| Jordan Okafor (QA Engineer) | qa@vaultx.io | Test@1234 | 482910 |
| Priya Nair (QA Intern) | intern@vaultx.io | Intern@99 | 773421 |

These are hardcoded test-only credentials for the VaultX playground and are not sensitive.

## Test Coverage

| Suite | Module | Test Cases |
|---|---|---|
| `auth-login.spec.js` | Authentication - Login | TC_AUTH_001 – 008 |
| `auth-2fa.spec.js` | Authentication - 2FA | TC_2FA_001 – 004 |
| `dashboard.spec.js` | Dashboard | TC_DASH_001 – 006 |
| `wallet.spec.js` | Wallet | TC_WAL_001 – 005 |
| `transfer-send.spec.js` | Transfer - Send | TC_SEND_001 – 010 |
| `transfer-recieve.spec.js` | Transfer - Receive | TC_REC_001 – 007 |
| `history.spec.js` | Transaction History | TC_HIST_001 – 013 |
| `navigation.spec.js` | Navigation & Session | TC_NAV_001 – 009 |

## Known Issues

- **VX-BUG-001 (P1):** Authenticated session is not recognized on direct navigation (`/login`) or full page reload. Affects `TC_AUTH_007` and `TC_REC_002`, both currently marked as `test.skip` with a reference to this bug rather than failing outright. See acceptance criteria AC-01-07 and REC-02 in the PRD.

## Notes

- Tests run against the **staging** environment by default; there is no local API/backend dependency required to run this suite.
- `playwright.config.js` limits parallel workers to `2` to avoid resource exhaustion against the shared staging environment.
- All Playwright tests use `data-testid` selectors exclusively, per the project's testing standards — never CSS classes or visible text.
