---
title: 'How I UI'
date: 2025-08-03
tags: ['post']
excerpt: 'A very loose process I mostly follow...'
---

<hgroup>
	<h1>How I UI</h1>
	<p>A very loose process I mostly follow...</p>
</hgroup>

## Make sure I understand the requirements.

Ask questions as needed.

## Prototype first

Go straight to code.  I often work with UX folks in this fashion and it creates a fast iteration loop before finalizing a design.  We get an early look at edge cases we may not have thought of and can use the prototype as an early preview for other stakeholders.  If possible I introduce ephemeral PR deployments to ease this process.

## Identify the tricky "what if the user does crazy thing x?" issues by using the prototype.

Make a list of all the edge cases I can find because I'll forget about them once I am basking in how great it works on my machine.

## Choose the right tools, packages, and libs.  Be prepared to change these choices.

I may hate all of these choices later so I attempt to simplify and wrap their usage where I can.  I'm not "all-in" on any library ever.

## Build a first pass with just the overall layout

I build out the basic grid structure of the application.  Call it pages or containers or whatever, this helps in a few ways.  I can see where things should live both visually and in the codebase.  This gives me a look at some responsive issues I may want to consider later and also informs the organization of files within the project.

## Build an api client.

I have no desire to remember complicated endpoints.  So I always do this if there is no api client already in place.  Fetching data from within a component is sometimes necessary, but it should not feel like you're wrestling with promises alongside having to hard code urls everywhere.  I want `getTheData()` - so I make that along with easy-to-understand instructions for adding more endpoints.

## Structure a state management system that does not require a degree in immutability.

"Fear of touching the architecture" is a huge problem in web development.  I wanted to avoid this by making sure with a few simple rules the state management could be understood and approachable.  The majority of components should not concern themselves with an "is it loading or did it fail?".  As an engineer if I am writing a simple component it is disheartening to find that every small change can potentially break the state in some way that I don't understand and seems unrelated.

## Find the common code

Now I code for each primary area of the application without concern for modularizing everything.  Just get it working using the structure in place and tools I have chosen.  From this process I can identify the commonality between these areas and convert those into common components or utilities.  I can also revisit my tool choices if needed.

## MVP and iteration

At this point I have a minimum-viable-product.  All the functionality works to a reasonable degree.  I can now zero in on smaller pieces of the code and iterate and continue finding commonalities. Mostly, if I'm typing the same thing over and over at this point it is a strong candidate for a common reusable component.

## Edge cases

Revisit the list of edge cases and solve as many as possible.  Document the elusive ones.

## Polishing

Make it buttery smooth and shiny.  Stress every pixel.

## Testing

Create the unit tests where I can see others finding it tricky to know exactly how to even write the tests.  Theese should serve as patterns for future tests.  I'll find commonality here as well and abstract that away to make it easier for others to contribute to the testing effort.

## Documentation

I document various things all along the way, but now I put together a solid README that will serve as a guide for new contributors.  This will be a living document subject to debate and change.

## Hands off your keyboard!

There will be bugs, document them and begin chipping away because that is the nature of development for me, always iterating, always refining, and relying on a team dynamic to help find the proper way forward.
