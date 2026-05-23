# CreateV2PurchaseRequest

## Example Usage

```typescript
import { CreateV2PurchaseRequest } from "lapyme/models/operations";

let value: CreateV2PurchaseRequest = {
  body: {
    mode: "commit",
    input: {
      voucherType: 987176,
      currency: "PES",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                           | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Clave única para evitar duplicados. Requerida cuando `mode` es `commit`.                                   |
| `xRequestId`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Request id opcional para trazabilidad. Si también se envía `client.requestId`, la respuesta usa ese valor. |
| `body`                                                                                                     | [models.V2PurchaseTransactionRequest](../../models/v2-purchase-transaction-request.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |