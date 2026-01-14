import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()
const prisma = new PrismaClient()

// GET /api/categories - Get all categories (public)
router.get('/', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: { articles: true },
        },
      },
      orderBy: { name: 'asc' },
    })
    res.json(categories)
  } catch (error) {
    console.error('Get categories error:', error)
    res.status(500).json({ error: 'Failed to get categories' })
  }
})

// GET /api/categories/:slug - Get category by slug
router.get('/:slug', async (req, res) => {
  try {
    const category = await prisma.category.findUnique({
      where: { slug: req.params.slug },
      include: {
        articles: {
          where: { isPublished: true },
          orderBy: { publishedAt: 'desc' },
        },
      },
    })
    if (!category) {
      return res.status(404).json({ error: 'Category not found' })
    }
    res.json(category)
  } catch (error) {
    console.error('Get category error:', error)
    res.status(500).json({ error: 'Failed to get category' })
  }
})

// POST /api/categories - Create category (protected)
router.post('/', authenticate, async (req, res) => {
  try {
    const { name, slug, description, color, isActive } = req.body

    if (!name || !slug) {
      return res.status(400).json({ error: 'Name and slug are required' })
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        description,
        color,
        isActive: isActive !== undefined ? isActive : true,
      },
    })

    res.status(201).json(category)
  } catch (error) {
    console.error('Create category error:', error)
    res.status(500).json({ error: 'Failed to create category' })
  }
})

// PUT /api/categories/:id - Update category (protected)
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { name, slug, description, color, isActive } = req.body

    const category = await prisma.category.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...(name && { name }),
        ...(slug && { slug }),
        ...(description !== undefined && { description }),
        ...(color !== undefined && { color }),
        ...(isActive !== undefined && { isActive }),
      },
    })

    res.json(category)
  } catch (error) {
    console.error('Update category error:', error)
    res.status(500).json({ error: 'Failed to update category' })
  }
})

// DELETE /api/categories/:id - Delete category (protected)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    await prisma.category.delete({
      where: { id: parseInt(req.params.id) },
    })
    res.json({ message: 'Category deleted successfully' })
  } catch (error) {
    console.error('Delete category error:', error)
    res.status(500).json({ error: 'Failed to delete category' })
  }
})

export default router
