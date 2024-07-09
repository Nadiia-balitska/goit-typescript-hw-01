function merge<T, X>(objA: T, objB: X): T & X {
  return Object.assign({}, objA, objB);
}
