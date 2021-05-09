# Caesar cipher CLI tool

**CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

It can accept 4 options (short alias and full name):

* **-s, --shift**: a shift - required
* **-i, --input**: an input file
* **-o, --output**: an output file
* **-a, --action**: an action encode/decode - required

To run the app please do the following:
```bash
git clone https://github.com/mashnello/caesar-cipher-cli.git
cd ./caesar-cipher-cli
git checkout dev
npm i
node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
