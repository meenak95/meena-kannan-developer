# Full-Stack Java Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases a full-stack Java developer's skills, projects, and experience with a beautiful, animated interface.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Components**: Animated code snippets, project visuals, and skill progress bars
- **Project Showcase**: Detailed project cards with filtering and search functionality
- **Experience Timeline**: Professional experience with achievements and technologies
- **Contact Form**: Functional contact form with validation
- **Dark Theme**: Beautiful dark theme with gradient accents

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Local Hosting

After building the project, you can host it locally using several methods:

### Method 1: Using npx serve
```bash
npx serve -s dist -l 3000
```

### Method 2: Using provided scripts
```bash
# Windows Command Prompt:
start-server.bat

# Windows PowerShell:
.\start-server.ps1
```

### Method 3: Using Python (if installed)
```bash
# Python 3
python -m http.server 3000 --directory dist

# Python 2
python -m SimpleHTTPServer 3000
```

Your portfolio will be available at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.1.40:3000 (accessible from other devices on your network)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, etc.)
│   ├── hero/           # Hero section components
│   ├── skills/         # Skills showcase components
│   ├── projects/       # Project-related components
│   └── Layout.tsx      # Main layout component
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── entities/           # Data models and mock data
│   ├── Project.ts
│   ├── Experience.ts
│   └── Skill.ts
├── utils/              # Utility functions
├── lib/                # Library configurations
└── App.tsx             # Main app component
```

## 🎨 Customization

### Colors and Theme
The portfolio uses a custom color scheme defined in `tailwind.config.js`. You can modify the colors by updating the theme configuration.

### Content
- **Projects**: Edit `src/entities/Project.ts` to add/modify projects
- **Experience**: Update `src/entities/Experience.ts` for work experience
- **Skills**: Modify `src/entities/Skill.ts` for technical skills
- **Personal Info**: Update contact information in `src/pages/Contact.tsx`

### Styling
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are defined in the CSS file

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎭 Animations

The portfolio includes various animations powered by Framer Motion:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states
- Interactive project visuals

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or suggestions, please open an issue or contact the developer.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
