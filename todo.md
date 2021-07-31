# TODO

1. Add score and highscore board -> saving to database (firebase) [x]
2. Do better graphics, add falling 'shade' [x]
3. Add score mechanic -> further u are, game gets faster,[v]
4. Add handicap option --- if you wanna start on "1" lvl of handicap 1/10 of gameboard will be filled with blocks,[x]
   --- on lvl "2" 2/10 will be filled ->> and further, max lvl on 7,[x]
5. Add UI:
   - instruction, how to play etc.,[x]
   - score,[x]
   - his current level,[x]
6. Add incoming block mechanic[v]

## Scoring system

There is a scoring system based on how many lines in one time you clear.
Also if you press move down button score will increase by 1 point.

| Level | Points for 1 line | Points for 2 lines | Points for 3 lines | Points for 4 lines |
| ----- | ----------------- | ------------------ | ------------------ | ------------------ |
| 0     | 40                | 100                | 300                | 1200               |
| 1     | 80                | 200                | 600                | 2400               |
| 2     | 120               | 300                | 900                | 3600               |
| 3     | 160               | 400                | 1200               | 4800               |
| 4     | 200               | 500                | 1500               | 6000               |
| 5     | 240               | 600                | 1800               | 7200               |
| 6     | 280               | 700                | 2100               | 8400               |
| 7     | 320               | 800                | 2400               | 9600               |
| 8     | 360               | 900                | 2700               | 10800              |
| 9     | 400               | 1000               | 3000               | 12000              |
| n     | 40 \* (n + 1)     | 100 \* (n + 1)     | 300 \* (n + 1)     | 1200 \* (n + 1)    |
| ----- | ----------------- | ------------------ | ------------------ | ------------------ |

## Level system

Basiclly level will control how fast paced game is. I found on wikipedia that Tetris(NES, Nintendo) was running on ~50 fps, so I calculated how fast game need to call gameloop to get the same effect. (example:
on level 0 game runs 50fps and it takes 36 frames to move down block, so i divided 36 by 50 and i got that it takes 0.76 of whole fps so it means that it takes 0.76 of second to moveDown etc.)

To advance in level you need to clear amount of lines according to the formula: (startLevel * 10 +10) (eg from 1 to 2, 1*10+10=20 lines cleared to get level 2 from level 1).

# BONUS

- Add multiplayer,[x]
- Add AI vs mode,[x]
