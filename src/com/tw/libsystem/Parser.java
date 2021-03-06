//Job of the parser id to covert the user input into a concrete operation.
package com.tw.libsystem;

public class Parser {

    private String inputCommand;
    private Library library;
    private MovieLibrary movieLibrary;
    private Session session;
    private OperationsFactory operationsFactory;
    private Authenticator authenticator;
    private Factory factory;

    public Parser(String inputCommand, Library library, MovieLibrary movieLibrary, Session session, OperationsFactory operationsFactory, Authenticator authenticator, Factory factory) {
        this.inputCommand = inputCommand;
        this.library = library;
        this.movieLibrary = movieLibrary;
        this.session = session;
        this.operationsFactory = operationsFactory;
        this.authenticator = authenticator;
        this.factory = factory;
    }

    public Operations parse() {
        if(inputCommand.isEmpty() == false && inputCommand.length() == 1) {
            if(inputCommand.equals("1")) {
                ListBooks listBooks = operationsFactory.returnNewListBooksObject(library);
                return listBooks;
            }

            else if(inputCommand.equals("2")) {
                InputView inputView = factory.buildInputView();
                CheckOut checkOut = operationsFactory.returnNewCheckOutObjects(library, session, authenticator, operationsFactory, inputView, factory);
                return checkOut;
            }

            else if(inputCommand.equals("3")) {
                InputView inputView = new InputView();
                CheckIn checkIn = operationsFactory.returnNewCheckInObject(library, inputView, authenticator, operationsFactory, session, factory);
                return checkIn;
            }

            else if(inputCommand.equals("4")) {
                ListMovies listMovies = operationsFactory.returnNewListMoviesObject(movieLibrary);
                return listMovies;
            }

            else if(inputCommand.equals("5")) {
                CheckOutMovie checkOutMovie = operationsFactory.returnNewCheckOutMoviesObject(movieLibrary, factory);
                return checkOutMovie;
            }

            else if(inputCommand.equals("6") && session.typeOfUser().equals("guest")) {
                InputView inputView = factory.buildInputView();
                Login login = operationsFactory.returnNewLoginObject(inputView, authenticator, session, factory);
                return login;
            }

            else if(inputCommand.equals("6") && !session.typeOfUser().equals("guest")) {
                UserDetails userDetails = new UserDetails(session);
                return userDetails;
            }

            else if(inputCommand.equals("7") && !session.typeOfUser().equals("guest")) {
                Logout logout = new Logout(session);
                return logout;
            }

            else if(inputCommand.equals("8") && session.typeOfUser().equals("librarian")) {
                ListBorrowerDetails listBorrowerDetails = new ListBorrowerDetails(library);
                return listBorrowerDetails;
            }

            else if(inputCommand.equals("0")) {
                ExitApplication exitApplication = operationsFactory.returnNewExitApplicationObject();
                return exitApplication;
            }

            else {
                return (operationsFactory.returnNewInvalidCommandObject());
            }

        }
        else {
            return (operationsFactory.returnNewInvalidCommandObject());
        }
    }
}
