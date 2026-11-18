import { test, expect } from '@playwright/test';




test('Deals Tracker - Create and Delete Activity', async ({ page }) => {

    const uniqueComment = `Automation Testing ${Date.now()}`;
    const dealName = 'Aditya Infotech Limited QIP';
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

    // STEP 3: Navigate to Deals
    await page.getByRole('link', {
        name: 'icon Deals'
    }).click();

    // STEP 4: Verify Deals page
    await expect(
        page.getByRole('link', {
            name: 'Deals',
            exact: true
        })
    ).toBeVisible();

    // STEP 5: Open first required Deal
    await page.getByText(dealName, {
        exact: true
    }).first().click();

    // STEP 6: Verify Tracker page
    await expect(
        page.getByText('Tracker', {
            exact: true
        })
    ).toBeVisible();

    // STEP 7: Verify first Fund
    await expect(
        page.getByText(fundName, {
            exact: true
        })
    ).toBeVisible();

    // STEP 8: Check available Comment textboxes
    const commentBoxes = page.getByRole('textbox', {
        name: 'Enter Comment'
    });

    let availableCommentBoxes = await commentBoxes.count();

    // STEP 9: If no Fund Rep is available, add the first available one
    if (availableCommentBoxes === 0) {

        await page.getByText('Add Fund Rep', {
            exact: true
        }).first().click();

        const repDropdown = page.locator('select.hidden-reps-dropdown').first();

        await expect(repDropdown).toBeAttached();

        const repOptions = await repDropdown.locator('option').evaluateAll(
            options => options
                .filter(option => option.value && !option.disabled)
                .map(option => option.value)
        );

        expect(
            repOptions.length,
            'No available Fund Rep found in the dropdown'
        ).toBeGreaterThan(0);

        await repDropdown.selectOption(repOptions[0], {
            force: true
        });

        await expect(commentBoxes.first()).toBeVisible();

    } else {

        console.log('Existing Fund Rep found. Skipping Add Fund Rep.');
    }

    // STEP 10: Use the first available Comment textbox
    const commentBox = commentBoxes.first();

    await expect(commentBox).toBeVisible();

    // STEP 11: Enter unique comment
    await commentBox.fill(uniqueComment);

    // STEP 12: Verify entered comment
    await expect(commentBox).toHaveValue(uniqueComment);

    // STEP 13: Click menu button once to trigger auto-save
    await page.getByRole('button', {
        name: 'icon'
    }).first().click();

    // STEP 14: Wait for auto-save request to settle
   await page.waitForLoadState('domcontentloaded');
// STEP 15: Navigate to Activities
const activitiesLink = page.locator('a[href="/ActivitiesView"]');

await expect(activitiesLink).toBeVisible();
await activitiesLink.click();

// STEP 16: Verify Activities page
await expect(page).toHaveURL(/ActivitiesView/);

await expect(
    page.getByRole('heading', {
        name: 'Activities',
        exact: true
    })
).toBeVisible();

    // STEP 17: Search for the newly created Activity
    const activitySearch = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await activitySearch.fill(uniqueComment);
    await activitySearch.press('Enter');

    // STEP 18: Identify the newly created Activity
    const createdActivity = page.getByText(uniqueComment, {
        exact: true
    });

    await expect(createdActivity).toBeVisible({
        timeout: 20000
    });

    // STEP 19: Open Activity
    await createdActivity.click();

    // STEP 20: Verify Delete button
    const deleteButton = page.getByRole('button', {
        name: 'Delete',
        exact: true
    });

    await expect(deleteButton).toBeVisible();

    // STEP 21: Delete Activity
    await deleteButton.click();

    // STEP 22: Confirm deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();

    // STEP 23: Verify Activity is deleted
    await expect(
        page.getByText(uniqueComment, {
            exact: true
        })
    ).toHaveCount(0, {
        timeout: 20000
    });

    console.log(
        `Successfully created and deleted Activity: ${uniqueComment}`
    );

});

