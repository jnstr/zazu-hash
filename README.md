## Zazu hash

[![Build Status](https://travis-ci.org/tinytacoteam/zazu-hash.svg?branch=master)](https://travis-ci.org/tinytacoteam/zazu-hash)

[Zazu](https://github.com/tinytacoteam/zazu) plugin for generate hashes using common algorithms (md5, sha1).

Inspired by [alfred-hash-workflow](https://github.com/willfarrell/alfred-hash-workflow)

## Demo

![demo](demo.gif)

## Install

Add the plugin in ```~/.zazurc.json``` file:

```json
{
  "plugins": [
    "brpaz/hash",
  ]
}
```

Then Reload zazu.

## Usage

```
hash <mystring>
```