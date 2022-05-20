export interface OptionalParams {
  /**
   * key must respect the pattern ^[A-z].*
   */
  [k: string]:
    | number
    | string
    | boolean
    | unknown[]
    | {
        [k: string]: unknown;
      };
}
