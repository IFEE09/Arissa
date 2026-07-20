import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()
const prisma = new PrismaClient()

// GET /api/articles - Get all articles (public, only published)
router.get('/', async (req, res) => {
  try {
    const { category, featured, limit } = req.query

    const where = { isPublished: true }
    if (category) where.category = { slug: category }
    if (featured === 'true') where.isFeatured = true

    const articles = await prisma.article.findMany({
      where,
      include: {
        category: true,
        author: {
          select: { id: true, name: true },
        },
      },
      orderBy: { publishedAt: 'desc' },
      take: limit ? parseInt(limit) : undefined,
    })

    res.json(articles)
  } catch (error) {
    console.error('Get articles error:', error)
    res.status(500).json({ error: 'Failed to get articles' })
  }
})

// GET /api/articles/featured - Get featured article
router.get('/featured', async (req, res) => {
  try {
    const article = await prisma.article.findFirst({
      where: { isPublished: true, isFeatured: true },
      include: {
        category: true,
        author: { select: { id: true, name: true } },
      },
      orderBy: { publishedAt: 'desc' },
    })
    res.json(article)
  } catch (error) {
    console.error('Get featured article error:', error)
    res.status(500).json({ error: 'Failed to get featured article' })
  }
})

// GET /api/articles/:slug - Get article by slug
router.get('/:slug', async (req, res) => {
  try {
    const article = await prisma.article.findUnique({
      where: { slug: req.params.slug },
      include: {
        category: true,
        author: { select: { id: true, name: true } },
      },
    })
    if (!article) {
      return res.status(404).json({ error: 'Article not found' })
    }
    res.json(article)
  } catch (error) {
    console.error('Get article error:', error)
    res.status(500).json({ error: 'Failed to get article' })
  }
})

// POST /api/articles - Create article (protected)
router.post('/', authenticate, async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      imageUrl,
      readTime,
      categoryId,
      isFeatured,
      isPublished,
    } = req.body

    if (!title || !slug || !excerpt || !content || !categoryId) {
      return res.status(400).json({
        error: 'Title, slug, excerpt, content and categoryId are required',
      })
    }

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        imageUrl,
        readTime,
        categoryId: parseInt(categoryId),
        authorId: req.user.id,
        isFeatured: isFeatured || false,
        isPublished: isPublished || false,
        publishedAt: isPublished ? new Date() : null,
      },
      include: {
        category: true,
        author: { select: { id: true, name: true } },
      },
    })

    res.status(201).json(article)
  } catch (error) {
    console.error('Create article error:', error)
    res.status(500).json({ error: 'Failed to create article' })
  }
})

// PUT /api/articles/:id - Update article (protected)
router.put('/:id', authenticate, async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      imageUrl,
      readTime,
      categoryId,
      isFeatured,
      isPublished,
    } = req.body

    const existingArticle = await prisma.article.findUnique({
      where: { id: parseInt(req.params.id) },
    })

    const article = await prisma.article.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(excerpt && { excerpt }),
        ...(content && { content }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(readTime !== undefined && { readTime }),
        ...(categoryId && { categoryId: parseInt(categoryId) }),
        ...(isFeatured !== undefined && { isFeatured }),
        ...(isPublished !== undefined && {
          isPublished,
          publishedAt:
            isPublished && !existingArticle.publishedAt ? new Date() : existingArticle.publishedAt,
        }),
      },
      include: {
        category: true,
        author: { select: { id: true, name: true } },
      },
    })

    res.json(article)
  } catch (error) {
    console.error('Update article error:', error)
    res.status(500).json({ error: 'Failed to update article' })
  }
})

// DELETE /api/articles/:id - Delete article (protected)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    await prisma.article.delete({
      where: { id: parseInt(req.params.id) },
    })
    res.json({ message: 'Article deleted successfully' })
  } catch (error) {
    console.error('Delete article error:', error)
    res.status(500).json({ error: 'Failed to delete article' })
  }
})

export default router
