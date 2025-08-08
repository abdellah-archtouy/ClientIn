# ClientIn - Customer Service Management Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.2.2-purple?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.11-teal?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Express-4.18.2-green?style=for-the-badge&logo=express" alt="Express" />
</div>

## 🚀 Overview

ClientIn is a revolutionary customer service management platform that transforms how businesses interact with their customers using innovative NFC (Near Field Communication) technology. The platform enables real-time feedback collection, employee performance tracking, and comprehensive analytics to boost customer satisfaction and team efficiency.

## ✨ Key Features

### 🎯 **Core Functionality**
- **NFC Card System**: Each employee gets a personalized NFC card for instant customer feedback
- **Real-time Dashboard**: Monitor team performance and customer satisfaction live
- **Feedback Management**: Comprehensive system to collect, analyze, and respond to customer feedback
- **Employee Management**: Complete employee profiles with performance tracking
- **Analytics & Reporting**: Advanced charts and insights for data-driven decisions

### 📱 **User Experience**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Multi-language Support**: Built-in internationalization ready
- **Professional UI**: Modern interface with smooth animations and transitions

### 🔐 **Security & Authentication**
- **Secure Login/Signup**: Complete authentication system with form validation
- **User Profiles**: Detailed user management with role-based permissions
- **Data Protection**: Privacy-focused design with GDPR compliance ready

### 📊 **Business Intelligence**
- **Performance Metrics**: Track employee ratings, feedback trends, and satisfaction scores
- **Custom Analytics**: Filter and analyze data by department, time period, and more
- **Export Capabilities**: Download reports and data for external analysis
- **Real-time Updates**: Live notifications and data synchronization

## 🛠️ Tech Stack

### **Frontend**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe development with full IDE support
- **Vite 6.2.2** - Lightning-fast build tool and dev server
- **TailwindCSS 3.4.11** - Utility-first CSS framework with custom design system
- **Radix UI** - Headless, accessible UI components
- **React Router 6** - Client-side routing with SPA mode
- **React Query** - Data fetching and state management
- **Framer Motion** - Smooth animations and micro-interactions

### **Backend**
- **Express 4.18.2** - Fast, unopinionated web framework
- **Node.js** - JavaScript runtime built on Chrome's V8 engine
- **TypeScript** - End-to-end type safety

### **Development Tools**
- **Vitest** - Fast unit testing with TypeScript support
- **ESLint & Prettier** - Code linting and formatting
- **Zod** - Runtime type validation and parsing

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdellah-archtouy/ClientIn.git
   cd ClientIn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application running.

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Type checking
npm run typecheck
```

## 📁 Project Structure

```
ClientIn/
├── client/                     # Frontend React application
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI component library (Radix UI)
│   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   ├── SearchField.tsx   # Reusable search component
│   │   ├── NotificationPanel.tsx
│   │   └── ProfileDropdown.tsx
│   ├── pages/                # Route components
│   │   ├── Index.tsx         # Home/landing page
│   │   ├── Dashboard.tsx     # Main dashboard
│   │   ├── Login.tsx         # Authentication
│   │   ├── Signup.tsx        # User registration
│   │   ├── EmployeeManagement.tsx
│   │   ├── Feedback.tsx      # Feedback management
│   │   ├── Charts.tsx        # Analytics dashboard
│   │   ├── ViewProfile.tsx   # User profile
│   │   ├── AccountSettings.tsx
│   │   └── Upgrade.tsx       # Subscription management
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and configurations
│   ├── App.tsx              # Main application component
│   └── global.css           # Global styles and Tailwind imports
├── server/                   # Backend Express application
│   ├── routes/              # API route handlers
│   ├── index.ts            # Main server setup
│   └── node-build.ts       # Production build configuration
├── shared/                  # Shared types and utilities
│   └── api.ts              # API interface definitions
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite build configuration
```

## 🎨 Design System

ClientIn uses a comprehensive design system built with TailwindCSS:

### **Colors**
- **Primary**: Green accent (`--primary`) for branding and CTAs
- **Background**: Dark theme optimized for professional use
- **Semantic Colors**: Success, warning, error states with proper contrast

### **Typography**
- **Inter Font Family**: Modern, readable font optimized for UI
- **Responsive Scale**: Fluid typography that scales across devices
- **Proper Hierarchy**: Clear heading and body text relationships

### **Components**
- **Consistent Spacing**: 8px grid system for perfect alignment
- **Border Radius**: Rounded corners (0.5rem base) for modern feel
- **Shadows**: Layered shadow system for depth and hierarchy
- **Animations**: Smooth transitions (200ms duration) for premium feel

## 🌟 Key Pages & Features

### **Dashboard** (`/dashboard`)
- Real-time employee activity monitoring
- Performance statistics with trend indicators
- Quick actions for common tasks
- Live feedback stream
- NFC card management overview

### **Employee Management** (`/employees`)
- Complete employee directory with search and filtering
- Individual performance tracking
- NFC card assignment and monitoring
- Department-based organization
- Bulk operations and data export

### **Feedback Management** (`/feedback`)
- Customer feedback collection and management
- Response system for customer service
- Sentiment analysis and categorization
- Performance impact tracking
- Advanced filtering and search capabilities

### **Analytics** (`/charts`)
- Interactive performance charts and graphs
- Department comparison views
- Rating distribution analysis
- Time-based trend analysis
- Exportable reports and data

### **Profile & Settings** (`/profile`, `/settings`)
- User profile management with photo upload
- Account preferences and notifications
- Security settings including 2FA
- Theme and language preferences
- Subscription and billing management

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=8080
NODE_ENV=development

# Database (when implemented)
# DATABASE_URL=your_database_url

# Authentication (when implemented)
# JWT_SECRET=your_jwt_secret
# JWT_EXPIRES_IN=7d

# NFC Integration (when implemented)
# NFC_API_KEY=your_nfc_api_key
```

### **Customization**
- **Theme**: Modify `client/global.css` for color scheme changes
- **Components**: Extend UI components in `client/components/ui/`
- **Routes**: Add new pages in `client/pages/` and update routing in `App.tsx`

## 🚢 Deployment

### **Recommended Platforms**
- **Netlify** (Frontend) - Optimized for React SPAs with automatic deployments
- **Vercel** (Full-stack) - Zero-config deployment with serverless functions
- **Railway/Render** (Backend) - For Express server deployment

### **Build Commands**
```bash
# Frontend build
npm run build:client

# Backend build  
npm run build:server

# Full build (both)
npm run build
```

## 🤝 Contributing

We welcome contributions to ClientIn! Please follow these guidelines:

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper TypeScript types
4. Add tests for new functionality
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### **Code Standards**
- **TypeScript**: All code must be properly typed
- **ESLint**: Follow the established linting rules
- **Prettier**: Code must be formatted before committing
- **Testing**: New features should include appropriate tests
- **Documentation**: Update README and code comments for significant changes

### **Component Guidelines**
- Use Radix UI primitives for accessibility
- Follow the established design system
- Implement proper loading and error states
- Add proper TypeScript interfaces for props
- Include JSDoc comments for complex functions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** - For accessible, unstyled UI components
- **TailwindCSS** - For the utility-first CSS framework
- **Lucide React** - For beautiful, consistent icons
- **Vite** - For the incredibly fast build tool
- **React Team** - For the amazing React framework

## 🔗 Links

- **Live Demo**: [ClientIn Dashboard](https://760949d4c94a4e9b8695df75b95a2750-29dd74000c944afd9ff5251f3.fly.dev/dashboard)
- **GitHub Repository**: [abdellah-archtouy/ClientIn](https://github.com/abdellah-archtouy/ClientIn)
- **Documentation**: [Project Wiki](https://github.com/abdellah-archtouy/ClientIn/wiki)

## 💬 Support

For questions, suggestions, or support:
- **GitHub Issues**: [Create an issue](https://github.com/abdellah-archtouy/ClientIn/issues)
- **Email**: [Contact the team](mailto:contact@clientin.com)
- **Discord**: [Join our community](https://discord.gg/clientin)

---

<div align="center">
  <strong>Built with ❤️ by the ClientIn Team</strong>
</div>
