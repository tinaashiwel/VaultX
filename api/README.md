# VaultX API Test Layer

This directory is reserved for service-level automation that complements the browser-based Playwright suite.

## Intended coverage

- Authentication endpoints
- OTP verification
- Wallet endpoints
- Transfer endpoints
- Transaction history
- Authorization and negative API scenarios
- Response status and schema validation

## Approach

API tests should validate service behavior independently of the UI and can also be used to prepare deterministic data for end-to-end tests.

The API layer is intentionally kept separate from UI Page Objects so failures can be diagnosed at the appropriate layer.

## Planned execution

```bash
npx playwright test api/
```

No production endpoints or credentials should be committed to this repository.
