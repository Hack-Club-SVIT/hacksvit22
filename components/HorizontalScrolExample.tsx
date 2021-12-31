import Card from "./Card";
import useHorizontalScroll from "../utils/useHorizontalScroll";
import React, { useRef } from "react";

export default function HorizontalScrollExample() {
  const ref = useRef<HTMLDivElement>(null);
  useHorizontalScroll(ref);

  return (
    <div className="flex overflow-x-scroll overflow-y-hidden h-1/2" ref={ref}>
      <Card title="1" />
      <Card title="2" />
      <Card title="3" />
      <Card title="4" />
      <Card title="5" />
      <Card title="6" />
      <Card title="7" />
      <Card title="8" />
      <Card title="9" />
      <Card title="10" />
      <Card title="11" />
      <Card title="12" />
      <Card title="13" />
      <Card title="14" />
      <Card title="15" />
    </div>
  );
}
