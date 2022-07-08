import axios from 'axios';

export interface Book {
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}

interface ApiResponse {
  code: number;
  data: [Book];
}

const api = axios.create({
  baseURL: 'https://fakerapi.it/api/v1/books',
});

async function getBooks(quantity: number): Promise<Book[] | undefined> {
  try {
    const { data: response } = await api.get('/', {
      params: {
        _quantity: quantity,
      },
    });

    if (response.code === 200 && response.data.length) {
      return response.data;
    }
  } catch (error) {
    console.error(
      'services/fakeApi.ts - Cannot get books api response =>',
      error
    );
  }
}

export default getBooks;
