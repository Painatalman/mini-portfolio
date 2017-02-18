export type RequestQuery = Partial<{
  [key: string]: string | string[];
}>;

const DEFAULT_VALUE = 1;

export const getQuantityFromRequestQuery = ({
  quantity,
}: RequestQuery): number => {
  const queryValue = Array.isArray(quantity) ? quantity[0] : quantity;
  const parsedQuantity = +(queryValue || DEFAULT_VALUE);

  return isNaN(parsedQuantity) ? DEFAULT_VALUE : Math.floor(parsedQuantity);
};
