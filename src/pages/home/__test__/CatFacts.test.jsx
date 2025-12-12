import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { mockCatFactsFetch } from '../../../__mocks__/catFactsApi';
import { CatFacts } from '../CatFacts';

describe("CatFacts" , () => {
    test('should display cat fact upon successful fetch', async () => {
        mockCatFactsFetch.success();
        render(<CatFacts />)
        const CatFactText = await screen.findByText("Cats have five toes on their front paws")
        expect(CatFactText).toBeVisible();
    })

    test("should display fallback fact upon fetch failure", async () => {
        mockCatFactsFetch.failure();
        render(<CatFacts />);
        const CatFactText = await screen.findByText("Cats can rotate their ears 180 degrees to better detect sounds around them.");
        expect(CatFactText).toBeVisible();
    })
});