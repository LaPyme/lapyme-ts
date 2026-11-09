# GetApiFundsTransferResponse

## Example Usage

```typescript
import { GetApiFundsTransferResponse } from "lapyme/models/operations";

let value: GetApiFundsTransferResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "funds_transfer",
      id: "78532e58-7c7a-4aea-a840-fab0cc205fa7",
      source: {
        balanceType: "safe",
        balanceId: "6ec03c4a-bc45-4405-96a4-1335131e6f59",
      },
      destination: {
        balanceType: "register",
        balanceId: "f145f08d-88a1-4eb8-81ec-b1e0ad375774",
      },
      amount: 387135,
      currency: "ARS",
      occurredOn: new Date("2026-10-18"),
      reference: null,
      description: "crushing jellyfish scare meaningfully now",
      createdAt: new Date("2024-09-15T03:49:20.021Z"),
      updatedAt: new Date("2026-10-25T23:25:06.967Z"),
      accountingEffects: [
        {
          treasuryMovementId: "eb103c70-1cf8-455a-990b-2b26167984ec",
          balanceType: "safe",
          balanceId: "876f7549-2a0d-4b49-a8bf-7885cc0c597d",
          amount: 178798,
          currency: "ARS",
        },
        {
          treasuryMovementId: "eb103c70-1cf8-455a-990b-2b26167984ec",
          balanceType: "safe",
          balanceId: "876f7549-2a0d-4b49-a8bf-7885cc0c597d",
          amount: 178798,
          currency: "ARS",
        },
        {
          treasuryMovementId: "eb103c70-1cf8-455a-990b-2b26167984ec",
          balanceType: "safe",
          balanceId: "876f7549-2a0d-4b49-a8bf-7885cc0c597d",
          amount: 178798,
          currency: "ARS",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiFundsTransferDetailResponse](../../models/api-funds-transfer-detail-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |