# SendApiSaleResponseBody

Solicitar el envío del comprobante

## Example Usage

```typescript
import { SendApiSaleResponseBody } from "lapyme/models/operations";

let value: SendApiSaleResponseBody = {
  requestId: "<id>",
  data: {
    object: "sale_delivery",
    saleId: "2ccace5a-db57-4707-b435-7a9f735cc14c",
    recipientEmail: "Dawson_Hoppe@yahoo.com",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `requestId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `data`                                                                      | [operations.SendApiSaleData](../../models/operations/send-api-sale-data.md) | :heavy_check_mark:                                                          | N/A                                                                         |