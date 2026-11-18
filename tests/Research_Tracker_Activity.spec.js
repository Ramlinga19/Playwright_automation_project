import { test, expect } from '@playwright/test';

test('Research Tracker - Create Activity and Delete Activity', async ({ page }) => {

    // Generate unique Discussion Topic
    const discussionTopic = `Automation Testing ${Date.now()}`;

    // Existing Research record
    const researchTitle =
        'Indian Automobile Sector: EV Adoption and Competitive Landscape';

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

    // STEP 3: Navigate to Research
    await page.getByRole('link', {
        name: 'icon Research',
        exact: true
    }).click();

    // STEP 4: Verify Research page
    await expect(
        page.getByRole('heading', {
            name: 'Research',
            exact: true
        })
    ).toBeVisible();

    // STEP 5: Identify the correct Research record
    const researchRow = page.getByRole('row').filter({
        hasText: researchTitle
    });

    await expect(researchRow).toHaveCount(1);

    // STEP 6: Open Research Tracker
    await researchRow.click();

    // STEP 7: Verify Tracker page
    await expect(
        page.getByText('Tracker', {
            exact: true
        })
    ).toBeVisible();

    await expect(
        page.getByRole('heading', {
            name: researchTitle,
            exact: true
        })
    ).toBeVisible();

    // STEP 8: Identify the required Fund
    const fundRow = page.getByRole('row').filter({
        hasText: fundName
    }).first();

    await expect(fundRow).toBeVisible();

    // Expand Fund only if it is collapsed
    const collapsedFund = fundRow.getByText('▶', {
        exact: true
    });

    if (await collapsedFund.count() > 0) {
        await collapsedFund.click();
    }
// STEP 9: Identify only visible Discussion / KTAs textboxes
const discussionBoxes = page
    .getByPlaceholder('Enter Discussion / KTAs')
    .filter({ visible: true });

let discussionBoxCount = await discussionBoxes.count();

// STEP 10: Add Fund Rep only when no visible Fund Rep exists
if (discussionBoxCount === 0) {

    const addFundRep = page.getByText('Add Fund Rep', {
        exact: true
    }).first();

    await expect(addFundRep).toBeVisible();

    await addFundRep.click();

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

    expect(availableReps.length).toBeGreaterThan(0);

    await repDropdown.selectOption(availableReps[0], {
        force: true
    });

    // Wait until the newly added Discussion field becomes visible
    await expect(
        page.getByPlaceholder('Enter Discussion / KTAs')
            .filter({ visible: true })
            .first()
    ).toBeVisible();

} else {

    console.log('Visible existing Fund Rep found. Skipping Add Fund Rep.');
}

// STEP 11: Use the first visible Discussion / KTAs textbox
const discussionBox = page
    .getByPlaceholder('Enter Discussion / KTAs')
    .filter({ visible: true })
    .first();

await expect(discussionBox).toBeVisible();

// STEP 12: Enter unique Discussion Topic
await discussionBox.fill(discussionTopic);

await expect(discussionBox).toHaveValue(discussionTopic);
// STEP 13: Click Save on the Fund Rep row (opens the date/time modal)
await page.getByRole('button', {
    name: 'Save',
    exact: true
}).first().click();

// STEP 14 (removed - duplicate click, blocked by the modal)

// STEP 15: Verify date and time confirmation popup
const saveModal = page.getByRole('dialog');
await expect(
    saveModal.getByText('Saving item for the selected date and time')
).toBeVisible();

// STEP 16: Confirm Save inside the modal
await saveModal.getByRole('button', {
    name: 'Save',
    exact: true
}).click();
    // STEP 17: Verify successful save
    await expect(
        page.getByRole('heading', {
            name: 'Success!',
            exact: true
        })
    ).toBeVisible();

    // STEP 18: Close success popup
    await page.getByRole('button', {
        name: 'Okay',
        exact: true
    }).click();

    // STEP 19: Navigate to Activities
    await page.getByRole('link', {
        name: 'icon Activities'
    }).click();

    // STEP 20: Verify Activities page
    await expect(page).toHaveURL(/ActivitiesView/);

    await expect(
        page.getByRole('heading', {
            name: 'Activities',
            exact: true
        })
    ).toBeVisible();

    // STEP 21: Search for newly created Activity
    const activitySearch = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await activitySearch.fill(discussionTopic);
    await activitySearch.press('Enter');

    // STEP 22: Identify newly created Activity
    const createdActivity = page.getByText(discussionTopic, {
        exact: true
    });

    // STEP 23: Verify Activity is displayed
    await expect(createdActivity).toBeVisible({
        timeout: 20000
    });

    // STEP 24: Open Activity
    await createdActivity.click();

    // STEP 25: Verify Delete button
    const deleteButton = page.getByRole('button', {
        name: 'Delete',
        exact: true
    });

    await expect(deleteButton).toBeVisible();

    // STEP 26: Delete Activity
    await deleteButton.click();

    // STEP 27: Confirm deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!',
        exact: true
    }).click();

    // STEP 28: Verify Activity deletion
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