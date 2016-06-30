# Design Patterns: An Introduction

## What are design patterns?
- A pattern is a reusable solution that can be applied to commonly occurring problems in software design.
- Another way of looking at patterns is as templates for how we solve problems — ones that can be used in quite a few different situations.

## How did they come to be?
Design patterns can be traced back to the early work of an architect named Christopher Alexander . He would often write publications about his experience in solving design issues and how they related to buildings and towns. One day, it occurred to Alexander that when used time and time again, certain design constructs lead to a desired optimal effect.

In collaboration with Sara Ishikawa and Murray Silverstein, Alexander produced a pattern language that would help empower anyone wishing to design and build at any scale. This was published back in 1977 in a paper titled “A Pattern Language,” which was later released as a complete hardcover book.

Some 30 years ago, software engineers began to incorporate the principles Alexander had written about into the first documentation about design patterns, which was to be a guide for novice developers looking to improve their coding skills. It’s important to note that the concepts behind design patterns have actually been around in the programming industry since its inception, albeit in a less formalized form.

One of the first and arguably most iconic formal works published on design patterns in software engineering was a book in 1995 called Design Patterns: Elements of Reusable Object-Oriented Software . This was written by Erich Gamma , Richard Helm , Ralph Johnson , and John Vlissides —a group that became known as the Gang of Four (or GoF for short).

The GoF’s publication is considered quite instrumental to pushing the concept of design patterns further in our field, as it describes a number of development techniques and pitfalls, as well as providing 23 core object-oriented design patterns frequently used around the world today.

## How are they useful for?
#### Design patterns have three main benefits:
- Patterns are proven solutions.
> They provide solid approaches to solving issues in software development using proven techniques that reflect the experience and insights the developers that helped define them bring to the pattern.

- Patterns can be easily reused.
> A pattern usually reflects an `out-of-the-box solution` that can be adapted to suit our own needs. This feature makes them quite robust.

- Patterns can be expressive.
> When we look at a pattern, there’s generally a set structure and vocabulary to the solution presented that can help express rather large solutions quite elegantly.

## Types of the design pattern
#### Creational Patterns
Creational design patterns focus on handling object-creation mechanisms where objects are created in a manner suitable for a given situation. The basic approach to object creation might otherwise lead to added complexity in a project, while these patterns aim to solve this problem by controlling the creation process.

Some of the patterns that fall under this category are: Constructor, Factory, Abstract, Prototype, Singleton, and Builder.

#### Behavioral Patterns
Behavioral patterns focus on improving or streamlining the communication between disparate objects in a system.

Some behavioral patterns include: Iterator, Mediator, Observer, and Visitor.

#### Structural Patterns
Structural patterns are concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that when one part of a system changes, the entire structure of the system doesn’t need to do the same. They also assist in recasting parts of the system that don’t fit a particular purpose into those that do.

Patterns that fall under this category include: Decorator, Facade, Flyweight, Adapter, and Proxy.

## Anti-patterns
If we consider that a pattern represents a best practice, an anti-pattern represents a lesson that has been learned. The term anti-patterns was coined in 1995 by Andrew Koenig in the November C++ Report that year, inspired by the GoF’s book Design Patterns. In Koenig’s report, there are two notions of anti-patterns that are presented. Anti-patterns:
- Describe a bad solution to a particular problem that resulted in a bad situation occurring.

- Describe how to get out of said situation and how to go from there to a good solution

## Real-world examples
