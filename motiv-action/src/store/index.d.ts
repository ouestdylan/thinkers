type PayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never
> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? object
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? object
    : {
        error: E;
      });
