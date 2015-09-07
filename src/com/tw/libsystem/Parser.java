//Job of the parser id to covert the user input into a concrete operation.
package com.tw.libsystem;

import java.util.ArrayList;

public class Parser {

    String inputCommand;

    public Parser(String inputCommand) {
        this.inputCommand = inputCommand;
    }

    public Operations parse() {
        if(inputCommand.isEmpty() == false && inputCommand.length() == 1) {
            if(inputCommand == "1") {
                ArrayList<Book> list = new ArrayList<>();
                list.add(new Book("Gone Girl", "Flynn", 2010));
                ListBooks listBooks = new ListBooks(list);
                return listBooks;
            }

            else if(inputCommand == "2") {
                ExitApplication exitApplication = new ExitApplication();
                return exitApplication;
            }

            else {
                return (new InvalidCommand());
            }

        }
        else {
            return (new InvalidCommand());
        }
    }
}
