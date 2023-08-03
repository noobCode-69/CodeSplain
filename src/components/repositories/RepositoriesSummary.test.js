import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("expect the repo main language to be present", () => {
  const repository = {
    language: "Javascript",
    stargazers_count: 5,
    forks: 30,
    open_issues: 20,
  };
  render(<RepositoriesSummary repository={repository} />);
  const language = screen.getByText("Javascript");
  expect(language).toBeInTheDocument();
});
