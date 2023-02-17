import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import InputPanel from "../components/InputPanel";
import Name from "../components/Name";
import Volume from "../components/Volume";
import Delivery from "../components/Delivery";
import Color from "../components/Color";
import Cost from "../components/Cost";

Enzyme.configure({ adapter: new Adapter() });

describe("InputPanel", () => {
  const props = {
    name: "Test Item",
    volume: 20,
    delivery: "2-3 days",
    color: "#ff0000",
    cost: 100,
    onChange: jest.fn(),
    onVolumeChange: jest.fn(),
    onDeliveryChange: jest.fn(),
    onColorChange: jest.fn(),
    onCostChange: jest.fn(),
  };

  it("renders a name input", () => {
    const wrapper = shallow(<InputPanel {...props} />);
    expect(wrapper.find(Name).length).toEqual(1);
  });

  it("renders a volume input", () => {
    const wrapper = shallow(<InputPanel {...props} />);
    expect(wrapper.find(Volume).length).toEqual(1);
  });

  it("renders a delivery input", () => {
    const wrapper = shallow(<InputPanel {...props} />);
    expect(wrapper.find(Delivery).length).toEqual(1);
  });

  it("renders a color input", () => {
    const wrapper = shallow(<InputPanel {...props} />);
    expect(wrapper.find(Color).length).toEqual(1);
  });

  it("renders a cost input", () => {
    const wrapper = shallow(<InputPanel {...props} />);
    expect(wrapper.find(Cost).length).toEqual(1);
  });
});

/*
In this test, we first import Enzyme and the Adapter for React 16, 
and then we configure Enzyme to use the adapter. We define a set of 
props for the component, and then we create a wrapper around the 
InputPanel component using shallow. We then use expect and Enzyme's 
find method to check if the wrapper contains the expected 
subcomponents (Name, Volume, Delivery, Color, and Cost) by verifying 
that their length equals 1. 
Finally, we use Jest's toEqual method to compare the two values. 
*/
