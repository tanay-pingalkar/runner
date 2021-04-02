import { _2dArray } from "src/typescript/types";

export class Split {
  str: string;
  arr: _2dArray;
  constructor(str: string) {
    this.str = str;
    this.split();
  }
  split() {
    this.arr = this.splitWords(this.str.split(/\n/g));
  }
  splitWords(arr: Array<string>): _2dArray {
    let temp: _2dArray = [];
    arr.forEach((ele: string) => {
      temp.push(ele.split(/"/g));
      temp[temp.length - 1].forEach((ele, i) => {
        temp[temp.length - 1][i] = ele.trim();
        if (ele.trim() === "") {
          temp[temp.length - 1].splice(i, 1);
        }
        if (ele.startsWith("//")) {
          temp[temp.length - 1].splice(i);
        }
      });
    });
    // remove all empty lines from string
    temp = temp.filter(function (el) {
      return el.length != 0;
    });

    return temp;
  }
  _2dArr(): _2dArray {
    return this.arr;
  }
}
