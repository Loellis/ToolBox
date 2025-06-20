# ToolBox
Simple toolbox for daily tasks

## Tasks

### 0 · Project Bootstrap & Meta
- Create repo "ToolBox" 
- Initialise with pnpm create vite@latest dev-toolbox --template react-ts
- Set up monorepo tooling
- Introduce Turbo Repo (or Nx) for future back-end package
- Configure ESLint, Prettier, Husky pre-commit

### 1 · Foundation Phase
- Shared UI / Utilities
- Install & configure TailwindCSS with dark-mode class strategy
- Create global ThemeProvider with dark/light toggle
- Build core layout shell
- Sidebar (tool picker) + main panel + output panel
- Persistent local-storage for last selected tool & theme
- Create CopyButton component
- Props: value, successToastMessage
- Create ExportModal component
- Allow download as .txt / .json / .csv
- Add utils/validators.ts & utils/formatters.ts

After these tasks, each individual tool only needs to plug into the shell rather than solve layout, theming, copy/export again.

### 2 · Tool Implementation Sprints
Each tool follows the mini-Kanban below—copy this template 14 ×.

- Card 👉 “Build Tool Name”
    - UI: Input form + result pane
    - Hook up core library function(s)
    - Unit tests for edge cases
    - Integrate CopyButton / ExportModal
    - e2e test (Playwright) (Optional)
    - Add route & menu icon

#### 2.1 String Validators
- JSON Validator / Formatter
    - Use jsonlint-mod
- XML Validator
    - Use fast-xml-parser
- YAML Validator
    - Use yaml npm package
- Base64 Encode/Decode
    - atob / btoa polyfill + textarea autoupdate
- Regex Tester
    - Live highlight matches with react-regex-highlight

#### 2.2 JWT Viewer / Validator
- Decode header & payload with jsonwebtoken
- Verify signature (user can paste secret / JWK)
- Warning badges for exp, nbf, iat

#### 2.3 Hashing & Encoding
- Re-use one tab for MD5, SHA-256, SHA-512 (select dropdown)
- Add URL Encode / Decode helper

#### 2.4 Timestamp & Duration
- Timestamp Converter
    - UNIX ↔ date-time, multiple time-zones via luxon
- Human-Readable Duration Parser
    - parse-duration & ms libs

#### 2.5 Markdown Preview
- Split-pane editor (Monaco) + preview (React-Markdown)
- Support GitHub-flavoured tables & Mermaid code fences (see below)

#### 2.6 UUID Generator
- v4 single + bulk (user-defined count)
- “Copy all” & CSV export

#### 2.7 CSV ↔ JSON Converter
- papaparse for CSV parse / unparse
- Support file upload + drag-drop area

#### 2.8 XML ↔ JSON ↔ YAML Converter
- Pipe through fast-xml-parser, yaml, json2yaml

#### 2.9 Fake Data Generator
- UI: choose count, locale, data types (name, email, phone…)
    - Library: faker.js / @faker-js/faker
- Table preview with copy/export

#### 2.10 Diff Checker
- Side-by-side Monaco diff
- Detect JSON → prettify before diff if both parse

#### 2.11 Syntax Highlight Preview
- Monaco editor language selector
- Read-only highlight mode

#### 2.12 Mermaid Graph Generator
- Textarea input, render via @mermaid-js/mermaid
- Copy SVG & PNG export

### 3 · Cross-Cutting Enhancements
- Global search / spotlight (Cmd + K) to jump to any tool
- Keyboard shortcut map documentation
- PWA support for offline usage
- i18n scaffold (English default, Norwegian later)

### 4 · Testing & Quality Gates
- Unit tests ≥ 90 % lines (vitest)
- e2e smoke for each tool (Playwright headless)

### 5 · Release & Distribution
- Versioning with conventional commits + semantic-release
- Dockerfile (FROM node:20-alpine, serve with vite preview)

### 6 · Documentation & Onboarding
- README.md with screenshots & GIFs
- Changelog generated automatically