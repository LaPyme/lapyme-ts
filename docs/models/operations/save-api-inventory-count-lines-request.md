# SaveApiInventoryCountLinesRequest

## Example Usage

```typescript
import { SaveApiInventoryCountLinesRequest } from "lapyme/models/operations";

let value: SaveApiInventoryCountLinesRequest = {
  countId: "a483a41d-af1a-48f3-b98a-0a03fb75caaf",
  idempotencyKey: "<value>",
  body: {
    entries: [
      {
        productId: "644e5832-bb0e-44f0-a3d4-6a36ad5eb83f",
        mode: "set",
        quantity: 3732.25,
      },
    ],
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `countId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `idempotencyKey`                                                                          | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `body`                                                                                    | [models.ApiInventoryCountLinesRequest](../../models/api-inventory-count-lines-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |