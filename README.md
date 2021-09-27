# 1. Introduction
This is a web for the code test. The home page has a header, and a menu with 5 options including 'Home', 'Login', and 3 'Hire me Reason #' page.
When users are at home page, they will see my introduction like a CV in a table at the same page.
When users are at each of the 'Hire me reason #' page, users can check out some basic information.
When users are at login page, they can input username and password to login in the same page. If login successful, user will
go to the new page with user's username. 

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

# 3. Libraries used
- 'react-router-dom' for pages route
- 'antd' from pages UI design
- 'mobx' for manage state and pass data between components
- '@testing-library/react', 'enzyme' and '@wojtekmaj/enzyme-adapter-react-17' for unit test

<b>There maybe some bugs when using test libraries to test components created by antd. I made some research and figured out antd did not support the test library I'm using</b>


# Thanks for the opportunity!
