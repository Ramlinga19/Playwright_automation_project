import { test, expect } from '@playwright/test';

test('Activity creation and verification', async ({ page }) => {

    // Generate unique test data
    const meetingTitle = `Automation Testing ${Date.now()}`;
    const discussion = `Automation testing discussion ${Date.now()}`;

    // STEP 1: Login
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

    // STEP 2: Open navigation menu
    await page.getByRole('button', {
        name: 'icon'
    }).click();

    // STEP 3: Navigate to Activities
    await page.getByRole('link', {
        name: 'icon Activities'
    }).click();

    // STEP 4: Verify Activities page
    await expect(
        page.getByRole('heading', {
            name: 'Activities'
        })
    ).toBeVisible();

    // STEP 5: Open New Activity
    await page.getByRole('button', {
        name: 'New Activity'
    }).click();

    const activityDialog = page.getByRole('dialog', {
        name: 'Activity'
    });

    await expect(activityDialog).toBeVisible();

    // STEP 6: Select any available Fund Client
    const fundClientDropdown = activityDialog.getByRole('combobox', {
        name: 'Select Fund Client / Company Exec'
    });

    await fundClientDropdown.click();

    const fundClientOptions = activityDialog.getByRole('option')
        .filter({ visible: true });

    await expect(fundClientOptions.first()).toBeVisible();

    const selectedFundClient = (
        await fundClientOptions.first().innerText()
    ).trim();

    await fundClientOptions.first().click();

    console.log('Selected Fund Client:', selectedFundClient);

    // STEP 7: Select Deal only if it is not already selected
    const dealDropdown = activityDialog.getByRole('combobox', {
        name: 'Growth Capital – Summit Enterprises'
    });

    // The accessible name can change depending on the selected Deal.
    // Find the Tag a Deal field using its label instead.
    const dealField = activityDialog.getByText('Tag a Deal', {
        exact: true
    }).locator('..');

    const dealInput = dealField.getByRole('combobox');

    if (await dealInput.count() > 0) {

        const currentDeal = await dealInput.first().innerText();

        if (!currentDeal.trim()) {
            await dealInput.first().click();

            const dealOptions = page.getByRole('option')
                .filter({ visible: true });

            await expect(dealOptions.first()).toBeVisible();

            const selectedDeal = (
                await dealOptions.first().innerText()
            ).trim();

            await dealOptions.first().click();

            console.log('Selected Deal:', selectedDeal);
        }
    }

    // STEP 8: Enter Meeting Title
    await activityDialog.getByRole('textbox', {
        name: 'Enter Meeting Title'
    }).fill(meetingTitle);

    // STEP 9: Select Activity Format dynamically
    const activityFormat = activityDialog.locator('select').first();

    const formatValue = await activityFormat.evaluate(select => {
        const option = Array.from(select.options)
            .find(option => option.value && !option.disabled);

        return option ? option.value : null;
    });

    if (formatValue) {
        await activityFormat.selectOption(formatValue);
    }

    // STEP 10: Select Company if no Company is already selected
    const companyDropdown = activityDialog.getByRole('combobox', {
        name: 'Choose an option'
    }).filter({ visible: true });

    // Companies Discussed is the first multi-select field
    const companiesField = activityDialog.getByText(
        'Companies Discussed',
        { exact: true }
    ).locator('..');

    const companiesInput = companiesField.getByRole('combobox');

    const existingCompanies = companiesField.getByRole('listitem');

    if (await existingCompanies.count() === 0) {

        await companiesInput.click();

        const companyOptions = page.getByRole('option')
            .filter({ visible: true });

        await expect(companyOptions.first()).toBeVisible();

        const selectedCompany = (
            await companyOptions.first().innerText()
        ).trim();

        await companyOptions.first().click();

        console.log('Selected Company:', selectedCompany);
    }

    // STEP 11: Select Research if no Research is already selected
    const researchField = activityDialog.getByText(
        'Research Discussed',
        { exact: true }
    ).locator('..');

    const researchInput = researchField.getByRole('combobox');

    const existingResearch = researchField.getByRole('listitem');

    if (await existingResearch.count() === 0) {

        await researchInput.click();

        const researchOptions = page.getByRole('option')
            .filter({ visible: true });

        await expect(researchOptions.first()).toBeVisible();

        const selectedResearch = (
            await researchOptions.first().innerText()
        ).trim();

        await researchOptions.first().click();

        console.log('Selected Research:', selectedResearch);
    }

    // STEP 12: Enter Notes
    await activityDialog.locator('.rte-content')
        .fill(discussion);

    // STEP 13: Verify mandatory Fund Client is selected
    await expect(
        activityDialog.getByText(
            'Please select a Fund Client / Company Exec',
            { exact: true }
        )
    ).toHaveCount(0);

    // STEP 14: Save Activity
    await activityDialog.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    // STEP 15: Verify Activity dialog closes after successful save
    await expect(activityDialog).toBeHidden();

    // STEP 16: Verify Activities listing
    await expect(
        page.getByRole('heading', {
            name: 'Activities'
        })
    ).toBeVisible();

    // STEP 17: Search for newly created Activity
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(meetingTitle);

    // STEP 18: Verify newly created Activity
    const activityRow = page.getByRole('row').filter({
        hasText: meetingTitle
    });

    await expect(activityRow).toBeVisible();

    console.log('Activity created successfully:', meetingTitle);

});