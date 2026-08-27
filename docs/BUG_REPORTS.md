# VaultX Defect Register

This register demonstrates structured defect reporting and the relationship between product defects and automation coverage.

## VX-BUG-001: Authenticated session is not consistently preserved after direct navigation or reload

**Severity:** High  
**Priority:** High  
**Area:** Authentication / Session Management  
**Environment:** Staging / Training  
**Status:** Open

### Description

An authenticated user can lose session state when directly navigating to a route or performing a full page reload. The application does not consistently restore the expected authenticated state.

### Preconditions

- A valid test account exists.
- User has completed authentication.
- User is on an authenticated application route.

### Steps to Reproduce

1. Log in with valid test credentials.
2. Complete the required 2FA step.
3. Navigate to an authenticated route.
4. Reload the page or directly navigate to the route.
5. Observe the resulting session state.

### Expected Result

The application should apply its defined session policy consistently and preserve or restore authentication when the session is still valid.

### Actual Result

Authentication state is not consistently preserved after direct navigation/reload.

### Automation Impact

Affected scenarios are documented in the test suite. Tests blocked by the product defect should be explicitly marked or reported rather than converted into false positives.

### Recommendation

Investigate client-side session persistence, authentication state restoration, and route-guard behavior.

---

## Defect Reporting Standard

Every defect should contain:

- Unique identifier
- Clear title
- Severity and priority
- Environment
- Preconditions
- Reproduction steps
- Expected result
- Actual result
- Evidence
- Automation impact
- Current status

> Additional defects should only be added when they have been reproduced and verified. This register intentionally avoids inventing defects merely to make the portfolio appear larger.
