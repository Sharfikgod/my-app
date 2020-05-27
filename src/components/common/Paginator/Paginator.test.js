import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator cpmponent tests", () => {
    test("pages count is 11 but must be only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        instance.deactivateEditMode();
        expect(spans.length).toBe(10);
      });

      test("if pages count is more then 10 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let button = root.findAllByType("button");
        instance.deactivateEditMode();
        expect(button.length).toBe(1);
      });
})