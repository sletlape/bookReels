import { render, screen } from "@testing-library/react-native";
import Streak from "../components/Streak";

describe("Streak", () => {
  it("renders the reading streak", () => {
    render(<Streak />);
    expect(screen.getByText("Reading Streak")).toBeTruthy();
    expect(screen.getByText("15 days")).toBeTruthy();
  });
});
