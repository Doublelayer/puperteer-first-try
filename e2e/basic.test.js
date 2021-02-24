beforeAll(async () => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
});

test("first test", async () => {
    await expect("0").toBe("0");
})