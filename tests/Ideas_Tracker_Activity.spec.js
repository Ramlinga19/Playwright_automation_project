import { test, expect } from '@playwright/test';





test('Ideas Tracker - Create and Delete Activity', async ({ page }) => {

    const discussionTopic = `Automation Testing ${Date.now()}`;

    const companyName = '20 Microns Ltd';
    const sectorName = 'Agri inputs';
    const fundName = '360 ONE Mutual Fund';

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
    }).first().click();

    // STEP 3: Navigate to Ideas
    await page.locator('a[href="/IdeasView"]').click();

    // STEP 4: Verify Ideas page
    await expect(
        page.getByRole('heading', {
            name: 'Ideas',
            exact: true
        })
    ).toBeVisible();

    // STEP 5: Identify the first 20 Microns Ltd record
    // Use the sector to distinguish it from the duplicate company record.
    const ideaRow = page.getByRole('row').filter({
        hasText: companyName
    }).filter({
        hasText: sectorName
    });

    await expect(ideaRow).toHaveCount(1);

    // STEP 6: Open the Idea Tracker
    await ideaRow.click();

    // STEP 7: Verify Tracker page
    await expect(
        page.getByText('Tracker', {
            exact: true
        })
    ).toBeVisible();

    // STEP 8: Expand the first Fund
    await page.getByRole('cell', {
        name: new RegExp(fundName)
    }).click();

    // STEP 9: Identify available Discussion / KTAs textboxes
    const discussionBoxes = page.getByRole('textbox', {
        name: 'Enter Discussion / KTAs'
    });

    let discussionBoxCount = await discussionBoxes.count();

    // STEP 10: If no Fund Rep exists, add the first available Fund Rep
    if (discussionBoxCount === 0) {

        await page.getByText('Add Fund Rep', {
            exact: true
        }).first().click();

        const repDropdown = page.locator(
            'select.hidden-reps-dropdown'
        ).first();

        await expect(repDropdown).toBeAttached();

        const availableReps = await repDropdown.locator('option').evaluateAll(
            options => options
                .filter(option =>
                    option.value &&
                    !option.disabled &&
                    option.textContent.trim() !== 'Select Rep'
                )
                .map(option => option.value)
        );

        expect(
            availableReps.length,
            'No available Fund Rep found'
        ).toBeGreaterThan(0);

        await repDropdown.selectOption(availableReps[0], {
            force: true
        });

        await expect(discussionBoxes.first()).toBeVisible();

    } else {

        console.log('Existing Fund Rep found. Skipping Add Fund Rep.');
    }

    // STEP 11: Use the first available Discussion / KTAs textbox
    const discussionBox = discussionBoxes.first();

    await expect(discussionBox).toBeVisible();

    // STEP 12: Enter unique Discussion Topic
    await discussionBox.fill(discussionTopic);

    // STEP 13: Verify entered Discussion Topic
    await expect(discussionBox).toHaveValue(discussionTopic);

    // STEP 14: Save the Discussion / KTAs
    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).first().click();

    // STEP 15: Confirm Save operation
    await page.locator('#saveData').click();

    // STEP 16: Verify successful save
    await page.getByRole('button', {
        name: 'Okay',
        exact: true
    }).click();

    // STEP 17: Navigate to Activities
    await page.locator('a[href="/ActivitiesView"]').click();

    // STEP 18: Verify Activities page
    await expect(page).toHaveURL(/ActivitiesView/);

    await expect(
        page.getByRole('heading', {
            name: 'Activities',
            exact: true
        })
    ).toBeVisible();

    // STEP 19: Search for newly created Activity
    const activitySearch = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await activitySearch.fill(discussionTopic);
    await activitySearch.press('Enter');

    // STEP 20: Identify newly created Activity
    const createdActivity = page.getByText(discussionTopic, {
        exact: true
    });

    // STEP 21: Verify Activity is displayed
    await expect(createdActivity).toBeVisible({
        timeout: 20000
    });

    // STEP 22: Open Activity
    await createdActivity.click();

    // STEP 23: Verify Delete button
    const deleteButton = page.getByRole('button', {
        name: 'Delete',
        exact: true
    });

    await expect(deleteButton).toBeVisible();

    // STEP 24: Delete Activity
    await deleteButton.click();

    // STEP 25: Confirm deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();

    // STEP 26: Verify Activity deletion
    await expect(
        page.getByText(discussionTopic, {
            exact: true
        })
    ).toHaveCount(0, {
        timeout: 20000
    });

    console.log(
        `Successfully created and deleted Activity: ${discussionTopic}`
    );

});