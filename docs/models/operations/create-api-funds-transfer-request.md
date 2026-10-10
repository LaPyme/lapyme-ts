# CreateApiFundsTransferRequest

## Example Usage

```typescript
import { CreateApiFundsTransferRequest } from "lapyme/models/operations";

let value: CreateApiFundsTransferRequest = {
  idempotencyKey: "<value>",
  body: {
    source: {
      balanceType: "safe",
      balanceId: "6ec03c4a-bc45-4405-96a4-1335131e6f59",
    },
    destination: {
      balanceType: "register",
      balanceId: "f145f08d-88a1-4eb8-81ec-b1e0ad375774",
    },
    amount: 124118,
    occurredOn: new Date("2026-07-15"),
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                          | *string*                                                                                  | :heavy_check_mark:                                                                        | Clave estable para deduplicar reintentos de la misma operación.                           |
| `body`                                                                                    | [models.ApiFundsTransferCreateRequest](../../models/api-funds-transfer-create-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |