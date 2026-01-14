import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()
const prisma = new PrismaClient()

// GET /api/success-stories - Get all success stories (public)
router.get('/', async (req, res) => {
  try {
    const stories = await prisma.successStory.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    })
    res.json(stories)
  } catch (error) {
    console.error('Get success stories error:', error)
    res.status(500).json({ error: 'Failed to get success stories' })
  }
})

// GET /api/success-stories/:id - Get single story
router.get('/:id', async (req, res) => {
  try {
    const story = await prisma.successStory.findUnique({
      where: { id: parseInt(req.params.id) },
    })
    if (!story) {
      return res.status(404).json({ error: 'Success story not found' })
    }
    res.json(story)
  } catch (error) {
    console.error('Get success story error:', error)
    res.status(500).json({ error: 'Failed to get success story' })
  }
})

// POST /api/success-stories - Create story (protected)
router.post('/', authenticate, async (req, res) => {
  try {
    const { clientName, result, description, imageUrl, order, isActive } = req.body

    if (!clientName || !result) {
      return res.status(400).json({ error: 'Client name and result are required' })
    }

    const story = await prisma.successStory.create({
      data: {
        clientName,
        result,
        description,
        imageUrl,
        order: order || 0,
        isActive: isActive !== undefined ? isActive : true,
      },
    })

    res.status(201).json(story)
  } catch (error) {
    console.error('Create success story error:', error)
    res.status(500).json({ error: 'Failed to create success story' })
  }
})

// PUT /api/success-stories/:id - Update story (protected)
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { clientName, result, description, imageUrl, order, isActive } = req.body

    const story = await prisma.successStory.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...(clientName && { clientName }),
        ...(result && { result }),
        ...(description !== undefined && { description }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(order !== undefined && { order }),
        ...(isActive !== undefined && { isActive }),
      },
    })

    res.json(story)
  } catch (error) {
    console.error('Update success story error:', error)
    res.status(500).json({ error: 'Failed to update success story' })
  }
})

// DELETE /api/success-stories/:id - Delete story (protected)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    await prisma.successStory.delete({
      where: { id: parseInt(req.params.id) },
    })
    res.json({ message: 'Success story deleted successfully' })
  } catch (error) {
    console.error('Delete success story error:', error)
    res.status(500).json({ error: 'Failed to delete success story' })
  }
})

export default router
