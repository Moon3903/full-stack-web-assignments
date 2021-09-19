```java
SET grade TO int(INPUT())

IF grade < 68:
    OUTPUT(grade)

ELSEIF grade%5 > 2:
    OUTPUT(grade - grade%5 + 5)

ELSE:
    OUTPUT(grade)
```