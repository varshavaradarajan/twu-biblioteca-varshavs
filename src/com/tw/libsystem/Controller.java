//Job of the controller class is to delegate the various operations to be performed.
package com.tw.libsystem;

import java.util.ArrayList;

public class Controller {

    private Factory factory;
    private Display display;
    private Menu menu;
    private InputView inputView;
    private String userInput, output;
    private Library library;
    private Parser parser;
    private Operations operations;

    public Controller(Factory factory, Library library) {
        this.factory = factory;
        this.library = library;
    }

    public void run() {
        delegateWelcomeMessageToBeDisplayed();
        while (true) {
            delegateMenuToBeDisplayed();
            takeInput();
            delegateParsingInputToParser();
            output = operations.execute();
            delegateDisplayingOfOutputMessages();
        }
    }

    public void delegateDisplayingOfOutputMessages() {
        display = factory.buildDisplay(output);
        display.displayMessage();
    }

    public void delegateParsingInputToParser() {
        parser = factory.buildParser(userInput, library);
        operations = parser.parse();
    }

    public void takeInput() {
        inputView = factory.buildInputView();
        userInput = inputView.input();
    }

    public void delegateMenuToBeDisplayed() {
        ArrayList<String> menuOptions = new ArrayList<>();
        menuOptions.add("1. List Books");
        menuOptions.add("2. Checkout");
        menuOptions.add("3. Exit");
        menu = new Menu(menuOptions);
        display = factory.buildDisplay(menu.toString());
        display.displayMessage();
    }

     public void delegateWelcomeMessageToBeDisplayed() {
        display = factory.buildDisplay("Welcome to Biblioteca\n");
        display.displayMessage();
    }
}
