```java
SET word TO INPUT()

SET a TO 0
SET b TO len(word)-1
SET flag TO 1

WHILE a < b :
    IF word[a] EQUALS ' ':
        a += 1
        continue

    IF word[b] EQUALS ' ':
        b -= 1
        continue

    IF not word[a] EQUALS word[b]:
        SET flag TO 0
        break

    a += 1
    b -= 1

IF flag:
    OUTPUT("TRUE")
    
ELSE:
    OUTPUT("FALSE")
```