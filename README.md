# Playwright Automation Project – SauceDemo

## Introduction
This is a simple Playwright automation project that I built step by step while completing a web automation task.  
The goal was to automate the SauceDemo website by following one basic flow for all 6 users provided on the website.


## What This Test Does
For each user, the script performs:

1. Open the website  
2. Enter username & password  
3. Add **one product** (the first one) to the cart  
4. Verify that the product is actually added  
5. Logout  

There is also one special case:
- **locked_out_user** → This user should fail login, so I handled and printed the error.

I added **500ms delays** between steps, so I could visually see that each action is happening correctly.

---

## Users Tested
The following users are tested in a loop:

- `standard_user`
- `locked_out_user`
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`

---


## How to Run the Project ##

Follow these steps to run the test suite locally (in the terminal).

 
```

git clone https://github.com/zrnth/playwright-java-automation.git
cd playwright-java-automation

npm install

npx playwright install

npx playwright test

npx playwright show-report


```
---



## Notes (Important)
- I intentionally kept everything in **one file** to keep it simple.
- 500ms timeouts were added so I could visually confirm each action.
- Locked-out user fails—this is expected and handled in the script.
- This project is made for my interview preparation, and to show understanding of Playwright basics.

---

## Author
**Zarin Tasnim Haider**
