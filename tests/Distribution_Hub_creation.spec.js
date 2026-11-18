import { test, expect } from '@playwright/test';

test('Distribution Hub creation', async ({ page }) => {

    // Generate unique Research Title
    const researchTitle = `Automation DH Testing ${Date.now()}`;

    // Step 1: Login
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    await page.getByRole('textbox', {
        name: 'Enter your email'
    }).fill('ram@andesoft.com');

    await page.getByRole('textbox', {
        name: 'Enter your password'
    }).fill('testing');

    await page.getByRole('button', {
        name: 'Sign In'
    }).click();

    await page.getByRole('button', {
        name: 'icon'
    }).click();

    // Step 2: Navigate to Distribution Hub
    await page.getByRole('link', {
        name: 'icon Distribution Hub'
    }).click();

    // Step 3: Verify Distribution Hub page
    await expect(
        page.getByRole('heading', {
            name: 'Distribution Hub',
            exact: true
        })
    ).toBeVisible();

    await expect(
        page.getByRole('link', {
            name: 'Distribution Hub',
            exact: true
        })
    ).toBeVisible();

    // Step 4: Verify Add New Distribution button
    await expect(
        page.getByRole('button', {
            name: ' Add New Distribution'
        })
    ).toBeVisible();

    // Step 5: Open Add New Distribution
    await page.getByRole('button', {
        name: ' Add New Distribution'
    }).click();

    // Step 6: Select Research Type
    await page.locator('#select2-CategorySelect-container').click();

    await page.getByRole('option', {
        name: 'Annual Report - AR'
    }).click();

    // Step 7: Verify Create form
    await expect(
        page.getByText('Create', {
            exact: true
        })
    ).toBeVisible();

    // Step 8: Select Sector
    await page.getByRole('searchbox', {
        name: 'Search'
    }).first().click();

    await page.getByRole('option', {
        name: 'Agri inputs'
    }).click();

    // Step 9: Enter Research Title
    await page.getByRole('textbox', {
        name: 'Enter Research Title / Subject'
    }).fill(researchTitle);

    // Step 10: Save Distribution
    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    // Step 11: Navigate back to Distribution Hub listing
    await page.getByRole('link', {
        name: 'icon Distribution Hub'
    }).click();

    await expect(page).toHaveURL(/DistributionHubView/);

    // Step 12: Verify Distribution Hub listing
    await expect(
        page.getByRole('heading', {
            name: 'Distribution Hub',
            exact: true
        })
    ).toBeVisible();

    // Step 13: Search for newly created Distribution
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(researchTitle);

    // Step 14: Identify newly created Distribution
    const newDistributionRow = page.getByRole('row').filter({
        hasText: researchTitle
    });

    // Step 15: Verify Distribution exists
    await expect(newDistributionRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newDistributionRow).toBeVisible();

    // Step 16: Verify saved Research Title
    await expect(newDistributionRow).toContainText(researchTitle);

    // Step 17: Open the same Distribution
    await newDistributionRow.getByText(researchTitle, {
        exact: true
    }).click();

    // Step 18: Verify Distribution edit page
    await expect(page).toHaveURL(/DistributionHubView\/Edit/);

    // Step 19: Verify Research Title
    await expect(
        page.getByRole('textbox', {
            name: 'Enter Research Title / Subject'
        })
    ).toHaveValue(researchTitle);

    // Step 20: Delete Distribution
    await page.getByRole('button', {
        name: 'Delete',
        exact: true
    }).click();

    // Step 21: Confirm deletion
    await page.getByRole('button', {
        name: 'Delete',
        exact: true
    }).click();

    // Step 22: Verify Distribution is deleted
    await expect(page).toHaveURL(/DistributionHubView/);

    await expect(newDistributionRow).toHaveCount(0, {
        timeout: 15000
    });

});
