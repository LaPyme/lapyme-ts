# CreateApiDeliveryNoteRequest

## Example Usage

```typescript
import { CreateApiDeliveryNoteRequest } from "lapyme/models/operations";

let value: CreateApiDeliveryNoteRequest = {
  idempotencyKey: "<value>",
  body: {
    origin: {
      type: "sale",
      saleId: "30955195-e9de-4e71-aceb-e451539c98d6",
    },
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `body`                                                          | *models.ApiDeliveryNoteCreateRequestUnion*                      | :heavy_check_mark:                                              | N/A                                                             |