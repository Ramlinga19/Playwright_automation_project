import { test, expect } from '@playwright/test';

test('Deal Master creation', async ({ page }) => {

    // Generate unique Deal Title
    const dealTitle = `Automation Testing ${Date.now()}`;

    // Login
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    await page.getByRole('textbox', { name: 'Enter your email' })
        .fill('ram@andesoft.com');

    await page.getByRole('textbox', { name: 'Enter your password' })
        .fill('testing');

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'icon' }).click();

    // Navigate to Deal Master
    await page.getByRole('link', { name: 'icon Deal Master' }).click();

    // Verify Deal Master page
    await expect(
        page.getByRole('link', {
            name: 'Deal Master',
            exact: true
        })
    ).toBeVisible();

    await expect(
        page.getByRole('heading', {
            name: 'Deal Master',
            exact: true
        })
    ).toBeVisible();

    // Verify New Deal button
    await expect(
        page.getByRole('button', { name: ' New Deal' })
    ).toBeVisible();

    // Create New Deal
    await page.getByRole('button', { name: ' New Deal' }).click();

    // Verify New Deal form
    await expect(
        page.getByRole('heading', { name: 'New Deal' })
    ).toBeVisible();

    // Enter Deal Title
    await page.getByRole('textbox', { name: 'Title*' })
        .fill(dealTitle);

    // Open More Information
    await page.getByRole('button', {
        name: 'More information'
    }).click();

    // Enter Filing Valuation
    await page.getByRole('textbox', { name: 'Filing Valuation' })
        .fill('₹ 2000');

    // Enter Tentative Valuation
    await page.getByRole('textbox', { name: 'Tentative Valuation' })
        .fill('₹ 5000');

    // Enter Sales Deal Leader
    await page.getByRole('textbox', { name: 'Sales Deal Leader' })
        .fill('rama');

    // Enter Approx Size
    await page.getByRole('textbox', { name: 'Approx Size (₹ Cr)' })
        .fill('₹ 250');

    // Enter OFS
    await page.getByRole('textbox', { name: 'OFS' })
        .fill('₹ 250');

    // Enter Fresh
    await page.getByRole('textbox', { name: 'Fresh' })
        .fill('₹ 250');

    // Enter Deal Description
    await page.locator('.rte-content')
        .fill('Automation testing discussion');

    // Save Deal
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify Deal Master listing page
    await expect(page).toHaveURL(/DealMasterView/);

    await expect(
        page.getByRole('heading', {
            name: 'Deal Master',
            exact: true
        })
    ).toBeVisible();

    // Search for newly created Deal
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(dealTitle);

    // Identify newly created Deal
    const newDealRow = page.getByRole('row').filter({
        hasText: dealTitle
    });

    // Verify Deal exists
    await expect(newDealRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newDealRow).toBeVisible();

    // Verify saved Deal Title
    await expect(newDealRow).toContainText(dealTitle);

    // Open the newly created Deal
    await newDealRow.getByRole('cell', {
        name: dealTitle,
        exact: true
    }).click();

    // Verify opened Deal using its Title
    await expect(
        page.getByRole('textbox', { name: 'Title*' })
    ).toHaveValue(dealTitle);

    // Delete Deal
    await page.getByRole('button', { name: 'Delete' }).click();

    // Confirm Deal deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();

    // Verify Deal is deleted from listing
    await expect(newDealRow).toHaveCount(0, {
        timeout: 15000
    });

});