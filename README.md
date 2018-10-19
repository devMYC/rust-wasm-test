# Rust-JS interop test


### Setup

- Install [Rust](https://rustup.rs)

```bash
$ rustup default nightly
$ rustup target add wasm32-unknown-unknown
$ cargo install wasm-pack
```

- Install dependencies

```bash
$ yarn
```


### Usage

- Build and start webpack dev server

```bash
$ yarn build
$ yarn wds
```

Navigate to `http://localhost:8080/` in the browser.
