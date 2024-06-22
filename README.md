# Breakthrough!
UI building is a tedious task. You have to tweak so many things here and there that I even haven't started writing logic for this. I also learned some better architecture to programming. I was mixing everyting up in the code. 

A very intresting learning I got is: "Everything above your return statement in your tsx file is what you see and what matter to you, the developer. and everything below the return statement is what user see and this need not to be prety on your side. It should look good to user."

This is such a great learning, Just treat code below and above return statement as two differnt part of the code. do not inject too much logic in return statement. Be clear. It does not matter if you write 50 componets in your one react file. The only thing that matter is that the code is readable and maintainable. 
Also, do not write typescript. I was writing too much types. Typescript is made to make your life easier, not complex. Avoid writing types. Let typescript infer types and prevent you to do silly mistakes. Your user is not going to see the types you wrote. 

It's okay if you ship code without proper types. Typescirpt should be your last headache.

Build logic first, create design later. 
