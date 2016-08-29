#Design Exercise
Hey! So here's a look at some of my process and thinking for this exercise.


##Project Link
The project is live [here.](https://outstandy.github.io/sandwish/ "Sandwish")

##What's the problem?
So, how do we make getting busy mployees a sandwich as fast and easy as possible? 

Obviously we need to keep choice to the absolute minimum. The choices that _have_ to be made need to be easy and unambiguous as possible.

This app's designed to use the smallest number of patterns and modules. It makes more a more easily understandable design system for everyone—designers can extend it better, developers can build it better, and users can pick it up more quickly and easily. 

Also sandwiches. 

###User flow
#####[Home](https://outstandy.github.io/sandwish/ "Home")
Here, the user only has two choices: sign in, or sign up.

#####[Signed In](https://outstandy.github.io/sandwish/signed-in "Signed In")
Assuming the user is signed in, ordering preparation parameters are simple and clear:
* When you want the sandwich delivered (so you can order in advance and save yourself a hangry afternoon because you forgot to pack).
* Where you want it delivered to (can default to one location, but allows for working off-site or elsewhere).
* The option to reorder a past sandwich also exists. We like consistency, so let's make it easy to immediately order your go-to.

#####[Order](https://outstandy.github.io/sandwish/order "Order")
The crux of the app: 
* Big, obvious buttons with visual cues make user recognition faster and more efficient, while adapting well to smaller-screen. 
* Ideally, the right-hand order card would scroll with the user to provide constant ordering context, and an at-a-glance view of price points. 
* Visual representations of what's being ordered also help prime to user for the physical product. 

#####[Confirm](https://outstandy.github.io/sandwish/order "Confirm")
A simple

###Various lingering questions
* Ordering one sandwich at a time is great if you're eating alone at your desk, but do we handle bulk orders for meetings or brown-bags? It's much efficient more efficent for both the office and the sandwich shop.
* People are creatures of habit. While this interface lets you easily reorder your last sandwich, what about saving preset sandwiches? The pattern already exists in this system for modifying if need be, and it could remove a step from the process. 
* 



##Building it
###HTML
For the moment I'm usingHarp for templating, which preprocesses with Jade. 

###CSS
I'm increasingly of the atomic CSS mindset—it's verbose, but it provides a lot more clarity when I've gotta navigate larger stylesheets, and makes incremental changes a lot smoother. Semantic classes are still used for structure and targetting, but rarely if ever have anything presentational attached to them. 
I dig SASS 
