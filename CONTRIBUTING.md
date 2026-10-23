# Contributing to Rohit Survase Portfolio

Thank you for your interest in contributing to this portfolio project!

## 📋 About This Project

This is a personal portfolio website showcasing my work, skills, and projects. While this is primarily a personal project, I welcome:

- **Bug reports** — if you find something broken
- **Suggestions** — ideas for improvements
- **Accessibility improvements** — making the site more accessible
- **Performance optimizations** — making it faster
- **Typo fixes** — corrections to content

## 🐛 Reporting Issues

If you find a bug or have a suggestion:

1. **Check existing issues** to avoid duplicates
2. **Open a new issue** with a clear title and description
3. **Include**:
   - What you expected to happen
   - What actually happened
   - Steps to reproduce (for bugs)
   - Screenshots (if applicable)
   - Browser and device information

## 🔧 Development Setup

```bash
# Clone the repository
git clone https://github.com/rohitsurvase08/rohit-survase-portfolio.git
cd rohit-survase-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📝 Pull Request Process

1. **Fork** the repository
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**:
   ```bash
   npm run build  # Ensure production build succeeds
   npm run lint   # Fix any linting issues
   ```
5. **Commit** with clear messages following [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: add new project card animation
   fix: resolve mobile menu overflow issue
   docs: update README installation steps
   style: improve button hover states
   ```
6. **Push** to your fork
7. **Open a Pull Request** with:
   - Clear description of changes
   - Screenshots/videos for UI changes
   - Reference to related issues

## 🎨 Code Style

This project uses:

- **ESLint** — JavaScript/React linting
- **Prettier** — Code formatting (100 character line width)
- **Tailwind CSS** — Utility-first styling

Run linting before committing:
```bash
npm run lint
```

## 🏗️ Project Structure

```
rohit-survase-portfolio/
├── app/              # Next.js App Router pages
├── components/       # React components
├── public/           # Static assets
└── .agents/          # Development documentation (not for production)
```

## ✅ Commit Guidelines

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Limit first line to 72 characters
- Reference issues: `fixes #123` or `closes #456`

## 🚫 What Not to Contribute

- **Personal content changes** (projects, skills, contact info) — these are specific to me
- **Major design overhauls** without prior discussion
- **New dependencies** without clear justification
- **Breaking changes** to existing functionality

## 📧 Questions?

Open an issue or reach out:
- Email: survaser06@gmail.com
- GitHub: [@rohitsurvase08](https://github.com/rohitsurvase08)

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.
