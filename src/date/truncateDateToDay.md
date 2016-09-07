# truncateDateToDay
_Since 0.1.0_

Creates a new date from the specified date but truncates it so all time components are set to 0. This is useful when you want to get the start of the day.

## Arguments
- `[date = new Date()]` (date): the date to truncate.

## Returns
- (date): the truncated date.

## Example
``` javascript
DateUtils.truncateDateToDay(new Date(1276854900000))
// → Fri Jun 18 2010 00:00:00 GMT+0200 (CEST)
```

``` javascript
DateUtils.truncateDateToDay()
// → Wed Aug 10 2016 00:00:00 GMT+0200 (CEST)
```

``` javascript
DateUtils.truncateDateToDay(null)
// → null
```
