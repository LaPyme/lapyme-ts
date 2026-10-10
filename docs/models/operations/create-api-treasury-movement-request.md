# CreateApiTreasuryMovementRequest

## Example Usage

```typescript
import { CreateApiTreasuryMovementRequest } from "lapyme/models/operations";

let value: CreateApiTreasuryMovementRequest = {
  idempotencyKey: "<value>",
  body: {
    balance: {
      balanceType: "bank_account",
      balanceId: "859c8ddf-e499-4a79-ab5f-ea18e080f5d4",
    },
    direction: "inflow",
    amount: 429500,
    occurredOn: new Date("2026-12-14"),
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `body`                                                                                          | [models.ApiManualTreasuryMovementRequest](../../models/api-manual-treasury-movement-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |