function merge<T extends object, X extends object>(objA: T, objB: X): T & X {
  return Object.assign({}, objA, objB);
}
