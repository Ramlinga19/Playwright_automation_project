import { test, expect } from '@playwright/test';



test('Funds Master creation', async ({ page }) => {

    // Generate unique Fund Name
    const fundName = `Automation Fund Testing ${Date.now()}`;

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

    // Step 2: Navigate to Funds
    await page.getByRole('button', {
        name: 'icon'
    }).click();

    await page.getByRole('link', {
        name: 'icon Funds'
    }).click();

    // Step 3: Verify Funds page
    await expect(
        page.getByRole('heading', {
            name: 'Funds',
            exact: true
        })
    ).toBeVisible();

    // Step 4: Click Create Fund
    await page.getByRole('button', {
        name: ' Create Fund'
    }).click();

    // Step 5: Verify Add New Fund form
    await expect(
        page.getByRole('heading', {
            name: 'Add New Fund'
        })
    ).toBeVisible();

    // Step 6: Enter Fund Name
    await page.getByRole('textbox', {
        name: 'Fund Name *'
    }).fill(fundName);

    // Step 7: Select RM Name
    await page.locator('#select2-rmName-container').click();

    await page.getByRole('option', {
        name: 'Aaditya Shroff'
    }).click();

    // Step 8: Save Fund
    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    // Step 9: Wait for Funds listing page
    await expect(page).toHaveURL(/FundView/);

    await expect(
        page.getByRole('heading', {
            name: 'Funds',
            exact: true
        })
    ).toBeVisible();

    // Step 10: Search for newly created Fund
    const searchBox = page.getByRole('searchbox', {
        name: 'Search Fund / RM...'
    });

    await searchBox.fill(fundName);
    await searchBox.press('Enter');

    // Step 11: Identify the newly created Fund
    const newFundRow = page.getByRole('row').filter({
        hasText: fundName
    });

    // Step 12: Verify Fund appears in search results
    await expect(newFundRow).toHaveCount(1, {
        timeout: 20000
    });

    await expect(newFundRow).toBeVisible();

    // Step 13: Verify Fund Name
    await expect(newFundRow).toContainText(fundName);
// Step 14: Verify the newly created Fund is visible
await expect(newFundRow).toBeVisible();

// Step 15: Verify Fund Name
await expect(newFundRow).toContainText(fundName);

// Step 16: Verify Fund Category dropdown
await expect(
    newFundRow.getByRole('combobox', {
        name: 'Fund Category'
    })
).toBeVisible();

// Step 17: Verify Fund Type dropdown
await expect(
    newFundRow.getByRole('combobox', {
        name: 'Fund Type'
    })
).toBeVisible();

// Step 18: Verify RM dropdown
await expect(
    newFundRow.getByRole('combobox', {
        name: 'RM'
    })
).toBeVisible();

// Step 19: Verify Focus Client checkbox
await expect(
    newFundRow.getByRole('checkbox', {
        name: 'Focus Client'
    })
).toBeVisible();

// Step 20: Verify Funds listing URL
await expect(page).toHaveURL(/\/FundView/);

console.log('Fund creation and listing verification successful');

});
