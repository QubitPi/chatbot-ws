"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4724],{4609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var a=n(4848),s=n(8453);const i={slug:"defensive-copy",title:"Defensive Copy",authors:"jiaqi",tags:["Java"]},o=void 0,c={permalink:"/blog/defensive-copy",editUrl:"https://github.com/QubitPi/chatbot-ws/tree/master/docs/blog/2022-01-05-java-dc.md",source:"@site/blog/2022-01-05-java-dc.md",title:"Defensive Copy",description:"[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)",date:"2022-01-05T00:00:00.000Z",formattedDate:"January 5, 2022",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:4.23,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of ChatbotWS",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"defensive-copy",title:"Defensive Copy",authors:"jiaqi",tags:["Java"]},unlisted:!1,prevItem:{title:"Happy Path",permalink:"/blog/happy-path"},nextItem:{title:"Understanding Weak References",permalink:"/blog/weak-references"}},l={authorsImageUrls:[void 0]},r=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["A mutable object is simply an object which can change its state after construction. For example, ",(0,a.jsx)(t.code,{children:"StringBuilder"})," and\n",(0,a.jsx)(t.code,{children:"Date"})," are mutable objects, while ",(0,a.jsx)(t.code,{children:"String"})," and ",(0,a.jsx)(t.code,{children:"Integer"})," are immutable objects."]}),"\n",(0,a.jsx)(t.p,{children:"A class may have a mutable object as a field. There are two possible cases for how the state of a mutable object field\ncan change:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["its state can be changed only by the native class - the native class ",(0,a.jsx)(t.strong,{children:"creates the mutable object field"}),", and is the\nonly class which is directly aware of its existence"]}),"\n",(0,a.jsxs)(t.li,{children:["its state can be changed both by the native class and by its callers - the native class simply ",(0,a.jsx)(t.strong,{children:"points to a mutable\nobject"})," which was created elsewhere"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Both cases are valid design choices, but you must be aware of which one is appropriate for each case."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)(t.strong,{children:["If the ",(0,a.jsx)(t.em,{children:"mutable"})," object field's state should be changed only by the native class, then a defensive copy of the mutable\nobject must be made any time it's passed into (constructors and set methods) or out of (\"get\" methods) the class"]}),". If\nthis is not done, then it's simple for the caller to break encapsulation, by changing the state of an object which is\nsimultaneously visible to both the class and its caller."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"It is implied that the defensive copying is only required when the state is mutable"})}),"\n",(0,a.jsxs)(t.p,{children:["For example, ",(0,a.jsx)(t.code,{children:"Planet"})," has a mutable object field ",(0,a.jsx)(t.code,{children:"fDateOfDiscovery"}),", which is defensively copied in all constructors,\nand in ",(0,a.jsx)(t.code,{children:"getDateOfDiscovery"}),". ",(0,a.jsx)(t.code,{children:"Planet"}),' represents an immutable class, and has no "set" methods for its fields. Note that\nif the defensive copy of ',(0,a.jsx)(t.code,{children:"DateOfDiscovery"})," is not made, then ",(0,a.jsx)(t.code,{children:"Planet"})," is no longer immutable!"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import java.util.Date;\n\n/**\n* Planet is an immutable class, since there is no way to change\n* its state after construction.\n*/\npublic final class Planet {\n\n    /**\n     * Final primitive data is always immutable.\n     */\n    private final double mass;\n\n    /**\n     * An immutable object field. (String objects never change state.)\n     */\n    private final String name;\n\n    /**\n     * A mutable object field. In this case, the state of this mutable field\n     * is to be changed only by this class. (In other cases, it makes perfect\n     * sense to allow the state of a field to be changed outside the native\n     * class; this is the case when a field acts as a "pointer" to an object\n     * created elsewhere.)\n     *\n     * java.util.Date is used here only because its convenient for illustrating\n     * a point about mutable objects. In new code, you should use\n     * java.time classes, not java.util.Date.\n     */\n    private final Date dateOfDiscovery;\n\n    public Planet (double mass, String name, Date dateOfDiscovery) {\n        this.mass = mass;\n        this.name = name;\n        //make a private copy of aDateOfDiscovery\n        //this is the only way to keep the fDateOfDiscovery\n        //field private, and shields this class from any changes that\n        //the caller may make to the original aDateOfDiscovery object\n        this.dateOfDiscovery = new Date(dateOfDiscovery.getTime());\n    }\n\n    /**\n    * Returns a primitive value.\n    *\n    * The caller can do whatever they want with the return value, without\n    * affecting the internals of this class. Why? Because this is a primitive\n    * value. The caller sees its "own" double that simply has the\n    * same value as fMass.\n    */\n    public double getMass() {\n        return mass;\n    }\n\n    /**\n    * Returns an immutable object.\n    *\n    * The caller gets a direct reference to the internal field. But this is not\n    * dangerous, since String is immutable and cannot be changed.\n    */\n    public String getName() {\n        return name;\n    }\n\n//  /**\n//  * Returns a mutable object - likely bad style.\n//  *\n//  * The caller gets a direct reference to the internal field. This is usually dangerous,\n//  * since the Date object state can be changed both by this class and its caller.\n//  * That is, this class is no longer in complete control of dateOfDiscovery.\n//  */\n//  public Date getDateOfDiscovery() {\n//      return dateOfDiscovery;\n//  }\n\n    /**\n    * Returns a mutable object - good style.\n    *\n    * Returns a defensive copy of the field.\n    * The caller of this method can do anything they want with the\n    * returned Date object, without affecting the internals of this\n    * class in any way. Why? Because they do not have a reference to\n    * fDate. Rather, they are playing with a second Date that initially has the\n    * same data as fDate.\n    */\n    public Date getDateOfDiscovery() {\n        return new Date(dateOfDiscovery.getTime());\n    }\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(6540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);