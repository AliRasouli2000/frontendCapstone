import { render, screen, fireEvent } from '@testing-library/react';
import FlashCardsPage from '../FlashCardsPage';
import { describe, test, expect } from 'vitest';

describe("flashCards", () => {
    test("should flip card when clicked", () => {
        render(<FlashCardsPage />);
        const flashcardElement = screen.getByText("What does HTML stand for?");
        const cardElement = flashcardElement.closest('.flashcard-card');
        fireEvent.click(cardElement);
        expect(screen.getByText("What does HTML stand for?")).toBeInTheDocument();
        expect(screen.getByText("HyperText Markup Language — the structure of web pages.")).toBeInTheDocument();
        expect(cardElement).toHaveClass('is-flipped');
    });

    test("Check if flashcard front and back texts are rendered", () => {
        render(<FlashCardsPage />);
        expect(screen.getByText("What does HTML stand for?")).toBeInTheDocument();
        expect(screen.getByText("HyperText Markup Language — the structure of web pages.")).toBeInTheDocument();
    });
});
