# VaultX Test Plan

## 1. Overview

This test plan defines the execution approach for validating the VaultX fintech application across core customer-facing workflows.

## 2. Objectives

1. Validate critical functionality against expected business behavior.
2. Confirm that authentication and 2FA controls work correctly.
3. Verify wallet, transfer, and transaction workflows.
4. Identify regressions after application changes.
5. Provide reproducible evidence for defects and release decisions.

## 3. Modules Covered

- Authentication
- Two-factor authentication
- Dashboard
- Wallet
- Send transfer
- Receive transfer
- Transaction history
- Navigation and session management

## 4. Test Approach

### Smoke

A small set of critical scenarios confirming that the application is available and the main user journey is functional.

### Functional

Feature-level validation of expected business rules and UI behavior.

### Negative

Invalid credentials, invalid OTP, empty fields, invalid wallet addresses, insufficient balances, and other invalid inputs.

### Regression

Execution of the broader automated suite after significant application changes.

### Exploratory

Unscripted investigation used to identify scenarios not covered by predefined cases.

## 5. Test Environment

| Item | Value |
|---|---|
| Application | VaultX |
| Environment | Staging / Training |
| Automation | Playwright |
| Language | JavaScript |
| Browser | Chromium by default |
| CI | GitHub Actions |

## 6. Test Data

Test credentials and environment-specific values are supplied through environment variables. No production credentials or sensitive customer information should be stored in the repository.

Representative data includes valid/invalid login credentials, valid/invalid OTP values, wallet addresses, transfer amounts, and transaction records.

## 7. Execution Commands

```bash
npm test
npm run test:headed
npm run test:auth
npm run test:report
```

## 8. Defect Severity

| Severity | Definition |
|---|---|
| Blocker | Prevents testing or a critical business journey from operating |
| Critical | Severe failure with major business/security impact |
| High | Important functionality is materially impaired |
| Medium | Functional issue with a reasonable workaround |
| Low | Minor usability, visual, or non-critical issue |

## 9. Deliverables

- Automated test suite
- Test strategy
- Test plan
- Test cases
- CI execution results
- HTML reports
- Defect documentation
- Regression coverage

## 10. Completion Criteria

Testing is complete when the agreed test scope has been executed, critical defects have been assessed, regression results have been reviewed, and outstanding risks are documented.
