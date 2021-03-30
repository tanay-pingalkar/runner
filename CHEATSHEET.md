# Runner cheatsheet

|  TAG   |    argument 1     |          Examples           |                       Usage                       |
| :----: | :---------------: | :-------------------------: | :-----------------------------------------------: |
|  RUN   |   shell command   |    `RUN "yarn init -y"`     |    use to run big shell like installation etc     |
|   DO   |   shell command   |          `DO "ls"`          | use to run small shell commands like ls, echo etc |
| COWSAY |  text to cowsay   | `COWSAY "this is just fun"` |          use to print text using cowsay           |
| PRINT  |   text to print   |   `PRINT "this is print"`   |                 use to print text                 |
|  BLUE  | prints blue text  |     `BLUE "blue text"`      |              use to print blue text               |
| GREEN  | prints green text |    `GREEN "green text"`     |              use to print green text              |
|  RED   |  prints red text  |      `BLUE "red text"`      |               use to print red text               |
|  EXIT  |         -         |           `EXIT`            |                exit runner scripts                |

## beta

|    TAG    |  argument 1   |       Examples       |                              Usage                               |
| :-------: | :-----------: | :------------------: | :--------------------------------------------------------------: |
| RUN_ASYNC | shell command | `RUN_ASYNC "yarn init -y"` | use to run big shell command in background like installation etc |
| DO_ASYNC  | shell command |      `DO_ASYNC "ls"`       | use to run small shell commands in background like ls, echo etc  |
