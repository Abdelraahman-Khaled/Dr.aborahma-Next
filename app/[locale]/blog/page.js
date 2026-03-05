import React from "react";
import BlogPreloader from "./components/BlogPreloader";
import BlogHeader from "./components/BlogHeader";
import BlogHeaderX from "./components/BlogHeaderX";
import BlogMainSection from "./components/BlogMainSection";
import BlogFooter from "./components/BlogFooter";
import WowReinit from "../components/WowReinit";

export default function BlogHtml() {
  return (
    <React.Fragment>
      <WowReinit />
      <BlogPreloader />
      <BlogHeader />
      <BlogHeaderX />
      <BlogMainSection />
    </React.Fragment>
  );
}
