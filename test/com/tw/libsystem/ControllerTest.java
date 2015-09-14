package com.tw.libsystem;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import static org.mockito.Mockito.*;

public class ControllerTest {

    private final ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    private final ByteArrayInputStream inputStream = new ByteArrayInputStream("1".getBytes());

    @Before
    public void setStreams() {
        System.setOut(new PrintStream(outputStream));
        System.setIn(inputStream);
    }

    @After
    public void clearStreams() {
        System.setOut(System.out);
        System.setIn(System.in);
    }

    @Test
    public void shouldDelegateDisplayingOfWelcomeMessage() {
        Library library = mock(Library.class);
        MovieLibrary movieLibrary = mock(MovieLibrary.class);
        Factory factory = mock(Factory.class);
        Display display = mock(Display.class);
        Controller controller = new Controller(factory, library, movieLibrary);
        when(factory.buildDisplay("Welcome to Biblioteca\n")).thenReturn(display);

        controller.delegateWelcomeMessageToBeDisplayed();

        verify(display, times(1)).displayMessage();
    }

    @Test
    public void shouldDelegateDisplayingOfMenuToDisplay() {
        Library library = mock(Library.class);
        MovieLibrary movieLibrary = mock(MovieLibrary.class);
        Factory factory = mock(Factory.class);
        Display display = mock(Display.class);
        Menu menu = mock(Menu.class);
        Controller controller = new Controller(factory, library, movieLibrary);
        when(factory.buildMenu()).thenReturn(menu);
        when(factory.buildDisplay(menu.toString())).thenReturn(display);

        controller.delegateMenuToBeDisplayed();

        verify(display, times(1)).displayMessage();
    }

    @Test
    public void shouldDelegateTakingInputToInputClass() {
        Library library = mock(Library.class);
        MovieLibrary movieLibrary = mock(MovieLibrary.class);
        Factory factory = mock(Factory.class);
        InputView inputView = mock(InputView.class);
        Controller controller = new Controller(factory, library, movieLibrary);
        when(factory.buildInputView()).thenReturn(inputView);

        controller.takeInput();

        verify(inputView, times(1)).input();
    }
}