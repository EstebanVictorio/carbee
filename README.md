# Carbee - A Curbee competitor


## Carbee is a recent,  Curbee-like vendor, that's striving for success with minimal resources.



## Project Reflection

1. Did you run into any “gotchas” along the way? If so, what were
they and how did you address them?

Answer: I think most of them were just minor inconveniences towards how Next handles forms vs, say, Remix.

It seems more idiomatic on that end, but still, most of the practices I'm used to, could be basically done here, especially on input validation.

2. How did you handle forms? In a largely formdriven project, would
you do anything differently? If so, what?

Answer: I just used Server Actions (which for now are experimental, but arepretty cool.), since it's very close to how the web works, rather than "onSubmit" everything along the way.


3. How did you handle authorization? In your ideal FE/BE scenario,
what auth strategy would you use?

Answer: I used HTTP Cookies. It seemed appropriate. Why? Two reasons:

   - FE does not have to do anything. If you have it, you will be delivered with the app static files. Period. Otherwise, Redirect to login page.

   - BE logic pretty much simplifies at this point.


4. Is there anything you’d like to share about your project prior to
my evaluating it?

Answer: Nothing that I can think of exceptionally, except:

   - I didn't add a loading state for login, I forgot it 😅, but it should work properly.

5. How long did you spend on this exercise? If you had unlimited
more time to spend on this, how would you spend it and how would
you prioritize each item?

Answer: I've added a `time-tracking.json` file where I logged every work session I spent on this. You are free to check it.

Also, I would add the missing loading for login 😅