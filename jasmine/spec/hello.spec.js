describe("Matcher examples", function() {
	it("demonstration of toBe()", function() {
		expect(12).toEqual(12);
		expect("12").not.toBe(12);
	});
	it("demonstrates toBeCloseTo()", function() {
		expect(2.00).toBeCloseTo(2.01, 1);
		expect(2.00).not.toBeCloseTo(2.01, 2);
		expect(2.23326).toBeCloseTo(2.23324, 4);
		expect(2.23326).not.toBeCloseTo(2.23324, 5);

		// defaults to 2
		expect(3.00).not.toBeCloseTo(3.01);
		expect(3.000).toBeCloseTo(3.001);
	});	

	it("demonstrates toContain()", function() {
		expect(hello()).toContain("Skillsoft");
		expect([2,4,6,8,]).toContain(4);
		expect(["A", "simple", "test"]).toContain("test");
	});
	it("demonstrates toBeGreaterThan()", function() {
		expect(10).toBeGreaterThan(9);
		expect(4).not.toBeGreaterThan(5);
	});
	it("demonstrates toBeLessThan()", function() {
		expect(7).toBeLessThan(9);
		expect(7).not.toBeLessThan(5);
	});
	it("demonstrates toBeNull()", function() {
		expect(null).toBeNull();
		expect(undefined).not.toBeNull();
		expect("").not.toBeNull();
	});
	it("demonstrates toEqual()", function() {
		expect(9).toEqual(9);
		expect([1,2,3]).toEqual([1,2,3]);
	});
});