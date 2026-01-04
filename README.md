# 🔍 Site Audit Pro

*AI-Powered Website Performance & Security Auditor*

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A comprehensive dashboard that transforms website analysis into actionable business insights. Analyze performance, SEO, security, and accessibility metrics through an intuitive interface with AI-powered recommendations.

![Site Audit Pro Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Features

### 📊 **Comprehensive Analysis**
- **Performance Metrics**: Core Web Vitals (FCP, LCP, CLS, TBT) with actionable insights
- **SEO Audit**: Technical SEO analysis with optimization recommendations
- **Security Scan**: Cookie analysis, header checks, and vulnerability detection
- **Accessibility**: WCAG compliance checks and contrast ratio validation

### 🚀 **Business Intelligence**
- **Revenue Projections**: Estimated revenue loss due to performance issues
- **Conversion Uplift**: AI-calculated potential conversion improvements
- **Market Positioning**: Competitive analysis and benchmarking

### 🎯 **Smart Features**
- **Interactive Reports**: Tabbed interface with detailed breakdowns
- **Export Options**: PDF, JSON, CSV, and HTML report generation
- **Scan History**: LocalStorage persistence for recent audits
- **Dark/Light Mode**: Full theme support with system preference detection
- **Code Snippets**: Implementation-ready solutions for identified issues

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React 18** | UI Framework | 18.2.0 |
| **Tailwind CSS** | Styling & Design System | 3.4.1 |
| **Lucide React** | Icon Library | Latest |
| **Context API** | State Management | Built-in |
| **LocalStorage** | Data Persistence | Browser API |

## 🚀 Getting Started

### Prerequisites
- Node.js 16.14.0 or higher
- npm 8.5.0 or higher
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/site-audit-pro.git
   cd site-audit-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment** (Optional)
   Create `.env` file in root:
   ```env
   REACT_APP_ANALYTICS_ID=your-id-here
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   ```

## 📖 Usage Guide

### 1. **Initial Analysis**
   - Enter any website URL (e.g., `https://example.com`)
   - Click "Analyze Site" to begin comprehensive scan
   - View real-time progress through 6 analysis stages

### 2. **Interpret Results**
   - **Overview Tab**: Quick scorecard with overall rating
   - **Technical Audit**: Detailed performance metrics and tech stack
   - **SEO & Access**: Search optimization and accessibility findings
   - **Security**: Cookie analysis and security header checks
   - **Business Intel**: Revenue impact and market positioning

### 3. **Take Action**
   - Click any issue for detailed solution with code snippets
   - Export reports in multiple formats for sharing
   - Track improvement over time using scan history

## 📁 Project Structure

```
site-audit-pro/
├── src/
│   ├── components/          # React components
│   │   ├── LandingView.js   # Landing page
│   │   ├── AnalysisProgress.js # Progress indicator
│   │   └── AuditResults.js  # Results dashboard
│   ├── contexts/            # React contexts
│   │   └── ToastContext.js  # Notification system
│   ├── utils/               # Utility functions
│   │   └── dataGenerator.js # Mock data generator
│   ├── App.js              # Main application
│   └── index.js            # Entry point
├── public/                  # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── README.md               # This file
```

## 🎨 UI Components

| Component | Purpose |
|-----------|---------|
| **Button** | Interactive elements with 6 variants |
| **Card** | Content containers with shadow effects |
| **Badge** | Status indicators and labels |
| **Progress** | Animated progress bars |
| **Tabs** | Tabbed navigation system |
| **Dialog** | Modal windows for details |
| **Toast** | Notification system |

## 🔧 Configuration

### Tailwind Customization
Edit `tailwind.config.js`:
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
      }
    },
  },
}
```

### Adding New Icons
```javascript
import { NewIcon } from 'lucide-react';

// Use in component:
<NewIcon className="w-5 h-5" />
```

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and structure
- Add comments for complex logic
- Update documentation accordingly
- Test changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI Inspiration from [shadcn/ui](https://ui.shadcn.com/)
- Performance metrics based on [Google Core Web Vitals](https://web.dev/vitals/)

## 📞 Contact



Project Link: https://github.com/adharshraj77/Site_audit

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://site-audit-adharsh.vercel.app/)

1. Connect your GitHub repository to Vercel
2. Automatic deployments on every push
3. Free SSL and custom domain support


---

<div align="center">
  <sub>Built with ❤️ by the Site Audit Pro team</sub><br>
  <sub>If you find this useful, give it a ⭐ on GitHub!</sub>
</div>

## 📊 Roadmap

- [ ] **Real API Integration** - Connect with Lighthouse, PageSpeed Insights
- [ ] **Multi-page Analysis** - Crawl entire websites
- [ ] **Team Collaboration** - Share reports with team members
- [ ] **Scheduled Scans** - Automatic weekly/monthly audits
- [ ] **Competitor Comparison** - Benchmark against competitors
- [ ] **Mobile App** - React Native version

