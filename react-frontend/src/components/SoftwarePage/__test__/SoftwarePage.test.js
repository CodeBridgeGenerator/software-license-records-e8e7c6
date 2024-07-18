import React from "react";
import { render, screen } from "@testing-library/react";

import SoftwarePage from "../SoftwarePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders software page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SoftwarePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("software-datatable")).toBeInTheDocument();
    expect(screen.getByRole("software-add-button")).toBeInTheDocument();
});
