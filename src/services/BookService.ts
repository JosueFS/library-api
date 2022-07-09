import ogm from '@/config/ogm';
import { Book, MutationCreateBookArgs } from '@/graphql';

const BookModel = ogm.model('Book');

export async function checkIfBookExists(title: string) {
  const [existing] = await BookModel.find({ where: { title } });

  return !!existing;
}

export async function createBook(args: MutationCreateBookArgs) {
  return await BookModel.create({ input: args });
}

export default {
  createBook,
};

export async function createBulkBooks({
  context,
  books,
}: {
  context: any;
  books: Book[];
}) {
  const session = context.driver.session();
  let response;
  try {
    response = await session.writeTransaction((tx: any) =>
      tx.run(
        `
          UNWIND $books as book
          CREATE (b:Book {
            id: apoc.create.uuid(),
            title: book.title,
            author: book.author,
            genre: book.genre,
            description: book.description,
            isbn: book.isbn,
            image: book.image,
            published: book.published,
            publisher: book.publisher
          })
          RETURN b
        `,
        {
          books,
        }
      )
    );
  } catch (e) {
    console.error(e);
  } finally {
    await session.close();
  }

  return response.records.map((r: any) => r.get(0).properties);
}
