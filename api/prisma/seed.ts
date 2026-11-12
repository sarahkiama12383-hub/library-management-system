import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.deleteMany();
    await prisma.genre.deleteMany();
      await prisma.user.deleteMany();

        // Create 4 Genres
          const fiction = await prisma.genre.create({ data: { name: 'Fiction' } });
            const science = await prisma.genre.create({ data: { name: 'Science' } });
              const history = await prisma.genre.create({ data: { name: 'History' } });
                const technology = await prisma.genre.create({ data: { name: 'Technology' } });

                  // Create 16 Books distributed among them
                    await prisma.book.createMany({
                        data: [
                              { title: 'To Kill a Mockingbird', author: 'Harper Lee', genreId: fiction.id },
                                    { title: '1984', author: 'George Orwell', genreId: fiction.id },
                                          { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genreId: fiction.id },
                                                { title: 'Pride and Prejudice', author: 'Jane Austen', genreId: fiction.id },
                                                      
                                                            { title: 'A Brief History of Time', author: 'Stephen Hawking', genreId: science.id },
                                                                  { title: 'Cosmos', author: 'Carl Sagan', genreId: science.id },
                                                                        { title: 'The Selfish Gene', author: 'Richard Dawkins', genreId: science.id },
                                                                              { title: 'Silent Spring', author: 'Rachel Carson', genreId: science.id },

                                                                                    { title: 'Sapiens', author: 'Yuval Noah Harari', genreId: history.id },
                                                                                          { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', genreId: history.id },
                                                                                                { title: 'A People s History of the United States', author: 'Howard Zinn', genreId: history.id },
                                                                                                      { title: 'The Wright Brothers', author: 'David McCullough', genreId: history.id },

                                                                                                            { title: 'Clean Code', author: 'Robert C. Martin', genreId: technology.id },
                                                                                                                  { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genreId: technology.id },
                                                                                                                        { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', genreId: technology.id },
                                                                                                                              { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', genreId: technology.id },
                                                                                                                                  ],
                                                                                                                                    });

                                                                                                                                      console.log('Database seeded successfully with 4 genres and 16 books!');
                                                                                                                                      }

                                                                                                                                      main()
                                                                                                                                        .catch((e) => {
                                                                                                                                            console.error(e);
                                                                                                                                                process.exit(1);
                                                                                                                                                  })
                                                                                                                                                    .finally(async () => {
                                                                                                                                                        await prisma.$disconnect();
                                                                                                                                                          });
                                                                                                                                                          