//Job of the controller class is to delegate the various operations to be performed.
package com.tw.libsystem;

import java.util.ArrayList;

public class Controller {

    private Factory factory;
    private Display display;
    private Menu menu;
    private InputView inputView;
    private String userInput;

    public void run() {
        factory = createFactory();
        delegateWelcomeMessageToBeDisplayed();
        delegateMenuToBeDisplayed();
        takeInput();

    }

    private void takeInput() {
        inputView = new InputView();
        userInput = inputView.input();
    }

    private void delegateMenuToBeDisplayed() {
        ArrayList<String> menuOptions = new ArrayList<>();
        menuOptions.add("1. List Books");
        menu = new Menu(menuOptions);
        display = factory.buildDisplay(menu.toString());
        display.displayMessage();
    }

    public void delegateWelcomeMessageToBeDisplayed() {
        display = factory.buildDisplay("Welcome to Biblioteca\n");
        display.displayMessage();
    }

    public Factory createFactory()
    {
        return new Factory();
    }

    public static void main(String[] args) {
        Controller controller = new Controller();
        controller.run();
    }

}
