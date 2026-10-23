# Security Policy

## 🔒 Reporting a Vulnerability

If you discover a security vulnerability in this portfolio website, please report it responsibly.

### ✅ Please Report

- Security vulnerabilities in dependencies
- XSS (Cross-Site Scripting) vulnerabilities
- Exposed sensitive information
- Authentication or authorization bypasses
- Any security issue that could affect visitors

### 📧 How to Report

**Email:** survaser06@gmail.com

Please include:

1. **Description** — Clear explanation of the vulnerability
2. **Impact** — Potential consequences
3. **Steps to Reproduce** — Detailed instructions
4. **Proposed Fix** — If you have suggestions
5. **Your Contact Info** — For follow-up questions

### ⏱️ Response Time

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Fix Timeline:** Varies by severity (critical issues prioritized)

### 🤝 Responsible Disclosure

Please:

- ✅ Give reasonable time to fix before public disclosure
- ✅ Avoid automated scanning that might impact availability
- ✅ Do not access or modify data belonging to others
- ✅ Do not perform actions that could harm site availability

### 🛡️ Security Measures

This portfolio implements:

- ✅ **No user authentication** — reduces attack surface
- ✅ **No database** — static site with no backend
- ✅ **No user input** — no forms or data submission (contact via external links)
- ✅ **HTTPS enforcement** — when deployed to production
- ✅ **Content Security Policy** — planned for production deployment
- ✅ **Regular dependency updates** — monitored via npm audit

### 📦 Dependency Security

We use:

```bash
npm audit        # Check for known vulnerabilities
npm update       # Update to latest patch versions
```

Current security status available via: `npm audit`

### 🔍 Out of Scope

The following are **not security issues** for this static portfolio:

- ❌ Lack of rate limiting (no dynamic endpoints)
- ❌ Missing CAPTCHA (no forms)
- ❌ Session management (no sessions)
- ❌ SQL injection (no database)
- ❌ File upload vulnerabilities (no uploads)

### 🏆 Recognition

Security researchers who report valid vulnerabilities will be:

- ✅ Credited in CHANGELOG.md (with permission)
- ✅ Thanked publicly in commit messages
- ✅ Added to a security acknowledgments section (if desired)

### 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)

---

**Last Updated:** October 23, 2026
