import { browser } from '@wdio/globals'
import { Given, When, Then } from '@cucumber/cucumber'

Given('I open the Calculator app', async () => {
    await browser.pause(1000)
    await browser.activateApp('com.sec.android.app.popupcalculator')
    await browser.pause(1000)
})

// ADDITION
When('I add {int} and {int}', async (a: number, b: number) => {
    await $('//android.widget.Button[@content-desc="9"]').click()
    await $('//android.widget.Button[@content-desc="Plus"]').click()
    await $(`//android.widget.Button[@content-desc='8']`).click()
    await $('//android.widget.Button[@content-desc="Calculation"]').click()
     await browser.pause(10000)
})

// SUBTRACTION
When('I subtract {int} and {int}', async (a: number, b: number) => {
    await $('//android.widget.Button[@content-desc="9"]').click()
    
    await $('//android.widget.Button[@content-desc="Minus"]').click()
    await $(`//android.widget.Button[@content-desc='8']`).click()
   
    await $('//android.widget.Button[@content-desc="Calculation"]').click()
     await browser.pause(1000)

})

// MULTIPLICATION
When('I multiply {int} and {int}', async (a: number, b: number) => {
    await $('//android.widget.Button[@content-desc="9"]').click()
    
    await $('//android.widget.Button[@content-desc="Multiplication"]').click()
    await $(`//android.widget.Button[@content-desc='8']`).click()
   
    await $('//android.widget.Button[@content-desc="Calculation"]').click()
     await browser.pause(1000)

})

Then('the result should be {string}', async (expected: string) => {
    await browser.pause(1000)
    const result = await $('//android.widget.TextView[@content-desc="Result preview"]').getText()
    expect(result).toBe(expected)
    await browser.pause(10000)
})
const { AfterAll } = require('@cucumber/cucumber');

AfterAll(async function() {
    if (browser && browser.sessionId) {
        await browser.deleteSession();
    }
    
    // Wait 20 seconds after deletion
    await new Promise(resolve => setTimeout(resolve, 20000));
});