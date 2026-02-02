import react from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
    test("render Hero Img" , () => {
        render(<Hero/>);
        const heroImg = screen.getByAltText("Hero");
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute('src' , 'media/homeHero.png');
    })
});