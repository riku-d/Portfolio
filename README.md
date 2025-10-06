# Rohit Dutta - Portfolio Website

A modern, full-stack portfolio website for Rohit Dutta, showcasing expertise in Data Science, AI Engineering, and Full-Stack Development. Built with React, Node.js, and featuring interactive 3D elements.

![Portfolio Preview](https://via.placeholder.com/800x400/0b0f14/00d4ff?text=Rohit+Dutta+Portfolio)

## 🚀 Features

### Frontend
- **Modern React SPA** with TypeScript and Vite
- **Dark Theme** with electric cyan/purple accent colors
- **Interactive 3D Hero** using Three.js with mobile fallback
- **Smooth Animations** powered by Framer Motion
- **Responsive Design** optimized for all devices
- **Accessibility** compliant with semantic HTML and ARIA labels

### Backend
- **Node.js + Express** RESTful API
- **MongoDB** for contact form submissions
- **Nodemailer** for email notifications
- **Input Validation** with Joi
- **Rate Limiting** for security
- **CORS** configuration for production

### Sections
- **Hero** - Interactive 3D scene with typing animation
- **About** - Personal story and core competencies
- **Skills** - Technical skills with proficiency levels
- **Projects** - Filterable project showcase (All, AI/ML, Web Dev, Blockchain, Data Analysis)
- **Education** - Academic background and certifications
- **Contact** - Contact form with email integration
- **Footer** - Links and additional information

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Framer Motion for animations
- Three.js for 3D graphics
- React Three Fiber for React integration
- Axios for API calls
- Lucide React for icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Nodemailer for email
- Joi for validation
- Express Rate Limit
- Helmet for security
- Morgan for logging

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohit-dutta/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   cp backend/env.example backend/.env
   
   # Edit the .env file with your configuration
   nano backend/.env
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend on http://localhost:5173
   - Backend on http://localhost:5000

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Email Configuration (Choose one method)

# Method 1: SMTP (Gmail, Outlook, etc.)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Method 2: SendGrid (Alternative)
# SENDGRID_API_KEY=your-sendgrid-api-key

# Contact Email
CONTACT_TO_EMAIL=rohit.dutta@example.com

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Security (Optional)
JWT_SECRET=your-jwt-secret-for-future-auth
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

#### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`
4. Add environment variable: `VITE_API_URL=https://your-backend-url.com`

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/dist`
4. Add environment variable: `VITE_API_URL=https://your-backend-url.com`

### Backend Deployment (Render/Heroku)

#### Render
1. Connect your GitHub repository to Render
2. Set build command: `cd backend && npm install`
3. Set start command: `cd backend && npm start`
4. Add environment variables from your `.env` file

#### Heroku
1. Install Heroku CLI
2. Create a new Heroku app
3. Set environment variables
4. Deploy using Git

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-portfolio-backend

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set SMTP_USER=your-email
heroku config:set SMTP_PASS=your-password
heroku config:set CONTACT_TO_EMAIL=your-contact-email
heroku config:set FRONTEND_URL=https://your-frontend-url.com

# Deploy
git push heroku main
```

### Full-Stack Deployment (Single App)

For a simpler deployment, you can serve the frontend from the backend:

1. Build the frontend: `cd frontend && npm run build`
2. Copy the `dist` folder to `backend/public`
3. Deploy only the backend

## 📁 Project Structure

```
portfolio/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── backend/                 # Node.js backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── public/             # Static files (resume)
│   ├── server.js           # Main server file
│   └── package.json
├── package.json            # Root package.json
└── README.md
```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development
- `npm run build` - Build the frontend
- `npm run start` - Start the backend in production
- `npm run install:all` - Install all dependencies

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start with nodemon
- `npm start` - Start in production
- `npm test` - Run tests

## 🎨 Customization

### Colors
The color scheme can be customized in `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Electric cyan colors
    500: '#00d4ff',
    // ... other shades
  },
  secondary: {
    // Purple colors
    500: '#7b61ff',
    // ... other shades
  },
  dark: {
    // Dark background colors
    950: '#0b0f14',
    // ... other shades
  }
}
```

### Content
- Update personal information in components
- Modify projects in `Projects.tsx`
- Change skills in `Skills.tsx`
- Update contact information in `Contact.tsx`

### 3D Scene
The 3D hero scene can be customized in `Hero3D.tsx`:
- Change colors and materials
- Add new 3D objects
- Modify animations
- Adjust lighting

## 🔒 Security Features

- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- Helmet.js for security headers
- Environment variable protection
- MongoDB injection prevention

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📈 Performance

- Lazy loading for heavy components
- Image optimization
- Code splitting
- Bundle size optimization
- 3D scene mobile fallback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help with deployment, please:
- Open an issue on GitHub
- Contact: rohit.dutta@example.com
- LinkedIn: [linkedin.com/in/rohit-dutta](https://linkedin.com/in/rohit-dutta)

## 🙏 Acknowledgments

- Three.js for 3D graphics
- Framer Motion for animations
- TailwindCSS for styling
- React Three Fiber for React integration
- All the open-source libraries used

---

**Made with ❤️ and lots of coffee by Rohit Dutta**
