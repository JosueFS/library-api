import {
  checkIfBookExists,
  createBook,
  createBulkBooks,
} from '@/services/BookService';
import getBooks from '@/utils/seed';
import { Book, MutationSeedBooksArgs, MutationCreateBookArgs } from '@/graphql';

export default {
  Mutation: {
    async SeedBooks(
      _: any,
      { quantity }: MutationSeedBooksArgs,
      context: any
    ): Promise<Book[]> {
      const data = await getBooks(quantity || 5);

      let response = [] as Book[];
      if (data) {
        response = await createBulkBooks({ books: data, context });
      }

      return response;
    },
    async CreateBook(_: any, args: MutationCreateBookArgs, context: any) {
      const bookExists = await checkIfBookExists(args.title || '');

      if (bookExists) {
        throw new Error(`Book with title ${args.title} already exists!`);
      }

      const { books } = await createBook(args);

      return books[0];
    },
  },
};
