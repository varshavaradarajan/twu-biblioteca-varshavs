package com.tw.libsystem;

import org.junit.Test;

import static org.junit.Assert.*;

public class FactoryTest {

    @Test
    public void shouldReturnNewDisplayObjects() {
        Factory factory = new Factory();
        String message = "Welcome";
        assertEquals(Display.class, factory.buildDisplay(message).getClass());
    }
}