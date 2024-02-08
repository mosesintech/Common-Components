# Common Components

This repo is a collection of components commonly reused in other projects. This will also act as a single source of truth for latest UI and design trends.

## Demo

To see the demo on your own machine, simply run `npm run dev`.

You should see a toggle button that will switch between Tailwind components and pure CSS components. Ideally, they should look identical.

## The Components

Tailwind is my prefered styling method, but sometimes I'll need to work on projects using regular CSS. Because of this, each component is created twice: once with Tailwind styles and once with pure CSS.

### Card & GlassCard

A very common feature in most websites is the Card.

This is basically a rectangle, usually with a header, an image, some text, and often a link. This is used for thinks like featured links, blog post excerpts in an archive, and other list-like collections (such as for team members).

Here are two options: a simple Card component and a Glassmorphic Card component.

## Library & Utilities

### Vanilla Tilt

This library adds a tilting effect when a user mouses over a component. `/src/lib/Tilt.tsx` is our React wrapper for Vanilla Tilt. For those components that may use it (like`<Card />`), it is imported and a boolean `tilt` is added to their props.