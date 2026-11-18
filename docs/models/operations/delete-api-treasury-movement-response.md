# DeleteApiTreasuryMovementResponse

## Example Usage

```typescript
import { DeleteApiTreasuryMovementResponse } from "lapyme/models/operations";

let value: DeleteApiTreasuryMovementResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "treasury_movement",
      id: "88e8e697-ac56-4820-a0f2-a30d01da4670",
      deleted: true,
    },
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `result`                                                                                            | [models.ApiDeletedTreasuryMovementResponse](../../models/api-deleted-treasury-movement-response.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |