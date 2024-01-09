import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing navigation
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

