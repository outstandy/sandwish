#Design Exercise
Hey! So here's a look at some of my process and thinking for this exercise.


##Project Link
The project is live [here.](https://outstandy.github.io/sandwish/ "Sandwish")

##What's the problem?
So, how do we make getting busy employees a sandwich as fast and easy as possible? 

Obviously we need to keep choice to an absolute minimum. The choices that _have_ to be made need to be as easy and unambiguous as possible.

This app's designed to use the smallest number of patterns and modules. It makes for a more sustainable, extensible, and understandable design system for everyone—designers can extend it better, developers can build it better, and users can pick it up more quickly and easily. 

Also sandwiches. 

###User flow
#####[Home](https://outstandy.github.io/sandwish/ "Home")
Here, the user only has two choices: sign in, or sign up.

#####[Signed In](https://outstandy.github.io/sandwish/signed-in "Signed In")
Assuming the user is signed in, ordering preparation parameters are simple and clear:
* When you want the sandwich delivered (so you can order in advance and save yourself a hangry afternoon because you forgot to pack).
* Where you want it delivered to (can default to one location, but allows for working off-site or elsewhere).
* The option to reorder a past sandwich also exists. We like consistency, so let's make it easy to immediately order your go-to. It also established the pattern of order card, with a status bar—from this screen, you can check the delivery status of your last order.

#####[Order](https://outstandy.github.io/sandwish/order "Order")
The crux of the app: 
* Big, obvious buttons with visual cues make user recognition faster and more efficient, while adapting well to smaller-screen. 
* Ideally, the right-hand order card would scroll with the user to provide constant ordering context, and an at-a-glance view of price points. 
* Visual representations of what's being ordered also help prime to user for the physical product. Ideally, the order card would contain a view of what's been added to the order so far beyond simple text. 

#####[Confirm](https://outstandy.github.io/sandwish/order "Confirm")
A preview of the previous order card lets the user quickly confirm before placing the order, cutting down on mistakes and bad tips. 

#####[Order Status](https://outstandy.github.io/sandwish/signed-in-status "Order Status")
A return to the Signed In screen, it allows a quick check of order status while meshing with the overall flow of the app; no extra screens are needed. (Still hungry? You can get right to ordering a new sandwich)

###Various lingering questions
* Ordering one sandwich at a time is great if you're eating alone at your desk, but do we handle bulk orders for meetings or brown-bags? It's much efficient more efficent for both the office and the sandwich shop.
* People are creatures of habit. While this interface lets you easily reorder your last sandwich, what about saving preset sandwiches? The pattern already exists in this system for modifying if need be, and it could remove a step from the process.
* To improve efficiency, what's the _least_ amount of information we need to collect during sign-up?
  * Account creation through Facebook or Twitter could cut out the need for a password and email.
  * How is address info being scrapped? Google Maps? How do we make sure they're in a deliverable area?
  * When is payment info collected? It seems a little weird to make it part of the inital sign-up flow, but it also makes ordering alone much faster, and leaves less room for users to drop off during the ordering process. You're primed to get your sandwich. 
  * Do we take cash? I'd say no—it's ultimately too slow, and fewer people are carrying it.

##Building it
###HTML
For this I templated/partialized with Jade.

###CSS
I'm increasingly of the atomic CSS mindset—it's verbose, but it provides a lot more clarity when you've got to navigate larger stylesheets, and makes incremental changes a lot smoother. Semantic classes are still used for structure and targetting, but rarely have anything presentational attached to them. 

The super basic grid framework is Bourbon Neat. I usually roll my own `flexbox` layout but for speed's sake I went with something a little more built-out. 

###JS
I started a real rough React app, which I'm curious to flesh out more. The constantly updating UI (order parts, swapping out icons, visually 'building' the sandwich) seems to mesh really well with React's components base. I need to architect the data better and refactor. Nice-to-haves, like saved orders and delivery status updates could also benefit. 
