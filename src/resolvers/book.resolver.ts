import {
  checkIfBookExists,
  createBook,
  createBulkBooks,
} from '@/services/BookService';
import getBooks, { Book } from '@/utils/seed';

export default {
  Mutation: {
    async SeedBooks(_: any, __: any, context: any): Promise<Book[]> {
      const data = await getBooks(200);

      let response = [] as Book[];
      if (data) {
        response = await createBulkBooks({ books: data, context });
      }

      return response;
    },
    async CreateBook(_: any, args: Book, context: any) {
      const bookExists = await checkIfBookExists(args.title || '');

      if (bookExists) {
        throw new Error(`Book with title ${args.title} already exists!`);
      }

      const { books } = await createBook(args);

      return books[0];
    },
  },
};
