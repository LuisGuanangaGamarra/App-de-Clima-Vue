import { test, expect } from '@playwright/test'

test('flujo completo de búsqueda del clima', async ({ page }) => {
    await page.goto('http://localhost:5173')

    const input = page.getByPlaceholder('Ingresa una ciudad')
    await input.fill('Quito')

    const button = page.getByRole('button', { name: /buscar/i })
    await button.click()

    await expect(page.locator('.weather-card')).toContainText('Quito')
    await expect(page.locator('.weather-card')).toContainText(/°C/)
})
