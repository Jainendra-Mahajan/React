import { sum } from "../sum";

test("Sum of two Number", () => { 
    
    const result = sum(3 , 7);
    
    //Assertion
    expect(result).toBe(10)
 });