# Overview

Because of the requirement... "Do not spend more than 4 hours on your solution" I thought it would be a good idea to split the task into 4 hour long sprints.

# Sprint 0

Theme for the sprint is tech setup, and spec

## Stories

1. kick off and planning (2 story points)
    - split up stories for first sprint
2. tech setup (6 story points)
    - git init
    - npm init
    - express server
    - html prototype boilerplate
    - submit code
    - deployment to hosting server
3. [competitor analysis](./analysis.md) (2 story points)
    - search google for 'weather' and find comonalities between top results using as basis for minimum viable product
4. [design and specification](./design.md)) for minimum viable product (2 story points)

## Sprint Review/Retro

Got tech setup mostly done, did not get deployment set up, or build/test/deploy jobs in npm which will carry over into next sprint
Got [competitor analysis](./analysis.md) done, did not get spec done, again carry over. Probably could have been avoided with less detailed analysis.

Overall, good work, but need to improve commitment to meeting deadlines.

# Sprint 1

0. complete stories carried from last sprint (3 story points)
1. fetch data from API (2 story points)
2. transform data (6 story points)
3. mvp UI (4 story points)

## Sprint Review/Retro

Completed stories carried over from sprint 0
Fetched data and transformed to expose temperature and rainfall, including min and max, still missing wind
Did not start MVP user interface

Overall, achieved a lot, probably would have met goals if not carrying stories from sprint 0, but did not meet sprint goals for second sprint running. Need to re-plan final two sprints to ensure deadlines are met, probably move testing into final sprint, and reduce documentation which we already have a bit of a headstart on.

# Sprint 2

0. MVP UI (from sprint-1, 5 story points)
1. accessibility (2 story points)
2. responsive (4 story points)

## Sprint Review/Retro

Completed basic UI including nav and chart, but missing populating of table with data and icon graphics
Made UI generally responsive, but missing some details, for example axis labels don't fit on mobile (bug raised in backlog)

Again, good progress but failed to meet all sprint goals despite re-planning in last sprint. Some bugs raised and no time allocated for defect fixing, hard prioritising of remaining stories and bugs required before final sprint. There was also no deployment, which should be done first thing at start of next sprint as priority.

Moving testing into backlog, to be picked up as fast follow up to release, and priotitising bug #3 for immediate fix.

# Sprint 3

0. priority bug fixes (#3, #4) and stories carried over from previous sprint
1. deploy final version (1 story points)
2. Documentation (4 story points)
3. submit final code (1 story points)

completed 6 of 9 story points and two defects (assigned 25% of sprint)

# Backlog

1. x axis labels don't fit on small form factor, needs responsive configuration for chart
2. when temperature selected second time, chart is not filled in... probably chart config not applying after select navigation item
3. clicking nav tab does not change active tab
4. loading sample data not real data from api

## Features

1. testing (4 story points)
2. accessibility
3. deploy on openshift server 
