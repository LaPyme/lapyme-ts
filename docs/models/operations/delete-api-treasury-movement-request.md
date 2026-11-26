# DeleteApiTreasuryMovementRequest

## Example Usage

```typescript
import { DeleteApiTreasuryMovementRequest } from "lapyme/models/operations";

let value: DeleteApiTreasuryMovementRequest = {
  idempotencyKey: "<value>",
  treasuryMovementId: "817c5175-da6e-4731-b48e-bc3fc417b51c",
  body: {
    updatedAt: new Date("2024-12-08T16:48:39.166Z"),
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `treasuryMovementId`                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `body`                                                                                          | [models.ApiDeleteTreasuryMovementRequest](../../models/api-delete-treasury-movement-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |