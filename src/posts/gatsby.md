---
title: "The Great Gatsby Bootcamp"
date: "2019-04-04"
---

libs

- 'https://cdn.jsdelivr.net/npm/idb@3.0.2/build/idb.min.js'

---

# IndexedDB

IndexedDB is a built-in database, much more powerful than `localStorage`

- Key/value storage: value can be (almost) anything, multiple key types.
- Supports transactions for reliability.
- Supports key range queries, indexes.
- Can store much more data then `localStorage`.

That power is usually excessive for traditional client-server apps. IndexedDB is intended for offline apps, to be combined with ServiceWorkers and other technologies.

The native interface to IndexedDB, described in the specification <https://www.w3.org/TR/IndexedDB>, is event-based.

We can also use `async/await` with the help of a promise-based wrapper, like <https://github.com/jakearchibald/idb>. That's pretty convenient, but the wrapper is not perfect, it can't replace events for all cases, so we'll start with events, adn then use teh wrapper.

## Open database

To start working with IndexedDB, we need to open a database.

The syntax:

```js
let openRequest = indexedDB.open(name, version)
```

- `name` -- a string, the database name.
- `version` -- a positive integer version, by default `1` (explained below).

We can have many databases with different names, all with the current origin (domain/protocol/port). So different websites can't access databases of each other.

After the call, we need to listen to events on `openRequest` object:

- `success`: database is ready, use the database object `openRequest.result` for further work.
- `error`: open failed.
- `upgradeneeded`: database version is outdated (see below).

**IndexedDB has a built-in mechanism of "schema versioning", absent in server-side databases.**

Unlike server-side databases, IndexedDB is client-side, we don't have the data at hands. But when we publish a new version of our app, we may need to update the database.

The event also triggers when the database did not exist yet, so we can perform initialization.

For instance, when we first publish our app, we open it with version `1` and perform the initialization in `upgradeneeded` handlers:

```js
let openRequest = indexedDB.open("store", *!*1*/!*);

openRequest.onupgradeneeded = function() {
    // triggers if the client had no database
    // ...perform initialization...
};

opeRequest.onerror = function() {
    console.error("Error", openResult.error);
};

openRequest.onsuccess = function() {
    let db = openRequest.rsult;
    // continue to work with database using db object
};
```

> When we publish the 2nd version:
> This is great
> haha
