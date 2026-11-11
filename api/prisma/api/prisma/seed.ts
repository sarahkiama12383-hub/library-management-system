import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const fiction = await prisma.genre.create({ data: { name: 'Fiction' } });
    const science = await prisma.genre.create({ data: { name: 'Science' } });
      const history = await prisma.genre.create({ data: { name: 'History' } });
        const tech = await prisma.genre.create({ data: { name: 'Technology' } });

          const booksData = [
              { title: 'To Kill a Mockingbird', author: 'Harper Lee', genreId: fiction.id },
                  { title: '1984', author: 'George Orwell', genreId: fiction.id },
                      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genreId: fiction.id },
                          { title: 'Pride and Prejudice', author: 'Jane Austen', genreId: fiction.id },
                              { title: 'Moby Dick', author: 'Herman Melville', genreId: fiction.id },
                                  
                                      { title: 'A Brief History of Time', author: 'Stephen Hawking', genreId: science.id },
                                          { title: 'Cosmos', author: 'Carl Sagan', genreId: science.id },
                                              { title: 'The Selfish Gene', author: 'Richard Dawkins', genreId: science.id },
                                                  { title: 'The Elegant Universe', author: 'Brian Greene', genreId: science.id },
                                                      
                                                          { title: 'Sapiens', author: 'Yuval Noah Harari', genreId: history.id },
                                                              { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', genreId: history.id },
                                                                  { title: 'The Silk Roads', author: 'Peter Frankopan', genreId: history.id },
                                                                      
                                                                          { title: 'Clean Code', author: 'Robert C. Martin', genreId: tech.id },
                                                                              { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genreId: tech.id },
                                                                                  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', genreId: tech.id },
                                                                                    ];

                                                                                      for (const book of booksData) {
                                                                                          await prisma.book.create({ data: book });
                                                                                            }

                                                                                              console.log('Database seeded successfully with genres and books!');
                                                                                              }

                                                                                              main()
                                                                                                .catch((e) => {
                                                                                                    console.error(e);
                                                                                                        process.exit(1);
                                                                                                          })
                                                                                                            .finally(async () => {
                                                                                                                await prisma.$disconnect();
                                                                                                                  });
                                                                                                                  