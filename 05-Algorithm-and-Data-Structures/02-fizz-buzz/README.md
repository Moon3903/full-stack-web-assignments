```java
SET n TO INPUT()

FOR i IN range(1,n+1):
    IF not i%3:
        OUTPUT("fizz",end="")

    IF not i%5:
        OUTPUT("buzz",end="")

    IF i%3 and i%5:
        OUTPUT(i,end="");

    OUTPUT("")
```