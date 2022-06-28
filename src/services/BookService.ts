export async function createBook({ name }: { name: string }) {
  console.log('teste', name);
  return 'teste' + name;
}

export default {
  createBook,
};
