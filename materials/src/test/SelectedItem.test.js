import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SelectedItem from "../components/SelectedItem";

Enzyme.configure({ adapter: new Adapter() });

describe("SelectedItem", () => {
  it("renders a list of items", () => {
    const items = [
      { id: 1, name: "Item 1", volume: 10, color: "red" },
      { id: 2, name: "Item 2", volume: 20, color: "blue" },
      { id: 3, name: "Item 3", volume: 30, color: "green" },
    ];
    const onUpdate = jest.fn();
    const wrapper = shallow(<SelectedItem items={items} onUpdate={onUpdate} />);
    expect(wrapper.find(".list-container").length).toEqual(items.length);
  });
});

/*
In this test, we first import Enzyme and the Adapter for React 16, 
and then we configure Enzyme to use the adapter. We then use shallow 
to create a wrapper around the SelectedItem component, and we check if 
the number of .list-container elements in the wrapper matches the length 
of the items array passed to the component as props. 
Finally, we use Jest's toEqual method to compare the two values.
*/