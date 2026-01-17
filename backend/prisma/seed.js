import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@arissa.com' },
    update: {},
    create: {
      email: 'admin@arissa.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
    },
  })
  console.log('✅ Admin user created:', admin.email)

  // Create services
  const services = [
    {
      title: 'Automatización',
      description:
        'Optimizamos tus flujos de trabajo eliminando tareas manuales y reduciendo errores operativos.',
      icon: 'fa-solid fa-bolt',
      order: 1,
    },
    {
      title: 'POS',
      description: 'Puntos de venta para negocios personalizables.',
      icon: 'fa-solid fa-cash-register',
      order: 2,
    },
    {
      title: 'Software a Medida',
      description:
        'Desarrollamos soluciones escalables adaptadas 100% a las necesidades de tu negocio.',
      icon: 'fa-solid fa-code',
      order: 3,
    },
    {
      title: 'Integraciones',
      description:
        'Conectamos tus herramientas (CRM, ERP, Marketing) para un ecosistema de datos unificado.',
      icon: 'fa-solid fa-link',
      order: 4,
    },
    {
      title: 'Bots Multitareas',
      description:
        'Creamos bots inteligentes que automatizan múltiples procesos simultáneamente, 24/7.',
      icon: 'fa-solid fa-robot',
      order: 5,
    },
    {
      title: 'Bots para WhatsApp',
      description:
        'Automatiza la atención al cliente, ventas y soporte con chatbots inteligentes en WhatsApp.',
      icon: 'fa-brands fa-whatsapp',
      order: 6,
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.order },
      update: service,
      create: service,
    })
  }
  console.log('✅ Services created:', services.length)

  // Create categories
  const categories = [
    { name: 'IA', slug: 'ia', color: 'primary' },
    { name: 'Gaming', slug: 'gaming', color: 'secondary' },
    { name: 'Startups', slug: 'startups', color: 'success' },
    { name: 'Negocios', slug: 'negocios', color: 'warning' },
    { name: 'Ciberseguridad', slug: 'ciberseguridad', color: 'danger' },
    { name: 'Mundo', slug: 'mundo', color: 'info' },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    })
  }
  console.log('✅ Categories created:', categories.length)

  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
