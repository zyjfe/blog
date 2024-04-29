import type { Metadata } from "next";
import { Counter } from "../components/counter/Counter";

export const metadata: Metadata = {
  title: "Redux Toolkit",
};

export default function IndexPage() {
  return <Counter/>;
}
