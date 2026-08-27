# VaultX Test Case Catalogue

This catalogue provides representative test coverage for the automated and planned QA scope. Detailed implementation remains in the `tests/` directory.

## Authentication

| ID | Scenario | Expected Result | Priority |
|---|---|---|---|
| AUTH-001 | Login with valid credentials | User proceeds to 2FA | Critical |
| AUTH-002 | Login with invalid password | Error is displayed and access is denied | High |
| AUTH-003 | Login with empty email | Validation is displayed | Medium |
| AUTH-004 | Login with empty password | Validation is displayed | Medium |
| AUTH-005 | Verify loading state during login | Loading indicator is displayed while request is processed | Medium |

## Two-Factor Authentication

| ID | Scenario | Expected Result | Priority |
|---|---|---|---|
| 2FA-001 | Submit valid six-digit OTP | User reaches dashboard | Critical |
| 2FA-002 | Submit invalid OTP | Verification fails with an error | High |
| 2FA-003 | Enter incomplete OTP | Submission is prevented or validation is shown | High |
| 2FA-004 | Paste six-digit OTP | OTP fields are populated correctly | Medium |

## Dashboard

| ID | Scenario | Expected Result | Priority |
|---|---|---|---|
| DASH-001 | Load dashboard after authentication | Dashboard renders successfully | Critical |
| DASH-002 | Verify key dashboard elements | Required cards/sections are visible | High |
| DASH-003 | Navigate from dashboard to wallet | Wallet page opens | High |
| DASH-004 | Navigate from dashboard to history | Transaction history opens | High |

## Wallet

| ID | Scenario | Expected Result | Priority |
|---|---|---|---|
| WAL-001 | View wallet balance | Balance is displayed correctly | Critical |
| WAL-002 | View receive address | Address is displayed in receive view | High |
| WAL-003 | Copy wallet address | Address is copied without alteration | Medium |
| WAL-004 | Switch wallet context | Selected wallet becomes active | High |

## Transfers

| ID | Scenario | Expected Result | Priority |
|---|---|---|---|
| SEND-001 | Open Send tab | Send form is displayed | High |
| SEND-002 | Enter valid transfer data | USD/value preview updates correctly | Critical |
| SEND-003 | Submit transfer above available balance | Insufficient-balance error is shown | Critical |
| SEND-004 | Submit invalid wallet address | Address validation is shown | High |
| SEND-005 | Submit with required field missing | Form prevents invalid submission | High |
| REC-001 | Open Receive tab | Receive tab is selected by default | High |
| REC-002 | Verify deposit address | Correct address is displayed | Critical |

## Transaction History

| ID | Scenario | Expected Result | Priority |
|---|---|---|---|
| HIST-001 | Load transaction history | Transactions are displayed | Critical |
| HIST-002 | Verify newest-first ordering | Most recent transaction appears first | High |
| HIST-003 | Verify transaction count | Count matches displayed dataset | Medium |
| HIST-004 | Apply transaction filter | Only matching transactions are displayed | High |
| HIST-005 | Clear transaction filter | Full dataset is restored | Medium |

## Navigation & Session

| ID | Scenario | Expected Result | Priority |
|---|---|---|---|
| NAV-001 | Navigate through primary menu | Correct destination opens | High |
| NAV-002 | Use browser back navigation | Previous page is restored correctly | Medium |
| NAV-003 | Reload authenticated page | Behavior matches defined session policy | High |
| NAV-004 | Navigate to protected route without authentication | Access is appropriately restricted | Critical |

## Test Design Techniques

The suite applies:

- Positive testing
- Negative testing
- Boundary-value analysis
- Equivalence partitioning
- State-transition testing
- Validation testing
- Workflow/end-to-end testing
- Risk-based regression selection
