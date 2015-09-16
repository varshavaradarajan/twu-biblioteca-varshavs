package com.tw.libsystem;

import org.junit.Test;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;

public class OperationsFactoryTest {

    @Test
    public void shouldReturnNewListBooksObjects() {
        OperationsFactory operationsFactory = new OperationsFactory();
        Library library = mock(Library.class);


        assertEquals(ListBooks.class, operationsFactory.returnNewListBooks(library).getClass());
    }

    @Test
    public void shouldReturnNewListMoviesObjects() {
        OperationsFactory operationsFactory = new OperationsFactory();
        MovieLibrary movieLibrary = mock(MovieLibrary.class);


        assertEquals(ListMovies.class, operationsFactory.returnNewListMoviesObjects(movieLibrary).getClass());
    }

    @Test
    public void shouldReturnNewCheckoutMoviesObjects() {
        OperationsFactory operationsFactory = new OperationsFactory();
        MovieLibrary movieLibrary = mock(MovieLibrary.class);

        assertEquals(CheckOutMovie.class, operationsFactory.returnNewCheckOutMoviesObjects(movieLibrary).getClass());
    }

    @Test
    public void shouldReturnNewExitApplicationObjects() {
        OperationsFactory operationsFactory = new OperationsFactory();

        assertEquals(ExitApplication.class, operationsFactory.returnNewExitApplicationObjects().getClass());
    }

}