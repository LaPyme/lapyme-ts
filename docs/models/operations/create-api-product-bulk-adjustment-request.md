# CreateApiProductBulkAdjustmentRequest

## Example Usage

```typescript
import { CreateApiProductBulkAdjustmentRequest } from "lapyme/models/operations";

let value: CreateApiProductBulkAdjustmentRequest = {
  idempotencyKey: "<value>",
  body: {
    target: "price",
    operationType: "increase",
    adjustmentType: "percentage",
    adjustmentValue: 5475.83,
    selection: {
      type: "specific",
      ids: [
        "dddb7073-0fed-40ab-86e1-9b300ca43850",
        "fac84885-6591-4144-8299-2ed4d55fe068",
      ],
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Clave única para evitar aplicar dos veces el mismo ajuste masivo.                             |
| `xRequestId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno.           |
| `body`                                                                                        | [models.ApiProductBulkAdjustmentRequest](../../models/api-product-bulk-adjustment-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |