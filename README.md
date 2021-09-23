# 1. Introduction
This is a web for the code test. The home page has a header, and a menu with 5 options including 'Home' and 'Login'.
When users are at home page, they will see my introduction like a CV in a table at the same page.
When users are at each of the 'Hire me' page, users will go to another new 'info page.
When users are at login page, they can input username and password to login in the same page. If login successful, user will
also go to the 'info' page. 

<b>P.S. You need to input username 'admin' and password 'admin' to login, every other inputs will fail the login.</b>

# 2. Bonus Question
## For the config file
For the bonus question about reusable menu, I created a seperate config file and define an array with all the
required api values like 'key', 'title', and 'path' into objects. When I need to reuse a menu I can simply read all the values here. And when I need to change menu, the only thing I need to do is also edit this file.

If there is nested menus like with child menu, I will created a 'children' property in object and generate
required valued for child menu. It depends on what UI libraries I am using with different values needed

You can find the specific way to create navi in my 'Navi' component

## For the createNavi function in Navi component

'createNavi' function is used to create reusable menu. For simple menu like this web, just simply map the array generated
in the config file, and create dom with required value generated in config file.

If there is nested menu with submenu, for antd Menu, I need to also have 'Submenu' as parent node and 'Menu.Item' as child
in this case, for the reason that I have already had children property in config file, simply make a if statement. if having
child, return 'Submenu' first then do 'createNavi' again to generate child node 'Menu.Item' which is same with the normal
un-submenu.

# Thanks for the opportunity!
