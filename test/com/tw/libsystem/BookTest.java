package com.tw.libsystem;

import org.junit.Test;

import static org.junit.Assert.*;

public class BookTest {

    @Test
    public void shouldReturnBookDetails() {
        Book book = new Book("Angels And Demons", "Dan Brown", 2000);
        String bookDetails = String.format("%-25s %-25s %-25s", "Angels And Demons", "Dan Brown", "2000");

        assertEquals(bookDetails, book.toString());
    }

    @Test
    public void shouldReturnTrueIfBookExists() {
        Book book1 = new Book("Angels And Demons", "Dan Brown", 2012);
        Book book2 = new Book("Angels And Demons", "Dan Brown", 2007);

        assertEquals(book1, book2);
    }

    @Test
    public void shouldBeEqualToAnotherBookObjectIsOfTheTypeBook() {
        Book book1 = new Book("Angels And Demons", "Dan Brown", 2012);
        Book book2 = new Book("Angels And Demons", "Dan Brown", 2007);

        assertEquals(book1, book2);
    }

    @Test
    public void shouldBeEqualToItself() {
        Book book1 = new Book("Inferno", "Dan Brown", 2012);

        assertEquals(book1, book1);
    }

    @Test
    public void shouldBeEqualToAnotherBookIfBookNamesAreEqual() {
        Book book1 = new Book("Inferno", "Dan Brown", 2012);
        Book book2 = new Book("Inferno", "Dan Brown", 2007);

        assertEquals(book1, book2);
    }

    @Test
    public void shouldNotBeEqualToAnotherObjectType() {
        Library library = new Library();
        Book book1 = new Book("Inferno", "Dan Brown", 2012);
        ListBooks listBooks = new ListBooks(library);

        assertNotEquals(book1, listBooks);
    }

    @Test
    public void shouldNotBeEqualToABookWithAnotherName() {
        Book book1 = new Book("Inferno", "Dan Brown", 2012);
        Book book2 = new Book("Angels and Demons", "Dan Brown", 2007);

        assertNotEquals(book1, book2);
    }

    @Test
    public void shouldHaveSameHashCodeForSameObject() {
        Book book = new Book("Emma", "Jane Austen", 1832);
        
        assertEquals(book.hashCode(), book.hashCode());
    }

    @Test
    public void shouldHaveDifferentHashCodeForDifferentObjects() {
        Book book1 = new Book("Inferno", "Dan Brown", 2012);
        Book book2 = new Book("Emma", "Jane Austen", 1832);

        assertNotEquals(book1.hashCode(), book2.hashCode());
    }
}