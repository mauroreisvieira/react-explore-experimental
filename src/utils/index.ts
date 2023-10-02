export function cn(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(' ');
}


export function wait<T>(value: T, ms: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}
