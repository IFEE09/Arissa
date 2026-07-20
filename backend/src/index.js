import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Routes
import authRoutes from './routes/auth.js'
import servicesRoutes from './routes/services.js'
import successStoriesRoutes from './routes/successStories.js'
import categoriesRoutes from './routes/categories.js'
import articlesRoutes from './routes/articles.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/success-stories', successStoriesRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/articles', articlesRoutes)

// Error handling middleware
app.use((err, req, res, _next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
  console.log(`🚀 Arissa Backend running on http://localhost:${PORT}`)
  console.log(`📚 API Docs: http://localhost:${PORT}/api/health`)
})
