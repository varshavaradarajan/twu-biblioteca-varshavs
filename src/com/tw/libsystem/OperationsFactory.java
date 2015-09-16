package com.tw.libsystem;

public class OperationsFactory {

    private ListBooks listBooks;
    private ListMovies listMovies;
    private CheckOutMovie checkOutMovie;
    private ExitApplication exitApplication;

    public ListBooks returnNewListBooks(Library library) {
        listBooks = new ListBooks(library);
        return listBooks;
    }

    public ListMovies returnNewListMoviesObjects(MovieLibrary movieLibrary) {
        listMovies = new ListMovies(movieLibrary);
        return listMovies;
    }

    public CheckOutMovie returnNewCheckOutMoviesObjects(MovieLibrary movieLibrary) {
        checkOutMovie = new CheckOutMovie(movieLibrary);
        return checkOutMovie;
    }

    public ExitApplication returnNewExitApplicationObjects() {
        exitApplication = new ExitApplication();
        return exitApplication;
    }
}
