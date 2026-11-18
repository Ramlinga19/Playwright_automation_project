import { test, expect } from '@playwright/test';




test('Company Executive creation', async ({ page }) => {

    // Generate a unique First Name
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


    // Step 3: Navigate to Company Executives
    await page.getByRole('link', {
        name: 'icon Company Executives',
        exact: true
    }).click();


    // Step 4: Verify Company Executives page
    await expect(page).toHaveURL(/CompanyExecutiveView/);

    await expect(
        page.getByLabel('breadcrumb')
            .getByRole('listitem')
            .filter({ hasText: 'Company Executives' })
    ).toBeVisible();


    // Step 5: Verify Create Executive button
    const createExecutiveButton = page.getByRole('button', {
        name: ' Create Executive'
    });

    await expect(createExecutiveButton).toBeVisible();


    // Step 6: Open Create Executive form
    await createExecutiveButton.click();

    await expect(
        page.getByRole('heading', {
            name: 'Add Company Executive'
        })
    ).toBeVisible();


    // Step 7: Enter First Name
    await page.getByRole('textbox', {
        name: 'First Name'
    }).fill(firstName);


    // Step 8: Select Company
    await page.locator('#select2-IdCompanyGroup-container').click();

    const companySearch = page.locator(
        '.select2-container--open .select2-search__field'
    );

    await companySearch.fill('20 Microns Ltd');

    await page.getByRole('option', {
        name: '20 Microns Ltd',
        exact: true
    }).click();


    // Step 9: Save Company Executive
    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();


    // Step 10: Verify Company Executives listing page
    await expect(page).toHaveURL(/CompanyExecutiveView/);

    await expect(
        page.getByLabel('breadcrumb')
            .getByRole('listitem')
            .filter({ hasText: 'Company Executives' })
    ).toBeVisible();


    // Step 11: Search for newly created Executive
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await expect(searchBox).toBeVisible();

    await searchBox.fill(firstName);

    await page.getByRole('button', {
        name: 'Search',
        exact: true
    }).click();


    // Step 12: Identify newly created Executive
    const executiveRow = page.getByRole('row').filter({
        hasText: firstName
    });


    // Step 13: Verify Executive exists
    await expect(executiveRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(executiveRow).toBeVisible();


    // Step 14: Verify Executive First Name
    await expect(executiveRow).toContainText(firstName);


    // Step 15: Open the same Executive
    await executiveRow.locator('span').filter({
        hasText: firstName
    }).first().click();


    // Step 16: Verify opened Executive details
    const firstNameTextbox = page.getByRole('textbox', {
        name: 'First Name'
    });

    await expect(firstNameTextbox).toBeVisible();

    await expect(firstNameTextbox).toHaveValue(firstName);


    // Step 17: Delete Company Executive
    await page.getByRole('button', {
        name: 'Delete',
        exact: true
    }).click();


    // Step 18: Confirm deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();


    // Step 19: Verify return to Company Executives listing
    await expect(page).toHaveURL(/CompanyExecutiveView/);

    await expect(
        page.getByLabel('breadcrumb')
            .getByRole('listitem')
            .filter({ hasText: 'Company Executives' })
    ).toBeVisible();


    // Step 20: Search for deleted Executive
    await searchBox.fill(firstName);

    await page.getByRole('button', {
        name: 'Search',
        exact: true
    }).click();


    // Step 21: Verify Executive is deleted
    await expect(executiveRow).toHaveCount(0, {
        timeout: 15000
    });

});