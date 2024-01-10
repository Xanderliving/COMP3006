import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Chat from "./Components/Chat";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Waw from "./Components/Waw";



describe("Check Componants are active", () => {
  test("Chat componant works", () => {
    render(<Chat />);
    const Title = screen.getByText(/Chat Room/i);
    expect(Title).toBeInTheDocument();
  });

  test("Video exists", () => {
    render(<Hero />);
    const videoElement = screen.getByTestId('hero-video');
    expect(videoElement).toBeInTheDocument();
  });
  test("Links Work", () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);

    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    const homeLink = homeLinks[0];
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });
  test("Description loads", () => {
    render(<Waw />);
    const descriptionElement = screen.getByText(/Working with a team of our best Mixologist here at 'Cocktail Crafters' we have put together some of our favourite on the go premium cocktail/i); // Replace with your actual description text
    expect(descriptionElement).toBeInTheDocument();
  });
});

describe("Website links", () => {
  test('Login Page', async () => {
    const response = await fetch('http://localhost:3000/');
    expect(response.status).toBe(200);
  });
  test('Home Page', async () => {
    const response = await fetch('http://localhost:3000/Home');
    expect(response.status).toBe(200);
  });
  test('Client Page', async () => {
    const response = await fetch('http://localhost:3000/Client');
    expect(response.status).toBe(200);
  });
  test('Item Page', async () => {
    const response = await fetch('http://localhost:3000/Item');
    expect(response.status).toBe(200);
  });
  test('User Page', async () => {
    const response = await fetch('http://localhost:3000/User');
    expect(response.status).toBe(200);
  });
  test('Create user Page', async () => {
    const response = await fetch('http://localhost:3000/CreateUser');
    expect(response.status).toBe(200);
  });
  test('Basket Page', async () => {
    const response = await fetch('http://localhost:3000/Basket');
    expect(response.status).toBe(200);
  });
});

async function createItem(data) {
  const response = await fetch('http://localhost:3001/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

describe('Item Server Works', () => {
  test('Item Server Works', async () => {
    const newItemData = {
      Name: "Test",
      Description: "Test",
      Cost: 0,
    };

    const createdItem = await createItem(newItemData);

    expect(createdItem).toBeDefined();
    expect(createdItem.Name).toBeDefined();
    expect(createdItem.Description).toBe(newItemData.Description);
    expect(createdItem.Cost).toBe(newItemData.Cost);


  });

  test('Edge case for items', async () => {
    const emptyData = {};
    const createdItem = await createItem(emptyData);
    expect(createdItem).toBeDefined();
    expect(createdItem._id).toBeDefined();
  });
});