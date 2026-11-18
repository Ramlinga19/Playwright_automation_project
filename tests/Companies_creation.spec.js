
import { test, expect } from '@playwright/test';



test('Companies creation', async ({ page }) => {

    // Generate a unique Company Name
    const companyName = `Andesoft Automation Testing ${Date.now()}`;

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


    // Step 3: Navigate to Companies
    await page.getByRole('link', {
        name: 'icon Companies'
    }).click();


    // Step 4: Verify Companies page
    await expect(page).toHaveURL(/CompanyView/);

    await expect(
        page.getByRole('heading', {
            name: 'Companies',
            exact: true
        })
    ).toBeVisible();


    // Step 5: Verify Create Company button
    const createCompanyButton = page.getByRole('button', {
        name: ' Create Company'
    });

    await expect(createCompanyButton).toBeVisible();


    // Step 6: Open Create Company form
    await createCompanyButton.click();

    await expect(
        page.getByRole('heading', {
            name: 'Add New Company'
        })
    ).toBeVisible();


    // Step 7: Enter Company Name
    await page.getByRole('textbox', {
        name: 'Name *'
    }).fill(companyName);


    // Step 8: Select Internal Sector
    await page.locator('#select2-idSector-container').click();

    await page.getByRole('option', {
        name: 'Agri inputs',
        exact: true
    }).click();


    // Step 9: Save Company
    await page.getByRole('button', {
        name: 'Save'
    }).click();


    // Step 10: Verify Companies listing page
    await expect(page).toHaveURL(/CompanyView/);

    await expect(
        page.getByRole('heading', {
            name: 'Companies',
            exact: true
        })
    ).toBeVisible();


    // Step 11: Search for newly created Company
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await expect(searchBox).toBeVisible();

    await searchBox.fill(companyName);

    await page.getByRole('button', {
        name: 'Search',
        exact: true
    }).click();


    // Step 12: Identify newly created Company
    const companyRow = page.getByRole('row').filter({
        hasText: companyName
    });


    // Step 13: Verify Company exists
    await expect(companyRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(companyRow).toBeVisible();


    // Step 14: Verify Company Name
    await expect(companyRow).toContainText(companyName);


    // Step 15: Open the same Company
    await companyRow.locator('span').filter({
        hasText: companyName
    }).first().click();


    // Step 16: Verify Edit Company page
    await expect(
        page.getByText('Edit', {
            exact: true
        })
    ).toBeVisible();


    // Step 17: Verify Company Name in edit form
    const companyNameTextbox = page.getByRole('textbox', {
        name: 'Name *'
    });

    await expect(companyNameTextbox).toBeVisible();

    await expect(companyNameTextbox).toHaveValue(companyName);


    // Step 18: Delete Company
    await page.getByRole('button', {
        name: 'Delete',
        exact: true
    }).click();


    // Step 19: Confirm deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();


    // Step 20: Verify Companies listing page
    await expect(page).toHaveURL(/CompanyView/);

    await expect(
        page.getByRole('heading', {
            name: 'Companies',
            exact: true
        })
    ).toBeVisible();


    // Step 21: Search for deleted Company
    await searchBox.fill(companyName);

    await page.getByRole('button', {
        name: 'Search',
        exact: true
    }).click();


    // Step 22: Verify Company is deleted
    await expect(companyRow).toHaveCount(0, {
        timeout: 15000
    });

});