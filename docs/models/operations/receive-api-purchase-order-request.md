# ReceiveApiPurchaseOrderRequest

## Example Usage

```typescript
import { ReceiveApiPurchaseOrderRequest } from "lapyme/models/operations";

let value: ReceiveApiPurchaseOrderRequest = {
  purchaseOrderId: "a4a43070-4039-425d-b074-0f84aed15fb4",
  idempotencyKey: "<value>",
  body: {
    items: [],
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `purchaseOrderId`                                                                           | *string*                                                                                    | :heavy_check_mark:                                                                          | ID de la orden de compra                                                                    |
| `idempotencyKey`                                                                            | *string*                                                                                    | :heavy_check_mark:                                                                          | Clave estable para deduplicar reintentos de la misma operación.                             |
| `body`                                                                                      | [models.ApiPurchaseOrderReceiptRequest](../../models/api-purchase-order-receipt-request.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |