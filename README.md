# library-management-system
Backend data layer for a library book catalog
# Library Management System

## Overview
A backend data layer built with NestJS, Prisma ORM, and PostgreSQL for managing library books, genres, and user roles.

## Schema Decisions

### Why Book References Genre (Normalization)
In our Prisma schema, the `Book` model references the `Genre` model through a foreign key (`genreId`) via `@relation` instead of embedding the genre name directly as a string inside the book record[span_15](start_span)[span_15](end_span). 

We chose this relational design for several key reasons:
1. **Data Integrity & Consistency:** If a genre name needs to be updated, it can be changed in a single place (`Genre` table) rather than updating hundreds of individual book rows.
2. **Storage Efficiency:** Storing a numeric foreign key ID uses less storage and indexes faster than repeating full string category names.
3. **Scalability:** It allows genres to hold relational metadata in the future without restructuring the book table.
