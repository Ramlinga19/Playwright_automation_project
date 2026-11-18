
import { test, expect } from '@playwright/test';
test('Task creation', async ({ page }) => {

    // Generate unique Task Title
    const taskTitle = `Automation Testing ${Date.now()}`;

    // Login
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    await page.getByRole('textbox', { name: 'Enter your email' })
        .fill('ram@andesoft.com');

    await page.getByRole('textbox', { name: 'Enter your password' })
        .fill('testing');

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'icon' }).click();

    // Navigate to Tasks
    await page.getByRole('link', { name: 'icon Tasks' }).click();

    // Verify Tasks page
    await expect(
        page.getByRole('heading', { name: 'Tasks' })
    ).toBeVisible();

    // Create New Task
    await page.getByRole('button', { name: ' New Task' }).click();

    // Verify New Task form
    await expect(
        page.getByRole('heading', { name: 'New Task' })
    ).toBeVisible();


    // Enter Task Title
    await page.getByRole('textbox', { name: 'Enter Task Title' })
        .fill(taskTitle);
         // Select Fund Client
    await page.getByPlaceholder('Select Fund Client / Company')
        .click();

    await page.getByRole('option', {
        name: 'A Mehta - 360 ONE Mutual Fund'
    }).click();

    // Enter Task Note
    await page.locator('.rte-content')
        .fill('Automation testing discussion');

    // Save Task
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify Tasks listing page
await expect(page).toHaveURL(/TaskView/);

await expect(
    page.getByRole('heading', {
        name: 'Tasks',
        exact: true
    })
).toBeVisible();

 const searchBox = page.getByRole('searchbox', {
    name: 'Search...'
});
    await searchBox.fill(taskTitle);

    // Identify newly created Task
    const newTaskRow = page.getByRole('row').filter({
        hasText: taskTitle
    });

    // Verify Task exists
    await expect(newTaskRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newTaskRow).toBeVisible();

    // Verify saved information
    await expect(newTaskRow).toContainText(taskTitle);

    await expect(newTaskRow).toContainText(
    'A Mehta-360 ONE Mutual Fund'
);
    // Open the newly created Task
    await newTaskRow.click();

    // Verify Task details are opened
    await expect(
        page.getByRole('textbox', { name: 'Enter Task Title' })
    ).toHaveValue(taskTitle);

    // Delete the Task
    await page.getByRole('button', { name: 'Delete' }).click();

    // Confirm Task deletion
    await page.getByRole('button', { name: 'OK' }).click();

    // Verify Task is deleted from the listing
    await expect(newTaskRow).toHaveCount(0, {
        timeout: 15000
    });

});