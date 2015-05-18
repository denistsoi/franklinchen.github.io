---
layout: post
title: "A short example of why I prefer static typing: learning Gradle"
date: 2012-09-24T17:07:00
comments: true
external-url:
categories:
- programming
- Maven
- Java
- Gradle
- Groovy
- SBT
- Scala
- Python
- SCons
- Ruby
- Rake
- Haskell
- Shake
- domain-specific languages
---
I make no secret of the fact the I prefer to program in [statically-typed languages](http://en.wikipedia.org/wiki/Programming_language#Static_versus_dynamic_typing). That is not to say that I don't write programs in dynamically typed languages. In fact, I have written and will continue to write programs in [Perl](/blog/categories/perl/), [Python](/blog/categories/python/), [Ruby](/blog/categories/ruby/), [JavaScript](/blog/categories/javascript/), and other dynamically typed programs, because pragmatically speaking, there is a whole lot more to programming to get something done than questions of [type systems](http://en.wikipedia.org/wiki/Type_system).

Nevertheless, it is always painful to me when I hit a wall when learning and using an unfamiliar API from a dynamically typed language. I always think, "if only this API were statically typed, so that when I encounter an error, I can immediately look up what went wrong".

Here's an example as I've been learning [Gradle](http://www.gradle.org/) while evaluating it along with learning [SBT](http://www.scala-sbt.org/), as two candidate build tools for me to switch to out of [Maven](http://maven.apache.org/) as my build tool for a primarily Java-based project. Note that Gradle is basically an embedded domain-specific language using the dynamically typed language [Groovy](http://groovy.codehaus.org/), while SBT is an embedded domain-specific language using the statically typed language [Scala](http://www.scala-lang.org/).

<!--more-->

## Code example

Here's a code example from a book I've been going through while studying Gradle, ["Building and Testing with Gradle"](http://gradleware.com/registered/books/building-and-testing/):

### Example 3.21. Use the Ant path references inside the Gradle build

{{< highlight groovy >}}
ant.importBuild 'build.xml'

defaultTasks = ['gradleBuild']

////////////////////////////////////////////////////////////////////////
// Gradle paths retrieved from Ant and then built using a Gradle task
repositories {
    flatDir name: 'localRepository1', dirs: ant.references['antPathToLibs1']
    flatDir name: 'localRepository2', dirs: ant.references.antPathToLibs2
    flatDir name: 'localRepository3', dirs: "antlibs"
}

task gradleBuild << {
    //Set classpath to include the JAR
    println "The repositories bridged from Ant to Gradle are:"
    println repositories*.name

    println repositories.localRepository1

    println repositories['localRepository2']

    println "localRepository3 class = " + repositories.localRepository3.class
    println "localRepository3 name = " + repositories.localRepository3.name
    println "localRepository3 latest = " + repositories.localRepository3.latest
    println "localRepository3 ivyPatterns = " + repositories.localRepository3.ivyPatterns
    println "localRepository3 artifactPatterns =
       " + repositories.localRepository3.artifactPatterns
    println "localRepository3 checkconsistency =
       " + repositories.localRepository3.checkconsistency
    println "localRepository3 m2compatible =
       " + repositories.localRepository3.m2compatible
    println "localRepository3 methods =
       " + repositories.localRepository3.metaClass.methods*.name.sort().unique()
}
{{< /highlight >}}

## Error output

Unfortunately, this Gradle build file, when executed under the current version of Gradle, dies with an error:

{{< highlight console >}}
$ ./run-example.bsh
:gradleBuild
The repositories bridged from Ant to Gradle are:
[localRepository1, localRepository2, localRepository3]
org.gradle.api.internal.artifacts.repositories.DefaultFlatDirArtifactRepository_Decorated@7f205d8d
org.gradle.api.internal.artifacts.repositories.DefaultFlatDirArtifactRepository_Decorated@5eef2e7c
localRepository3 class = class org.gradle.api.internal.artifacts.repositories.DefaultFlatDirArtifactRepository_Decorated
localRepository3 name = localRepository3
:gradleBuild FAILED

FAILURE: Build failed with an exception.

* Where:
Build file 'oreilly-gradle-book-examples/ant-classpathanttogradle/build.gradle' line: 24

* What went wrong:
Execution failed for task ':gradleBuild'.
> Could not find property 'latest' on org.gradle.api.internal.artifacts.repositories.DefaultFlatDirArtifactRepository_Decorated@8c1e4d5.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

BUILD FAILED
{{< /highlight >}}

After much searching online, I still could not figure out what properties are supposed to be available from `repositories.localRepository3`. I looked at the [Gradle documentation](http://www.gradle.org/docs/current/javadoc/overview-tree.html), and I looked up the package [`org.gradle.api.internal.artifacts.repositories`](http://www.gradle.org/docs/current/javadoc/org/gradle/api/artifacts/repositories/package-tree.html) without success.

Gradle's API has changed since the publication of the book, obviously. And in fact, I have been submitting [GitHub pull requests](https://github.com/gradleware/oreilly-gradle-book-examples/commit/351f31f1cdede84233b977e67031720177144aab) as I update the code examples while encountering apparent changes. But sometimes, as in this case, it has been too confusing for me to figure out how to update the code. You could say that this is always the case for any code in any language, but what bothers me is the nature of error messages and documentation in APIs for dynamically typed languages such as Groovy. These experiences remind me that *types are documentation*, that *types are a way for a programmer to tell the world how code is supposed to be used*.

## Conclusion

Gradle seems to be a promising build tool, and I will continue to evaluate it while skipping over the particular mysterious error I encountered (since it is not really relevant to what I want to do in my builds), but I wish I could have better figured out what went wrong with the book's code example. Meanwhile, it remains to be seen what kinds of problems I will encounter when using SBT. Again, I have to emphasize that my goal is to get things done, correctly and efficiently. Whatever works best, I will use, whatever its drawbacks: in another project, I happily used [SCons](/blog/categories/scons/) as a build tool, based on the dynamically typed language Python, and of course, I have used [Rake](http://rake.rubyforge.org/) for Ruby projects.

### (Update of 2015-05-18)

Wow, that was written in fall of 2012.

Since then, I have heavily used SBT from then to the present first for Java, then for Scala, which [became my main programming language in early 2013](http://franklinchen.com/blog/2013/01/11/2013-is-my-year-of-scala/).

Also, in early 2015, [Pivotal got out of the Groovy business](http://blog.pivotal.io/pivotal/news-2/groovy-2-4-and-grails-3-0-to-be-last-major-releases-under-pivotal-sponsorship).

Meanwhile, in early 2015 as I adopted Haskell as my main language for new projects, I switched away from SCons as a general-purpose build tool to Haskell-based [Shake](http://shakebuild.com/), which works really great for me.
