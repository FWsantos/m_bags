import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const productsData: Prisma.ProductsCreateInput[] = [
    {
        name: 'Estojo',
        description: 'Estojo escolar',
        price: 6.00,
        image: 'https://www.google.com.br',
    },
    {
        name: 'Mochila',
        description: 'Mochila escolar',
        price: 50.00,
        image: 'https://www.bing.com.br',
    },

]

async function main() {
    console.log(`Start seeding ...`)
    for (const p of productsData) {
        const product = await prisma.products.create({
            data: p,
        })
        console.log(`Created products with id: ${product.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
