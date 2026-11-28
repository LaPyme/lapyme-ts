# ReopenApiInventoryCountRequest

## Example Usage

```typescript
import { ReopenApiInventoryCountRequest } from "lapyme/models/operations";

let value: ReopenApiInventoryCountRequest = {
  countId: "10c55ddd-5cf4-4745-b747-f13e38bf495e",
  idempotencyKey: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `countId`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `idempotencyKey`                                                                            | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `body`                                                                                      | [models.ApiInventoryCountReviewRequest](../../models/api-inventory-count-review-request.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |