# ListApiSettlementPendingItemsRequest

## Example Usage

```typescript
import { ListApiSettlementPendingItemsRequest } from "lapyme/models/operations";

let value: ListApiSettlementPendingItemsRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `cursor`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `paymentMethodId`                                                     | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `customerPaymentId`                                                   | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `reference`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `asOf`                                                                | [Date](../../types/rfcdate.md)                                        | :heavy_minus_sign:                                                    | N/A                                                                   |
| `includeClosed`                                                       | [operations.IncludeClosed](../../models/operations/include-closed.md) | :heavy_minus_sign:                                                    | N/A                                                                   |