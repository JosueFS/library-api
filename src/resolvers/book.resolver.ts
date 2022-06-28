import { createBook } from '@/services/BookService';

export default {
  Mutation: {
    async CreateBook(_: any, args: string, context: any) {
      console.log('mutation');

      const response = await createBook({ name: args });
      console.log(response);

      return JSON.stringify(response);
    },
  },
};
