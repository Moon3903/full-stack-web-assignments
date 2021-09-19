```java
SET n TO INPUT()

FOR i IN range(1,n+1):
    IF i%3 EQUALS 0:
        OUTPUT("fizz",end="")

    IF i%5 EQUALS 0:
        OUTPUT("buzz",end="")

    IF i%3 NOT EQUALS 0 AND i%5 NOT EQUALS 0:
        OUTPUT(i,end="");

    OUTPUT("")
```