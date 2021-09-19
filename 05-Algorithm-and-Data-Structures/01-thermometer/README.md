``` java
SET temp TO INPUT()
SET type TO INPUT()

IF type EQUALS "fahrenheit":    
    OUTPUT((temp - 32) * (5/9))

ELSE IF type EQUALS "kelvin":
    OUTPUT((temp - 273.15))

ELSE IF type EQUALS "celcius":
    OUTPUT(temp)

else :
    OUTPUT("Wrong INPUT")
```