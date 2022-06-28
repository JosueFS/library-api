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
  baseURL: 'https://fakerapi.it/api/v1/books?_quantity=1000',
});

async function getBooks() {
  try {
    const { data, code } = (await api.get('/')) as ApiResponse;

    if (code === 200 && data.length) {
      return data;
    }
  } catch (error) {
    console.error(
      'services/fakeApi.ts - Cannot get books api response =>',
      error
    );
  }
}

export default getBooks;
