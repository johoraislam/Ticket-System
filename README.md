Q1: What is JSX, and why is it used?

Answer:
JSX এর পূর্ণরূপ JavaScript XML। এটি React-এ ব্যবহৃত একটি syntax যা দেখতে HTML এর মতো কিন্তু JavaScript এর ভিতরে লেখা হয়। JSX ব্যবহার করলে UI structure সহজভাবে লেখা যায় এবং React সহজে component render করতে পারে।

Q2: What is the difference between State and Props?

Answer:
Props হলো parent component থেকে child component এ data পাঠানোর একটি উপায় এবং এটি সাধারণত read-only।
অন্যদিকে State হলো component এর নিজস্ব data যা সময়ের সাথে পরিবর্তন হতে পারে। State পরিবর্তন হলে React component আবার render হয়।

Q3: What is the useState hook, and how does it work?

Answer:
useState হলো React এর একটি hook যা functional component এ state ব্যবহারের সুযোগ দেয়। এটি একটি array return করে যেখানে একটি হলো current state এবং অন্যটি সেই state update করার function।

Q4: How can you share state between components in React?

Answer:
React-এ state share করার সবচেয়ে সাধারণ উপায় হলো Lifting State Up, অর্থাৎ state কে common parent component এ রাখা। এছাড়াও Context API বা বড় project এ Redux/Zustand ব্যবহার করা যায়।

Q5: How is event handling done in React?

Answer:
React-এ event handling করতে event name camelCase এ লিখতে হয়, যেমন onClick। Event handler হিসেবে একটি function pass করা হয়, যা event trigger হলে execute হয়।

