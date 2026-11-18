import { test, expect } from '@playwright/test';


test('Fund Clients creation', async ({ page }) => {

    // Generate unique First Name
    const firstName = `Andesoft Automation Testing ${Date.now()}`;

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

    // Step 2: Open navigation menu
    await page.getByRole('button', {
        name: 'icon'
    }).click();

    // Step 3: Navigate to Fund Clients
    await page.getByRole('link', {
        name: 'icon Fund Clients',
        exact: true
    }).click();

    // Step 4: Verify Fund Clients page
    await expect(page).toHaveURL(/FundManagersView/);

    await expect(
        page.getByRole('heading', {
            name: 'Fund Clients'
        })
    ).toBeVisible();

    // Step 5: Verify Create Fund Clients button
    const createButton = page.getByRole('button', {
        name: ' Create Fund Clients'
    });

    await expect(createButton).toBeVisible();

    // Step 6: Open Add Fund Client form
    await createButton.click();

    await expect(
        page.getByRole('heading', {
            name: 'Add Fund Client'
        })
    ).toBeVisible();

    // Step 7: Enter First Name
    await page.getByRole('textbox', {
        name: 'First Name'
    }).fill(firstName);

    // Step 8: Select Fund
    await page.locator('#select2-IdFund-container').click();

    await page.getByRole('option', {
        name: 'ONE Mutual Fund'
    }).click();

    // Step 9: Select RM Name
    await page.getByRole('textbox', {
        name: 'Aaditya Shroff'
    }).click();

    await page.getByRole('option', {
        name: 'Aaditya Shroff'
    }).click();

    // Step 10: Save Fund Client
    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    // Step 11: Verify Fund Clients listing page
    await expect(page).toHaveURL(/FundManagersView/);

    await expect(
        page.getByRole('heading', {
            name: 'Fund Clients'
        })
    ).toBeVisible();

    // Step 12: Search for newly created Fund Client
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(firstName);

    await page.getByRole('button', {
        name: 'Search',
        exact: true
    }).click();

    // Step 13: Identify newly created Fund Client
    const newFundClientRow = page.getByRole('row').filter({
        hasText: firstName
    });

    // Step 14: Verify Fund Client exists
    await expect(newFundClientRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newFundClientRow).toBeVisible();

    // Step 15: Verify saved First Name
    await expect(newFundClientRow).toContainText(firstName);

// Step 16: Click the visible First Name
await newFundClientRow.locator('span.text_clip').click();

    // Step 17: Verify opened Fund Client details
    const firstNameTextbox = page.getByRole('textbox', {
        name: 'First Name'
    });

    await expect(firstNameTextbox).toBeVisible({
        timeout: 10000
    });

    await expect(firstNameTextbox).toHaveValue(firstName);

    // Step 18: Delete Fund Client
    await page.getByRole('button', {
        name: 'Delete',
        exact: true
    }).click();

    // Step 19: Confirm deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();

    // Step 20: Verify return to Fund Clients listing
    await expect(page).toHaveURL(/FundManagersView/);

    await expect(
        page.getByRole('heading', {
            name: 'Fund Clients'
        })
    ).toBeVisible();

    // Step 21: Search for deleted Fund Client
    await searchBox.fill(firstName);

    await page.getByRole('button', {
        name: 'Search',
        exact: true
    }).click();

    // Step 22: Verify Fund Client is deleted
    await expect(newFundClientRow).toHaveCount(0, {
        timeout: 15000
    });

});