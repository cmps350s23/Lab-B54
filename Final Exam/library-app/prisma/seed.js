import fs from 'fs-extra'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const authorsPath = path.join(process.cwd(), 'data/authors.json')
const bookPath = path.join(process.cwd(), 'data/books.json')

async function main() {
    try {
        const authors = await fs.readJSON(authorsPath)
        const books = await fs.readJSON(bookPath)

        for (const author of authors) await prisma.author.create({ data: author })
        for (const book of books) await prisma.book.create({ data: book })

    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        await prisma.$disconnect()
        process.exit(1)
    })