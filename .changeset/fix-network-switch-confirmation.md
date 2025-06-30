---
"@gonzalomelov/dappwright": patch
---

Fix network switch confirmation handling for MetaMask

- Add proper popup load state waiting before interaction
- Bring popup to front to ensure it's active
- Support both 'page-container-footer-next' and 'confirmation-submit-button' selectors for broader MetaMask version compatibility