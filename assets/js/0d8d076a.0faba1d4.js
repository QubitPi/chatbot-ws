"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6763],{9633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(4848),o=t(8453);const s={slug:"java-optional",title:'Tired of Null Pointer Exceptions? Consider Using Java SE 8\'s "Optional"',authors:"jiaqi",tags:["Java"]},i=void 0,r={permalink:"/blog/java-optional",editUrl:"https://github.com/QubitPi/chatbot-ws/tree/master/docs/blog/2022-09-07-java-optional/index.md",source:"@site/blog/2022-09-07-java-optional/index.md",title:'Tired of Null Pointer Exceptions? Consider Using Java SE 8\'s "Optional"',description:"[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:11.495,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of ChatbotWS",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"java-optional",title:'Tired of Null Pointer Exceptions? Consider Using Java SE 8\'s "Optional"',authors:"jiaqi",tags:["Java"]},unlisted:!1,prevItem:{title:"Bearer Authentication",permalink:"/blog/bearer-authentication"},nextItem:{title:"Happy Path",permalink:"/blog/happy-path"}},l={authorsImageUrls:[void 0]},c=[{value:"Dangers of Null",id:"dangers-of-null",level:2},{value:"What Alternatives to Null Are There",id:"what-alternatives-to-null-are-there",level:2},{value:"Java 8 <em>Optional</em> in a Nutshell",id:"java-8-optional-in-a-nutshell",level:2},{value:"Using Optional",id:"using-optional",level:2},{value:"Creating Optional Objects",id:"creating-optional-objects",level:3},{value:"Do Something If a Value Is Present",id:"do-something-if-a-value-is-present",level:3},{value:"Default Values and Actions",id:"default-values-and-actions",level:3},{value:"Rejecting Certain Values Using the filter Method",id:"rejecting-certain-values-using-the-filter-method",level:3},{value:"Extracting and Transforming Values Using the map Method",id:"extracting-and-transforming-values-using-the-map-method",level:3},{value:"Cascading Optional Objects Using the flatMap Method",id:"cascading-optional-objects-using-the-flatmap-method",level:3}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Make your code more readable and protect it against null pointer exceptions."}),"\n",(0,a.jsxs)(n.p,{children:["A wise man once said you are not a real Java programmer until you've dealt with a null pointer exception. Joking aside,\nthe null reference is the source of many problems because it is often used to denote the absence of a value. Java SE 8\nintroduces a new class called ",(0,a.jsx)(n.strong,{children:"java.util.Optional"})," that can alleviate some of these problems."]}),"\n",(0,a.jsx)(n.h2,{id:"dangers-of-null",children:"Dangers of Null"}),"\n",(0,a.jsxs)(n.p,{children:["Let's start with an example to see the dangers of null by considering a nested object structure for a ",(0,a.jsx)(n.code,{children:"Computer"}),", as\nillustrated in Figure below"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Error loading java-optional-computer.png",src:t(5547).A+"",width:"277",height:"255"})}),"\n",(0,a.jsx)(n.p,{children:"What's possibly problematic with the following code?"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String version = computer.getSoundcard().getUSB().getVersion();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This code looks pretty reasonable. However, many computers (for example, the Raspberry Pi) don't actually ship with a\nsound card. So what is the result of ",(0,a.jsx)(n.code,{children:"getSoundcard()"}),"?"]}),"\n",(0,a.jsxs)(n.p,{children:["A common (bad) practice is to return the null reference to indicate the absence of a sound card. Unfortunately, this\nmeans the call to ",(0,a.jsx)(n.code,{children:"getUSB()"})," will try to return the USB port of a null reference, which will result in a\n",(0,a.jsx)(n.code,{children:"NullPointerException"})," at runtime and stop your program from running further. Imagine if your program was running on a\ncustomer's machine; what would your customer say if the program suddenly failed?"]}),"\n",(0,a.jsx)(n.p,{children:'To give some historical context, Tony Hoare - one of the giants of computer science - wrote, "I call it my\nbillion-dollar mistake. It was the invention of the null reference in 1965. I couldn\'t resist the temptation to put in\na null reference, simply because it was so easy to implement."'}),"\n",(0,a.jsx)(n.p,{children:"What can you do to prevent unintended null pointer exceptions? You can be defensive and add checks to prevent null\ndereferences, as shown below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'String version = "UNKNOWN";\nif (computer != null) {\n    Soundcard soundcard = computer.getSoundcard();\n    if(soundcard != null){\n        USB usb = soundcard.getUSB();\n        if(usb != null){\n            version = usb.getVersion();\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"However, you can see that the code quickly becomes very ugly due to the nested checks. Unfortunately, we need a lot of\nboilerplate code to make sure we don't get a NullPointerException. In addition, it's just annoying that these checks get\nin the way of the business logic. In fact, they are decreasing the overall readability of our program."}),"\n",(0,a.jsx)(n.p,{children:"Furthermore, it is an error-prone process; what if you forget to check that one property could be null? I will argue in\nthis post that using null to represent the absence of a value is a wrong approach. What we need is a better way to\nmodel the absence and presence of a value."}),"\n",(0,a.jsx)(n.p,{children:"To give some context, let's briefly look at what other programming languages have to offer."}),"\n",(0,a.jsx)(n.h2,{id:"what-alternatives-to-null-are-there",children:"What Alternatives to Null Are There"}),"\n",(0,a.jsxs)(n.p,{children:["Languages such as Groovy have a ",(0,a.jsx)(n.em,{children:"safe navigation operator"}),' represented by "?." to safely navigate through potential\nnull references. (Note that it is soon to be included in C#, too, and it was proposed for Java SE 7 but didn\'t make it\ninto that release.) It works as follows:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",children:"String version = computer?.getSoundcard()?.getUSB()?.getVersion()\n"})}),"\n",(0,a.jsxs)(n.p,{children:['In this case, the variable "version" will be assigned to null if ',(0,a.jsx)(n.code,{children:"computer"})," is null, or ",(0,a.jsx)(n.code,{children:"getSoundcard()"})," returns null,\nor ",(0,a.jsx)(n.code,{children:"getUSB()"})," returns null. You don't need to write complex nested conditions to check for null."]}),"\n",(0,a.jsxs)(n.p,{children:["In addition, Groovy also includes the ",(0,a.jsx)(n.em,{children:"Elvis operator"}),' "?:" (if you look at it sideways, you\'ll recognize Elvis\' famous\nhair), which can be used for simple cases when a default value is needed. In the following, if the expression that uses\nthe safe navigation operator returns null, the default value "UNKNOWN" is returned; otherwise, the available version\ntag is returned.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",children:'String version = computer?.getSoundcard()?.getUSB()?.getVersion() ?: "UNKNOWN"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Other functional languages, such as Haskell and Scala, take a different view. Haskell includes a ",(0,a.jsx)(n.strong,{children:"Maybe"})," type, which\nessentially encapsulates an optional value. A value of type Maybe can contain either a value of a given type or\nnothing. There is no concept of a null reference. Scala has a similar construct called ",(0,a.jsx)(n.strong,{children:"Option[T]"})," to encapsulate\nthe presence or absence of a value of type ",(0,a.jsx)(n.code,{children:"T"}),". You then have to explicitly check whether a value is present or not\nusing operations available on the ",(0,a.jsx)(n.code,{children:"Option"}),' type, which enforces the idea of "null checking." ',(0,a.jsx)(n.strong,{children:'You can no longer\n"forget to do it" because it is enforced by the type system'}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"java-8-optional-in-a-nutshell",children:["Java 8 ",(0,a.jsx)(n.em,{children:"Optional"})," in a Nutshell"]}),"\n",(0,a.jsxs)(n.p,{children:["Java SE 8 introduces a new class called ",(0,a.jsx)(n.code,{children:"java.util.Optional<T>"})," that is inspired from the ideas of Haskell and Scala.\nIt is a class that encapsulates an optional value, as illustrated in figure below. You can view ",(0,a.jsx)(n.code,{children:"Optional"}),' as a\nsingle-value container that either contains a value or doesn\'t (it is then said to be "empty"):']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Error loading java-optional-eg.png",src:t(636).A+"",width:"382",height:"224"})}),"\n",(0,a.jsx)(n.p,{children:"We can update our model to make use of Optional, as shown in Listing 2:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class Computer {\n    private Optional<Soundcard> soundcard;\n    public Optional<Soundcard> getSoundcard() { ... }\n    ...\n}\n\npublic class Soundcard {\n    private Optional<USB> usb;\n    public Optional<USB> getUSB() { ... }\n}\n\npublic class USB {\n    public String getVersion(){ ... }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The code above immediately shows that a computer might or might not have a sound card (the sound card is optional). In\naddition, a sound card can optionally have a USB port. This is an improvement, because this new model can now reflect\nclearly whether a given value is allowed to be missing."}),"\n",(0,a.jsxs)(n.p,{children:["But what can you actually do with an ",(0,a.jsx)(n.code,{children:"Optional<Soundcard>"})," object? After all, you want to get to the USB port's version\nnumber. In a nutshell, the ",(0,a.jsx)(n.code,{children:"Optional"})," class includes methods to explicitly deal with the cases where a value is present\nor absent. However, the advantage compared to null references is that the ",(0,a.jsx)(n.code,{children:"Optional"})," class forces us to think about the\ncase when the value is not present. As a consequence, we can prevent unintended null pointer exceptions."]}),"\n",(0,a.jsxs)(n.p,{children:["It is important to note that the intention of the ",(0,a.jsx)(n.code,{children:"Optional"})," class is not to replace every single null reference.\nInstead, its purpose is to help design more-comprehensible APIs so that by just reading the signature of a method, you\ncan tell whether you can expect an optional value. This forces you to actively unwrap an ",(0,a.jsx)(n.code,{children:"Optional"})," to deal with the\nabsence of a value."]}),"\n",(0,a.jsx)(n.h2,{id:"using-optional",children:"Using Optional"}),"\n",(0,a.jsx)(n.p,{children:"The Groovy code above can be written with Optional in Java as"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'String name = computer.flatMap(Computer::getSoundcard)\n        .flatMap(Soundcard::getUSB)\n        .map(USB::getVersion)\n        .orElse("UNKNOWN");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"creating-optional-objects",children:"Creating Optional Objects"}),"\n",(0,a.jsx)(n.p,{children:"First, how do you create Optional objects? There are several ways:"}),"\n",(0,a.jsx)(n.p,{children:"Here is an empty Optional:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Optional<Soundcard> sc = Optional.empty();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And here is an ",(0,a.jsx)(n.code,{children:"Optional"})," with a non-null value:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Optional<Soundcard> sc = Optional.of(new Soundcard());\n"})}),"\n",(0,a.jsx)(n.p,{children:"In the case above, if soundcard were null, a NullPointerException would be immediately thrown (rather than getting a\nlatent error once you try to access properties of the soundcard)"}),"\n",(0,a.jsxs)(n.p,{children:["By using ",(0,a.jsx)(n.strong,{children:"ofNullable"}),", however, you can create an Optional object that may hold a null value:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Optional<Soundcard> sc = Optional.ofNullable(soundcard);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If soundcard were null, the resulting ",(0,a.jsx)(n.code,{children:"Optional"})," object would be empty."]}),"\n",(0,a.jsx)(n.h3,{id:"do-something-if-a-value-is-present",children:"Do Something If a Value Is Present"}),"\n",(0,a.jsx)(n.p,{children:"Now that you have an Optional object, you can access the methods available to explicitly deal with the presence or\nabsence of values. Instead of having to remember to do a null check, as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"SoundCard soundcard = ...;\nif(soundcard != null){\n    System.out.println(soundcard);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.strong,{children:"ifPresent()"})," method, as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Optional<Soundcard> soundcard = ...;\nsoundcard.ifPresent(System.out::println);\n"})}),"\n",(0,a.jsx)(n.p,{children:"You no longer need to do an explicit null check; it is enforced by the type system. If the Optional object were empty,\nnothing would be printed."}),"\n",(0,a.jsxs)(n.p,{children:["You can also use the ",(0,a.jsx)(n.strong,{children:"isPresent()"})," method to find out whether a value is present in an Optional object. In addition,\nthere's a ",(0,a.jsx)(n.strong,{children:"get()"})," method that returns the value contained in the Optional object, if it is present. ",(0,a.jsx)(n.em,{children:"Otherwise,\nit throws a NoSuchElementException"}),". The two methods can be combined, as follows, to prevent exceptions:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"if(soundcard.isPresent()){\n    System.out.println(soundcard.get());\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"However, this is not the recommended use of Optional because it's not much of an improvement over nested null checks,\nand there are more idiomatic alternatives, which we explore below."}),"\n",(0,a.jsx)(n.h3,{id:"default-values-and-actions",children:"Default Values and Actions"}),"\n",(0,a.jsx)(n.p,{children:"A typical pattern is to return a default value if you determine that the result of an operation is null. In general,\nyou can use the ternary operator, as follows, to achieve this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Soundcard soundcard = maybeSoundcard != null ? maybeSoundcard : new Soundcard("basic_sound_card");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Using an Optional object, you can rewrite this code by using the ",(0,a.jsx)(n.strong,{children:"orElse()"})," method, which provides a default value if\nOptional is empty:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Soundcard soundcard = maybeSoundcard.orElse(new Soundcard("defaut"));\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Similarly, you can use the ",(0,a.jsx)(n.strong,{children:"orElseThrow()"})," method, which instead of providing a default value if Optional is empty,\nthrows an exception:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Soundcard soundcard = maybeSoundCard.orElseThrow(IllegalStateException::new);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"rejecting-certain-values-using-the-filter-method",children:"Rejecting Certain Values Using the filter Method"}),"\n",(0,a.jsxs)(n.p,{children:["Often you need to call a method on an object and check some property. For example, you might need to check whether the\nUSB port is a particular version. To do this in a safe way, you first need to check whether the reference pointing to a\nUSB object is null and then call the ",(0,a.jsx)(n.code,{children:"getVersion()"})," method, as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'USB usb = ...;\nif(usb != null && "3.0".equals(usb.getVersion())){\n    System.out.println("ok");\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This pattern can be rewritten using the ",(0,a.jsx)(n.strong,{children:"filter"})," method on an Optional object, as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Optional<USB> maybeUSB = ...;\nmaybeUSB.filter(usb -> "3.0".equals(usb.getVersion()).ifPresent(() -> System.out.println("ok"));\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"filter"})," method takes a predicate as an argument. If a value is present in the ",(0,a.jsx)(n.code,{children:"Optional"})," object and it matches the\npredicate, the filter method returns that value; otherwise, it returns an empty ",(0,a.jsx)(n.code,{children:"Optional"})," object."]}),"\n",(0,a.jsx)(n.h3,{id:"extracting-and-transforming-values-using-the-map-method",children:"Extracting and Transforming Values Using the map Method"}),"\n",(0,a.jsxs)(n.p,{children:["Another common pattern is to extract information from an object. For example, from a ",(0,a.jsx)(n.code,{children:"Soundcard"})," object, you might want\nto extract the USB object and then further check whether it is of the correct version. You would typically write the\nfollowing code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'if(soundcard != null){\n    USB usb = soundcard.getUSB();\n    if(usb != null && "3.0".equals(usb.getVersion()){\n        System.out.println("ok");\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:['We can rewrite this pattern of "checking for null and extracting" (here, the ',(0,a.jsx)(n.code,{children:"Soundcard"})," object) using the map method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Optional<USB> usb = maybeSoundcard.map(Soundcard::getUSB);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["There's a direct parallel to the ",(0,a.jsx)(n.code,{children:"map"})," method used with streams. There, you pass a function to the ",(0,a.jsx)(n.code,{children:"map"})," method, which\napplies this function to each element of a stream. However, nothing happens if the stream is empty. The ",(0,a.jsx)(n.code,{children:"map"})," method of\nthe ",(0,a.jsx)(n.code,{children:"Optional"})," class does exactly the same: the value contained inside ",(0,a.jsx)(n.code,{children:"Optional"}),' is "transformed" by the function\npassed as an argument (here, a method reference to extract the USB port), while nothing happens if ',(0,a.jsx)(n.code,{children:"Optional"})," is empty."]}),"\n",(0,a.jsxs)(n.p,{children:["Finally, we can combine the ",(0,a.jsx)(n.code,{children:"map"})," method with the ",(0,a.jsx)(n.code,{children:"filter"})," method to reject a USB port whose version is different than\n3.0:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'maybeSoundcard.map(Soundcard::getUSB)\n        .filter(usb -> "3.0".equals(usb.getVersion())\n        .ifPresent(() -> System.out.println("ok"));\n'})}),"\n",(0,a.jsx)(n.h3,{id:"cascading-optional-objects-using-the-flatmap-method",children:"Cascading Optional Objects Using the flatMap Method"}),"\n",(0,a.jsx)(n.p,{children:"We've seen a few patterns that can be refactored to use Optional. So how can we write the following code in a safe way?"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String version = computer.getSoundcard().getUSB().getVersion();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Notice that all this code does is extract one object from another one, which is exactly what the map method is for.\nEarlier in the article, we changed our model so a Computer has an ",(0,a.jsx)(n.code,{children:"Optional<Soundcard>"})," and a Soundcard has an\n",(0,a.jsx)(n.code,{children:"Optional<USB>"}),", so we should be able to write the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'String version = computer.map(Computer::getSoundcard)\n        .map(Soundcard::getUSB)\n        .map(USB::getVersion)\n        .orElse("UNKNOWN");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Unfortunately, this code doesn't compile. Why? The variable computer is of type ",(0,a.jsx)(n.code,{children:"Optional<Computer>"}),", so it is\nperfectly correct to call the ",(0,a.jsx)(n.code,{children:"map"})," method. However, ",(0,a.jsx)(n.code,{children:"getSoundcard()"})," returns an object of type ",(0,a.jsx)(n.code,{children:"Optional<Soundcard>"}),".\nThis means the result of the ",(0,a.jsx)(n.code,{children:"map"})," operation is an object of type ",(0,a.jsx)(n.code,{children:"Optional<Optional<Soundcard>>"}),". As a result, the\ncall to ",(0,a.jsx)(n.code,{children:"getUSB()"})," is invalid because the outermost Optional contains as its value another Optional, which of course\ndoesn't support the ",(0,a.jsx)(n.code,{children:"getUSB()"})," method"]}),"\n",(0,a.jsxs)(n.p,{children:["So how can we solve this problem? Again, we can look at a pattern you might have used previously with streams: the\n",(0,a.jsx)(n.strong,{children:"flatMap"})," method. With streams, the ",(0,a.jsx)(n.code,{children:"flatMap"})," method takes a function as an argument, which returns another stream.\nThis function is applied to each element of a stream, which would result in a stream of streams. However, ",(0,a.jsx)(n.code,{children:"flatMap"}),' has\nthe effect of replacing each generated stream by the contents of that stream. In other words, all the separate streams\nthat are generated by the function get amalgamated or "flattened" into one single stream. What we want here is\nsomething similar, but we want to "flatten" a two-level Optional into one.']}),"\n",(0,a.jsxs)(n.p,{children:["Well, here's good news: ",(0,a.jsx)(n.code,{children:"Optional"})," also supports a ",(0,a.jsx)(n.code,{children:"flatMap"})," method. Its purpose is to apply the transformation\nfunction on the value of an ",(0,a.jsx)(n.code,{children:"Optional"})," and then flatten the resulting two-level Optional into a single one."]}),"\n",(0,a.jsxs)(n.p,{children:["So, to make our code correct, we need to rewrite it as follows using ",(0,a.jsx)(n.code,{children:"flatMap"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'String version = computer.flatMap(Computer::getSoundcard)\n        .flatMap(Soundcard::getUSB)\n        .map(USB::getVersion)\n        .orElse("UNKNOWN");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The first flatMap ensures that an ",(0,a.jsx)(n.code,{children:"Optional<Soundcard>"})," is returned instead of an ",(0,a.jsx)(n.code,{children:"Optional<Optional<Soundcard>>"}),", and\nthe second flatMap achieves the same purpose to return an ",(0,a.jsx)(n.code,{children:"Optional<USB>"}),". Note that the third call just needs to be a\nmap() because getVersion() returns a String rather than an ",(0,a.jsx)(n.code,{children:"Optional"})," object."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5547:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/java-optional-computer-1bc0c3f95c53bca9751cccc2d7c17534.png"},636:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/java-optional-eg-8885f6b471abfed0f95a6847eb88afaa.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);