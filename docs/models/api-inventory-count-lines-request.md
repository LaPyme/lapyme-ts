# ApiInventoryCountLinesRequest

## Example Usage

```typescript
import { ApiInventoryCountLinesRequest } from "lapyme/models";

let value: ApiInventoryCountLinesRequest = {
  entries: [
    {
      productId: "644e5832-bb0e-44f0-a3d4-6a36ad5eb83f",
      mode: "set",
      quantity: 3732.25,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `entries`                                                                                           | [models.ApiInventoryCountLinesRequestEntry](../models/api-inventory-count-lines-request-entry.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |