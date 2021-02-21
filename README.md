# stocksapp_hwchw316-
# Defining the Project (Strategy, Scope)

The purpose of creating this is to allow new and experienced traders to journal their entry
on their trades and to do a quick basic research on the go. 

There is a surge in individual investors and a growing community for investing but it lacking options of free online trade journals.
As investing/trading is very perseonal thing where emotions, attitudes, strategy, information and other external factors can cloud a user's judgement.
A trade journal can help give persective on how his/her journey progress actually is

Individual investors made their presence felt in 2020. According to Bloomberg Intelligence
 via The Wall Street Journal, individual investors made up an estimated 19.5% of U.S. equity trading volume. 
 This was a jump of over 4% compared to 2019 and a doubling compared to 2010.1
[Article Reference](https://www.wsj.com/articles/individual-investor-boom-reshapes-u-s-stock-market-11598866200)


# Strategy
## Identifying External User's Goals

    EU1. to do a quick research on the company 
    EU2. to journal trade entries
    EU3. to keep trade of personal key stats 
    EU4. to get the historial data of the daily chart of a stock
    EU5. to help reach a decision on whether to invest on a stock


## Identifying Site Owners' Goals

The site should: 

    SG1. Be able to store and retrieve entries entered
    SG2. Be see enter a stock symbol to receive details about the company 
    SG3. Allow user to quickly understand their current investing positions

## User Stories

    US1. As an invester, I will enter a stock symbol to research on the company. (EU1)
    US2. As a trader, I will be able to keep a log of my trades (EU2)
    US3. As a trader, I will be able to keep trade of my investing progress. (EU3)
    US4. As an investor, I will look at the charts of the stock  (EU4)
    US5. As a investor, I will look at the details of stocks to help make a decision on my investment (EU5)


## Feature list
1. able to enter and search for useful information through an API get
2. able to reflect the useful information in a humanely readable format
3. able to enter and save entries based on user inputs
4. used apexcharts for charts
5. used local storage instead of a database to store and retain information
6. able to reload and calculate values based on user inputs
7. more chart filters

## Bugs
1. thousand seperator only works when there is an initial value at the start.
2. api is limited to a certain number of calls per day 

## Yet to implement
1. a login page with authentication for user to enter and store their data
2. a database to store user data.
3. a script to access stored user data to use sentiment analysis on stocks/ trades/ 
4. a script to search for the most common stock symbols
5. a beautiful calander UI/UX that allows user to access data entered by daily
6. a calander that sums up the P/L of trades made in a day/week
7. a stats that return insight on a user habits such as best day of the week to trade/ worst day of the week to trade/ worst month, etc...
8. a summary and keynotes of indicators to look out for
9. an automatic comparision of simmilar stocks in the same sector/industry on their income statement/balance sheet
10. a page where you can store multiple watchlists and see live updates on their prices
11. a page where you can find how companies are related to each other
e.g. Mergers, rumors, acquistions, deals, servicer provider to supply (Electrical Vehicles and Electrical Vehicles Lithumn Battery)


## Visual Design
1. after comparing with similar sites like yahoo finance, investing.com, seeking alpha, a plain background is a good decision to not strain the eyes
2. mobile responsiveness is designed through mobile design first.

## Testing steps
### Chart 
1. check api call and data is usable
2. format chart data datetime to EPOCH format that apexcharts require
3. reorder chart data to oldest to newest instead of newest to oldest for chart to display in the right chronological order
4. ensure that render chart data is deleted else chart will display previous search data
5. 


## credits
1. https://www.youtube.com/watch?v=hvU9Wegza94  for making a publish datetime entry
