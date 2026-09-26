# ApiAccountLedgerResponse

## Example Usage

```typescript
import { ApiAccountLedgerResponse } from "lapyme/models";

let value: ApiAccountLedgerResponse = {
  requestId: "<id>",
  effectiveScope: {
    circuitId: "5643363b-d6a2-421b-a1bd-db42e516c729",
    circuitName: "<value>",
  },
  data: {
    object: "account_ledger",
    account: {
      object: "account",
      id: "405f9387-1ea4-4676-a44f-bf5f2cf8a440",
      code: "<value>",
      name: "<value>",
    },
    openingBalance: 783465,
    currency: "Hryvnia",
    lines: [],
    closingBalance: 909377,
    hasMore: false,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `effectiveScope`                                                                                                              | *models.ApiAccountLedgerResponseEffectiveScope*                                                                               | :heavy_check_mark:                                                                                                            | Circuito sobre el que corrió el reporte: `all` para todos los circuitos, o el circuito pedido (`circuit_id` null es General). |
| `data`                                                                                                                        | [models.ApiAccountLedgerResponseData](../models/api-account-ledger-response-data.md)                                          | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |