import {test, expect} from '@playwright/test'

const BASE_URL = process.env['BASE_URL']

test('should show title when init page', async ({page}) => {
  await page.goto(BASE_URL)
  const title = page.getByRole('heading')
  expect(title).toBeTruthy()
})
