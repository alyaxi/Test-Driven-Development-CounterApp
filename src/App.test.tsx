import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Counter from "./Counter"

describe("App", () => {

	let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>; 
	beforeEach(() => {
	   wrapper = shallow(<Counter />);
		
	})
	it("should render a <div />", () => {
		expect(wrapper.find("div").length).toEqual(1);
});
	it("should render a h1 element",() => {
		expect(wrapper.find("h2").text()).toContain("Counter App")
	})
	
	it("should be a button with increament ", () => {
	
		expect(wrapper.find("#btn-increament").text()).toBe("Increament")
	})
	it("should be a rendered value" , () => {
		expect(wrapper.find("#counter-text").text()).toBe("0")
	})
	it("render value of increament button",()=>{
		wrapper.find("#btn-increament").simulate("click")
		expect(wrapper.find("#counter-text").text()).toBe("1")
	})
	it("render value of Decreament button",()=>{
		wrapper.find("#btn-increament").simulate("click")
		expect(wrapper.find("#counter-text").text()).toBe("1")
		wrapper.find("#btn-decreament").simulate("click")
		expect(wrapper.find("#counter-text").text()).toBe("0")
	})
});