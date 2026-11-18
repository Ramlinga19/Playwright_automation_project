import { test, expect } from '@playwright/test';



test('Idea Master creation', async ({ page }) => {

    // Generate unique Note text
    const ideaNote = `Automation Testing ${Date.now()}`;

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

    // Step 2: Navigate to Idea Master
    await page.getByRole('link', {
        name: 'icon Idea Master'
    }).click();

    // Step 3: Verify Idea Master page
    await expect(
        page.getByRole('heading', {
            name: 'Idea Master',
            exact: true
        })
    ).toBeVisible();

    // Step 4: Verify Add Idea button
    await expect(
        page.getByRole('button', {
            name: ' Add Idea'
        })
    ).toBeVisible();

    // Step 5: Open Add Idea form
    await page.getByRole('button', {
        name: ' Add Idea'
    }).click();

    await expect(
        page.getByRole('heading', {
            name: 'Add Idea'
        })
    ).toBeVisible();

    // Step 6: Select Company
    await page.locator('#select2-idcompany-container').click();

    await page.keyboard.type('20 Microns Ltd');

    await page.getByRole('option', {
        name: '20 Microns Ltd',
        exact: true
    }).click();

    // Verify Company selection
    await expect(
        page.locator('#select2-idcompany-container')
    ).toContainText('20 Microns Ltd');

    // Step 7: Select Sector
    await page.locator('#select2-idsector-container').click();

    await page.keyboard.type('Agri inputs');

    await page.getByRole('option', {
        name: 'Agri inputs',
        exact: true
    }).click();

    // Verify Sector selection
    await expect(
        page.locator('#select2-idsector-container')
    ).toContainText('Agri inputs');

    // Step 8: Enter Note
    await page.locator('.rte-content').fill(ideaNote);

    // Step 9: Save Idea
    await page.getByRole('button', {
        name: 'Save'
    }).click();

    // Step 10: Verify Idea Master listing page
    await expect(page).toHaveURL(/IdeasMasterView/);

    await expect(
        page.getByRole('heading', {
            name: 'Idea Master',
            exact: true
        })
    ).toBeVisible();

    // Step 11: Search for newly created Idea
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(ideaNote);

    // Step 12: Identify newly created Idea
    const newIdeaRow = page.getByRole('row').filter({
        hasText: ideaNote
    });

    // Step 13: Verify Idea exists
    await expect(newIdeaRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newIdeaRow).toBeVisible();

    // Step 14: Verify saved information
    await expect(newIdeaRow).toContainText(ideaNote);

    await expect(newIdeaRow).toContainText(
        '20 Microns Ltd'
    );

    await expect(newIdeaRow).toContainText(
        'Agri inputs'
    );

    // Step 15: Open the same Idea
    await newIdeaRow.click();

    // Step 16: Verify opened Idea Note
    await expect(
        page.locator('.rte-content')
    ).toContainText(ideaNote);

    // Step 17: Delete Idea
    await page.getByRole('button', {
        name: 'Delete'
    }).click();

    // Step 18: Confirm deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();

    // Step 19: Verify Idea is deleted
    await expect(newIdeaRow).toHaveCount(0, {
        timeout: 15000
    });

});