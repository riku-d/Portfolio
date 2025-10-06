# Deployment Guide

This guide covers various deployment options for the Rohit Dutta Portfolio website.

## 🚀 Quick Deploy Options

### Option 1: Vercel + Render (Recommended)

**Frontend (Vercel)**
1. Connect GitHub repository to Vercel
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`
4. Add environment variable: `VITE_API_URL=https://your-backend-url.onrender.com`

**Backend (Render)**
1. Connect GitHub repository to Render
2. Set build command: `cd backend && npm install`
3. Set start command: `cd backend && npm start`
4. Add environment variables from your `.env` file

### Option 2: Netlify + Railway

**Frontend (Netlify)**
1. Connect GitHub repository to Netlify
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/dist`
4. Add environment variable: `VITE_API_URL=https://your-backend-url.railway.app`

**Backend (Railway)**
1. Connect GitHub repository to Railway
2. Set build command: `cd backend && npm install`
3. Set start command: `cd backend && npm start`
4. Add environment variables

### Option 3: Full-Stack on Heroku

1. Create a new Heroku app
2. Add buildpacks for Node.js
3. Set environment variables
4. Deploy from GitHub

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create your-portfolio-app

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set SMTP_USER=your-email
heroku config:set SMTP_PASS=your-password
heroku config:set CONTACT_TO_EMAIL=your-contact-email
heroku config:set FRONTEND_URL=https://your-app.herokuapp.com

# Deploy
git push heroku main
```

## 🐳 Docker Deployment

### Local Docker Development

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Production Docker Deployment

1. **Build images**
   ```bash
   docker build -t portfolio-frontend ./frontend
   docker build -t portfolio-backend ./backend
   ```

2. **Run containers**
   ```bash
   docker run -d -p 3000:3000 portfolio-frontend
   docker run -d -p 5000:5000 portfolio-backend
   ```

## ☁️ Cloud Platform Specific

### AWS Deployment

**Frontend (S3 + CloudFront)**
1. Build the frontend: `cd frontend && npm run build`
2. Upload `dist` folder to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain

**Backend (EC2 + RDS)**
1. Launch EC2 instance
2. Install Node.js and dependencies
3. Set up RDS for MongoDB
4. Configure security groups
5. Deploy application

### Google Cloud Platform

**Frontend (Firebase Hosting)**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Build and deploy
cd frontend && npm run build
firebase deploy
```

**Backend (Cloud Run)**
1. Create Dockerfile for backend
2. Build and push to Container Registry
3. Deploy to Cloud Run
4. Configure environment variables

### Azure Deployment

**Frontend (Static Web Apps)**
1. Create Azure Static Web App
2. Connect GitHub repository
3. Configure build settings
4. Deploy

**Backend (App Service)**
1. Create App Service
2. Configure deployment from GitHub
3. Set environment variables
4. Deploy

## 🔧 Environment Variables

### Required Variables

```env
# Server
PORT=5000
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=rohit.dutta@example.com

# CORS
FRONTEND_URL=https://your-frontend-domain.com
```

### Optional Variables

```env
# Security
JWT_SECRET=your-jwt-secret

# Analytics
GOOGLE_ANALYTICS_ID=your-ga-id

# Monitoring
SENTRY_DSN=your-sentry-dsn
```

## 📊 Monitoring & Analytics

### Health Checks

The backend includes health check endpoints:
- `GET /api/health` - Basic health status
- Docker health check configured

### Logging

- Morgan for HTTP request logging
- Console logging for errors
- Structured logging for production

### Performance Monitoring

Consider adding:
- New Relic
- DataDog
- Sentry for error tracking
- Google Analytics for frontend

## 🔒 Security Considerations

### Production Security

1. **Environment Variables**
   - Never commit `.env` files
   - Use secure secret management
   - Rotate secrets regularly

2. **HTTPS**
   - Always use HTTPS in production
   - Configure SSL certificates
   - Use HSTS headers

3. **CORS**
   - Configure CORS for specific domains
   - Avoid wildcard origins

4. **Rate Limiting**
   - Implement rate limiting
   - Monitor for abuse

5. **Input Validation**
   - Validate all inputs
   - Sanitize user data
   - Use parameterized queries

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check `FRONTEND_URL` environment variable
   - Verify CORS configuration

2. **Database Connection**
   - Check MongoDB URI
   - Verify network access
   - Check authentication

3. **Email Not Sending**
   - Verify SMTP credentials
   - Check email provider settings
   - Test with different providers

4. **Build Failures**
   - Check Node.js version
   - Verify all dependencies
   - Check environment variables

### Debug Commands

```bash
# Check backend health
curl https://your-backend-url.com/api/health

# Test contact form
curl -X POST https://your-backend-url.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'

# Check logs
docker-compose logs backend
```

## 📈 Scaling

### Horizontal Scaling

1. **Load Balancer**
   - Use nginx or cloud load balancer
   - Distribute traffic across instances

2. **Database**
   - Use MongoDB Atlas
   - Configure read replicas
   - Implement connection pooling

3. **CDN**
   - Use CloudFront or similar
   - Cache static assets
   - Optimize images

### Vertical Scaling

1. **Increase Resources**
   - More CPU/RAM for backend
   - Larger database instances
   - Optimize application code

2. **Caching**
   - Redis for session storage
   - CDN for static assets
   - Database query caching

## 🔄 CI/CD Pipeline

The repository includes GitHub Actions for:
- Automated testing
- Code quality checks
- Build verification
- Deployment automation

Configure secrets in GitHub:
- `API_URL` - Backend URL for frontend builds
- `MONGODB_URI` - Database connection string
- `SMTP_*` - Email configuration
- `CONTACT_TO_EMAIL` - Contact email address

## 📞 Support

For deployment issues:
1. Check the logs
2. Verify environment variables
3. Test locally first
4. Check platform-specific documentation
5. Open an issue on GitHub

---

**Happy Deploying! 🚀**
