import { test, expect } from '@playwright/test';

test('page load', async ({ page }) => {let research_title = 'page load ';
  await page.goto('https://iecrm.acpldev.com/LoginView/Index');
  //login page 
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('ram@andesoft.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('testing');
  await page.getByRole('button', { name: 'Sign In' }).click();
  //sales dashboard
  await expect(page.getByRole('link', { name: 'Sales Dashboard' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sales Dashboard' })).toBeVisible();

  await page.getByRole('button', { name: 'icon' }).click();
  //research dashboard
  await page.getByRole('link', { name: 'icon Research Dashboard' }).click();
  await page.goto('https://iecrm.acpldev.com/ResearchDashboardView');
  await page.getByLabel('breadcrumb').getByText('Research Dashboard').click();
  await expect(page.getByRole('heading', { name: 'Research Dashboard' })).toBeVisible();
  //corporate access dashboard
  await page.getByRole('link', { name: 'icon CA Dashboard' }).click();
  await expect(page.getByRole('heading', { name: 'Corporate Access Dashboard' })).toBeVisible();
 //DTP dashboard
  await page.getByRole('link', { name: 'icon DTP Dashboard' }).click();
  await expect(page.getByRole('heading', { name: 'DTP Research Dashboard' })).toBeVisible();
  // research tracker 
  await page.getByRole('link', { name: 'icon Research', exact: true }).click();
  await expect(page.getByRole('heading').getByText('Research', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Research', exact: true })).toBeVisible();
  //deals tracker
  await page.getByRole('link', { name: 'icon Deals' }).click();
  await expect(page.getByRole('heading').getByText('Deals')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Deals', exact: true })).toBeVisible();
 //ideas tracker
  await page.getByRole('link', { name: 'icon Ideas' }).click();
  await expect(page.getByRole('heading').getByText('Ideas')).toBeVisible();
  await page.getByRole('link', { name: 'Ideas', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Ideas', exact: true })).toBeVisible();
//client requests tracker
  await page.getByRole('link', { name: 'icon Client Requests' }).click();
  await expect(page.getByRole('heading', { name: 'Client Requests' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Client Requests', exact: true })).toBeVisible();
 // events page 
  await page.getByRole('link', { name: 'icon Events' }).click();
  await expect(page.getByRole('heading', { name: 'Events' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Events', exact: true })).toBeVisible();
 //roadshows page
  await page.getByRole('link', { name: 'icon Roadshows' }).click();
  await expect(page.getByRole('heading', { name: 'Roadshow -' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Roadshow', exact: true })).toBeVisible();
  //email page
   await page.getByRole('listitem').filter({ hasText: 'Email' }).click();
  await expect(page.getByRole('link', { name: 'Inbox', exact: true })).toBeVisible();
  //notifications page
  await page.getByRole('link', { name: 'icon Notifications' }).click();
  await expect(page.getByRole('heading', { name: 'Notifications' })).toBeVisible();
  await expect(page.getByLabel('breadcrumb').getByText('Notifications')).toBeVisible();
  //distribution hub page
  await page.getByRole('link', { name: 'icon Business Targets' }).click();
  await expect(page.getByRole('heading', { name: 'Business Targets' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Business Targets', exact: true })).toBeVisible();
  //activities page
  await page.getByRole('link', { name: 'icon Activities' }).click();
  await expect(page.getByRole('heading', { name: 'Activities' })).toBeVisible();
  await expect(page.getByLabel('breadcrumb').getByText('Activities')).toBeVisible();
  //tasks page
  await page.getByRole('link', { name: 'icon Tasks' }).click();
  await expect(page.getByRole('heading', { name: 'Tasks' })).toBeVisible();
  await expect(page.getByLabel('breadcrumb').getByRole('listitem').filter({ hasText: 'Tasks' })).toBeVisible();
  //service history page
  await page.getByRole('link', { name: 'icon Service History' }).click();
  await expect(page.getByRole('heading', { name: 'Service History' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Service History', exact: true })).toBeVisible();
  //research master page
  await page.getByRole('link', { name: 'icon Research Master' }).click();
  await expect(page.getByRole('heading', { name: 'Research Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Research Master', exact: true })).toBeVisible();
  //research history page
  await page.getByRole('link', { name: 'icon Research History' }).click();
  await expect(page.getByRole('heading', { name: 'Research History' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Research History', exact: true })).toBeVisible();
  //distribution hub page
  await page.getByRole('link', { name: 'icon Distribution Hub' }).click();
  await expect(page.getByRole('heading', { name: 'Distribution Hub' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Distribution Hub', exact: true })).toBeVisible();
  //distribution settings page
  await page.getByRole('link', { name: 'icon Distribution Settings' }).click();
  await expect(page.getByRole('heading', { name: 'Distribution Settings' })).toBeVisible();
  await expect(page.getByLabel('breadcrumb').getByText('Distribution Settings')).toBeVisible();
  //deal master page
  await page.getByRole('link', { name: 'icon Deal Master' }).click();
  await expect(page.getByRole('heading', { name: 'Deal Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Deal Master', exact: true })).toBeVisible();
  //idea master page
  await page.getByRole('link', { name: 'icon Idea Master' }).click();
  await expect(page.getByRole('heading', { name: 'Idea Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Idea Master', exact: true })).toBeVisible();
  //priority master page
  await page.getByRole('link', { name: 'icon Priority Master' }).click();
  await expect(page.getByRole('heading', { name: 'Priority Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Priority Master', exact: true })).toBeVisible();
  //funds master page
  await page.getByRole('link', { name: 'icon Funds' }).click();
  await expect(page.getByRole('heading', { name: 'Funds' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Funds', exact: true })).toBeVisible();
  //fund clients  master page
  await page.getByRole('link', { name: 'icon Fund Clients', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Fund Clients' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Fund Clients', exact: true })).toBeVisible();
  //companies master page
  await page.getByRole('link', { name: 'icon Companies' }).click();
  await expect(page.getByRole('heading', { name: 'Companies' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Companies', exact: true })).toBeVisible();
  //company executives master page
  await page.getByRole('link', { name: 'icon Company Executives' }).click();
  await expect(page.getByRole('heading', { name: 'Company Executives' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Company Executives', exact: true })).toBeVisible();
  //contact verification master page
  await page.getByRole('link', { name: 'icon Contact Verification' }).click();
  await expect(page.locator('.d-flex.justify-content-between.align-items-center.mb-3.card_header')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Verification', exact: true })).toBeVisible();
//user master page
  await page.getByRole('link', { name: 'icon User Master' }).click();
  await expect(page.getByRole('link', { name: 'User Master', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'User Master' })).toBeVisible();
  //fund type master page
  await page.getByRole('link', { name: 'icon Fund Type' }).click();
  await expect(page.getByRole('heading', { name: 'Fund Type' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Fund Type', exact: true })).toBeVisible();
//fund tier master page
  await page.getByRole('link', { name: 'icon Fund Tier' }).click();
  await expect(page.getByRole('heading', { name: 'Fund Tier' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Fund Tier', exact: true })).toBeVisible();
  //fund clients tier master page
  await page.getByRole('link', { name: 'icon Fund Clients Tier' }).click();
  await expect(page.getByRole('heading', { name: 'Fund Clients Tier' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Fund Clients Tier', exact: true })).toBeVisible();
  //company exec tier master page
  await page.getByRole('link', { name: 'icon Company Exec Tier' }).click();
  await expect(page.getByRole('heading', { name: 'Company Exec Tier' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Company Exec Tier', exact: true })).toBeVisible();
//role master page
  await page.getByRole('link', { name: 'icon Role Master' }).click();
  await expect(page.getByRole('heading', { name: 'Role Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Role Master', exact: true })).toBeVisible();
    //banker master page
  await page.getByRole('link', { name: 'icon Banker Master' }).click();
  await expect(page.getByRole('heading', { name: 'Banker Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Banker Master', exact: true })).toBeVisible();
  //sector master page
  await page.getByRole('link', { name: 'icon Sector Master' }).click();
  await expect(page.getByRole('heading', { name: 'Sector Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sector Master', exact: true })).toBeVisible();
  //industry master page
  await page.getByRole('link', { name: 'icon Industry Master' }).click();
  await expect(page.getByRole('heading', { name: 'Industry Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Industry Master', exact: true })).toBeVisible();
  //sales fund mapping master page
  await page.getByRole('link', { name: 'icon Sales Fund Mapping' }).click();
  await expect(page.getByRole('heading', { name: 'Sales - Fund Mapping' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sales - Fund Mapping' })).toBeVisible();
  //research type master page
  await page.getByRole('link', { name: 'icon Research Type' }).click();
  await expect(page.getByRole('heading', { name: 'Research Type' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Research Type', exact: true })).toBeVisible();
  //recommendation master page
  await page.getByRole('link', { name: 'icon Recommendation Master' }).click();
  await expect(page.getByRole('heading', { name: 'Recommendation Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Recommendation Master', exact: true })).toBeVisible();
  //performance target master page
  await page.getByRole('link', { name: 'icon Performance Target Master' }).click();
  await expect(page.getByRole('heading', { name: 'Performance Target Master' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Performance Target Master', exact: true })).toBeVisible();
  //performance target mapping master page
  await page.getByRole('link', { name: 'icon Performance Target Mapping' }).click();
  await expect(page.getByRole('heading', { name: 'Performance Target Mapping' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Performance Target Mapping', exact: true })).toBeVisible();
  //trades page
  await page.getByRole('link', { name: 'icon Trades' }).click();
  await expect(page.getByRole('heading', { name: 'Trades (LD)' })).toBeVisible();
  await expect(page.getByLabel('breadcrumb').getByText('Trades')).toBeVisible();
  //holdings page
  await page.getByRole('link', { name: 'icon Holdings' }).click();
  await page.goto('https://iecrm.acpldev.com/HoldingsView');
  await expect(page.getByRole('heading', { name: 'Holdings' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Holdings', exact: true })).toBeVisible();
  //ld master mapping page
  await page.getByRole('link', { name: 'icon LD / Holding Mapping' }).click();
  await expect(page.getByLabel('breadcrumb').getByText('LD Master Mapping')).toBeVisible();
  await expect(page.getByRole('tab', { name: 'LD Master Mapping' })).toBeVisible();
  //roles and permissions page
  await page.getByRole('link', { name: 'Roles and Permissions' }).click();
  await expect(page.getByRole('heading', { name: 'Roles and Permissions' })).toBeVisible();
  await page.getByLabel('breadcrumb').getByText('Roles and Permissions').click();
});

test('Activity creation', async ({ page }) => {
    // Generate unique meeting title
    const meetingTitle = `Automation Testing ${Date.now()}`;

    // Login
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    await page.getByRole('textbox', { name: 'Enter your email' })
        .fill('ram@andesoft.com');

    await page.getByRole('textbox', { name: 'Enter your password' })
        .fill('testing');

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'icon' }).click();

    // Navigate to Activities
    await page.getByRole('link', { name: 'icon Activities' }).click();

    await expect(
        page.getByRole('heading', { name: 'Activities' })
    ).toBeVisible();

    // Create New Activity
    await page.getByRole('button', { name: 'New Activity' }).click();

    await expect(
        page.getByRole('heading', { name: 'Activity' })
    ).toBeVisible();

    // Select Fund Client
    await page.getByPlaceholder('Select, or type 2+ characters').click();

    await page.getByRole('option', {
        name: 'A Mehta - 360 ONE Mutual Fund'
    }).click();

    // Enter Meeting Title
    await page.getByRole('textbox', { name: 'Enter Meeting Title' })
        .fill(meetingTitle);

    // Select Topic
    await page.getByLabel('Choose an option')
        .getByText('Choose an option').click();

    await page.getByRole('option', {
        name: 'Growth Capital – Summit'
    }).click();

    // Select Company
    await page.getByRole('combobox', { name: 'Choose an option' })
        .nth(1).click();

    await page.getByRole('option', {
        name: 'Microns Ltd'
    }).click();

    // Select Research
    await page.getByPlaceholder('Type to Search...').click();

    await page.getByRole('option', {
        name: 'Indian Defence Sector: Order'
    }).click();

    // Enter Discussion / KTA
    await page.locator('.rte-content').fill('Automation testing discussion');

    // Save Activity
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify successful creation notification
    await expect(
        page.getByRole('heading', {
            name: 'Activity created successfully!'
        })
    ).toBeVisible();

    // Wait for Activities listing page
await expect(page).toHaveURL(/ActivitiesView/);

// Verify Activities heading
await expect(
    page.getByRole('heading', { name: 'Activities' })
).toBeVisible();

// Search for the newly created Activity
const searchBox = page.getByRole('searchbox', {
    name: 'Search...'
});

await searchBox.fill(meetingTitle);

// Identify the matching row
const newActivityRow = page.getByRole('row').filter({
    hasText: meetingTitle
});

// Verify Activity exists
await expect(newActivityRow).toHaveCount(1, {
    timeout: 15000
});

// Verify Activity is visible
await expect(newActivityRow).toBeVisible();

// Verify saved information
await expect(newActivityRow).toContainText(
    'A Mehta-360 ONE Mutual Fund'
);

await expect(newActivityRow).toContainText(
    'Automation testing discussion'
);

await expect(newActivityRow).toContainText('Microns Ltd');
// Open the newly created Activity
await newActivityRow.click();

// Verify the Activity details are opened
await expect(
    page.getByRole('heading', { name: 'Activity' })
).toBeVisible();

// Verify the Meeting Title
await expect(
    page.getByRole('textbox', { name: 'Enter Meeting Title' })
).toHaveValue(meetingTitle);

// Delete the Activity
await page.getByRole('button', { name: 'Delete' }).click();

// Confirm Activity deletion
await page.getByRole('button', {
    name: 'Yes, delete it!'
}).click();

// Verify Activity is deleted
await expect(newActivityRow).toHaveCount(0, {
    timeout: 15000

});});


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

test('Research Master creation', async ({ page }) => {

    // Generate unique Research Title
    const researchTitle = `Automation Testing ${Date.now()}`;

    // Login
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    await page.getByRole('textbox', { name: 'Enter your email' })
        .fill('ram@andesoft.com');

    await page.getByRole('textbox', { name: 'Enter your password' })
        .fill('testing');

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'icon' }).click();

    // Navigate to Research Master
    await page.getByRole('link', {
        name: 'icon Research Master'
    }).click();

    // Verify Research Master page
    await expect(
        page.getByRole('heading', {
            name: 'Research Master',
            exact: true
        })
    ).toBeVisible();

    // Verify Add Research button
    await expect(
        page.getByRole('button', { name: ' Add Research' })
    ).toBeVisible();

    // Click Add Research
    await page.getByRole('button', {
        name: ' Add Research'
    }).click();

    // Verify Add Research form
    await expect(
        page.getByRole('heading', { name: 'Add Research' })
    ).toBeVisible();

    // Select Research Type
    await page.locator('#select2-CategorySelect-container')
        .getByText('Choose an option').click();

    await page.getByRole('option', {
        name: 'Annual Report - AR'
    }).click();

    // Select Sector
    await page.locator('section')
        .filter({ hasText: 'Research Type Annual Report' })
        .getByPlaceholder('Type to Search...')
        .click();

    await page.getByRole('option', {
        name: 'Agri inputs'
    }).click();

    // Enter Research Title
    await page.getByRole('textbox', { name: 'Enter Title' })
        .fill(researchTitle);

    // Select Mail From
    await page.locator('#select2-idmailfrom-container')
        .getByText('Choose an option').click();

    await page.getByRole('option', {
        name: 'Lead Author'
    }).click();

    // Select Recommendation
    await page.locator('#select2-idrecommendation-container')
        .getByText('Choose an option').click();

    await page.getByRole('option', {
        name: 'Downgrade to Neutral'
    }).click();

    // Save Research
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify Research Master listing page
    await expect(page).toHaveURL(/ResearchMasterView/);

    await expect(
        page.getByRole('heading', {
            name: 'Research Master',
            exact: true
        })
    ).toBeVisible();

    // Search for newly created Research
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(researchTitle);

    // Identify newly created Research
    const newResearchRow = page.getByRole('row').filter({
        hasText: researchTitle
    });

    // Verify Research exists
    await expect(newResearchRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newResearchRow).toBeVisible();

    // Verify saved information
    await expect(newResearchRow).toContainText(researchTitle);

    await expect(newResearchRow).toContainText(
        'Annual Report - AR'
    );

    await expect(newResearchRow).toContainText('Agri inputs');

    // Open the newly created Research
    await newResearchRow.getByRole('cell').filter({
        hasText: researchTitle
    }).click();

    // Verify Delete button is available
    await expect(
        page.getByRole('button', { name: 'Delete' })
    ).toBeVisible();

    // Delete Research
    await page.getByRole('button', { name: 'Delete' }).click();

    // Confirm Research deletion
    await page.getByRole('button', { name: 'Delete' }).click();

    // Verify Research is deleted from listing
    await expect(newResearchRow).toHaveCount(0, {
        timeout: 15000
    });

});

test('Deal Master creation', async ({ page }) => {

    // Generate unique Deal Title
    const dealTitle = `Automation Testing ${Date.now()}`;

    // Login
    await page.goto('https://iecrm.acpldev.com/LoginView/Index');

    await page.getByRole('textbox', { name: 'Enter your email' })
        .fill('ram@andesoft.com');

    await page.getByRole('textbox', { name: 'Enter your password' })
        .fill('testing');

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'icon' }).click();

    // Navigate to Deal Master
    await page.getByRole('link', { name: 'icon Deal Master' }).click();

    // Verify Deal Master page
    await expect(
        page.getByRole('link', {
            name: 'Deal Master',
            exact: true
        })
    ).toBeVisible();

    await expect(
        page.getByRole('heading', {
            name: 'Deal Master',
            exact: true
        })
    ).toBeVisible();

    // Verify New Deal button
    await expect(
        page.getByRole('button', { name: ' New Deal' })
    ).toBeVisible();

    // Create New Deal
    await page.getByRole('button', { name: ' New Deal' }).click();

    // Verify New Deal form
    await expect(
        page.getByRole('heading', { name: 'New Deal' })
    ).toBeVisible();

    // Enter Deal Title
    await page.getByRole('textbox', { name: 'Title*' })
        .fill(dealTitle);

    // Open More Information
    await page.getByRole('button', {
        name: 'More information'
    }).click();

    // Enter Filing Valuation
    await page.getByRole('textbox', { name: 'Filing Valuation' })
        .fill('₹ 2000');

    // Enter Tentative Valuation
    await page.getByRole('textbox', { name: 'Tentative Valuation' })
        .fill('₹ 5000');

    // Enter Sales Deal Leader
    await page.getByRole('textbox', { name: 'Sales Deal Leader' })
        .fill('rama');

    // Enter Approx Size
    await page.getByRole('textbox', { name: 'Approx Size (₹ Cr)' })
        .fill('₹ 250');

    // Enter OFS
    await page.getByRole('textbox', { name: 'OFS' })
        .fill('₹ 250');

    // Enter Fresh
    await page.getByRole('textbox', { name: 'Fresh' })
        .fill('₹ 250');

    // Enter Deal Description
    await page.locator('.rte-content')
        .fill('Automation testing discussion');

    // Save Deal
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify Deal Master listing page
    await expect(page).toHaveURL(/DealMasterView/);

    await expect(
        page.getByRole('heading', {
            name: 'Deal Master',
            exact: true
        })
    ).toBeVisible();

    // Search for newly created Deal
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(dealTitle);

    // Identify newly created Deal
    const newDealRow = page.getByRole('row').filter({
        hasText: dealTitle
    });

    // Verify Deal exists
    await expect(newDealRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newDealRow).toBeVisible();

    // Verify saved Deal Title
    await expect(newDealRow).toContainText(dealTitle);

    // Open the newly created Deal
    await newDealRow.getByRole('cell', {
        name: dealTitle,
        exact: true
    }).click();

    // Verify opened Deal using its Title
    await expect(
        page.getByRole('textbox', { name: 'Title*' })
    ).toHaveValue(dealTitle);

    // Delete Deal
    await page.getByRole('button', { name: 'Delete' }).click();

    // Confirm Deal deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();

    // Verify Deal is deleted from listing
    await expect(newDealRow).toHaveCount(0, {
        timeout: 15000
    });

});

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

test('Distribution Hub creation', async ({ page }) => {

    // Generate unique Research Title
    const researchTitle = `Automation DH Testing ${Date.now()}`;

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

    // Step 2: Navigate to Distribution Hub
    await page.getByRole('link', {
        name: 'icon Distribution Hub'
    }).click();

    // Step 3: Verify Distribution Hub page
    await expect(
        page.getByRole('heading', {
            name: 'Distribution Hub',
            exact: true
        })
    ).toBeVisible();

    await expect(
        page.getByRole('link', {
            name: 'Distribution Hub',
            exact: true
        })
    ).toBeVisible();

    // Step 4: Verify Add New Distribution button
    await expect(
        page.getByRole('button', {
            name: ' Add New Distribution'
        })
    ).toBeVisible();

    // Step 5: Open Add New Distribution
    await page.getByRole('button', {
        name: ' Add New Distribution'
    }).click();

    // Step 6: Select Research Type
    await page.locator('#select2-CategorySelect-container').click();

    await page.getByRole('option', {
        name: 'Annual Report - AR'
    }).click();

    // Step 7: Verify Create form
    await expect(
        page.getByText('Create', {
            exact: true
        })
    ).toBeVisible();

    // Step 8: Select Sector
    await page.getByRole('searchbox', {
        name: 'Search'
    }).first().click();

    await page.getByRole('option', {
        name: 'Agri inputs'
    }).click();

    // Step 9: Enter Research Title
    await page.getByRole('textbox', {
        name: 'Enter Research Title / Subject'
    }).fill(researchTitle);

    // Step 10: Save Distribution
    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    // Step 11: Navigate back to Distribution Hub listing
    await page.getByRole('link', {
        name: 'icon Distribution Hub'
    }).click();

    await expect(page).toHaveURL(/DistributionHubView/);

    // Step 12: Verify Distribution Hub listing
    await expect(
        page.getByRole('heading', {
            name: 'Distribution Hub',
            exact: true
        })
    ).toBeVisible();

    // Step 13: Search for newly created Distribution
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(researchTitle);

    // Step 14: Identify newly created Distribution
    const newDistributionRow = page.getByRole('row').filter({
        hasText: researchTitle
    });

    // Step 15: Verify Distribution exists
    await expect(newDistributionRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newDistributionRow).toBeVisible();

    // Step 16: Verify saved Research Title
    await expect(newDistributionRow).toContainText(researchTitle);

    // Step 17: Open the same Distribution
    await newDistributionRow.getByText(researchTitle, {
        exact: true
    }).click();

    // Step 18: Verify Distribution edit page
    await expect(page).toHaveURL(/DistributionHubView\/Edit/);

    // Step 19: Verify Research Title
    await expect(
        page.getByRole('textbox', {
            name: 'Enter Research Title / Subject'
        })
    ).toHaveValue(researchTitle);

    // Step 20: Delete Distribution
    await page.getByRole('button', {
        name: 'Delete',
        exact: true
    }).click();

    // Step 21: Confirm deletion
    await page.getByRole('button', {
        name: 'Delete',
        exact: true
    }).click();

    // Step 22: Verify Distribution is deleted
    await expect(page).toHaveURL(/DistributionHubView/);

    await expect(newDistributionRow).toHaveCount(0, {
        timeout: 15000
    });

});

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

test('Fund Clients creation', async ({ page }) => {

    // Generate unique First Name
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

    // Step 3: Navigate to Fund Clients
    await page.getByRole('link', {
        name: 'icon Fund Clients',
        exact: true
    }).click();

    // Step 4: Verify Fund Clients page
    await expect(page).toHaveURL(/FundManagersView/);

    await expect(
        page.getByRole('heading', {
            name: 'Fund Clients'
        })
    ).toBeVisible();

    // Step 5: Verify Create Fund Clients button
    const createButton = page.getByRole('button', {
        name: ' Create Fund Clients'
    });

    await expect(createButton).toBeVisible();

    // Step 6: Open Add Fund Client form
    await createButton.click();

    await expect(
        page.getByRole('heading', {
            name: 'Add Fund Client'
        })
    ).toBeVisible();

    // Step 7: Enter First Name
    await page.getByRole('textbox', {
        name: 'First Name'
    }).fill(firstName);

    // Step 8: Select Fund
    await page.locator('#select2-IdFund-container').click();

    await page.getByRole('option', {
        name: 'ONE Mutual Fund'
    }).click();

    // Step 9: Select RM Name
    await page.getByRole('textbox', {
        name: 'Aaditya Shroff'
    }).click();

    await page.getByRole('option', {
        name: 'Aaditya Shroff'
    }).click();

    // Step 10: Save Fund Client
    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    // Step 11: Verify Fund Clients listing page
    await expect(page).toHaveURL(/FundManagersView/);

    await expect(
        page.getByRole('heading', {
            name: 'Fund Clients'
        })
    ).toBeVisible();

    // Step 12: Search for newly created Fund Client
    const searchBox = page.getByRole('searchbox', {
        name: 'Search...'
    });

    await searchBox.fill(firstName);

    await page.getByRole('button', {
        name: 'Search',
        exact: true
    }).click();

    // Step 13: Identify newly created Fund Client
    const newFundClientRow = page.getByRole('row').filter({
        hasText: firstName
    });

    // Step 14: Verify Fund Client exists
    await expect(newFundClientRow).toHaveCount(1, {
        timeout: 15000
    });

    await expect(newFundClientRow).toBeVisible();

    // Step 15: Verify saved First Name
    await expect(newFundClientRow).toContainText(firstName);

// Step 16: Click the visible First Name
await newFundClientRow.locator('span.text_clip').click();

    // Step 17: Verify opened Fund Client details
    const firstNameTextbox = page.getByRole('textbox', {
        name: 'First Name'
    });

    await expect(firstNameTextbox).toBeVisible({
        timeout: 10000
    });

    await expect(firstNameTextbox).toHaveValue(firstName);

    // Step 18: Delete Fund Client
    await page.getByRole('button', {
        name: 'Delete',
        exact: true
    }).click();

    // Step 19: Confirm deletion
    await page.getByRole('button', {
        name: 'Yes, delete it!'
    }).click();

    // Step 20: Verify return to Fund Clients listing
    await expect(page).toHaveURL(/FundManagersView/);

    await expect(
        page.getByRole('heading', {
            name: 'Fund Clients'
        })
    ).toBeVisible();

    // Step 21: Search for deleted Fund Client
    await searchBox.fill(firstName);

    await page.getByRole('button', {
        name: 'Search',
        exact: true
    }).click();

    // Step 22: Verify Fund Client is deleted
    await expect(newFundClientRow).toHaveCount(0, {
        timeout: 15000
    });

});


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