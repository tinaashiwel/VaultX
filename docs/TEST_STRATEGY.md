# VaultX Test Strategy

## 1. Purpose

This document defines the overall quality strategy for the VaultX fintech application. It establishes the testing objectives, scope, approach, environments, risks, and quality gates used to assess the application before release.

## 2. Quality Objectives

- Verify critical user journeys work as intended.
- Detect functional defects early through automated regression coverage.
- Validate authentication, authorization, wallet, transfer, and transaction workflows.
- Reduce regression risk through repeatable automated execution.
- Provide traceable evidence through test reports and CI artifacts.
- Protect sensitive test data and prevent credentials from entering source control.

## 3. Test Scope

### In Scope

- Login and credential validation
- Two-factor authentication
- Dashboard
- Wallet information and interactions
- Send and receive transfers
- Transaction history and filtering
- Navigation and session behavior
- API validation where endpoints are available
- Negative and boundary scenarios
- Regression testing

### Out of Scope

- Production infrastructure penetration testing
- Real financial transactions
- Third-party provider infrastructure
- Load testing unless separately commissioned
- Testing with real customer data

## 4. Test Levels

| Level | Purpose | Tools |
|---|---|---|
| Unit | Validate isolated application logic where source is available | Application test tooling |
| API | Validate service contracts, status codes, authorization and data | Postman / Playwright API |
| UI / E2E | Validate complete user journeys | Playwright |
| Regression | Detect defects introduced by changes | Playwright |
| Security | Validate authentication, authorization and input controls | Playwright / API tooling |
| Exploratory | Discover unexpected behavior outside scripted paths | Manual testing |

## 5. Test Types

### Functional Testing

Confirms that features satisfy documented requirements and acceptance criteria.

### Negative Testing

Validates how the application behaves with invalid credentials, malformed input, insufficient balance, invalid addresses, empty fields, and unsupported actions.

### Boundary Testing

Targets limits such as minimum/maximum amounts, field lengths, OTP length, and transaction constraints.

### Regression Testing

The automated suite covers high-value workflows and is intended to execute on every relevant code change through GitHub Actions.

### Security Testing

Focuses on authentication controls, session handling, authorization boundaries, input validation, and sensitive data exposure. This portfolio project does not represent a production penetration test.

## 6. Automation Strategy

Playwright is used for browser automation with JavaScript. The framework uses Page Object Model principles to isolate page-specific locators and actions from test specifications.

### Automation Principles

- Prefer stable `data-testid` selectors where available.
- Keep test steps readable and business-focused.
- Reuse authentication and common workflows through helpers.
- Avoid hard-coded secrets.
- Capture diagnostics on failure.
- Keep tests independent where practical.
- Tag high-value tests for smoke and regression execution.

## 7. Environment Strategy

Primary environment: controlled VaultX staging/training environment.

Environment-specific configuration is supplied through `.env`. The repository contains `.env.example` as a safe template and must not contain real credentials.

## 8. Entry Criteria

Testing can begin when:

- The target build is deployed to the test environment.
- Required test accounts are available.
- Critical acceptance criteria are defined.
- The environment is accessible and stable enough for execution.

## 9. Exit Criteria

A release candidate is considered test-complete when:

- Critical smoke scenarios pass.
- No unresolved blocker or critical defects remain without explicit acceptance.
- Regression testing has been completed for impacted modules.
- Test evidence and known limitations are documented.
- CI execution is successful or failures have been investigated.

## 10. Defect Management

Defects should include:

- Clear title
- Environment
- Preconditions
- Reproduction steps
- Expected result
- Actual result
- Severity
- Priority
- Evidence
- Status

Automation should not hide known product defects. Where a defect prevents execution, the test should be documented and the limitation clearly reported.

## 11. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Staging instability | High | Controlled workers, retries and failure diagnostics |
| Authentication/session changes | High | Centralized authentication helper and dedicated auth suite |
| Test-data collisions | Medium | Environment-specific test data and independent scenarios |
| Flaky UI timing | Medium | Explicit Playwright waits and stable locators |
| Credential exposure | Critical | `.env`, secrets management and `.gitignore` |

## 12. Reporting

Playwright HTML reports provide execution evidence. Failed scenarios retain screenshots, traces, and videos where configured. GitHub Actions stores the report as a workflow artifact.

## 13. Quality Gates

The minimum automated quality gate is successful execution of the smoke/critical journey suite. Full regression is executed for significant changes and before release decisions.
