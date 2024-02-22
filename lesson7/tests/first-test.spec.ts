import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
    await page.goto('https://uk.wikipedia.org/');
    await page.getByPlaceholder('Пошук у Вікіпедії').click();
    await page.getByPlaceholder('Пошук у Вікіпедії').fill('Messi');
    await page.getByPlaceholder('Пошук у Вікіпедії').press('Enter');
    await page.getByRole('cell', { name: 'Ліонель Мессі Ліоне́ль Андре́с Ме́ссі Куччитті́ні (ісп. Lionel Andrés Messi' }).getByRole('link').click();
});

  test('test2', async ({ page }) => {
    await page.goto('https://uk.wikipedia.org/');
    await page.getByPlaceholder('Пошук у Вікіпедії').click();
    await page.getByPlaceholder('Пошук у Вікіпедії').fill('Ronaldo');
    await page.getByPlaceholder('Пошук у Вікіпедії').press('Enter');
    await page.getByRole('cell', {name: 'Кріштіа́ну Рона́лду душ Са́нтуш Аве́йру'}).getByRole ('link').click();
});

test('test3', async ({ page }) => {
    await page.goto('https://hotline.ua/');
    await page.getByPlaceholder('Знайти товар, магазин, бренд').click();
    await page.getByPlaceholder('Знайти товар, магазин, бренд').fill('Iphone');
    await page.getByPlaceholder('Знайти товар, магазин, бренд').press('Enter');
});

test('test4', async ({ page }) => {
    await page.goto('https://vagar.com.ua/');
    await page.getByRole('link', { name: 'Продукція' }).click();
    await page.getByRole('link', {name: 'Кранові ваги', exact: true}).click();
    await page.getByRole('link', { name: 'Кранові ваги ВК ЗЕВС ІІ-1000', exact: true }).click();
});

test('test5', async ({ page }) => {
    await page.goto('https://novaposhta.ua/');
    await page.locator('#popup_info').getByText('закрыть').click();
    await page.getByRole('link', { name: 'Відділення', exact: true }).click();
    await page.getByRole('link', { name: 'Пошук відділення за номером або за населеним пунктом' }).click();
    await page.click('input[placeholder="Оберіть насел. пункт"]');
    await page.getByPlaceholder('Оберіть насел. пункт').fill('Бровари');
});