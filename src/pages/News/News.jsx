import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogPosts } from "../../data/blog";

import "./News.css";

function News() {
  return (
    <section class="news-page section-padding">
      <div class="page-container">
        <div class="news-page__hero">
          <SectionTitle
            label="Novedades"
            title="Consejos de estilo y tendencias"
            description="Ideas para elegir, combinar y cuidar tus carteras, bolsos, mochilas y accesorios."
            center
          />
        </div>

        <div class="news-page__grid">
          <For each={blogPosts}>
            {(post) => <BlogCard post={post} />}
          </For>
        </div>
      </div>
    </section>
  );
}

export default News;