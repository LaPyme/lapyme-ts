# ListApiOrdersRequest

## Example Usage

```typescript
import { ListApiOrdersRequest } from "lapyme/models/operations";

let value: ListApiOrdersRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `query`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `cursor`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `limit`                                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `dateFrom`                                                                          | [Date](../../types/rfcdate.md)                                                      | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `dateTo`                                                                            | [Date](../../types/rfcdate.md)                                                      | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `status`                                                                            | [operations.ListApiOrdersStatus](../../models/operations/list-api-orders-status.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `fulfillmentStatus`                                                                 | [operations.FulfillmentStatus](../../models/operations/fulfillment-status.md)       | :heavy_minus_sign:                                                                  | N/A                                                                                 |