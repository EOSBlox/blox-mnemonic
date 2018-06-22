# \<blox-mnemonic\>

[![Build Status](https://travis-ci.org/EOSBlox/blox-mnemonic.svg?branch=master)](https://travis-ci.org/EOSBlox/blox-mnemonic)

A web component that generates a BIP39 mnemonic seed and 12 word phrase

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Install blox-mnemonic

```
$ npm install blox-mnemonic
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-mnemonic';
```

## Basic Use

```html
<blox-mnemonic
    password="secret!!"
    mnemonic="{{mnemonic}}"
    seed="{{seed}}">
</blox-mnemonic>
```

## Javascript Use

```html
<blox-mnemonic id="bloxMnemonic"></blox-mnemonic>
<script>
    this.$.bloxMnemonic.mnemonicfromPassword('secret!!')
    .then((hash) => {
        // Do Something
    })
    .catch((err) => {
        // Do Something
    })
</script>
```