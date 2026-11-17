import { test, expect } from '@playwright/test';    

test('dis', async ({ page }) => {
        let research_title = 'test research by andesoft';
  await page.goto('https://iecrm.acpldev.com/LoginView/Index');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('ram@andesoft.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('testing');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'icon' }).click();
  await page.getByRole('link', { name: 'icon Distribution Hub' }).click();
  await page.getByRole('button', { name: ' Add New Distribution' }).click();
  await page.locator('#select2-CategorySelect-container').getByText('Choose an option').click();
  await page.getByRole('option', { name: 'Annual Report - AR' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).first().click();
  await page.getByRole('option', { name: 'Agrochemicals & Seeds' }).click();
  await page.getByRole('textbox', { name: 'Enter Research Title / Subject' }).fill(research_title);
  await page.locator('#select2-idcompgrp-container').getByText('Choose an option').click();
  await page.getByRole('option', { name: '3i Infotech Ltd' }).click();
  await page.getByRole('textbox', { name: 'Enter CMP' }).fill('₹ 20');
  await page.getByRole('textbox', { name: 'Enter Target Price' }).fill('₹ 20');
  await page.locator('#marketCapINRInput').fill('₹ 20.35bn');
  await page.locator('#marketCapUSDInput').fill('$ 20.2bn');
 await page.locator('.rte-content').first().click();
  await page.locator('.rte-content').first().click();
  await page.locator('.rte-content').first().fill('Summary: Weak quarter; ~40% rainfall deficit and one of the shortest sowing windows disrupted Kharif, hitting Karnataka, Andhra Pradesh and Telangana hardest — Karnataka alone was ~25–30% of FY26 sales. Non-cotton revenue fell 17% to Rs6Bn; cotton was broadly flat at Rs2.1Bn (-2.5%). EBITDA margin held at ~35%, as production costs fell 4–5% against realizations down 2–3%.\nWhat drove the miss:  Maize accounted for ~79% of the revenue decline (Rs1.4Bn, -43%; volumes -39%, implying ~6% lower realizations), followed by hybrid rice (Rs2.5Bn, -12%). Selection rice was flat, while vegetables declined 18%. With national maize/cotton acreage down only 3.8%/0.4%, the shortfall was largely mix-driven rather than market-led.\nExecution gap: Kaveri missed growth in Madhya Pradesh due to a lack of suitable hybrids and also underperformed in Maharashtra and Bihar, partly offset by growth in Rajasthan. Management attributed the divergence versus peers such as Bayer/Advanta to its southern Kharif concentration; unlike weather-led weakness, this gap requires portfolio and geographic execution to improve.\nGuidance/Outlook: Remaining three quarters should exceed last year, narrowing the FY27 decline. Karnataka could recoup Rs400–600Mn in Q2/Q3, while lost Kharif sales elsewhere are unlikely to return. Rabi should be the key support, aided by higher maize prices and its larger H2 contribution. Medium term ambition of 15–18% growth remains intact.\n\nOur view\n\nWhile Q1 was a weak, it reflects Kaveri\'s southern Kharif concentration, product mix, and sowing timing rather than a contraction in its addressable market. Through a poor Kharif, new hybrids gained share within every major crop: new cotton products now at 37% of cotton sales, new single-cross maize hybrids >20% of maize, new bajra hybrids 65% of volumes, and the two hybrid paddy launches, KRH7344/KRH7227, delivering 62% of new-product sales in their first season. That mix shift is has moved in the right direction in the worst possible conditions.\nKSCL continues to work on reducing its BT cotton dependence (25% of revs in Q1FY26 vs 60% in FY20) through accelerated growth in other crops like maize, hybrid paddy etc. Higher yields and slightly lower production costs are expected to support margins, even if near-term price increases are limited.\nSeeds remains, in our view, the superior agri-input business: asset-light, R&D-driven, with high entry barriers and strong FCF, against the asset-heavy, government-interlinked agrochem/fertiliser complex. KSCL is among the most competent listed players on portfolio breadth and research depth, and the balance sheet remains unlevered.\nWe trim FY27E/FY28E EPS by 29%/24% for the Q1 shortfall. However, we see the FY27 reset as cyclical and largely priced, with the earnings case intact into FY28. Maintain BUY with a TP of Rs 871 (14x FY28E EPS).');
    await page.getByRole('button', { name: 'Send Now' }).click();
    //await.page .waitForTimeout(10000); // Wait for 2 seconds to ensure the page has loaded
    //await page.waitForTimeout(5* 60 * 1000);
   await expect(page.getByText(reserach_title)).toBeVisible();
  await expect(page.getByText('Released:')).toBeVisible();

  await page.goto('https://iecrm.acpldev.com/DistributionHubView');
});