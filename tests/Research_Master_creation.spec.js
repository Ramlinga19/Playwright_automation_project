
import { test, expect } from '@playwright/test';

test('Research Master creation', async ({ page }) => {

    // Generate unique Research Title
    const researchTitle = `Automation Testing ${Date.now()}`;

    // Login
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    await page.getByRole('textbox', { name: 'Enter your email' })
        .fill('ram@andesoft.com');

    await page.getByRole('textbox', { name: 'Enter your password' })
        .fill('testing');

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'icon' }).click();

    // Navigate to Research Master
    await page.getByRole('link', {
        name: 'icon Research Master'
    }).click();

    // Verify Research Master page
    await expect(
        page.getByRole('heading', {
            name: 'Research Master',
            exact: true
        })
    ).toBeVisible();

    // Verify Add Research button
    await expect(
        page.getByRole('button', { name: ' Add Research' })
    ).toBeVisible();

    // Click Add Research
    await page.getByRole('button', {
        name: ' Add Research'
    }).click();

    // Verify Add Research form
    await expect(
        page.getByRole('heading', { name: 'Add Research' })
    ).toBeVisible();

    // Select Research Type
    await page.locator('#select2-CategorySelect-container')
        .getByText('Choose an option').click();

    await page.getByRole('option', {
        name: 'Annual Report - AR'
    }).click();

    // Select Sector
    await page.locator('section')
        .filter({ hasText: 'Research Type Annual Report' })
        .getByPlaceholder('Type to Search...')
        .click();

    await page.getByRole('option', {
        name: 'Agri inputs'
    }).click();

    // Enter Research Title
    await page.getByRole('textbox', { name: 'Enter Title' })
        .fill(researchTitle);

    // Select Mail From
    await page.locator('#select2-idmailfrom-container')
        .getByText('Choose an option').click();

    await page.getByRole('option', {
        name: 'Lead Author'
    }).click();

    // Select Recommendation
    await page.locator('#select2-idrecommendation-container')
        .getByText('Choose an option').click();

    await page.getByRole('option', {
        name: 'Downgrade to Neutral'
    }).click();

    // Save Research
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify Research Master listing page
    await expect(page).toHaveURL(/ResearchMasterView/);

    await expect(
        page.getByRole('heading', {
            name: 'Research Master',
            exact: true
        })
    ).toBeVisible();

    // Search for newly created Research
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(researchTitle);

    // Identify newly created Research
    const newResearchRow = page.getByRole('row').filter({
        hasText: researchTitle
    });

    // Verify Research exists
    await expect(newResearchRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newResearchRow).toBeVisible();

    // Verify saved information
    await expect(newResearchRow).toContainText(researchTitle);

    await expect(newResearchRow).toContainText(
        'Annual Report - AR'
    );

    await expect(newResearchRow).toContainText('Agri inputs');

    // Open the newly created Research
    await newResearchRow.getByRole('cell').filter({
        hasText: researchTitle
    }).click();

    // Verify Delete button is available
    await expect(
        page.getByRole('button', { name: 'Delete' })
    ).toBeVisible();

    // Delete Research
    await page.getByRole('button', { name: 'Delete' }).click();

    // Confirm Research deletion
    await page.getByRole('button', { name: 'Delete' }).click();

    // Verify Research is deleted from listing
    await expect(newResearchRow).toHaveCount(0, {
        timeout: 15000
    });

});