# Runner cheatsheet

- number! refers to number arguments it accepts

|    TAG     |       arguments        |                     Examples                      |                       Usage                       |
| :--------: | :--------------------: | :-----------------------------------------------: | :-----------------------------------------------: |
|    RUN     |   1! "shell command"   |               `RUN "yarn init -y"`                |    use to run big shell like installation etc     |
|     DO     |   1! "shell command"   |                     `DO "ls"`                     | use to run small shell commands like ls, echo etc |
|   COWSAY   |  1! "text to cowsay"   |            `COWSAY "this is just fun"`            |          use to print text using cowsay           |
|   PRINT    |   1! "text to print"   |              `PRINT "this is print"`              |                 use to print text                 |
|    BLUE    | 1! "prints blue text"  |                `BLUE "blue text"`                 |              use to print blue text               |
|   GREEN    | 1! "prints green text" |               `GREEN "green text"`                |              use to print green text              |
|    RED     |  1! "prints red text"  |                 `BLUE "red text"`                 |               use to print red text               |
|    EXIT    |          0! -          |                      `EXIT`                       |                exit runner scripts                |
| CONCURRENT | many! "shell command"  | `CONCURRENT "yarn add lodash" "yarn add express"` |  this is use to run 2 shell commands CONCURRENT   |
