import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()
const prisma = new PrismaClient()

// GET /api/services - Get all services (public)
router.get('/', async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    })
    res.json(services)
  } catch (error) {
    console.error('Get services error:', error)
    res.status(500).json({ error: 'Failed to get services' })
  }
})

// GET /api/services/:id - Get single service
router.get('/:id', async (req, res) => {
  try {
    const service = await prisma.service.findUnique({
      where: { id: parseInt(req.params.id) },
    })
    if (!service) {
      return res.status(404).json({ error: 'Service not found' })
    }
    res.json(service)
  } catch (error) {
    console.error('Get service error:', error)
    res.status(500).json({ error: 'Failed to get service' })
  }
})

// POST /api/services - Create service (protected)
router.post('/', authenticate, async (req, res) => {
  try {
    const { title, description, icon, order, isActive } = req.body

    if (!title || !description || !icon) {
      return res.status(400).json({ error: 'Title, description and icon are required' })
    }

    const service = await prisma.service.create({
      data: {
        title,
        description,
        icon,
        order: order || 0,
        isActive: isActive !== undefined ? isActive : true,
      },
    })

    res.status(201).json(service)
  } catch (error) {
    console.error('Create service error:', error)
    res.status(500).json({ error: 'Failed to create service' })
  }
})

// PUT /api/services/:id - Update service (protected)
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { title, description, icon, order, isActive } = req.body

    const service = await prisma.service.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(icon && { icon }),
        ...(order !== undefined && { order }),
        ...(isActive !== undefined && { isActive }),
      },
    })

    res.json(service)
  } catch (error) {
    console.error('Update service error:', error)
    res.status(500).json({ error: 'Failed to update service' })
  }
})

// DELETE /api/services/:id - Delete service (protected)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    await prisma.service.delete({
      where: { id: parseInt(req.params.id) },
    })
    res.json({ message: 'Service deleted successfully' })
  } catch (error) {
    console.error('Delete service error:', error)
    res.status(500).json({ error: 'Failed to delete service' })
  }
})

export default router
