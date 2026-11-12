# UpdateApiTreasuryMovementRequest

## Example Usage

```typescript
import { UpdateApiTreasuryMovementRequest } from "lapyme/models/operations";

let value: UpdateApiTreasuryMovementRequest = {
  idempotencyKey: "<value>",
  treasuryMovementId: "0049c6c2-cedf-4006-9ed2-136e659a5a88",
  body: {
    balance: {
      balanceType: "bank_account",
      balanceId: "859c8ddf-e499-4a79-ab5f-ea18e080f5d4",
    },
    direction: "inflow",
    amount: 184936,
    occurredOn: new Date("2024-01-16"),
    updatedAt: new Date("2025-11-24T14:28:13.039Z"),
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `treasuryMovementId`                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `body`                                                                                          | [models.ApiUpdateTreasuryMovementRequest](../../models/api-update-treasury-movement-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |