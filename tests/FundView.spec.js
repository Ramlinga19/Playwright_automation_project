import { test, expect } from '@playwright/test';

test('Test Case ID_1 Verify Funds page is accessible', async ({ page }) => {

    // Open login page
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    // Enter email
    await page.locator('#email').fill('ram@andesoft.com');

    // Enter password
    await page.locator('#password').fill('testing');

    // Click Sign In
    await page.locator('.btn_submit').click();

    // Verify login was successful
    await expect(page).toHaveURL("https://iecrm.acpldev.com/Home");
    
    // Verify Fund link is visible
    const fundLink = page.locator('a[href="/FundView"]');
    await expect(fundLink).toBeVisible();

    // Click Fund
    await fundLink.click();

    // Verify Fund page opened
    await expect(page).toHaveURL('https://iecrm.acpldev.com/FundView');

});

test('Test Case ID_1.1 Verify Funds Master page UI', async ({ page }) => {

   // Open login page
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    // Enter email
    await page.locator('#email').fill('ram@andesoft.com');

    // Enter password
    await page.locator('#password').fill('testing');

    // Click Sign In
    await page.locator('.btn_submit').click();

    // Verify login was successful
    await expect(page).toHaveURL("https://iecrm.acpldev.com/Home");
    
    // Verify Fund link is visible
    const fundLink = page.locator('a[href="/FundView"]');
    await expect(fundLink).toBeVisible();

    // Click Fund
    await fundLink.click();

    // Verify Fund page opened
    await expect(page).toHaveURL('https://iecrm.acpldev.com/FundView');


      // 4. Verify the presence of the Funds page heading
    await expect(
        page.getByRole('heading', { name: 'Funds' })
    ).toBeVisible();

    // 5. Verify the presence of the Search bar
    await expect(
        page.getByPlaceholder(/search/i)
    ).toBeVisible();

    // 6. Verify the presence of the Create Fund button
    await expect(
        page.getByRole('button', { name: /create fund/i })
    ).toBeVisible();

    // 7. Verify the presence of the Fund Name column
    await expect(
        page.getByText('Fund Name', { exact: true })
    ).toBeVisible();

    // 8. Verify the presence of the RM column
    await expect(
        page.getByText('RM', { exact: true })
    ).toBeVisible();

    // 9. Verify that the fund records are displayed properly
    const fundRows = page.locator('table tbody tr');

    await expect(fundRows.first()).toBeVisible();

});
test('Test Case ID_1.2 Verify Fund Representative details', async ({ page }) => {

    // Open login page
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    // Enter email
    await page.locator('#email').fill('ram@andesoft.com');

    // Enter password
    await page.locator('#password').fill('testing');

    // Click Sign In
    await page.locator('.btn_submit').click();

    // Verify login was successful
    await expect(page).toHaveURL("https://iecrm.acpldev.com/Home");
    
    // Verify Fund link is visible
    const fundLink = page.locator('a[href="/FundView"]');
    await expect(fundLink).toBeVisible();

    // Click Fund
    await fundLink.click();

    // Verify Fund page opened
    await expect(page).toHaveURL('https://iecrm.acpldev.com/FundView');
        // 4. Identify a fund having Fund Representative details
    const fundRepresentatives = page.locator('a.funrep_link');

    await expect(fundRepresentatives.first()).toBeVisible();

    // 5. Verify that the Fund Representative names are displayed
    await expect(fundRepresentatives.first()).toHaveText(/.+/);

    // 6. Verify that multiple Fund Representatives are displayed properly when available
    const representativeCount = await fundRepresentatives.count();

    expect(representativeCount).toBeGreaterThan(0);

    console.log(`Fund Representatives displayed: ${representativeCount}`);
});



test('Test Case ID_1.3 Verify RM name against respective Fund', async ({ page }) => {

    // Open login page
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    // Enter email
    await page.locator('#email').fill('ram@andesoft.com');

    // Enter password
    await page.locator('#password').fill('testing');

    // Click Sign In
    await page.locator('.btn_submit').click();

    // Verify login was successful
    await expect(page).toHaveURL("https://iecrm.acpldev.com/Home");
    
    // Verify Fund link is visible
    const fundLink = page.locator('a[href="/FundView"]');
    await expect(fundLink).toBeVisible();

    // Click Fund
    await fundLink.click();

    // Verify Fund page opened
    await expect(page).toHaveURL('https://iecrm.acpldev.com/FundView');

    // 4. Verify the RM column
    await expect(
        page.getByText('RM', { exact: true })
    ).toBeVisible();

    // 5. Verify that the RM name is displayed against the respective fund
    const rmNames = page.locator('table tbody tr td');

    await expect(rmNames.first()).toBeVisible();
});

test('Test Case ID_1.4 Verify Fund Representative navigation', async ({ page }) => {


    // Open login page
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    // Enter email
    await page.locator('#email').fill('ram@andesoft.com');

    // Enter password
    await page.locator('#password').fill('testing');

    // Click Sign In
    await page.locator('.btn_submit').click();

    // Verify login was successful
    await expect(page).toHaveURL('https://iecrm.acpldev.com/Home');

    // Verify Fund link is visible
    const fundLink = page.locator('a[href="/FundView"]');
    await expect(fundLink).toBeVisible();

    // Click Fund
    await fundLink.click();

    // Verify Fund page opened
    await expect(page).toHaveURL('https://iecrm.acpldev.com/FundView');

    // 3. Verify that the Funds Master page is displayed
    await expect(
        page.getByText('Funds', { exact: true }).first()
    ).toBeVisible();

    // 4. Identify a fund that has a Fund Representative name displayed
    const fundRepresentative = page.locator('a.funrep_link').first();

    await expect(fundRepresentative).toBeVisible();

    // 5. Click on the Fund Representative name
    await fundRepresentative.click();

    // 6. Verify the page opened after clicking the Fund Representative name
    await expect(page).toHaveURL(/FundManagersView\/Edit/);
});




