import data from '../../data.json'
import type { Book } from '../types'
export function getAllBook() {
  return data.books
}

export function getById(id: string) {
  const books = getAllBook()
  for (const book of books) {
    if (book.id === id) {
      return book as Book
    }
  }
  return null
}

export function getByCategory(category: string) {
  const books = getAllBook()
  return books.filter((book) => book.categories.includes(category))
}

export function filterByName(name: string) {
  const books = getAllBook()
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(name.toLowerCase()),
  )
  return filteredBooks
}

export default {
  getAllBook,
  getById,
  getByCategory,
  filterByName,
}
